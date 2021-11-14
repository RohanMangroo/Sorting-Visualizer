import { updateBarHeight } from '../utils';

export default async function mergeXXX(array, bars, speed) {
  bars = Array.from(bars);
  let count = 0;
  const newArray = array.map((num) => [num, count++]);
  await mergeSort(newArray, bars, speed);
}

async function mergeSort(array, bars, speed) {
  if (array.length <= 1) return array;
  const midPoint = Math.floor(array.length / 2);
  const leftHalf = await mergeSort(array.slice(0, midPoint), bars, speed);
  const rightHalf = await mergeSort(array.slice(midPoint), bars, speed);
  return mergeSortedArrays(leftHalf, rightHalf, bars, speed);
}

async function mergeSortedArrays(leftHalf, rightHalf, bars, speed) {
  let sortedArray = new Array(leftHalf.length + rightHalf.length);
  let k = 0;
  let i = 0;
  let j = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i][0] < rightHalf[j][0]) {
      sortedArray[k] = leftHalf[i];
      await updateBarHeight(k, leftHalf[i][1], bars, speed);
      i++;
    } else {
      sortedArray[k] = rightHalf[j];
      await updateBarHeight(k, rightHalf[j][1], bars, speed);
      j++;
    }
    k++;
  }

  while (i < leftHalf.length) {
    sortedArray[k] = leftHalf[i];
    await updateBarHeight(k, leftHalf[i][1], bars, speed);
    i++;
    k++;
  }

  while (j < rightHalf.length) {
    sortedArray[k] = rightHalf[j];
    await updateBarHeight(k, rightHalf[j][1], bars, speed);
    j++;
    k++;
  }

  return sortedArray;
}
