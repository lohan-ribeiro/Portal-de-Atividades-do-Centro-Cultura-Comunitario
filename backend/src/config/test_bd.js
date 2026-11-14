// Test connection to the database
// Usage: npm run test:db ou node ./src/config/test_bd.js
const pool = require('./db');

async function testConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (err) {
    console.error("Falha na conexão com o banco de dados:", err);
  } finally {
    if (conn) conn.release();
    pool.end();
  }
}

testConnection();
