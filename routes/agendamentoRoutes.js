const express = require('express');
const router = express.Router();
const { criarAgendamento } = require('../controllers/agendamentoController');

// Rota de criação de agendamento
router.post('/', criarAgendamento);

module.exports = router;

