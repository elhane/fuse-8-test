import {renderCard} from '../modules/render-card.js';
import {insertMessage} from '../utils/insert-message';

const container = document.querySelector('.houses__list');
const emptyMessageBlock = document.querySelector('.empty');

const errorHandler = () => {
  emptyMessageBlock.innerHTML = '';
  insertMessage(emptyMessageBlock, 'Loading error :( Please, refresh the page');
};

const insertCards = (houses) => {
  let fragment = document.createDocumentFragment();

  houses.forEach((house) => {
    let item = renderCard(house);
    fragment.appendChild(item);
  });

  container.appendChild(fragment);
};

export {insertCards, errorHandler, emptyMessageBlock};
