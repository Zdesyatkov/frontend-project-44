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

export const calcGame = () => {
    console.log(`Hello, ${userName}!`);
    console.log('What is the result of the expression?');
    let action = '-';
   
    for (let i = 0; i < 3; i += 1) {
      const number1 = getRandomInt(10);
      const number2 = getRandomInt(10);
      let result = 0;
      console.log('Question: ', number1, action, number2);
      const answerUser = readlineSync.question('Your answer: ');

            switch(action) {
            case '-':
                result = number1 - number2;
                action = '+';
                break;
            case '+':
                result = number1 + number2;
                action = '*'
                break;
            case '*':
                result = number1 * number2;
                break;
            }
   
      if (result === Number(answerUser)) {
        console.log('Correct!');
      } else {
        const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${result}'. /n Let's try again, ${userName}!`;
        return errorMessage;
      }
    }
   
    console.log(`Congratulations, ${userName}!`);
  };