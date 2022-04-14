const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.children;
const mapFilters = document.querySelector('.map__filters');
const selects = mapFilters.children;

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

inactiveForm();


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


export {inactiveForm, activateForm};


