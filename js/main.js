const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomFloat = (min, max, precision) => {
  if (max <= min || max < 0 || min < 0) {
    return null;
  }
  const result = (Math.random() * (max - min + 0.1)) + min;
  return Number(result.toFixed(precision));
};

const getRandomInteger = (min, max) => getRandomFloat(min, max, 0);

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getRandomArray = (array) => {
  const newArray = array.slice().sort(() => Math.random() - 0.5);
  return newArray.slice(0, getRandomInteger(0, newArray.length - 1));
};

const createAdvert = () => ({
  author: {
    avatar: `img/avatars/user0${getRandomInteger(1, 9)}.png`,
  },
  offer: {
    title: 'Апартаменты в Токио',
    address: `${location.x}, ${location.y}`,
    price: getRandomInteger(1, 5000),
    type: getRandomArrayElement(OFFER_TYPES),
    rooms: getRandomInteger(0, 5),
    guests: getRandomInteger(0, 5),
    checkin: getRandomArrayElement(CHECKINS),
    checkout: getRandomArrayElement(CHECKINS),
    features: getRandomArray(FEATURES),
    description: 'Апартаменты в Токио. Все включено.',
    photos: getRandomArray(PHOTOS),
  },
  location: {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  },
});

createAdvert();

