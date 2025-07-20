# Back-end Doceria Goiabada

<p align="center">
  <img src="https://i.imgur.com/zN1XjIm.png" alt="Logotipo Doceria Goiabada"  width="300" />
  </p>

## 🍰 Introdução

Este projeto consiste no back-end de um site de vendas para uma doceria totalmente fictícia, carinhosamente nomeada "Doceria Goiabada". Ele foi desenvolvido para gerenciar os pedidos e produtos, simulando as operações de um e-commerce de doces.

## 🚀 Tecnologias Utilizadas

As principais tecnologias e ferramentas utilizadas no desenvolvimento deste projeto são:

* **JavaScript:** Linguagem de programação principal.
* **pnpm:** Gerenciador de pacotes rápido e eficiente.

## 🗺️ Fluxograma de Rotas (API Endpoints)

O diagrama abaixo ilustra as rotas da API e suas respectivas operações (HTTP Methods), detalhando o fluxo de interações do sistema:

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_PROJETO_BACK-END-DOCERIA-GOIABADA_AQUI]

2.  **Instale as dependências:**
    Utilize o pnpm para instalar todas as dependências do projeto.
    ```bash
    pnpm install
    ```

3.  **Configuração das Variáveis de Ambiente:**
    Este projeto utiliza variáveis de ambiente para configurações sensíveis, como portas e strings de conexão com o banco de dados. Crie um arquivo `.env` na raiz do projeto e configure-o conforme o exemplo:

    ```
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/doceriagoiabada
    # Outras variáveis de ambiente que seu projeto possa usar
    ```
    *(Ajuste `PORT` e `MONGO_URI` conforme a configuração do seu ambiente e adicione quaisquer outras variáveis necessárias.)*

4.  **Inicie o servidor:**
    ```bash
    pnpm start
    ```
    O servidor estará rodando em `http://localhost:3000` (ou na porta configurada no seu `.env`).

## 📁 Estrutura de Pastas

Uma visão geral da estrutura de pastas do projeto para facilitar a navegação:

```
├── src/                  # Código fonte da aplicação
│   ├── controllers/      # Lógica de controle das rotas
│   ├── models/           # Definições dos modelos de dados (Pedido e Produto)
│   ├── routes/           # Definição das rotas da API
│   ├── services/         # Lógica de negócio e interação com o banco de dados
│   └── app.js            # Ponto de entrada da aplicação
├── .env                  # Exemplo de arquivo de variáveis de ambiente
├── .gitignore            # Arquivos e pastas a serem ignorados pelo Git
├── package.json          # Metadados do projeto e scripts
├── pnpm-lock.yaml        # Arquivo de lock do pnpm
└── README.md             # Este arquivo (Falando sobre como funciona o projeto)
```

## 🧪 Testando a API com cURL

Para facilitar o teste local da API, fornecemos os comandos `cURL` abaixo. Lembre-se que o `loja-id: 123abc456A` é um ID de loja para propósitos de teste.

### Rotas de Pedido

```bash
# Obter todos os pedidos
curl --location 'localhost:3000/doceria/pedidos-geral' \
--header 'loja-id: 123abc456A'

# Obter pedidos por data (Ex: 14 de Julho de 2025)
curl --location 'http://localhost:3000/doceria/pedidos-geral/14-07-2025' \
--header 'loja-id: 123abc456A'

# Obter um pedido específico por ID
curl --location 'localhost:3000/doceria/pedido-especifico/6875bef8bdcac9a6140671cf' \
--header 'loja-id: 123abc456A'

# Aceitar um pedido por ID
curl --location --request POST 'localhost:3000/doceria/aceita-pedido/6875bef8bdcac9a6140671cf' \
--header 'loja-id: 123abc456A' \
--data ''

# Criar um novo pedido
curl --location 'localhost:3000/doceria/criar-pedido' \
--header 'loja-id: 123abc456A' \
--header 'Content-Type: application/json' \
--data-raw '{
  "lojaId": "123abc456A",
  "cliente": [
    {
        "nome": "Beatriz Lirios",
        "email": "beatrizteste@gmail.com",
        "telefone": "(81)99999-9999"
    }
  ],
  "status": "pendente",
  "dataHoraRetirada": "2025-07-15T15:00:00Z",
  "itens": [
    {
      "produtoId": "686c852439722d1d7fa149b7",
      "quantidade": 2
    },
    {
      "produtoId": "686dc80eb84b909a33f51f8f",
      "quantidade": 1
    }
  ]
}'

# Marcar um pedido como "pronto" por ID
curl --location --request PUT 'localhost:3000/doceria/pedido-pronto/6875bef8bdcac9a6140671cf' \
--header 'loja-id: 123abc456A'

# Finalizar um pedido por ID
curl --location --request PUT 'localhost:3000/doceria/finalizar-pedido/6875bef8bdcac9a6140671cf' \
--header 'loja-id: 123abc456A'

# Cancelar um pedido por ID
curl --location --request DELETE 'localhost:3000/doceria/cancelar-pedido/6875bef8bdcac9a6140671cf' \
--header 'loja-id: 123abc456A'

### Rotas de Produto

# Obter todos os produtos
curl --location 'http://localhost:3000/doceria/produtos-geral' \
--header 'loja-id: 123abc456A'

# Adicionar um novo produto
curl --location 'http://localhost:3000/doceria/adicionar-produto' \
--header 'loja-id: 123abc456A' \
--header 'Content-Type: application/json' \
--data '{
    "nome": "ProdutoNovoteste",
    "preco": 12.55,
    "ingredientes": "Arroz, leite, morango",
    "imagem": "testestestes"
}'
