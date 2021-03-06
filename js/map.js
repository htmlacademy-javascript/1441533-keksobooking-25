import {activateForm } from './form.js';
import {generateCard} from './similar-elements.js';
import {getData} from './api.js';
import { setFiltersChange, activateFilter, filteringFilters, resetButtonsFilters} from './filters.js';
import {debounce} from './util.js';
import { showAlertError } from './util.js';


const OFFER_LIMITED = 10;
const RERENDER_DELAY = 500;
const ZOOM_MAP = 12;

const Coordinates = {
  LAT: 35.68951,
  LNG: 139.69171,
};

const address = document.querySelector('#address');


const setAddress = (x, y) => {
  address.value = `${x}, ${y}`;
};


const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [26, 52],
});


const mainPinMarker = L.marker(
  {
    lat: Coordinates.LAT,
    lng: Coordinates.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [26, 52],
});


const setMainPinAddress = () => {
  setAddress(mainPinMarker.getLatLng().lat.toFixed(5), mainPinMarker.getLatLng().lng.toFixed(5));
};


const map = L.map('map-canvas');
map.on('load', () => {
  let pinsOffers = [];
  const removeMarkers = () => {
    pinsOffers.forEach((pin) => map.removeLayer(pin));
    pinsOffers = [];
  };

  const loadingBluePin = (offers) => {
    if(!offers){
      return;
    }
    let i = 0;
    let j = 0;
    const offersLength = offers.length;
    while (j < OFFER_LIMITED && i < offersLength) {
      const card = offers[i];
      if (filteringFilters(card)) {
        const marker = L.marker({
          lat: card.location.lat,
          lng: card.location.lng
        },
        {
          icon
        }
        );

        marker
          .addTo(map)
          .bindPopup(generateCard(card));
        pinsOffers.push(marker);
        j++;
      }
      i++;
    }
  };
  getData((offers) => {
    activateForm();
    activateFilter();
    loadingBluePin(offers);
    setFiltersChange(debounce( () => {
      removeMarkers(offers);
      loadingBluePin(offers);
    }, RERENDER_DELAY));
    resetButtonsFilters(() => loadingBluePin(offers, removeMarkers(offers)));
  }, showAlertError);
  setMainPinAddress();
})
  .setView({
    lat: Coordinates.LAT,
    lng: Coordinates.LNG,
  }, ZOOM_MAP);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


mainPinMarker.addTo(map);

mainPinMarker.on('move', () => {
  setMainPinAddress();
});


const resetMap = () => {
  mainPinMarker.setLatLng({
    lat: Coordinates.LAT,
    lng: Coordinates.LNG,
  });


  map.setView({
    lat: Coordinates.LAT,
    lng: Coordinates.LNG,
  }, ZOOM_MAP);

  setMainPinAddress();
};


export {resetMap};
