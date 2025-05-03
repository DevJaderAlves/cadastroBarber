import express from 'express';
import cors from 'cors';
import agendamentoRoutes from './routes/agendamentoRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Usar a rota de agendamento
app.use('/api/agendamentos', agendamentoRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

