var express = require('express');
var router = express.Router();
const pool = require('../config/db');

/* GET API status. */
router.get('/', function(req, res, next) {
  res.json({
    status: 'online',
    message: 'API do Centro Cultural Comunitário',
    version: '1.0.0'
  });
});

router.get('/atividades', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const sql = `
      SELECT 
        a.id, 
        m.nome AS nome, 
        n.nome AS nivel, 
        a.local,
        a.analista,
        a.horario, 
        a.turno,
        a.idade,
        a.dias_semana,
        a.disponivel_em
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
