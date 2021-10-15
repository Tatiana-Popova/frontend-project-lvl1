import generateRandomNum from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

const chooseAnOperation = () => {
  const upperNumOfOperation = 3;
  let operation = '';
  const numOfPlus = 0;
  const numOfMinus = 1;
  const numOfMult = 2;
  const numOfOperation = generateRandomNum(upperNumOfOperation);
  switch (numOfOperation) {
    case numOfPlus:
      operation = '+';
      break;
    case numOfMinus:
      operation = '-';
      break;
    case numOfMult:
      operation = '*';
      break;
    default:
      break;
  }
  return operation;
};

const calcTheCorrectAnswer = (firstNum, secondNum, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      break;
  }
  return result;
};

const generateQuestionAndAnswer = () => {
  const upperNum = 101;
  const firstRandomNum = generateRandomNum(upperNum);
  const secondRandomNum = generateRandomNum(upperNum);
  const operation = chooseAnOperation();

  const question = `Question: ${firstRandomNum} ${operation} ${secondRandomNum} `;
  const rightAnswer = calcTheCorrectAnswer(firstRandomNum, secondRandomNum, operation).toString();

  return [question, rightAnswer];
};

const calcGame = () => {
  const gameCondition = 'What is the result of the expression?';
  const arrOfQuestionsAndAnswers = [];
  let count = 0;
  while (count < gameSteps) {
    arrOfQuestionsAndAnswers.push(generateQuestionAndAnswer());
    count += 1;
  }
  gameEngine(gameCondition, arrOfQuestionsAndAnswers);
};

export default calcGame;
