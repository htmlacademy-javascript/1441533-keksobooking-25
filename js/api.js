const SERVER_GET_DATA = 'https://25.javascript.pages.academy/keksobooking/data';
const SERVER_SEND_DATA = 'https://25.javascript.pages.academy/keksobooking';


const getData = (onSuccess, onFail) => {
  fetch(SERVER_GET_DATA)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(onFail);
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER_SEND_DATA,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
