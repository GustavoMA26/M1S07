import createHeader from "./header.js";
import createCards from "./cards.js";

//Selecionando:
let header = document.querySelector('#nav-container')

let cardBody = document.querySelector('#card-body');

// Header - Dados
let menu = ['Início', 'Todos os medicamentos', 'Sobre Nós', 'Contato'];
let logo = 
    {
        logoImg: './images/logo_FarmaDEV.svg',
        alt: 'Logo FarmaDev',
        width: 75,
        heigth: 60,
    };

// Cards Medicamentos - Dados
let medicamentos = [
    {
      id: 0,
      titulo: 'Tylenol Paracetamol 500mg',
      img: '/images/tylenol.webp',
      imgAlt: 'Tylenol',
      valor: 'R$ 9,99'
    },
    {
      id: 1,
      titulo: 'Cetaphil Hidratante Corporal',
      img: '/images/cetaphil.webp',
      imgAlt: 'Cetaphil Hidratante',
      valor: 'R$ 114,90'
    },
    {
      id: 2,
      titulo: 'Desodorante Dove Antitranspirante',
      img: '/images/desodorante.webp',
      imgAlt: 'Desodorante Dove',
      valor: 'R$ 23,99'
    },
    {
      id: 3,
      titulo: 'Hidratante Corporal Neutrogena',
      img: '/images/hidratante.webp',
      imgAlt: 'Hidratante Neutrogena',
      valor: 'R$ 25,99'
    },
    {
      id: 4,
      titulo: 'Protetor Facial Australian Gold',
      img: '/images/protetor.webp',
      imgAlt: 'Protetor Facial Australian Gold',
      valor: 'R$ 29,99'
    },
    {
      id: 5,
      titulo: 'Desodorante Rexona Man Clinical',
      img: '/images/rexona.webp',
      imgAlt: 'Desodorante Rexona Clinical',
      valor: 'R$ 22,99'
    },
    {
      id: 6,
      titulo: 'Colírio Líquido Liris 5mg/Ml',
      img: '/images/colirio.webp',
      imgAlt: 'Colírio Liris',
      valor: '>R$ 26,99'
    },
    {
      id: 7,
      titulo: 'Sabonete Líquido Granado Glicerinado',
      img: '/images/sabonete.webp',
      imgAlt: 'Sabonete Líquido Granado',
      valor: 'R$ 27,90'
    }
  ]
// Criação:
if (header != null) {
    createHeader(header, logo, menu)
  }

if (cardBody != null) {
    createCards(cardBody, medicamentos.length, medicamentos);
}
