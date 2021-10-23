const generateRandomNumber = (lowerNumber, upperNumber) =>
  Math.floor(Math.random() * (upperNumber + 1 - lowerNumber)) + lowerNumber;
export default generateRandomNumber;
