import readlineSync from 'readline-sync';

const userNameFunc = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const randomGenerator = () => {
  const upperNum = 1001;
  const randomNum = parseInt(Math.random() * upperNum, 10);
  return randomNum;
};

const evenCheck = (num) => {
  let even = 'yes';
  if (num % 2 === 0) {
    even = 'yes';
  } else {
    even = 'no';
  }
  return even;
};

const evenGame = () => {
  const userName = userNameFunc();
  let usersAnswer = '';
  let rightAnswer = '';
  let rightAnswerCount = 0;
  const gameSteps = 3;

  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (rightAnswerCount < gameSteps) {
    const randomNum = randomGenerator();
    usersAnswer = readlineSync.question(`Question: ${randomNum} `);
    console.log(`Your answer: ${usersAnswer}`);
    rightAnswer = evenCheck(randomNum);

    if (rightAnswer === usersAnswer) {
      rightAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(
        `${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${userName}!`,
      );
      break;
    }
  }
  if (rightAnswerCount === gameSteps) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default evenGame;
