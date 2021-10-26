import generateRandomNumber from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

const gameCondition = 'What number is missing in the progression?';

const generateProgression = (firstNumOfProgression, lengthOfProgression, numDifference) => {
  const arrWithRandomNums = [];
  for (let count = 0; count < lengthOfProgression; count += 1) {
    const current = firstNumOfProgression + numDifference * count;
    arrWithRandomNums.push(current);
  }
  return arrWithRandomNums;
};

const generateQuestion = (collection, randomIndexForClose) => {
  const progression = [...collection];
  progression[randomIndexForClose] = '..';
  const strWithProgression = progression.join(' ');
  return strWithProgression;
};

const generateQuestionAndAnswer = () => {
  const lengthOfProgression = generateRandomNumber(5, 11);
  const randomIndexForClose = generateRandomNumber(1, lengthOfProgression - 1);
  const firstNumOfProgression = generateRandomNumber(1, 100);
  const numDifference = generateRandomNumber(-10, 10);

  const progression = generateProgression(
    firstNumOfProgression,
    lengthOfProgression,
    numDifference,
  );
  const progressionStr = generateQuestion(progression, randomIndexForClose);

  const question = `${progressionStr}`;
  const rightAnswer = progression[randomIndexForClose].toString();

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
