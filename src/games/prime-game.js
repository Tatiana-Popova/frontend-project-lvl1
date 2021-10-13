import readlineSync from 'readline-sync';
import {
  takeUserName,
  generateRandomNum,
  greetUser,
  compareAnswersFunc,
  congratulate,
} from '../index.js';

const checkForPrime = (num) => {
  let divisorCount = 0;
  const maxCountOfDivisors = 2;
  for (let count = 1; count <= num; count += 1) {
    if (num % count === 0) {
      divisorCount += 1;
    }
  }
  const rightAnswer = divisorCount === maxCountOfDivisors ? 'yes' : 'no';
  return rightAnswer;
};

const primeGame = () => {
  let rightAnswerCount = 0;
  const gameSteps = 3;
  const userName = takeUserName();

  greetUser(userName);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (rightAnswerCount < gameSteps) {
    const upperNumtoGenerate = 101;
    const lowerNumtoGenerate = 2;
    const randomNum = generateRandomNum(upperNumtoGenerate, lowerNumtoGenerate);

    console.log(`Question: ${randomNum}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = checkForPrime(randomNum);
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

export default primeGame;
