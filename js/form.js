import {messageAboutSending, errorMessage} from './message.js';
import {sendData} from './api.js';
import { resetFormMap } from './main.js';


const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.children;
const mapFilters = document.querySelector('.map__filters');
const selects = mapFilters.children;
const buttonReset = document.querySelector('.ad-form__reset');

const inactiveForm = () => {
  adForm.classList.add('ad-form--disabled');
  for (let fieldset = 0; fieldset < fieldsets.length; fieldset++){
    fieldsets[fieldset].disabled = true;
  }
  mapFilters.classList.add('map__filters--disabled');
  for (let select = 0; select < selects.length; select++ ){
    selects[select].disabled = true;
  }
};


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

const resetForm = () => {
  adForm.reset();
};

const resetAllForm = () => {
  resetForm();
  resetFormMap();
};

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetAllForm();
});

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(messageAboutSending()),
      () => errorMessage(),
      new FormData(evt.target),
    );
  });
};

setUserFormSubmit(resetAllForm);


export {inactiveForm, activateForm};


