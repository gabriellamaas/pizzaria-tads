// ==================================================
// SUPER PIZZA - DESAFIO 2
// Interatividade com JavaScript puro
// ==================================================

// ------------------------------
// CARROSSEL DE DEPOIMENTOS
// ------------------------------
const depoimentos = [
  {
    texto: '"Entrega super rápida, recomendo demais!" – João',
    foto: 'assets/img/cliente-joao.png',
    alt: 'João, cliente da Super Pizza'
  },
  {
    texto: '"A pizza chegou quentinha e muito saborosa!" – Maria',
    foto: 'assets/img/cliente-joao.png',
    alt: 'Cliente da Super Pizza'
  },
  {
    texto: '"Ótimo atendimento e pedido entregue no horário." – Carlos',
    foto: 'assets/img/cliente-joao.png',
    alt: 'Cliente da Super Pizza'
  }
];

let indiceAtual = 0;

const textoDepoimento = document.getElementById('texto-depoimento');
const fotoDepoimento = document.getElementById('foto-depoimento');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');

function atualizarDepoimento() {
  const depoimento = depoimentos[indiceAtual];

  textoDepoimento.innerText = depoimento.texto;
  fotoDepoimento.src = depoimento.foto;
  fotoDepoimento.alt = depoimento.alt;
}

btnProximo.addEventListener('click', function () {
  indiceAtual++;

  if (indiceAtual >= depoimentos.length) {
    indiceAtual = 0;
  }

  atualizarDepoimento();
});

btnAnterior.addEventListener('click', function () {
  indiceAtual--;

  if (indiceAtual < 0) {
    indiceAtual = depoimentos.length - 1;
  }

  atualizarDepoimento();
});

// ------------------------------
// VALIDAÇÃO DO FORMULÁRIO
// ------------------------------
const formulario = document.getElementById('form-pedido');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const endereco = document.getElementById('endereco').value.trim();
  const sabor = document.getElementById('sabor').value;
  const pagamento = document.querySelector('input[name="pagamento"]:checked');

  // Remove espaços, parênteses e hífens para validar somente os números.
  const telefoneSomenteNumeros = telefone.replace(/\D/g, '');
  const telefoneValido =
    telefoneSomenteNumeros.length === 10 || telefoneSomenteNumeros.length === 11;

  if (!nome || !telefone || !endereco) {
    alert('Preencha todos os campos obrigatórios.');
    return;
  }

  if (!telefoneValido) {
    alert('Informe um telefone válido com DDD. Exemplo: (45) 99999-9999.');
    return;
  }

  if (!sabor) {
    alert('Selecione um sabor de pizza.');
    return;
  }

  if (!pagamento) {
    alert('Selecione uma forma de pagamento.');
    return;
  }

  // Se todas as validações passarem, redireciona para a página de agradecimento.
  window.location.href = 'obrigado.html';
});
