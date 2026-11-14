const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'chave-secreta-centro-cultural-comunitario';

// POST /login - Realiza o login do usuário administrativo
exports.loginAdmin = async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({
      success: false,
      message: 'Por favor, forneça usuário e senha.'
    });
  }

  let connection;
  try {
    connection = await pool.getConnection();

    // Busca o administrador pelo login
    const rows = await connection.query('SELECT * FROM administradores WHERE login = ?', [login]);
    
    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Usuário ou senha inválidos!'
      });
    }

    const admin = rows[0];

    // Compara as senhas usando bcryptjs
    const isMatch = await bcrypt.compare(password, admin.senha);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Usuário ou senha inválidos!'
      });
    }

    // Cria o token JWT
    const token = jwt.sign(
      { id: admin.id, login: admin.login },
      JWT_SECRET,
      { expiresIn: '2h' } // Token expira em 2 horas
    );

    return res.json({
      success: true,
      token,
      user: {
        id: admin.id,
        login: admin.login
      }
    });

  } catch (err) {
    console.error('Erro no login do administrador:', err);
    return res.status(500).json({
      success: false,
      message: 'Erro interno no servidor ao tentar logar.'
    });
  } finally {
    if (connection) connection.release();
  }
};

// POST /atividades - Cria uma nova atividade
exports.createActivity = async (req, res) => {
  const { nome, nivel, turno, idade, analista, dias_semana, horario, local } = req.body;

  if (!nome || !turno || !idade) {
    return res.status(400).json({
      success: false,
      message: 'Campos nome (modalidade), turno e idade são obrigatórios.'
    });
  }

  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction(); // Inicia transação para integridade dos dados

    // 1. Resolve ou cria a modalidade
    let modalidade_id;
    const normalizedModalidade = nome.trim();
    const modRows = await connection.query('SELECT id FROM modalidades WHERE nome = ?', [normalizedModalidade]);
    
    if (modRows.length > 0) {
      modalidade_id = modRows[0].id;
    } else {
      const result = await connection.query('INSERT INTO modalidades (nome) VALUES (?)', [normalizedModalidade]);
      modalidade_id = Number(result.insertId);
    }

    // 2. Resolve ou cria o nível
    let nivel_id = null;
    if (nivel && nivel.trim()) {
      const normalizedNivel = nivel.trim();
      const levelRows = await connection.query('SELECT id FROM niveis WHERE nome = ?', [normalizedNivel]);
      if (levelRows.length > 0) {
        nivel_id = levelRows[0].id;
      } else {
        const result = await connection.query('INSERT INTO niveis (nome) VALUES (?)', [normalizedNivel]);
        nivel_id = Number(result.insertId);
      }
    }

    // 3. Insere a atividade
    const normalizedTurno = turno.toUpperCase().trim(); // Garante o ENUM do banco (MATUTINO, VESPERTINO, NOTURNO)
    const sql = `
      INSERT INTO atividades (turno, idade, modalidade_id, nivel_id, horario, dias_semana, analista, local, disponivel_em)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      normalizedTurno,
      idade || null,
      modalidade_id,
      nivel_id,
      horario || '',
      dias_semana || '',
      analista || '',
      local || '',
      'Centro Cultural Comunitário'
    ];

    const insertResult = await connection.query(sql, params);
    
    await connection.commit();

    return res.status(201).json({
      success: true,
      message: 'Atividade criada com sucesso!',
      id: Number(insertResult.insertId)
    });

  } catch (err) {
    if (connection) await connection.rollback();
    console.error('Erro ao criar atividade:', err);
    return res.status(500).json({
      success: false,
      message: 'Erro interno ao criar a atividade.'
    });
  } finally {
    if (connection) connection.release();
  }
};

// PUT /atividades/:id - Atualiza uma atividade existente
exports.updateActivity = async (req, res) => {
  const { id } = req.params;
  const { nome, nivel, turno, idade, analista, dias_semana, horario, local } = req.body;

  if (!nome || !turno || !idade) {
    return res.status(400).json({
      success: false,
      message: 'Campos nome (modalidade), turno e idade são obrigatórios.'
    });
  }

  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    // 1. Resolve ou cria a modalidade
    let modalidade_id;
    const normalizedModalidade = nome.trim();
    const modRows = await connection.query('SELECT id FROM modalidades WHERE nome = ?', [normalizedModalidade]);
    
    if (modRows.length > 0) {
      modalidade_id = modRows[0].id;
    } else {
      const result = await connection.query('INSERT INTO modalidades (nome) VALUES (?)', [normalizedModalidade]);
      modalidade_id = Number(result.insertId);
    }

    // 2. Resolve ou cria o nível
    let nivel_id = null;
    if (nivel && nivel.trim()) {
      const normalizedNivel = nivel.trim();
      const levelRows = await connection.query('SELECT id FROM niveis WHERE nome = ?', [normalizedNivel]);
      if (levelRows.length > 0) {
        nivel_id = levelRows[0].id;
      } else {
        const result = await connection.query('INSERT INTO niveis (nome) VALUES (?)', [normalizedNivel]);
        nivel_id = Number(result.insertId);
      }
    }

    // 3. Atualiza a atividade
    const normalizedTurno = turno.toUpperCase().trim();
    const sql = `
      UPDATE atividades 
      SET turno = ?, idade = ?, modalidade_id = ?, nivel_id = ?, horario = ?, dias_semana = ?, analista = ?, local = ?
      WHERE id = ?
    `;
    const params = [
      normalizedTurno,
      idade || null,
      modalidade_id,
      nivel_id,
      horario || '',
      dias_semana || '',
      analista || '',
      local || '',
      id
    ];

    await connection.query(sql, params);
    await connection.commit();

    return res.json({
      success: true,
      message: 'Atividade atualizada com sucesso!'
    });

  } catch (err) {
    if (connection) await connection.rollback();
    console.error('Erro ao atualizar atividade:', err);
    return res.status(500).json({
      success: false,
      message: 'Erro interno ao atualizar a atividade.'
    });
  } finally {
    if (connection) connection.release();
  }
};

// DELETE /atividades/:id - Exclui uma única atividade
exports.deleteActivity = async (req, res) => {
  const { id } = req.params;

  let connection;
  try {
    connection = await pool.getConnection();
    await connection.query('DELETE FROM atividades WHERE id = ?', [id]);

    return res.json({
      success: true,
      message: 'Atividade excluída com sucesso!'
    });
  } catch (err) {
    console.error('Erro ao excluir atividade:', err);
    return res.status(500).json({
      success: false,
      message: 'Erro interno ao excluir a atividade.'
    });
  } finally {
    if (connection) connection.release();
  }
};

// DELETE /deletar-atividades - Exclui múltiplas atividades em lote
exports.deleteActivities = async (req, res) => {
  const { ids } = req.body;

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Forneça uma lista de IDs para exclusão.'
    });
  }

  let connection;
  try {
    connection = await pool.getConnection();
    
    const placeholders = ids.map(() => '?').join(',');
    const sql = `DELETE FROM atividades WHERE id IN (${placeholders})`;
    
    await connection.query(sql, ids);

    return res.json({
      success: true,
      message: `${ids.length} atividades excluídas com sucesso!`
    });
  } catch (err) {
    console.error('Erro ao excluir lote de atividades:', err);
    return res.status(500).json({
      success: false,
      message: 'Erro interno ao excluir o lote de atividades.'
    });
  } finally {
    if (connection) connection.release();
  }
};
