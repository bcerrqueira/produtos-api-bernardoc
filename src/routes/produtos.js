const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produtosController');

// GET /api/v1/produtos
router.get('/', produtosController.listarProdutos);

// GET /api/v1/produtos/:id
router.get('/:id', produtosController.obterProduto);

// POST /api/v1/produtos
router.post('/', produtosController.criarProduto);

// PUT /api/v1/produtos/:id
router.put('/:id', produtosController.atualizarProduto);

// DELETE /api/v1/produtos/:id
router.delete('/:id', produtosController.deletarProduto);

module.exports = router;