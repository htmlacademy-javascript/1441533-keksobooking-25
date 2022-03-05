import {getRandomArrayLength, getRandomNumber, getRandomFloatNumber, getArrayRandElement} from './util.js';
import {AvatarRange, lngLocation, latLocation , PHOTOS,  FEATURES, CHECKING, PriceRange, DESCRIPTION, CHECKOUT, TYPE, TITLE,  RoomsRange, GuestsRange} from './data.js';


const getCardGenerate = () => {
  const latCoordinate = getRandomFloatNumber(latLocation.MIN, latLocation.MAX, 5);
  const lngCoordinate = getRandomFloatNumber(lngLocation.MIN, lngLocation.MAX, 5);
  const randomNum = getRandomNumber(AvatarRange.MIN, AvatarRange.MAX);

  return {
    offer :{
      title: getArrayRandElement(TITLE),
      address: `${latCoordinate}, ${lngCoordinate}`,
      price: getRandomNumber(PriceRange.MIN, PriceRange.MAX),
      type: getArrayRandElement(TYPE),
      rooms: getRandomNumber(RoomsRange.MIN, RoomsRange.MAX),
      guests: getRandomNumber(GuestsRange.MIN, GuestsRange.MAX),
      checking: getArrayRandElement(CHECKING),
      checkout: getArrayRandElement(CHECKOUT),
      features: getRandomArrayLength(FEATURES),
      description: getArrayRandElement(DESCRIPTION),
      photos: getRandomArrayLength(PHOTOS),
    },

    author: {
      avatar: `img/avatars/user${randomNum === 10 ? '10': `0${randomNum}`}.png`,
    },

    location: {
      lat: latCoordinate,
      lng: lngCoordinate,
    },
  };
};


const createCard = () =>  new Array(10).fill(null).map(getCardGenerate);

createCard();
