export function genArray(value, containerHeight) {
  const arrayOfNums = [];
  const arrayOfHeights = [];
  for (let i = 0; i < value; i++) {
    const randomNum = genRandomNum(5, containerHeight);
    const heightPercentage = Math.floor((randomNum / containerHeight) * 100);
    arrayOfNums.push(randomNum);
    arrayOfHeights.push(heightPercentage);
  }
  return {
    nums: arrayOfNums,
    arrayOfHeights,
  };
}

export function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
