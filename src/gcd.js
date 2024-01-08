import readlineSync from 'readline-sync';
 
// Определение функции запроса имени
console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
 
const userName = getName();
 

// Определение функции, дающее рандомное целое число
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
 
// Определение функции игры на четность
export const gcdGame = () => {
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
 
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(10);
    const number2 = getRandomInt(10);
    console.log('Question: ', number1, number2);
    const answerUser = readlineSync.question('Your answer: ');
  
    if ((number1 % Number(answerUser) === 0) && (number2 % Number(answerUser) === 0) ) {
        console.log('Correct!'); 
      } else {
        const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was 'NiKakoi'. /n Let's try again, ${userName}!`;
        return errorMessage;
      }
  }
 
  console.log(`Congratulations, ${userName}!`);
};