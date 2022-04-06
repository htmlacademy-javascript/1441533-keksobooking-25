const getRandomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  if (min >= max) {
    return new Error('неверный числовой диапазон');
  }
  return Math.round(rand);
};


const getRandomFloatNumber = (min, max, quantityNumber) => {
  const randomPoint = Math.random() * (max - min) + min;
  if (min >= max) {
    return new Error('неверный числовой диапазон');
  }
  return randomPoint.toFixed(quantityNumber);
};

const getArrayRandElement = (array) => {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

const getRandomArrayLength = (array) => {
  const newArray = [];

  for (let i = 0; i < getRandomNumber(1, array.length); i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

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

export {getRandomArrayLength, getRandomNumber, getRandomFloatNumber, getArrayRandElement, showAlertError};
