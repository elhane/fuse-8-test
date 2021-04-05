import {renderCard} from '../modules/render-card.js';

const container = document.querySelector('.houses__list');

const errorHandler = () => {
  const h2 = document.createElement('h2');
  h2.classList.add('error');
  h2.textContent = 'Loading error :( Please, refresh the page';
  container.appendChild(h2);
};

const insertCards = (houses) => {
  let fragment = document.createDocumentFragment();

  houses.forEach((house) => {
    let item = renderCard(house);
    fragment.appendChild(item);
  });

  container.appendChild(fragment);
};

export {insertCards, errorHandler, container};
