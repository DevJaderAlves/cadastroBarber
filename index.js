const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Teste de rota inicial
app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀');
});

// Importar as rotas de agendamento
const agendamentoRoutes = require('./routes/agendamentos');
app.use('/agendamentos', agendamentoRoutes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
