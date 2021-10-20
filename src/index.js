import readlineSync from 'readline-sync';

export const gameSteps = 3;

export const gameEngine = (gameCondition, arrOfQuestionsAndAnswers) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
  console.log(gameCondition);

  for (let stepCount = 0; stepCount < arrOfQuestionsAndAnswers.length; stepCount += 1) {
    const question = arrOfQuestionsAndAnswers[stepCount][0];
    const rightAnswer = arrOfQuestionsAndAnswers[stepCount][1];

    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer !== usersAnswer) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
