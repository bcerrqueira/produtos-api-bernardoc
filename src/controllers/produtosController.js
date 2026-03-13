let produtos = [];
let nextId = 1;

// Listar todos os produtos
function listarProdutos(req, res) {
  res.status(200).json(produtos);
}

// Buscar produto por id
function obterProduto(req, res) {
  const p = produtos.find(d => d.id === Number(req.params.id));

  if (!p) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  res.status(200).json(p);
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