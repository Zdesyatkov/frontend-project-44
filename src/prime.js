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
export const primeGame = () => {
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
 
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(10);
    let sum = 0;
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');
 
    for(let j = 1; j < Number(answerUser); j +=1) {
        if (Number(answerUser) % j === 0) {
            sum += 1;
        }

    }

    if (sum <= 2) {
      console.log('Correct!');
    } else {
      const opposite = (answerUser === 'yes' ? 'no' : 'yes');
      const errorMessage = `"${answerUser}" is wrong answer ;(. /n Let's try again, ${userName}!`;
      return errorMessage;
    }
  }
 
  console.log(`Congratulations, ${userName}!`);
};