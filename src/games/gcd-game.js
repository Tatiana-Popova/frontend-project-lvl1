import generateRandomNum from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

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
    const DoesTheFirstNumHaveARemainder = CheckForTheRemainder(firstNum, counter);
    const DoesTheSecondNumHaveARemainder = CheckForTheRemainder(secondNum, counter);
    if (!DoesTheFirstNumHaveARemainder && !DoesTheSecondNumHaveARemainder) {
      greatestDivider = counter;
    }
  }
  return greatestDivider;
};

const generateQuestionAndAnswer = () => {
  const upperNum = 101;
  const firstRandomNum = generateRandomNum(upperNum);
  const secondRandomNum = generateRandomNum(upperNum);
  const question = `Question: ${firstRandomNum} ${secondRandomNum}`; //
  const rightAnswer = findGcd(firstRandomNum, secondRandomNum).toString();

  return [question, rightAnswer];
};

const gcdGame = () => {
  const gameCondition = 'Find the greatest common divisor of given numbers.';
  const arrOfQuestionsAndAnswers = [];
  let count = 0;
  while (count < gameSteps) {
    arrOfQuestionsAndAnswers.push(generateQuestionAndAnswer());
    count += 1;
  }
  gameEngine(gameCondition, arrOfQuestionsAndAnswers);
};

export default gcdGame;
