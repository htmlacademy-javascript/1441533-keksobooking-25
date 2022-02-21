const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

randomNumber(0, 3);

const randomFloatNumber = (min, max, quantityNumber) => {
  const randomPoint = Math.random() * (max - min) + min;
  return randomPoint.toFixed(quantityNumber);
};

randomFloatNumber(0, 3, 2);
