// Seleciona elementos parent
const locationBox = document.querySelector('.location-box');
const climaBox = document.querySelector('.clima-box');
const extrasBox = document.querySelector('.extras-box');

// Cria elementos child
const pais = document.createElement('input');
pais.classList.add('pais');
pais.setAttribute('type', 'text');
pais.setAttribute('placeholder', 'Insira sua localização');


const pesquisa = document.createElement('div');
pesquisa.classList.add('pesquisa');
pesquisa.innerHTML = "ICON";

const ceuFigura = document.createElement('div');
ceuFigura.classList.add('ceu-figura');
ceuFigura.innerHTML = "CÉU.IMG";

// Insere elementos child nos elementos parent
locationBox.appendChild(pais);
locationBox.appendChild(pesquisa);
locationBox.appendChild(ceuFigura);
