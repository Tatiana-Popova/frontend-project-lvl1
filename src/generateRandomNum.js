const generateRandomNumber = (lowerNumber = 1, upperNumber) => {
  const randomNum = Math.floor(Math.random() * (upperNumber + 1 - lowerNumber)) + lowerNumber;
  return randomNum;
};
export default generateRandomNumber;
