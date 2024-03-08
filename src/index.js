import readlineSync from 'readline-sync';

const basisOfGames = (noteToGame, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Вывод на экран адание (в чём суть игры)
  console.log(noteToGame);

  // Начало цикла игры
  const attepmts = 3;
  for (let i = 0; i < attepmts; i += 1) {
    const pairOfQuestionAndResult = task();
    console.log('Question:', pairOfQuestionAndResult[0]);
    const answerUser = readlineSync.question('Your answer: ');

    // Константа для правильного ответа
    const rightAnswer = pairOfQuestionAndResult[1];

    // Проверка
    if (answerUser !== rightAnswer) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default basisOfGames;
