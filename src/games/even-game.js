import readlineSync from 'readline-sync';
import {
  takeUserName,
  generateRandomNum,
  greetUser,
  compareAnswersFunc,
  congratulate,
} from '../index.js';

const evenCheck = (num) => {
  let isNumEven = 'yes';
  if (num % 2 === 0) {
    isNumEven = 'yes';
  } else {
    isNumEven = 'no';
  }
  return isNumEven;
};

const evenGame = () => {
  const userName = takeUserName();
  let rightAnswerCount = 0;
  const gameSteps = 3;
  const upperNum = 1001;

  greetUser(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (rightAnswerCount < gameSteps) {
    const randomNum = generateRandomNum(upperNum);
    console.log(`Question: ${randomNum}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = evenCheck(randomNum);

    const isAnswerCorrect = compareAnswersFunc(
      rightAnswer,
      usersAnswer,
      userName,
    );
    if (isAnswerCorrect) {
      rightAnswerCount += 1;
    } else break;
  }
  congratulate(rightAnswerCount, gameSteps, userName);
};

export default evenGame;
