import generateRandomNumber from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const generateQuestionAndAnswer = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no'.toString();
  return [question, rightAnswer];
};

const evenGame = () => {
  const arrOfQuestionsAndAnswers = [];
  for (let count = 0; count < gameSteps; count += 1) {
    arrOfQuestionsAndAnswers.push(generateQuestionAndAnswer());
  }
  gameEngine(gameCondition, arrOfQuestionsAndAnswers);
};

export default evenGame;
