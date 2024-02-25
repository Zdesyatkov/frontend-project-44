import basisOfGames from '../index.js';

// Определение функции, дающее рандомное целое число
const getRandomInt = (min, max) => Math.floor(Math.random(max - min) * max);

// Определение функции игры на четность
export default function gcdGame() {
  const noteToGsd = 'Find the greatest common divisor of given numbers.';

  const taskGcd = () => {
    const number1 = getRandomInt(1, 20);
    const number2 = getRandomInt(1, 20);

    const question = `${number1} ${number2}`;
    const arr = [];
    let iMax = 0;
    for (let j = 1; j < number1 + number2; j += 1) {
      if ((number1 % j === 0) && (number2 % j === 0)) {
        arr.push(j);
        iMax = j - 1;
      }
    } const result = arr[iMax];
    return [question, result];
  };
  basisOfGames(noteToGsd, taskGcd);
}
