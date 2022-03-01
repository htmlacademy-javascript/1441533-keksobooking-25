const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  if (min >= max) {
    return new Error('неверный числовой диапазон');
  }
  return Math.round(rand);
};


const randomFloatNumber = (min, max, quantityNumber) => {
  const randomPoint = Math.random() * (max - min) + min;
  if (min >= max) {
    return new Error('неверный числовой диапазон');
  }
  return randomPoint.toFixed(quantityNumber);
};


const TITLE = [
  'Квартиры посуточно в городе Токио!',
  'Красивый вид из окна обеспечен!',
  'Квартиры с японским интерьером!',
];


const PriceRange = {
  MIN: 5000,
  MAX: 10000,
};

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const RoomsRange =  {
  MIN: 1,
  MAX: 3,
};

const GuestsRange = {
  MIN: 1,
  MAX: 5,
};

const CHECKING = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Квартиры с хорошим ремонтом',
  'Хорошая мебель и просторные комнаты',
  'В кравтирах проведён быстрый интернет',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg,',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const latLocation = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const lngLocation = {
  MIN: 139.70000,
  MAX: 139.80000,
};


const AvatarRange = {
  MIN: 1,
  MAX: 10,
};


const arrayRandElement = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const randonArrayLength = (array) => {
  const newArray = [];

  for (let i = 0; i < randomNumber(1, array.length); i++) {
    newArray.push(array[i]);
  }
  return newArray;
};


const getAdress = () => ({
  lat: randomFloatNumber(latLocation.MIN, latLocation.MAX, 5),
  lng: randomFloatNumber(lngLocation.MIN, lngLocation.MAX, 5),
});

const getAuthor = () => ({
  avatar: `img/avatars/user0${randomFloatNumber(AvatarRange.MIN, AvatarRange.MAX)}.png`,
});


const cardGenerate = () => ({
  title: arrayRandElement(TITLE),
  address: Object.values(getAdress()),
  price: randomNumber(PriceRange.MIN, PriceRange.MAX),
  type: arrayRandElement(TYPE),
  rooms: randomNumber(RoomsRange.MIN, RoomsRange.MAX),
  guests: randomNumber(GuestsRange.MIN, GuestsRange.MAX),
  checking: arrayRandElement(CHECKING),
  checkout: arrayRandElement(CHECKOUT),
  features: randonArrayLength(FEATURES),
  description: arrayRandElement(DESCRIPTION),
  photos: randonArrayLength(PHOTOS),
});

const finiteCard = () => ({
  avatar: getAuthor(),
  offer: cardGenerate(),
  location: getAdress(),
});

const createCard = () =>  new Array(10).fill(null).map(finiteCard);

createCard();
