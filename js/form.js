import {showMessageAboutSending, showErrorMessage} from './message.js';
import {sendData} from './api.js';
import { resetFormMap } from './main.js';
import {avatar, photos} from './photos.js';
import {resetFilters} from './filters.js';
import {resetSlider} from './slider.js';

const PRICE_HOUSING = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const roomsOption = {
  '1' : ['1'],
  '2' : ['1', '2'],
  '3' : ['1', '2', '3'],
  '100' : ['0'],
};

const form = document.querySelector('.ad-form');
const rooms = form.querySelector('#room_number');
const copacity = form.querySelector('#capacity');
const price = form.querySelector('#price');
const type = form.querySelector('#type');
const checkInTime = form.querySelector('#timein');
const departureTime = form.querySelector('#timeout');
const buttonReset = form.querySelector('.ad-form__reset');
const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.children;
const mapFilters = document.querySelector('.map__filters');
const selects = mapFilters.children;


const inactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  for (let fieldset = 0; fieldset < fieldsets.length; fieldset++){
    fieldsets[fieldset].disabled = true;
  }
  mapFilters.classList.add('map__filters--disabled');
  for (let select = 0; select < selects.length; select++ ){
    selects[select].disabled = true;
  }
};

inactivateForm();


const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  for (let fieldset = 0; fieldset < fieldsets.length; fieldset++){
    fieldsets[fieldset].disabled = false;
  }
  mapFilters.classList.remove('map__filters--disabled');
  for (let select = 0; select < selects.length; select++ ){
    selects[select].disabled = false;
  }
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


const validateRoomsCopacity = () => roomsOption[rooms.value].includes(copacity.value);


const getOptionErrorMessage = () => `${rooms.value === '100' ? '100 комнат только `не для гостей`' : 'нужно больше комнат'}`;


pristine.addValidator(copacity, validateRoomsCopacity, getOptionErrorMessage);

const resetForm = () => {
  form.reset();
};


const resetPhotos = () => {
  avatar.src = 'img/muffin-grey.svg';
  photos.innerHTML = '';
};

const resetAllForm = () => {
  resetForm();
  resetFormMap();
  resetPhotos();
  resetFilters();
  resetSlider();
};

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetAllForm();
});


const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    pristine.validate();
    sendData(
      () => {
        showMessageAboutSending();
        onSuccess();
      },
      () => {
        showErrorMessage();
      },
      new FormData(evt.target),
    );
  });
};

setUserFormSubmit(resetAllForm);

export {activateForm, inactivateForm, buttonReset};

