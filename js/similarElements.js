const card = document.querySelector('#card').content.querySelector('.popup');


const HOUSE_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец ',
  hotel: 'Отель',
};

const generateCard = ({author, offer}) => {
  const cardComponent = card.cloneNode(true);

  const cardTitle = cardComponent.querySelector('.popup__title').textContent = offer.title;
  if(!offer.title.length) {
    cardTitle.classList.add('hidden');
  }
  const cardAddress = cardComponent.querySelector('.popup__text--address').textContent = offer.address;
  if(!offer.address.length) {
    cardAddress.classList.add('hidden');
  }
  cardComponent.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

  const cardType = cardComponent.querySelector('.popup__type').textContent = HOUSE_TYPE[offer.type];
  if(!offer.type.length) {
    cardType.classList.add('hidden');
  }
  cardComponent.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  cardComponent.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checking}, выезд до ${offer.checkout}`;

  const cardDescription = cardComponent.querySelector('.popup__description').textContent = offer.description;
  if(!offer.description.length) {
    cardDescription.classList.add('hidden');
  }
  cardComponent.querySelector('.popup__avatar');
  cardComponent.querySelector('img').src = author.avatar;


  const featuresList =  cardComponent.querySelector('.popup__features');
  const photoList =  cardComponent.querySelector('.popup__photos');


  featuresList.innerHTML = '';
  for (let i = 0; i < offer.features.length; i++) {
    const features = offer.features[i];
    const featureElement = `<li class="popup__feature popup__feature--${features}"></li>`;
    featuresList.insertAdjacentHTML('afterbegin', featureElement);
    if(!offer.features) {
      featuresList.classList.add('hidden');
    }
  }

  photoList.innerHTML = '';
  for (let i = 0; i < offer.photos.length; i++) {
    const photos = offer.photos[i];
    const photosElement = `<img src="${photos}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
    photoList.insertAdjacentHTML('afterbegin', photosElement);
    if(!offer.photos.length) {
      photoList.classList.add('hidden');
    }
  }


  return cardComponent;
};


export {generateCard};
