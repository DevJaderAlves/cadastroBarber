const express = require('express');
const app = express();
const cors = require('cors');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/agendamentos', agendamentoRoutes);

// Rota base para teste
app.get('/', (req, res) => {
  res.send('API de Agendamentos Barber está rodando!');
});

// Tratamento global de erros (caso alguma exceção não seja pega)
app.use((err, req, res, next) => {
  console.error('Erro geral:', err.stack);
  res.status(500).send('Erro interno do servidor.');
});

// Sobe servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


