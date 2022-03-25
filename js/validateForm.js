const form = document.querySelector('.ad-form');
const rooms = document.querySelector('#room_number');
const copacity = document.querySelector('#capacity');


const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const roomsOption = {
  '1' : ['1'],
  '2' : ['1', '2'],
  '3' : ['1', '2', '3'],
  '100' : ['0'],
};

const validateRoomsCopacity = () => roomsOption[rooms.value].includes(copacity.value);


const getOptionErrorMessage = () => `${rooms.value === '100' ? '100 комнат только `не для гостей`' : 'нужно больше комнат'}`;


pristine.addValidator(copacity, validateRoomsCopacity, getOptionErrorMessage);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
