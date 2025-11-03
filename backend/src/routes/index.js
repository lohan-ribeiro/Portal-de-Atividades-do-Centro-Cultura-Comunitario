//======== ORIGINAL CONTENT ===================
// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
//=============================================

// var express = require('express');
// var router = express.Router();
// const pool = require('../config/db');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/atividades', async function(req, res, next) {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     const rows = await conn.query("SELECT * FROM atividades");
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Database error' });
//   } finally {
//     if (conn) conn.end();
//   }
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
const pool = require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/atividades', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const sql = `
      SELECT 
        a.id, 
        m.nome AS nome, 
        a.horario, 
        a.idade, 
        n.nome AS nivel, 
        a.local
      FROM atividades AS a
      JOIN modalidades AS m ON a.modalidade_id = m.id
      JOIN niveis AS n ON a.nivel_id = n.id;
    `;
    const rows = await connection.query(sql);
    connection.release();
    // If the driver returns [rows, fields], we need to send the first element
    if (Array.isArray(rows) && rows.length === 2 && Array.isArray(rows[0]) && rows[1] && !Array.isArray(rows[1])) {
        res.json(rows[0]);
    } else {
        res.json(rows); // Assumes the driver returns just the rows array
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar atividades no banco de dados.');
  }
});

module.exports = router;
