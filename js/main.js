import createHeader from "./header.js";

//Selecionando:
let header = document.querySelector('#nav-container')


// Header - Dados
let menu = ['Início', 'Todos os medicamentos', 'Sobre Nós', 'Contato'];
let logo = 
    {
        logoImg: './images/logo_FarmaDEV.svg',
        alt: 'Logo FarmaDev',
        width: 75,
        heigth: 60,
    };


// Criação:
if (header != null) {
    createHeader(header, logo, menu)
  }


