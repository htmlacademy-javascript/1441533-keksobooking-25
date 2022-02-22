const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  if (min >= max) {
    return new Error('неверный числовой диапазон');
  }
  return Math.round(rand);
};

randomNumber(0, 3);

const randomFloatNumber = (min, max, quantityNumber) => {
  const randomPoint = Math.random() * (max - min) + min;
  if (min >= max) {
    return new Error('неверный числовой диапазон');
  }
  return randomPoint.toFixed(quantityNumber);
};

randomFloatNumber(0, 3, 2);
