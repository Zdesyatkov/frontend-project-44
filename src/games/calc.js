import basisOfGames from '../index.js';

// Определение функции игры калькулятор

export default function calcGame() {
  const noteToCalc = 'What is the result of the expression?';
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const taskCalc = () => {
    const number1 = getRandomInt(10);
    const number2 = getRandomInt(10);

    const signs = ['+', '-', '*'];
    const sign = signs[getRandomInt(3)];

    const question = `${number1} ${sign} ${number2}`;

    let result = 0;

    switch (sign) {
      case '-':
        result = number1 - number2;
        break;
      case '+':
        result = number1 + number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        result = null;
    }
    return [question, result];
  };
  basisOfGames(noteToCalc, taskCalc);
}
