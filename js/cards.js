//Ex.4
export default function createCards (parentCard, qtdCards, produtos) {
    for (let id =0; id < qtdCards; id++) {
        let card = `<div id = ${id} class="col-12 col-md-6 col-lg-3"><div class="card mx-auto"><div class="icon-action"><i class="fa-solid fa-heart-circle-plus fa-xl"></i></div><img class="mx-auto d-block"><div class="card-body"><h5 class="card-title"></h5><p class="card-text"></p><button>ADICIONAR <i class="fa-solid fa-basket-shopping fa-sm"></i></button></div></div></div>`
        parentCard.innerHTML += card;
    }
    fillCards(produtos);
}

function fillCards (produtos) {
    for (let id = 0; id < produtos.length; id++){
        let elementoCard = document.getElementById(id);
        let nomeProduto = elementoCard.querySelector('.card-title');
        let precoProduto = elementoCard.querySelector('.card-text');
        let imagemProduto = elementoCard.querySelector('img');
        let botaoAdicionar = elementoCard.querySelector('button');
        let botaoFavoritar = elementoCard.querySelector('i');

        nomeProduto.innerText = produtos[id].titulo;
        precoProduto.innerText = produtos[id].valor;
        imagemProduto.setAttribute('src', produtos[id].img);
        imagemProduto.setAttribute('alt', produtos[id].imgAlt);

        botaoAdicionar.addEventListener('click', () => {
            console.log(produtos[id].titulo);
            console.log(produtos);
            alert(`${produtos[id].titulo} foi adicionado ao carrinho!`);
            })

        botaoFavoritar.addEventListener('click', () => {
            console.log(produtos[id].titulo);

            if(produtos[id].favorite === false) {
                alert(`${produtos[id].titulo} foi adicionado aos favoritos!`);
                botaoFavoritar.style.color = 'red';
                produtos[id].favorite = true;
            } else {
                alert (`${produtos[id].titulo} foi removido dos favoritos!`);
                botaoFavoritar.style.color = 'rgb(230,229,229)';
                produtos[id].favorite = false;
            }

            produtos.forEach(el => {
                if(el.favorite === true){
                    console.log(el);
                }
            })
        })

    }
}