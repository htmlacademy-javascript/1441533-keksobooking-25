const filterForm = document.querySelector('.map__filters');
const selectsFilter = filterForm.querySelectorAll('select');
const filterFormFeatures = filterForm.querySelector('#housing-features');
const filterFormTypes = filterForm.querySelector('#housing-type');
const filtersFormPrices = filterForm.querySelector('#housing-price');
const filtersFormRooms = filterForm.querySelector('#housing-rooms');
const filtersFormGuests = filterForm.querySelector('#housing-guests');


const PriceMoney = {
  MAX: 50000,
  MIN: 10000,
};


const filterType = (type) => filterFormTypes.value === 'any' || filterFormTypes.value === type;
const filterRoom = (rooms) => filtersFormRooms.value === 'any' || +filtersFormRooms.value === rooms;
const filterGuest = (guests) => filtersFormGuests.value === 'any' || +filtersFormGuests.value === guests;
const filterPrices = (price) => {
  if (filtersFormPrices.value === 'any') {
    return price;
  }
  else if (filtersFormPrices.value === 'middle') {
    return price >= PriceMoney.MIN && price <= PriceMoney.MAX;
  }
  else if (filtersFormPrices.value === 'low') {
    return price <= PriceMoney.MIN;
  }
  else if (filtersFormPrices.value === 'high') {
    return price >= PriceMoney.MAX;
  }
};

const filterFeatures = (features) => {
  if (features) {
    const featuresList = filterFormFeatures.querySelectorAll('input:checked');
    return Array.from(featuresList).every((feature) => features.includes(feature.value));
  }
};

const filteringFilters = ({offer}) => filterType(offer.type) && filterRoom(offer.rooms) && filterGuest(offer.guests) && filterPrices(offer.price) && filterFeatures(offer.features);

const setFiltersChange = (cb) => {
  filterForm.addEventListener('change', cb);
};

const inactivateFilter = () => {
  filterForm.classList.add('map__filters--disabled');
  filterFormFeatures.disabled = true;
  for (let select = 0; select < selectsFilter.length; select++){
    selectsFilter[select].disabled = true;
  }
};


const activateFilter = () => {
  filterForm.classList.remove('map__filters--disabled');
  filterFormFeatures.disabled = false;
  for (let select = 0; select < selectsFilter.length; select++){
    selectsFilter[select].disabled = false;
  }
};

inactivateFilter();

export {filteringFilters, setFiltersChange, activateFilter};