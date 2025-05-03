const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Listar todos os agendamentos
exports.listarAgendamentos = async (req, res) => {
  try {
    const agendamentos = await prisma.agendamento.findMany();
    res.json(agendamentos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar agendamentos' });
  }
};

// Buscar agendamento por ID
exports.buscarAgendamentoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const agendamento = await prisma.agendamento.findUnique({ where: { id: Number(id) } });
    if (!agendamento) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }
    res.json(agendamento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar agendamento' });
  }
};

// Cadastrar novo agendamento
exports.cadastrarAgendamento = async (req, res) => {
  const { nome, telefone, data, horario } = req.body;

  try {
    // Verifica se já existe agendamento no mesmo horário
    const agendamentoExistente = await prisma.agendamento.findFirst({
      where: { data, horario }
    });

    if (agendamentoExistente) {
      return res.status(400).json({ error: 'Horário já agendado' });
    }

    const novoAgendamento = await prisma.agendamento.create({
      data: { nome, telefone, data, horario }
    });
    res.json(novoAgendamento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar agendamento' });
  }
};

// Excluir agendamento
exports.excluirAgendamento = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.agendamento.delete({ where: { id: Number(id) } });
    res.json({ message: 'Agendamento excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir agendamento' });
  }
};

// Atualizar agendamento
exports.atualizarAgendamento = async (req, res) => {
  const { id } = req.params;
  const { nome, telefone, data, horario } = req.body;
  
  try {
    const agendamentoAtualizado = await prisma.agendamento.update({
      where: { id: Number(id) },
      data: { nome, telefone, data, horario }
    });
    res.json(agendamentoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar agendamento' });
  }
};
