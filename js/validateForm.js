const form = document.querySelector('.ad-form');
const rooms = document.querySelector('#room_number');
const copacity = document.querySelector('#capacity');
const price = form.querySelector('#price');
const type = form.querySelector('#type');
const checkInTime = form.querySelector('#timein');
const departureTime = form.querySelector('#timeout');

const PRICE_HOUSING = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};


const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const selectChangeArrive = () => {
  checkInTime.value = departureTime.value;
};

const selectChangeExit = () => {
  departureTime.value = checkInTime.value;
};

const getPriceValidation = () => price.value >= PRICE_HOUSING[type.value];

const selectChangeType = () => {
  price.placeholder = PRICE_HOUSING[type.value];
  price.min = PRICE_HOUSING[type.value];
};

const getErrorPrice = () => `минимальная стоимость ${PRICE_HOUSING[type.value]}`;

pristine.addValidator(price, getPriceValidation, getErrorPrice);
pristine.addValidator(type, selectChangeType);
pristine.addValidator(departureTime, selectChangeArrive);
pristine.addValidator(checkInTime, selectChangeExit);

const roomsOption = {
  '1' : ['1'],
  '2' : ['1', '2'],
  '3' : ['1', '2', '3'],
  '100' : ['0'],
};

const validateRoomsCopacity = () => roomsOption[rooms.value].includes(copacity.value);


const getOptionErrorMessage = () => `${rooms.value === '100' ? '100 комнат только `не для гостей`' : 'нужно больше комнат'}`;


pristine.addValidator(copacity, validateRoomsCopacity, getOptionErrorMessage);

