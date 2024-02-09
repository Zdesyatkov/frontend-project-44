import readlineSync from 'readline-sync';

// Определение функции запроса имени
console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');

const userName = getName();

// Определение функции, дающее рандомное целое число
const getRandomInt = (min, max) => Math.floor(Math.random(max - min) * max);

// Определение функции игры на четность
export default function primeGame() {
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 10);
    let sum = 0;
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');

    for (let j = 1; j <= number; j += 1) {
      if (number % j === 0) {
        sum += 1;
      }
    }
    const checking1 = (sum === 2) && (answerUser === 'yes');
    const checking2 = (sum !== 2) && (answerUser === 'no');

    console.log(sum);
    if (checking1 === true || checking2 === true) {
      console.log('Correct!');
    } else {
      const opposite = (answerUser === 'yes' ? 'no' : 'yes');
      const errorMessage1 = (`'${answerUser}' is wrong answer ;(. Correct answer was '${opposite}'.`);
      const errorMessage2 = (`Let's try again, ${userName}!`);
      console.log(errorMessage1);
      console.log(errorMessage2);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
