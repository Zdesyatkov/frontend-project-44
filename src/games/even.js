import basisOfGames from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (num) => {
  const result = (num % 2 === 0);
  return result;
};

const noteToEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const taskEven = () => {
  const number = getRandomInt(1, 20);
  const question = number;
  const result = isEven(number) ? 'yes' : 'no';
  return [question, result];
};

export default () => {
  basisOfGames(noteToEven, taskEven);
};
