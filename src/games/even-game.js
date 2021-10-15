import generateRandomNum from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

const evenCheck = (num) => {
  let isNumEven = 'yes';
  if (num % 2 === 0) {
    isNumEven = 'yes';
  } else {
    isNumEven = 'no';
  }
  return isNumEven;
};

const generateQuestionAndAnswer = () => {
  const upperNum = 101;
  const randomNum = generateRandomNum(upperNum);
  const question = `Question: ${randomNum}`;
  const rightAnswer = evenCheck(randomNum).toString();
  return [question, rightAnswer];
};

const evenGame = () => {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const arrOfQuestionsAndAnswers = [];
  let count = 0;
  while (count < gameSteps) {
    arrOfQuestionsAndAnswers.push(generateQuestionAndAnswer());
    count += 1;
  }
  gameEngine(gameCondition, arrOfQuestionsAndAnswers);
};

export default evenGame;
