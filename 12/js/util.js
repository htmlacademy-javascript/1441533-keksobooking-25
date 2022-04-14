const ALERT_SHOW_TIME = 5000;

const showAlertError = () => {
  const alertError = document.createElement('div');
  alertError.style.zIndex = 100;
  alertError.style.position = 'absolute';
  alertError.style.left = 0;
  alertError.style.top = 0;
  alertError.style.right = 0;
  alertError.style.fontSize = '30px';
  alertError.style.textAlign = 'center';
  alertError.style.backgroundColor = 'red';
  alertError.textContent = ('Ошибка при загрузке данных');

  document.body.append(alertError);

  setTimeout(() => {
    alertError.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {showAlertError, debounce};
