let produtos = [];
let nextId = 1;

// Listar todos os produtos
function listarProdutos(req, res) {
  res.status(200).json(produtos);
}

// Buscar produto por id
function obterProduto(req, res) {
  // TODO
}

// Criar novo produto
function criarProduto(req, res) {
  // TODO
}

// Atualizar produto
function atualizarProduto(req, res) {
  // TODO
}

// Deletar produto
function deletarProduto(req, res) {
  // TODO
}

module.exports = {
  listarProdutos,
  obterProduto,
  criarProduto,
  atualizarProduto,
  deletarProduto
};