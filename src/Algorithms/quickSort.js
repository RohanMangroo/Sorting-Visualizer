import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

export default async function quickSort(array, bars, speed, setButton) {
  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  bars = Array.from(bars);
  await quickSortHelper(array, bars, 0, array.length - 1, speed);
  setButton({
    btnName: 'NEW',
    btnType: 'new-array-btn',
  });
}

async function quickSortHelper(array, bars, start, stop, speed) {
  if (start >= stop) {
    if (start < array.length) {
      colorBars([start], colors.sorted, bars);
    }
    return array;
  }

  let pivot = start;
  colorBars([pivot], colors.green, bars);
  let left = start + 1;
  let right = stop;

  while (left <= right) {
    await colorBars([left, right], colors.red, bars, speed);
    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      await colorBars([left, right], colors.green, bars, speed);
      swapNums(left, right, array);
      swapBarHeights(left, right, bars);
    } else {
      if (array[left] <= array[pivot]) {
        colorBars([left], 'white', bars);
        left++;

        if (left <= array.length - 1) {
          await colorBars([left], colors.red, bars, speed);
        }
      }
      if (array[right] >= array[pivot]) {
        colorBars([right], 'white', bars);
        right--;
        if (right >= 0) {
          await colorBars([right], colors.red, bars, speed);
        }
      }
    }
  }

  await colorBars([pivot, right], colors.green, bars, speed);
  swapNums(pivot, right, array);
  swapBarHeights(pivot, right, bars);
  colorBars([right], colors.sorted, bars);

  if (left <= array.length - 1) {
    colorBars([left], 'white', bars);
  }

  colorBars([pivot], 'white', bars);

  await quickSortHelper(array, bars, start, right - 1, speed);
  await quickSortHelper(array, bars, right + 1, stop, speed);

  for (let i = start; i <= stop + 1; i++) {
    if (i < array.length - 1) {
      colorBars([i], colors.sorted, bars);
    }
  }
}
