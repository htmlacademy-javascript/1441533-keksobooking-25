import './validateForm.js';
import './form.js';
import './map.js';
import './slider.js';

import {getData} from './api.js';
import {loadingBluePin} from './map.js';
import { resetMap } from './map.js';

const OFFER_COUNT = 10;

getData((offers) => {
  loadingBluePin(offers.slice(0, OFFER_COUNT));
});


const resetFormMap = () => {
  resetMap();
};

export {resetFormMap};
