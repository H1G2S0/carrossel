/*
OBJEITVO 1 - quando clicarmos na seta avançar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique no usuário na seta avançar
    - passo 3 - fazer o aparecer o próximo cartão
    - passo 4 - buscar o cartão selecionado e esconder

    OBJEITVO 2 - quando clicarmos na seta voltar temos que mostrar o  cartão anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique no usuário na seta voltar
    - passo 3 - fazer o aparecer o cartão anterior
    - passo 4 - buscar o cartão selecionado e esconder
*/ 

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function(){

    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})

btnVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);

})
