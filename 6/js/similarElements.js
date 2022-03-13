import {createCard} from './cardGenerate.js';

const card = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const HOUSE_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец ',
  hotel: 'Отель',
};

const analogousCard = createCard();

const createCardsFragment = document.createDocumentFragment();

const generateCard = ({author, offer}) => {
  const cardComponent = card.cloneNode(true);

  cardComponent.querySelector('.popup__title').textContent = offer.title;
  cardComponent.querySelector('.popup__text--address').textContent = offer.address;
  cardComponent.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardComponent.querySelector('.popup__type').textContent = HOUSE_TYPE[offer.type];
  cardComponent.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardComponent.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checking}, выезд до ${offer.checkout}`;
  cardComponent.querySelector('.popup__description').textContent = offer.description;
  cardComponent.querySelector('.popup__avatar');
  cardComponent.querySelector('img').src = author.avatar;


  const featuresList =  cardComponent.querySelector('.popup__features');
  const photoList =  cardComponent.querySelector('.popup__photos');


  featuresList.innerHTML = '';
  for (let i = 0; i < offer.features.length; i++) {
    if(!offer.features.length) {
      featuresList.classList.add('hidden');
    }
    const features = offer.features[i];
    const featureElement = `<li class="popup__feature popup__feature--${features}"></li>`;
    featuresList.insertAdjacentHTML('afterbegin', featureElement);
  }

  photoList.innerHTML = '';
  for (let i = 0; i < offer.photos.length; i++) {
    if(!offer.photos.length) {
      photoList.classList.add('hidden');
    }
    const photos = offer.photos[i];
    const photosElement = `<img src="${photos}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
    photoList.insertAdjacentHTML('afterbegin', photosElement);
  }


  return cardComponent;
};

const generateCards = analogousCard.map(generateCard);
createCardsFragment.appendChild(generateCards[0]);
mapCanvas.appendChild(createCardsFragment);
