import {activateForm } from './form.js';
import {generateCard} from './similarElements.js';

const address = document.querySelector('#address');


const setAddress = (x, y) => {
  address.value = `${x}, ${y}`;
};


const Coordinates = {
  lat: 35.68951,
  lng: 139.69171,
};


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

const mainPinAddress = () => {
  setAddress(mainPinMarker.getLatLng().lat.toFixed(5), mainPinMarker.getLatLng().lng.toFixed(5));
};

const map = L.map('map-canvas');
map.on('load', () => {
  activateForm();
  mainPinAddress();
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

const loadingBluePin = (element) => {
  if(!element){
    return;
  }
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [26, 52],
  });


  element.forEach((card) => {
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
  });
};


mainPinMarker.addTo(map);

mainPinMarker.on('move', () => {
  mainPinAddress();
});


const resetMap = () => {
  mainPinMarker.setLatLng({
    lat: Coordinates.lat,
    lng: Coordinates.lng,
  });


  map.setView({
    lat: Coordinates.lat,
    lng: Coordinates.lng,
  }, 12);

  mainPinAddress();
};


export {loadingBluePin, resetMap};
