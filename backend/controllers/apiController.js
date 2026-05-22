// backend/controllers/apiController.js
const pool = require('../config/db');

exports.getAtividadesExterna = async (req, res) => {
  let connection;
  try {
    connection = await pool.getConnection();

    // 1. Paginação (valores padrão se não fornecidos)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    // 2. Filtros via Query Parameters
    const { turno, modalidade, nivel, local } = req.query;

    // 3. Query base com Joins
    let sql = `
      SELECT 
        a.id, 
        m.nome AS modalidade, 
        n.nome AS nivel, 
        a.local,
        a.analista,
        a.horario, 
        a.turno,
        a.idade,
        a.dias_semana,
        a.disponivel_em
      FROM atividades AS a
      LEFT JOIN modalidades AS m ON a.modalidade_id = m.id
      LEFT JOIN niveis AS n ON a.nivel_id = n.id
      WHERE 1=1
    `;
    
    const params = [];

    // Construção dinâmica de filtros seguros (prevenindo SQL Injection)
    if (turno) {
      sql += ` AND a.turno = ?`;
      params.push(turno.toUpperCase());
    }
    if (modalidade) {
      sql += ` AND m.nome LIKE ?`;
      params.push(`%${modalidade}%`);
    }
    if (nivel) {
      sql += ` AND n.nome LIKE ?`;
      params.push(`%${nivel}%`);
    }
    if (local) {
      sql += ` AND a.local LIKE ?`;
      params.push(`%${local}%`);
    }

    // Query para contar o total de itens para metadados da paginação
    let countSql = `
      SELECT COUNT(*) AS total
      FROM atividades AS a
      LEFT JOIN modalidades AS m ON a.modalidade_id = m.id
      LEFT JOIN niveis AS n ON a.nivel_id = n.id
      WHERE 1=1
    `;
    const countParams = [...params]; // Copia os mesmos filtros

    // Adiciona paginação ao SQL principal
    sql += ` LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    // Executa as queries em paralelo
    const [rows, countResult] = await Promise.all([
      connection.query(sql, params),
      connection.query(countSql, countParams)
    ]);

    const totalItems = Number(countResult[0].total);
    const totalPages = Math.ceil(totalItems / limit);

    // Envia a resposta padronizada
    res.json({
      success: true,
      data: rows,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        itemsPerPage: limit
      }
    });

  } catch (err) {
    console.error('Erro na API Externa:', err);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Erro ao processar a consulta de atividades.'
    });
  } finally {
    if (connection) connection.release(); // Sempre libera a conexão
  }
};