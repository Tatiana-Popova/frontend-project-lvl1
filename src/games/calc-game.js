import readlineSync from 'readline-sync';
import {
  takeUserName,
  generateRandomNum,
  greetUser,
  compareAnswersFunc,
  congratulate,
} from '../index.js';

const chooseAnOperation = () => {
  const upperNumOfOperation = 3;
  let operation = '';
  const numOfPlus = 0;
  const numOfMinus = 1;
  const numOfMult = 2;
  const numOpOperation = generateRandomNum(upperNumOfOperation);
  switch (numOpOperation) {
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

const calcTheCorrectAnswer = (first, second, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '*':
      result = first * second;
      break;
    default:
      break;
  }
  return result;
};

const calcGame = () => {
  let rightAnswerCount = 0;
  const gameSteps = 3;
  const userName = takeUserName();

  greetUser(userName);
  console.log('What is the result of the expression?');

  while (rightAnswerCount < gameSteps) {
    const upperNum = 101;
    const firstRandomNum = generateRandomNum(upperNum);
    const secondRandomNum = generateRandomNum(upperNum);
    const operation = chooseAnOperation();

    console.log(`Question: ${firstRandomNum} ${operation} ${secondRandomNum} `);
    const usersAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = calcTheCorrectAnswer(
      firstRandomNum,
      secondRandomNum,
      operation,
    );

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

export default calcGame;
