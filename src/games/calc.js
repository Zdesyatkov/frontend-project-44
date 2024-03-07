import basisOfGames from '../index.js';
import getRandomInt from '../utils.js';

const noteToCalc = 'What is the result of the expression?';

const calculation = (operation, value1, value2) => {
  switch (operation) {
    case '-':
      return value1 - value2;
    case '+':
      return value1 + value2;
    case '*':
      return value1 * value2;
    default:
      return null;
  }
};

const taskCalc = () => {
  const number1 = getRandomInt(10);
  const number2 = getRandomInt(10);

  const signs = ['+', '-', '*'];
  const sign = signs[getRandomInt(3)];

  const question = `${number1} ${sign} ${number2}`;
  const result = calculation(sign, number1, number2).toString();
  return [question, result];
};
export default () => {
  basisOfGames(noteToCalc, taskCalc);
};
