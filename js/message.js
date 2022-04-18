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


const buttonErrorHandler = () => closeErrorMessage();

const buttonSuccessHandler = (evt) => {
  if ((evt.key === 'Escape' || evt.key === 'Esc')) {
    closeSuccessMessage();
  }
};

main.addEventListener('keydown', buttonErrorHandler);
main.addEventListener('keydown', buttonSuccessHandler);


main.addEventListener('click', closeErrorMessage);
main.addEventListener('click', closeSuccessMessage);


export {showErrorMessage, showMessageAboutSending};
