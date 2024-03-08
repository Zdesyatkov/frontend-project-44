import basisOfGames from '../index.js';
import getRandomInt from '../utils.js';

const noteToProgression = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
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
  basisOfGames(noteToProgression, getQuestionAndAnswer);
};
