const mariadb = require('mariadb');

// Please update the host, user, and password with your local database credentials
const pool = mariadb.createPool({
     host: '127.0.0.1',
     user:'projeto',
     password: '44Kd2Babiqq2azyH',
     database: 'ceu'
});

module.exports = pool;