// Seleciona elementos parent
const locationBox = document.querySelector('.location-box');
const climaBox = document.querySelector('.clima-box');
const extrasBox = document.querySelector('.extras-box');

// Cria elementos child
const locationIcon = document.createElement('i');
locationIcon.classList.add('location-icon', 'fa-solid', 'fa-location-dot');

const pais = document.createElement('input');
pais.classList.add('pais');
pais.setAttribute('type', 'text');
pais.setAttribute('placeholder', 'Insira sua localização');

const pesquisa = document.createElement('span');
pesquisa.classList.add('pesquisa', 'material-symbols-outlined');
pesquisa.innerHTML = "search";

const ceuFigura = document.createElement('div');
ceuFigura.classList.add('ceu-figura');


// Insere elementos child nos elementos parent
locationBox.appendChild(locationIcon);
locationBox.appendChild(pais);
locationBox.appendChild(pesquisa);
locationBox.appendChild(ceuFigura);

// Lógica de digitar no campo

