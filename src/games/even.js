import basisOfGames from '../index.js';

// Определение функции, дающее рандомное целое число
const getRandomInt = (min, max) => Math.floor(Math.random(max - min) * max);

// Определение функции игры на четность

const noteToEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const taskEven = () => {
  const number = getRandomInt(1, 20);
  const question = number;
  let result = 'no';
  if ((number % 2 === 0)) {
    result = 'yes';
  }
  return [question, result];
};

export default () => {
  basisOfGames(noteToEven, taskEven);
};
