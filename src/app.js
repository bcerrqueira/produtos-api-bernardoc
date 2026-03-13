console.log("APP INICIADO");
const express = require('express');
const produtosRouter = require('./routes/produtos');

const app = express();

// Middleware: interpretar JSON no corpo das requisições
app.use(express.json());

// Middleware de log simplificado
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Registrar rotas
app.use('/api/v1/produtos', produtosRouter);

// Middleware de erro global
app.use((err, req, res, next) => {
  res.status(500).json({ erro: err.message });
});

app.listen(3000, () => console.log('🚀 Bulbe API rodando na porta 3000'));