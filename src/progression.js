import readlineSync from 'readline-sync';
 
// Определение функции запроса имени
console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
 
const userName = getName();
 

// Определение функции, дающее рандомное целое число
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// Определение функции игры калькулятор

export const progressionGame = () => {
    console.log(`Hello, ${userName}!`);
    console.log('What is the result of the expression?');

   
    for (let i = 0; i < 3; i += 1) {
      let number1 = getRandomInt(10);
      let number2 = getRandomInt(10);
      const randomNumber = getRandomInt(8);
      let arr = [];
      for (let j = 0; j < 8; j += 1, number1 = number1 + number2) {
        arr[j] = number1;
      }
      let removed = arr.splice(randomNumber, 1, "..");
      console.log('Question: ', arr.join(' '));
      const answerUser = readlineSync.question('Your answer: ');
   
      if (+removed.join('') === Number(answerUser)) {
        console.log('Correct!');
      } else {
        const errorMessage = `"${Number(answerUser)}" is wrong answer ;(. Correct answer was '${+removed.join('')}'. /n Let's try again, ${userName}!`;
        return errorMessage;
      }
    }
   
    console.log(`Congratulations, ${userName}!`);
  };