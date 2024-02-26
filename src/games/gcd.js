import basisOfGames from '../index.js';

// Определение функции, дающее рандомное целое число
const getRandomInt = (min, max) => Math.floor(Math.random(max - min) * max);

// Определение функции игры на четность

const noteToGsd = 'Find the greatest common divisor of given numbers.';

const taskGcd = () => {
  const number1 = getRandomInt(1, 20);
  const number2 = getRandomInt(1, 20);

  const question = `${number1} ${number2}`;
  let gcd = 1;
  for (let j = 1; j <= Math.min(number1, number2); j += 1) {
    if ((number1 % j === 0) && (number2 % j === 0)) {
      gcd = j;
    }
  } let result = gcd.toString();

  return [question, result];
};
export default () => {
  basisOfGames(noteToGsd, taskGcd);
};
