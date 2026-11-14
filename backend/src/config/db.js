const mariadb = require('mariadb');
require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });

const pool = mariadb.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'centro_cultural_db',
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || '5', 10)
});

module.exports = pool;
