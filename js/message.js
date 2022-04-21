const main = document.querySelector('main');
const error = document.querySelector('#error').content;
const contentError = error.querySelector('.error');
const success = document.querySelector('#success').content;
const contentSuccess = success.querySelector('.success');


const showErrorMessage = () => {
  main.appendChild(contentError);
};


const showMessageAboutSending = () => {
  main.appendChild(contentSuccess);
};


const onErrorMessageClose = () => {
  if (main.contains(contentError)) {
    main.removeChild(contentError);
  }
};


const onSuccessMessageClose = () => {
  if (main.contains(contentSuccess)) {
    main.removeChild(contentSuccess);
  }
};


const buttonErrorHandler = () => onErrorMessageClose();

const buttonSuccessHandler = (evt) => {
  if ((evt.key === 'Escape' || evt.key === 'Esc')) {
    onSuccessMessageClose();
  }
};

main.addEventListener('keydown', buttonErrorHandler);
main.addEventListener('keydown', buttonSuccessHandler);


main.addEventListener('click', onErrorMessageClose);
main.addEventListener('click', onSuccessMessageClose);


export {showErrorMessage, showMessageAboutSending};
