const main = document.querySelector('main');
const error = document.querySelector('#error').content;
const contentError = error.querySelector('.error');
const closeError = contentError.querySelector('.error__button');
const success = document.querySelector('#success').content;
const contentSuccess = success.querySelector('.success');


const errorMessage = () => {
  main.appendChild(contentError);
};


const messageAboutSending = () => {
  main.appendChild(contentSuccess);
};


const closeErrorMessage = () => {
  if (main.contains(contentError)) {
    main.removeChild(contentError);
  }
};


const closeSuccessMessage = () => {
  if (main.contains(contentSuccess)) {
    main.removeChild(contentSuccess);
  }
};


document.addEventListener('keydown', (evt) => {
  if ((evt.key === 'Escape' || evt.key === 'Esc')) {
    closeErrorMessage();
    closeSuccessMessage();
  }
});


closeError.addEventListener('click', () => {
  closeErrorMessage();
});


main.addEventListener('click', closeErrorMessage);
main.addEventListener('click', closeSuccessMessage);


export {errorMessage, messageAboutSending};
