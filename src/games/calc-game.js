import generateRandomNumber from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

const gameCondition = 'What is the result of the expression?';

const calcTheCorrectAnswer = (firstNum, secondNum, operation) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const generateQuestionAndAnswer = () => {
  const firstRandomNum = generateRandomNumber(1, 100);
  const secondRandomNum = generateRandomNumber(1, 100);
  const operationsArr = ['+', '-', '*'];
  const numOfOperation = generateRandomNumber(0, operationsArr.length - 1);
  const operation = operationsArr[numOfOperation];

  const question = `${firstRandomNum} ${operation} ${secondRandomNum} `;
  const rightAnswer = calcTheCorrectAnswer(firstRandomNum, secondRandomNum, operation).toString();

  return [question, rightAnswer];
};

const calcGame = () => {
  const arrOfQuestionsAndAnswers = [];
  for (let count = 0; count < gameSteps; count += 1) {
    arrOfQuestionsAndAnswers.push(generateQuestionAndAnswer());
  }
  gameEngine(gameCondition, arrOfQuestionsAndAnswers);
};

export default calcGame;
