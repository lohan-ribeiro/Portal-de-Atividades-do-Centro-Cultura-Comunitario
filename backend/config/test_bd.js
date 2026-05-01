    // Test connection to the database.
    // Standalone usage with npm start ./backend/src/config/test_db.js
    const mariadb = require('mariadb');
    const pool = mariadb.createPool({
        host: '127.0.0.1',
        user: 'projeto',
        password: '44Kd2Babiqq2azyH',
        database: 'ceu'
    });

    async function testConnection() {
        let conn;
        try {
            conn = await pool.getConnection();
            console.log("Database connection successful!");
        } catch (err) {
            console.error("Database connection failed:", err);
        } finally {
            if (conn) conn.end();
            pool.end();
        }
    }

    testConnection();