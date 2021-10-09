import readlineSync from 'readline-sync';
import {
  takeUserName,
  generateRandomNum,
  greetUser,
  compareAnswersFunc,
  congratulate,
} from '../index.js';

const CheckForTheRemainder = (disible, divider) => {
  let hasRemainder = false;
  if (disible % divider === 0) {
    hasRemainder = false;
  } else {
    hasRemainder = true;
  }
  return hasRemainder;
};

const findGcd = (firstNum, secondNum) => {
  if (firstNum === secondNum) {
    return firstNum;
  }
  let greatestDivider = 1;

  const first = 1;
  const minNumOfTwo = firstNum < secondNum ? firstNum : secondNum;

  for (let counter = first; counter <= minNumOfTwo; counter += 1) {
    const DoesTheFirstNumHaveARemainder = CheckForTheRemainder(
      firstNum,
      counter,
    );
    const DoesTheSecondNumHaveARemainder = CheckForTheRemainder(
      secondNum,
      counter,
    );
    if (!DoesTheFirstNumHaveARemainder && !DoesTheSecondNumHaveARemainder) {
      greatestDivider = counter;
    }
  }
  return greatestDivider;
};

const gcdGame = () => {
  let rightAnswerCount = 0;
  const gameSteps = 3;
  const userName = takeUserName();

  greetUser(userName);
  console.log('Find the greatest common divisor of given numbers.');

  while (rightAnswerCount < gameSteps) {
    const upperNum = 101;
    const firstRandomNum = generateRandomNum(upperNum);
    const secondRandomNum = generateRandomNum(upperNum);

    console.log(`Question: ${firstRandomNum} ${secondRandomNum}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = findGcd(firstRandomNum, secondRandomNum);

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

export default gcdGame;
