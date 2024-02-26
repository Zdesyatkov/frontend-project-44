import basisOfGames from '../index.js';

// Определение функции, дающее рандомное целое число
const getRandomInt = (min, max) => Math.floor(Math.random(max - min) * max);
// Определение функции игры прогрессия

const noteToProgression = 'What number is missing in the progression?';
const taskProgression = () => {
  let number1 = getRandomInt(1, 10);
  const number2 = getRandomInt(1, 10);
  const randomNumber = getRandomInt(1, 8);
  const arr = [];
  for (let j = 0; j < 8; j += 1, (number1 += number2)) {
    arr[j] = number1;
  }
  const removed = arr.splice(randomNumber, 1, '..');
  const question = arr.join(' ');
  const result = +removed.join('');
  return [question, result.toString()];
};
export default () => {
  basisOfGames(noteToProgression, taskProgression);
};
