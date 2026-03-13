# Produtos API

API REST simples para gerenciamento de produtos desenvolvida com **Node.js** e **Express**.

---

#  Como executar o projeto

## 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd produtos-api-bernardoc
```

## 2. Instalar as dependências

```bash
npm install
```

## 3. Executar o servidor

Modo desenvolvimento:

```bash
npm run dev
```

Ou modo padrão:

```bash
node app.js
```

## 4. Acessar a API

O servidor iniciará em:

```
http://localhost:3000
```

Base da API:

```
http://localhost:3000/api/v1/produtos
```

---

# 📡 Endpoints da API

| Método | Endpoint             | Descrição                     | Status de sucesso |
| ------ | -------------------- | ----------------------------- | ----------------- |
| GET    | /api/v1/produtos     | Lista todos os produtos       | 200               |
| GET    | /api/v1/produtos/:id | Busca um produto pelo ID      | 200               |
| POST   | /api/v1/produtos     | Cria um novo produto          | 201               |
| PUT    | /api/v1/produtos/:id | Atualiza um produto existente | 200               |
| DELETE | /api/v1/produtos/:id | Remove um produto             | 200               |

---


#  Estrutura do projeto

```
produtos-api-bernardoc
│
├── src
│   ├── controllers
│   │   └── produtosController.js
│   │
│   ├── routes
│   │   └── produtos.js
│
├── app.js
├── package.json
└── README.md
```

---
