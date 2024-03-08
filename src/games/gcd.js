import basisOfGames from '../index.js';
import getRandomInt from '../utils.js';

const noteToGsd = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a < b) return getGcd(b, a);
  if (b === 0) return a;
  return getGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomInt(1, 20);
  const number2 = getRandomInt(1, 20);

  const question = `${number1} ${number2}`;
  const result = getGcd(number1, number2).toString();

  return [question, result];
};
export default () => {
  basisOfGames(noteToGsd, getQuestionAndAnswer);
};
