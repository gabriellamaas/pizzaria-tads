# Super Pizza - Desafio 2

Continuação do projeto da pizzaria desenvolvido no Desafio 1, agora com interatividade em JavaScript puro e preparado para publicação online.

## Estrutura

```text
pizzaria/
├── index.html
├── obrigado.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── img/
        ├── pizza.jpg
        ├── cliente-joao.png
        └── logo.png
```

> A pasta `assets` é a mesma utilizada no Desafio 1.

## Requisitos do Desafio 2 atendidos

### Carrossel de depoimentos

- Botão **Anterior** exibe o depoimento anterior.
- Botão **Próximo** exibe o próximo depoimento.
- O carrossel volta ao início ao chegar ao último depoimento e vice-versa.
- Implementado com `addEventListener`, `innerText` e alteração de atributos da imagem.

### Validação do formulário

Antes de concluir o pedido, o JavaScript verifica:

- Nome preenchido.
- Telefone preenchido e com 10 ou 11 dígitos, incluindo DDD.
- Endereço preenchido.
- Sabor selecionado.
- Forma de pagamento selecionada.

Quando todas as informações são válidas, o usuário é redirecionado para `obrigado.html`.

## Publicação

O projeto pode ser publicado gratuitamente com GitHub Pages, Vercel, Netlify ou outro serviço de hospedagem estática.

Para GitHub Pages:

1. Envie os arquivos atualizados para o repositório no GitHub.
2. Acesse **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`.
5. Clique em **Save** e aguarde a publicação.
6. Entregue a URL pública gerada pelo GitHub Pages.
