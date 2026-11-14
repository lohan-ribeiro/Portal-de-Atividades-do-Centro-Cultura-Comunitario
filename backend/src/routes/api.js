// backend/routes/api.js
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const verifyApiKey = require('../middlewares/auth');

// Rota de consulta com autenticação obrigatória
router.get('/atividades', verifyApiKey, apiController.getAtividadesExterna);

module.exports = router;