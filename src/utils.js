import bubbleSort from './Algorithms/bubbleSort';
import selectionSort from './Algorithms/selectionSort';
import insertionSort from './Algorithms/insertionSort';
import quickSort from './Algorithms/quickSort';
import mergeSort from './Algorithms/mergeSort';
import heapSort from './Algorithms/heapSort';

//This function is used to generate random numbers to be sorted by the algorithm and the heights that will be used in the display of the bars on screen
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

export function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function startSelectedAlgo(bars, buttonSelection, updates) {
  switch (buttonSelection.algoName) {
    case 'bubbleSort':
      return bubbleSort(bars, updates);
    case 'selectionSort':
      return selectionSort(bars, updates);
    case 'insertionSort':
      return insertionSort(bars, updates);
    case 'quickSort':
      return quickSort(bars, updates);
    case 'mergeSort':
      return mergeSort(bars, updates);
    case 'heapSort':
      return heapSort(bars, updates);
    default:
      return;
  }
}

export async function swapBarHeights(barOnePos, barTwoPos, bars) {
  const heightOne = bars[barOnePos].style.height;
  const heightTwo = bars[barTwoPos].style.height;
  bars[barOnePos].style.height = heightTwo;
  bars[barTwoPos].style.height = heightOne;
}

//This function is used to pause the screen so we can see what is happeneing. It'a a way of animating
export async function pause(speed) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, speed)
  );
}

//This function is used in mergeSort to swap the bars on the screen
export async function displaySort(start, stop, bars, heights, speed, metInfo) {
  for (let i = start; i <= stop; i++) {
    bars[i].style.height = `${heights[i]}%`;
    metInfo.updates.updateSwaps_(++metInfo.swaps);
    await pause(speed / 3);
  }
}

export async function colorBars(arrayOfPos, color, bars, speed = 0) {
  for (let i = 0; i < arrayOfPos.length; i++) {
    bars[arrayOfPos[i]].style.backgroundColor = color;
  }
  await pause(speed / 3);
}

export function swapNums(posOne, posTwo, array) {
  [array[posOne], array[posTwo]] = [array[posTwo], array[posOne]];
}

//Colors
export const colors = {
  sorted: '#1c77c3',
  green: '#a2dfba',
  orange: '#ffdab7',
  red: '#e67188',
  blue: '#3481f5',
};

export function getClassName(selectedButton, buttonName, mainButton) {
  const className =
    selectedButton === buttonName
      ? 'algo-btn active-btn'
      : mainButton !== 'START'
      ? 'algo-btn disable-btn'
      : 'algo-btn algo-green';
  return className;
}
