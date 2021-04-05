import {getRandomInRange, divideNumberByPieces} from '../utils/numbers';

const cardTemplate = document.querySelector('#house').content.querySelector('.house');

const renderCard = (house) => {
  const randonNum = getRandomInRange(1, 24);
  const cardElement = cardTemplate.cloneNode(true);

  const link = cardElement.querySelector('.house__link');
  const name = cardElement.querySelector('.house__name');
  const label = cardElement.querySelector('.house__label');
  const address = cardElement.querySelector('.house__address');
  const price = cardElement.querySelector('.house__price');
  const image = cardElement.querySelector('.house__image img');

  name.textContent = house.title;
  address.textContent = house.address;
  price.textContent = `£${divideNumberByPieces(house.price, ',')}`;
  image.src = `img/content/house-${randonNum}.jpg`;
  image.alt = `house ${house.title} image`;
  link.href = `/details/${house.id}`;

  switch (house.type) {
    case 'IndependentLiving':
      label.textContent = 'Independent Living';
      label.classList.add('house__label--independent');
      break;

    case 'SupportAvailable':
      label.textContent = 'Restaurant & Support available';
      label.classList.add('house__label--support');
      break;
  }

  return cardElement;
};

export {renderCard};
