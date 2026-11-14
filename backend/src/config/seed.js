const pool = require('./db');
const bcrypt = require('bcryptjs');

async function seed() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Conectado ao banco de dados. Verificando e criando tabelas...");

    // Cria a tabela administradores se ela não existir
    await conn.query(`
      CREATE TABLE IF NOT EXISTS \`administradores\` (
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`login\` VARCHAR(255) NOT NULL UNIQUE,
        \`senha\` VARCHAR(255) NOT NULL,
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
    console.log("Tabela 'administradores' verificada/criada com sucesso.");

    const defaultLogin = process.env.ADMIN_DEFAULT_LOGIN || 'admin';
    const defaultPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'admin123';

    // Verifica se o usuário administrador já existe
    const rows = await conn.query("SELECT * FROM administradores WHERE login = ?", [defaultLogin]);
    if (rows.length === 0) {
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);
      await conn.query("INSERT INTO administradores (login, senha) VALUES (?, ?)", [defaultLogin, hashedPassword]);
      console.log("Usuário administrador padrão criado com sucesso!");
      console.log(`Login: ${defaultLogin}`);
      console.log(`Senha: ${defaultPassword}`);
    } else {
      console.log(`Usuário administrador '${defaultLogin}' já existe.`);
    }
  } catch (err) {
    console.error("Erro ao rodar o seeding do banco de dados:", err);
  } finally {
    if (conn) conn.release();
    pool.end();
  }
}

seed();
