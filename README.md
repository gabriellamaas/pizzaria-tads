# 🍕 Super Pizza - Desafio 2

## Sobre a aluna

**Acadêmica:** Gabriella Maas  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Projeto:** Desenvolvimento Web - Desafio 2  

Olá! Sou Gabriella Maas, acadêmica do curso de Análise e Desenvolvimento de Sistemas.

Este projeto foi desenvolvido como parte das atividades da disciplina, com o objetivo de aplicar na prática conceitos de desenvolvimento web utilizando HTML, CSS e JavaScript.

O Desafio 2 é uma continuação do projeto de pizzaria desenvolvido anteriormente. Nesta etapa, o objetivo principal foi adicionar interatividade ao site utilizando JavaScript puro e disponibilizar a aplicação online por meio de um serviço de hospedagem.

---

## Sobre o projeto

O **Super Pizza** é um site fictício de uma pizzaria delivery.

A página apresenta informações sobre a pizzaria, sabores disponíveis, benefícios, depoimentos de clientes e um formulário para realização de pedidos.

No primeiro desafio, a página foi desenvolvida principalmente com HTML e CSS.

No **Desafio 2**, o projeto foi aprimorado com JavaScript para permitir maior interação do usuário com a página.

---

## Funcionalidades implementadas

### 🍕 Página da pizzaria

O site possui:

- Cabeçalho com menu de navegação;
- Seção principal com imagem de destaque;
- Benefícios da pizzaria;
- Lista de sabores disponíveis;
- Depoimentos de clientes;
- Formulário para realização do pedido;
- Rodapé com redes sociais;
- Página de confirmação do pedido.

---

## 🔄 Carrossel de depoimentos

Foi implementado um carrossel utilizando **JavaScript puro**.

Os botões:

- **Anterior**
- **Próximo**

permitem navegar entre diferentes depoimentos de clientes.

A cada clique, o JavaScript altera as informações apresentadas no depoimento.

---

## ✅ Validação do formulário

Antes do envio do pedido, o formulário realiza algumas validações utilizando JavaScript.

São verificados:

- Nome do cliente;
- Telefone;
- Endereço de entrega;
- Sabor selecionado;
- Forma de pagamento selecionada;
- Validade do número de telefone.

Caso alguma informação obrigatória não tenha sido preenchida corretamente, o usuário recebe uma mensagem informando o problema.

Quando todos os dados estão válidos, o usuário é direcionado para a página:

`obrigado.html`

Essa página confirma que o pedido foi realizado.

---

## 💻 Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- **HTML5** - estrutura das páginas;
- **CSS3** - estilização e responsividade;
- **JavaScript** - interatividade e validações;
- **Font Awesome** - ícones utilizados na interface;
- **Git e GitHub** - versionamento e armazenamento do projeto;
- **GitHub Pages** - publicação do site.

Não foram utilizados frameworks JavaScript.

---

## 📁 Estrutura do projeto

```text
pizzaria/
│
├── index.html
├── obrigado.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    └── img/
        ├── pizza.jpg
        ├── cliente-joao.png
        └── logo.png
