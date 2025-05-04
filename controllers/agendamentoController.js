import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Função para criar um novo agendamento
export const criarAgendamento = async (req, res) => {
  const { nome, telefone, servico, profissional, horario } = req.body;

  if (!nome || !telefone || !servico || !profissional || !horario) {
    return res.status(400).json({ error: 'Preencha todos os campos obrigatórios.' });
  }

  try {
    const novoAgendamento = await prisma.agendamento.create({
      data: {
        nome: nome,
        telefone: telefone,
        servico: servico,
        profissional: profissional,
        horario: horario,
      },
    });
    res.status(201).json(novoAgendamento);
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    res.status(500).json({ error: 'Erro interno ao tentar agendar.' });
  }
};


