import generateRandomNum from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

const generateArrWithRandomNums = (lengthOfProgression) => {
  const upperNum = 101;
  const firstNumOfProgression = generateRandomNum(upperNum);
  const arrWithRandomNums = [firstNumOfProgression];

  const upperDiffInProgression = 10;
  const lowerDiffInProgression = -10;
  const numDifference = generateRandomNum(upperDiffInProgression, lowerDiffInProgression);

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

const generateQuestionAndAnswer = () => {
  const upperLengthOfProgression = 11;
  const lowerLengthOfProgression = 5;
  const lengthOfProgression = generateRandomNum(upperLengthOfProgression, lowerLengthOfProgression);
  const randomIndexForClose = generateRandomNum(lengthOfProgression + 1);
  const progressionArr = generateArrWithRandomNums(lengthOfProgression);
  const progressionStr = generateProgressionStr(progressionArr, randomIndexForClose);

  const question = `Question: ${progressionStr}`;
  const rightAnswer = findRightAnswer(progressionArr, randomIndexForClose).toString();

  return [question, rightAnswer];
};

const progressionGame = () => {
  const gameCondition = 'What number is missing in the progression?';
  const arrOfQuestionsAndAnswers = [];
  let count = 0;
  while (count < gameSteps) {
    arrOfQuestionsAndAnswers.push(generateQuestionAndAnswer());
    count += 1;
  }
  gameEngine(gameCondition, arrOfQuestionsAndAnswers);
};

export default progressionGame;
