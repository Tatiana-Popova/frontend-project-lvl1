import readlineSync from 'readline-sync';

export const takeUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const generateRandomNum = (upperNum, lowerNum = 1) => {
  const randomNum =
    Math.floor(Math.random() * (upperNum - lowerNum)) + lowerNum;
  return randomNum;
};

export const greetUser = (userName) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};

export const compareAnswersFunc = (rightAnswer, usersAnswer, userName) => {
  let check = true;
  if (rightAnswer == usersAnswer) {
    console.log('Correct!');
    check = true;
  } else {
    console.log(
      `'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!`,
    );
    check = false;
  }
  return check;
};

export const congratulate = (rightAnswerCount, gameSteps, userName) => {
  if (rightAnswerCount === gameSteps) {
    console.log(`Congratulations, ${userName}!`);
  }
};
