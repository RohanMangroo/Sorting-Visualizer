import bubbleSort from './Algorithms/bubbleSort';

//================================================================================================================//
export function genArray(value, containerHeight) {
  const nums = [];
  const heightPercentages = [];
  //Generating a random number
  //Calculating a percentage based on that random number and the current container height
  for (let i = 0; i < value; i++) {
    const randomNum = genRandomNum(5, containerHeight);
    const heightPercentage = Math.floor((randomNum / containerHeight) * 100);
    nums.push(randomNum);
    heightPercentages.push(heightPercentage);
  }
  return {
    nums,
    heightPercentages,
  };
}
//================================================================================================================//
export function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//================================================================================================================//
export function startSelectedAlgo(selectedAlgo, nums, bars) {
  switch (selectedAlgo) {
    case 'bubbleSort':
      return bubbleSort(nums, bars);
    default:
      return;
  }
}
