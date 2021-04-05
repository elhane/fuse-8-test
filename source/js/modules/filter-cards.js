import {container} from '../modules/insert-cards';

const filter = document.querySelector('#filter');
const hiddenClass = 'house--hidden';

const isClosed = (card) => {
  return card.classList.contains(hiddenClass);
};

const showEmptyMessage = (arr) => {
  container.querySelector('.empty').innerHTML = '';
  const h2 = document.createElement('h2');
  if (arr.every(isClosed)) {
    h2.textContent = '';
    h2.classList.add('error');
    h2.textContent = 'No elements found :(';
    container.querySelector('.empty').appendChild(h2);
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
