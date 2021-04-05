import {insertCards, errorHandler} from '../modules/insert-cards';

const getCards = () => {
  fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
      .then((response) => response.json())
      .then((result) => insertCards(result))
      .catch((err) => errorHandler(err));
};

export {getCards};
