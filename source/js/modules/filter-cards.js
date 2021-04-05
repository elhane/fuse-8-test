import {emptyMessageBlock} from '../modules/insert-cards';
import {insertMessage} from '../utils/insert-message';

const filter = document.querySelector('#filter');
const hiddenClass = 'house--hidden';

const isClosed = (card) => {
  return card.classList.contains(hiddenClass);
};

const showEmptyMessage = (arr) => {
  emptyMessageBlock.innerHTML = '';
  if (arr.every(isClosed)) {
    insertMessage(emptyMessageBlock, 'No elements found :(');
  }
};

const filterCards = () => {
  filter.addEventListener('input', () => {
    const cards = Array.from(document.querySelectorAll('.house'));
    const filterValue = filter.value.toLowerCase();

    cards.forEach((item) => {
      const titleText = item.querySelector('.house__name').textContent.toLowerCase();

      if ((filterValue.length >= 3) && !titleText.includes(filterValue)) {
        item.classList.add(hiddenClass);
      } else {
        item.classList.remove(hiddenClass);
      }

      showEmptyMessage(cards);
    });
  });
};

export {filterCards};
