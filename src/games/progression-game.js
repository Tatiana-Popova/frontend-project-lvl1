import readlineSync from 'readline-sync';
import {
  takeUserName,
  generateRandomNum,
  greetUser,
  compareAnswersFunc,
  congratulate,
} from '../index.js';

const generateArrWithRandomNums = (lengthOfProgression) => {
  const upperNum = 101;
  const firstNumOfProgression = generateRandomNum(upperNum);
  const arrWithRandomNums = [firstNumOfProgression];

  const upperDiffInProgression = 10;
  const lowerDiffInProgression = -10;
  const numDifference = generateRandomNum(
    upperDiffInProgression,
    lowerDiffInProgression,
  );

  let nextNum = firstNumOfProgression + numDifference;
  for (let count = 0; count < lengthOfProgression; count += 1) {
    arrWithRandomNums.push(nextNum);
    nextNum += numDifference;
  }
  return arrWithRandomNums;
};

const generateProgressionStr = (arrWithRandomNums, randomIndexForClose) => {
  const arrWithProgression = [...arrWithRandomNums];
  arrWithProgression[randomIndexForClose] = '..';
  const strWithProgression = arrWithProgression.join(' ');
  return strWithProgression;
};

const findRightAnswer = (arrWithRandomNums, randomIndexForClose) => {
  const rightAnswer = arrWithRandomNums[randomIndexForClose];
  return rightAnswer;
};

const progressionGame = () => {
  let rightAnswerCount = 0;
  const gameSteps = 3;
  const userName = takeUserName();

  greetUser(userName);
  console.log('What number is missing in the progression?');

  while (rightAnswerCount < gameSteps) {
    const upperLengthOfProgression = 11;
    const lowerLengthOfProgression = 5;
    const lengthOfProgression = generateRandomNum(
      upperLengthOfProgression,
      lowerLengthOfProgression,
    );
    const randomIndexForClose = generateRandomNum(lengthOfProgression + 1);
    const progressionArr = generateArrWithRandomNums(lengthOfProgression);
    const progressionStr = generateProgressionStr(
      progressionArr,
      randomIndexForClose,
    );

    console.log(`Question: ${progressionStr}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = findRightAnswer(
      progressionArr,
      randomIndexForClose,
    ).toString();
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

export default progressionGame;
