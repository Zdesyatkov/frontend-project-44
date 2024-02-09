import readlineSync from 'readline-sync';
 
// Определение функции запроса имени
console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
 
const userName = getName();
 

// Определение функции, дающее рандомное целое число
const getRandomInt = (min, max) => {
  return Math.floor(Math.random(max - min) * max);
};

// Определение функции игры прогрессия

export const progressionGame = () => {
    console.log(`Hello, ${userName}!`);
    console.log('What is the result of the expression?');

       for (let i = 0; i < 3; i += 1) {
      let number1 = getRandomInt(1, 10);
      let number2 = getRandomInt(1, 10);
      const randomNumber = getRandomInt(1, 8);
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
        //const errorMessage = `"${Number(answerUser)}" is wrong answer ;(. Correct answer was '${+removed.join('')}'. /n Let's try again, ${userName}!`;
        const errorMessage1 = (`'${Number(answerUser)}' is wrong answer ;(. Correct answer was '${+removed.join('')}'.`);
        const errorMessage2 = (`Let's try again, ${userName}!`);
        console.log(errorMessage1);
        console.log(errorMessage2);
               
        return;
      }
    }
   
    console.log(`Congratulations, ${userName}!`);
  };