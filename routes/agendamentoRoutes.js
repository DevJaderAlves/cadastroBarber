const express = require('express');
const router = express.Router();
const { criarAgendamento, listarAgendamentos } = require('../controllers/agendamentoController');

// Rota para criar agendamento
router.post('/', criarAgendamento);

// 🔥 Rota para listar agendamentos
router.get('/', listarAgendamentos);

module.exports = router;


