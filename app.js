function alterarStatus(id) {
    let gameSelect = document.getElementById(`game-${id}`);
    let imagem = gameSelect.querySelector('.dashboard__item__img');
/*    let name = gameSelect.querySelector('.dashboard__item__name'); */
    let botao = gameSelect.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }   
}

/* A classe do html que indica se o jogo está alugado é: "dashboard__item__img--rented"
   O jogo que não tem essa classe, indica que está disponível.
   A classe está aplicada ao elemento imagem (imagem). Faz-se o if, com base nisso.
   Todo elemento de classe tem uma propriedade chamada classList, que devolve a lista de classes do 
   elemento.
   O contains diz se o elemento tem em sua lista uma determinada classe, neste caso será 
   "dashboard__item__img--rented". Se tiver, retorna True.
   Se o elemento tiver essa classe (True), removemos essa classe dele, para constar como devolvido.
   E se, ele não tiver o elemento dessa classe (False), ele irá adicionar a classe ao elemnto como 
   Rented/Alugado.
   Para alterar o texto do botão (botao), atribuímos o valor, utilizando textContent.
   Para alterar a cor do botão Alugar/Devolver, verifica-se a classe no html:
   "dashboard__item__button--return", e remove ou adiciona as características definidas para o botão.
*/
