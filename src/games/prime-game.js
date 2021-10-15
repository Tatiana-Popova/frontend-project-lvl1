import generateRandomNum from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

const checkForPrime = (num) => {
  let divisorCount = 0;
  const maxCountOfDivisors = 2;
  for (let count = 1; count <= num; count += 1) {
    if (num % count === 0) {
      divisorCount += 1;
    }
  }
  const rightAnswer = divisorCount === maxCountOfDivisors ? 'yes' : 'no';
  return rightAnswer;
};

const generateQuestionAndAnswer = () => {
  const upperNumtoGenerate = 101;
  const lowerNumtoGenerate = 2;
  const randomNum = generateRandomNum(upperNumtoGenerate, lowerNumtoGenerate);
  const question = `Question: ${randomNum}`;
  const rightAnswer = checkForPrime(randomNum).toString();

  return [question, rightAnswer];
};

const primeGame = () => {
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arrOfQuestionsAndAnswers = [];
  let count = 0;
  while (count < gameSteps) {
    arrOfQuestionsAndAnswers.push(generateQuestionAndAnswer());
    count += 1;
  }
  gameEngine(gameCondition, arrOfQuestionsAndAnswers);
};

export default primeGame;
