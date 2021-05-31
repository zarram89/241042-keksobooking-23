//Источник функций: https://learn.javascript.ru/task/random-int-min-max
// Результат функции: целое число из диапазона "от...до"
const getRandomInteger = function (min, max) {
  if (max <= min || (min < 0 || max < 0)) {
    return undefined;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInteger(1, 10);

// Результат функции: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
const getRandomFloatNumber = function (min, max, floatNum) {
  if (max <= min || (min < 0 || max < 0)) {
    return undefined;
  }

  return (Math.random() * (max - min) + min).toFixed(floatNum);
};

getRandomFloatNumber(2, 6, 4);

