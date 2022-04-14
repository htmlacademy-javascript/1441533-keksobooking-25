const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('.ad-form-header__input');
const avatar = document.querySelector('.ad-form-header__preview img');
const fileChooserPhotos = document.querySelector('.ad-form__input');
const photos = document.querySelector('.ad-form__photo');


const showNewCustomAvatar = () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      avatar.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

const showNewCustomPhoto = (createImage) => {
  const file = fileChooserPhotos.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      createImage.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};


const createPreview = () => {
  const createImage = document.createElement('img');
  createImage.width = photos.offsetWidth;
  createImage.height = photos.offsetHeight;
  createImage.alt = 'Фото жилья';
  photos.append(createImage);
  showNewCustomPhoto(createImage);
};


fileChooserPhotos.addEventListener('change', createPreview);

fileChooserAvatar.addEventListener('change', () => showNewCustomAvatar());


export {photos, avatar};
