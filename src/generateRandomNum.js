const generateRandomNum = (upperNum, lowerNum = 1) => {
  const randomNum = Math.floor(Math.random() * (upperNum - lowerNum)) + lowerNum;
  return randomNum;
};

export default generateRandomNum;
