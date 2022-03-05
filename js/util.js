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

export {getRandomArrayLength, getRandomNumber, getRandomFloatNumber, getArrayRandElement};
