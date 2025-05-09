// agendamentoController.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Função para criar agendamento
export const criarAgendamento = async (req, res) => {
  try {
    const { nome, telefone, servico, profissional, horario } = req.body;

    if (!nome || !telefone || !servico || !profissional || !horario) {
      return res.status(400).json({ error: 'Preencha todos os campos obrigatórios.' });
    }

    const novoAgendamento = await prisma.agendamento.create({
      data: { nome, telefone, servico, profissional, horario }
    });

    return res.status(201).json(novoAgendamento);
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    return res.status(500).json({ error: 'Erro interno ao tentar agendar.' });
  }
};

// 🔥 Função para listar todos agendamentos
export const listarAgendamentos = async (req, res) => {
  try {
    const agendamentos = await prisma.agendamento.findMany({
      orderBy: { horario: 'asc' }
    });
    return res.json(agendamentos);
  } catch (error) {
    console.error('🔥 Erro ao buscar agendamentos:', error.message);
    console.error('📦 Erro completo:', error);
    return res.status(500).json({ error: error.message }); // <--- mande o erro real!
  }
};





