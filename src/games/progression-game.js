import generateRandomNumber from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

const gameCondition = 'What number is missing in the progression?';

const generateArrWithRandomNums = (lengthOfProgression) => {
  const firstNumOfProgression = generateRandomNumber(1, 100);
  const arrWithRandomNums = [firstNumOfProgression];

  const numDifference = generateRandomNumber(-10, 10);

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

const generateQuestionAndAnswer = () => {
  const lengthOfProgression = generateRandomNumber(5, 11);
  const randomIndexForClose = generateRandomNumber(1, lengthOfProgression);
  const progressionArr = generateArrWithRandomNums(lengthOfProgression);
  const progressionStr = generateProgressionStr(progressionArr, randomIndexForClose);

  const question = `${progressionStr}`;
  const rightAnswer = progressionArr[randomIndexForClose].toString();

  return [question, rightAnswer];
};

const progressionGame = () => {
  const arrOfQuestionsAndAnswers = [];
  for (let count = 0; count < gameSteps; count += 1) {
    arrOfQuestionsAndAnswers.push(generateQuestionAndAnswer());
  }
  gameEngine(gameCondition, arrOfQuestionsAndAnswers);
};

export default progressionGame;
