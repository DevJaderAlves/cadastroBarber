const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

// Definir rotas
router.get('/', agendamentoController.listarAgendamentos);
router.get('/:id', agendamentoController.buscarAgendamentoPorId);
router.post('/', agendamentoController.cadastrarAgendamento);
router.delete('/:id', agendamentoController.excluirAgendamento);
router.patch('/:id', agendamentoController.atualizarAgendamento);

module.exports = router;
