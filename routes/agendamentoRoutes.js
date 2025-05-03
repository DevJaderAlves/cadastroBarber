import express from 'express';
import { criarAgendamento } from '../controllers/agendamentoController.js';

const router = express.Router();

// Rota POST para criar agendamento
router.post('/', criarAgendamento);

export default router;
