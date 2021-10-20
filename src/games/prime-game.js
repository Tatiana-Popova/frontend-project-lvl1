import generateRandomNumber from '../generateRandomNum.js';
import { gameEngine, gameSteps } from '../index.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkForPrime = (num) => {
  let divisorCount = 0;
  const maxCountOfDivisors = 2;
  for (let count = 1; count <= num; count += 1) {
    if (num % count === 0) {
      divisorCount += 1;
    }
  }
  const isPrime = divisorCount === maxCountOfDivisors;
  return isPrime;
};

const generateQuestionAndAnswer = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const rightAnswer = (checkForPrime(randomNumber) ? 'yes' : 'no').toString();
  return [question, rightAnswer];
};

const primeGame = () => {
  const arrOfQuestionsAndAnswers = [];
  for (let count = 0; count < gameSteps; count += 1) {
    arrOfQuestionsAndAnswers.push(generateQuestionAndAnswer());
  }
  gameEngine(gameCondition, arrOfQuestionsAndAnswers);
};

export default primeGame;
