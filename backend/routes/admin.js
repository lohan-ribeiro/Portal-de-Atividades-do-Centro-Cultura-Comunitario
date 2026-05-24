const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const verifyAdminToken = require('../middlewares/adminAuth');

// Rota pública de login administrativo
router.post('/login', adminController.loginAdmin);

// Rotas protegidas por JWT para gerenciamento de atividades
router.post('/atividades', verifyAdminToken, adminController.createActivity);
router.put('/atividades/:id', verifyAdminToken, adminController.updateActivity);
router.delete('/atividades/:id', verifyAdminToken, adminController.deleteActivity);
router.delete('/deletar-atividades', verifyAdminToken, adminController.deleteActivities);

module.exports = router;
