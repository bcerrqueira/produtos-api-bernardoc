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
  const { nome, tipo, usina_id, localizacao } = req.body;
  if (!nome || !tipo) return res.status(400).json({ erro: 'nome e tipo são obrigatórios' });
  const novo = { id: nextId++, nome, tipo, usina_id, localizacao, status: 'ativo',
    criado_em: new Date().toISOString(), atualizado_em: new Date().toISOString() };
  produtos.push(novo);
  res.status(201).json(novo);
}

// Atualizar produto
function atualizarProduto(req, res) {
  // TODO
}

// Remover produto
function removerProduto(req, res) {
  const idx = produtos.findIndex(d => d.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ erro: 'Produto não encontrado' });

  produtos.splice(idx, 1);
  res.status(204).send();
}



module.exports = {
  listarProdutos,
  obterProduto,
  criarProduto,
  atualizarProduto,
  removerProduto
};