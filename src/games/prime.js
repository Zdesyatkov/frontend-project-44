import basisOfGames from '../index.js';
import getRandomInt from '../utils.js';

const noteToPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const taskPrime = () => {
  const number = getRandomInt(1, 10);
  const question = number;
  const result = isPrime(number) ? 'yes' : 'no';
  return [question, result];
};
export default () => {
  basisOfGames(noteToPrime, taskPrime);
};
