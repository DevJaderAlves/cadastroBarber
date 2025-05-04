import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Função para criar um novo agendamento
export const criarAgendamento = async (req, res) => {
  try {
    const { nome, telefone, servico, profissional, horario } = req.body;

    // Validação simples
    if (!nome || !telefone || !servico || !profissional || !horario) {
      return res.status(400).json({ error: 'Preencha todos os campos obrigatórios.' });
    }

    const novoAgendamento = await prisma.agendamento.create({
      data: {
        nome: nome,
        telefone: telefone,
        servico: servico,
        profissional: profissional,
        horario: horario,
      },
    });

    return res.status(201).json(novoAgendamento);
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    return res.status(500).json({ error: 'Erro interno ao tentar agendar.' });
  }
};



