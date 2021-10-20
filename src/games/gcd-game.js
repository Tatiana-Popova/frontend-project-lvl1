import generateRandomNumber from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  let x = firstNumber;
  let y = secondNumber;
  while (x && y) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  x += y;
  return x;
};

const generateQuestionAndAnswer = () => {
  const firstRandomNumber = generateRandomNumber(1, 100);
  const secondRandomNumber = generateRandomNumber(1, 100);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;

  const rightAnswer = findGcd(firstRandomNumber, secondRandomNumber).toString();

  return [question, rightAnswer];
};

const gcdGame = () => {
  const arrOfQuestionsAndAnswers = [];
  for (let count = 0; count < gameSteps; count += 1) {
    arrOfQuestionsAndAnswers.push(generateQuestionAndAnswer());
  }
  gameEngine(gameCondition, arrOfQuestionsAndAnswers);
};

export default gcdGame;
