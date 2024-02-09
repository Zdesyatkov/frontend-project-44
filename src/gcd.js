import readlineSync from 'readline-sync';

// Определение функции запроса имени
console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');

const userName = getName();

// Определение функции, дающее рандомное целое число
const getRandomInt = (min, max) => Math.floor(Math.random(max - min) * max);

// Определение функции игры на четность
export const gcdGame = () => {
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(1, 20);
    const number2 = getRandomInt(1, 20);
    console.log('Question: ', number1, number2);
    const answerUser = readlineSync.question('Your answer: ');

    if ((number1 % Number(answerUser) === 0) && (number2 % Number(answerUser) === 0)) {
      console.log('Correct!');
    } else {
      const arr = [];
      let iMax = 0;
      const result = '';
      for (let i = 1; i < number1 + number2; i += 1) {
        if ((number1 % i === 0) && (number2 % i === 0)) {
          arr.push(i);
          iMax = i - 1;
        }
      }
      const errorMessage1 = (`'${answerUser}' is wrong answer ;(. Correct answer was '${arr[iMax]}'.`);
      const errorMessage2 = (`Let's try again, ${userName}!`);
      console.log(errorMessage1);
      console.log(errorMessage2);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
