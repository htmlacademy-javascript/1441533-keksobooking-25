const sliderElement = document.querySelector('.ad-form__slider');
const sliderPrice = document.querySelector('#price');
const sliderType = document.querySelector('#type');


sliderPrice.value = 1000;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 1000,
  connect: 'lower',
  format: {
    to:  (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => parseFloat(value),
  },
});

sliderElement.noUiSlider.on('update', () => {
  sliderPrice.value = sliderElement.noUiSlider.get();
});


sliderType.addEventListener('change', () => {
  sliderElement.noUiSlider.set(sliderPrice.placeholder);
});

const resetSlider = () => {
  sliderPrice.value = sliderElement.noUiSlider.get();
  sliderElement.noUiSlider.set(1000);
};

export {resetSlider};
