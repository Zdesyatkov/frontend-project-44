import basisOfGames from '../index.js';
import getRandomInt from '../utils.js';

const getProgression = (length, startValue, step) => {
  const items = [];
  for (let i = 0; i < length; i += 1) {
    const num = startValue + (i * step);
    items.push(num);
  }
  return items;
};

const noteToProgression = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const startValue = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 11);
  const items = getProgression(length, startValue, step);
  const questionPosition = getRandomInt(length);

  const hiddenItem = items[questionPosition];
  items[questionPosition] = '..';

  const question = `Question: ${items.join(' ')}`;
  const correctAnswer = hiddenItem.toString();
  return [question, correctAnswer];
};
export default () => {
  basisOfGames(noteToProgression, getQuestionAndAnswer);
};
