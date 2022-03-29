import {activateForm } from './form.js';
import {createCard} from './cardGenerate.js';
import {generateCard} from './similarElements.js';

const address = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');


const setAddress = (x, y) => {
  address.value = `${x}, ${y}`;
};


const Coordinates = {
  lat: 35.68951,
  lng: 139.69171,
};

const loadingBluePin = (element) => {
  if(!element){
    return;
  }
  const points = createCard();
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [26, 52],
  });


  points.forEach((card) => {
    const marker = L.marker({
      lat: card.location.lat,
      lng: card.location.lng
    },
    {
      icon
    }
    );

    marker
      .addTo(element)
      .bindPopup(generateCard(card));
  });
};

const map = L.map('map-canvas')  .on('load', () => {
  activateForm();
  setAddress();
})
  .setView({
    lat: Coordinates.lat,
    lng: Coordinates.lng,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

loadingBluePin(map);
setAddress(Coordinates.lat, Coordinates.lng);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [26, 52],
});


const mainPinMarker = L.marker(
  {
    lat: Coordinates.lat,
    lng: Coordinates.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);


mainPinMarker.addTo(map);


mainPinMarker.on('move', (evt) => {
  setAddress(evt.target.getLatLng().lat.toFixed(5), evt.target.getLatLng().lng.toFixed(5));
});


resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: Coordinates.lat,
    lng: Coordinates.lng,
  });


  map.setView({
    lat: Coordinates.lat,
    lng: Coordinates.lng,
  }, 12);
});
