import basisOfGames from '../index.js';

// Определение функции, дающее рандомное целое число
const getRandomInt = (min, max) => Math.floor(Math.random(max - min) * max);

// Определение функции игры на четность
export default function primeGame() {
  const noteToPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const taskPrime = () => {
    const number = getRandomInt(1, 10);
    let sum = 0;
    const question = number;

    for (let j = 1; j <= number; j += 1) {
      if (number % j === 0) {
        sum += 1;
      }
    }
    let result = 'no';
    if (sum === 2) {
      result = 'yes';
    }
    return [question, result];
  };
  basisOfGames(noteToPrime, taskPrime);
}
