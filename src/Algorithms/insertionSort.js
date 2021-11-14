import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

export default async function insertionSort(array, bars, speed) {
  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  bars = Array.from(bars);

  for (let i = 1; i < array.length; i++) {
    let j = i;
    colorBars([j - 1], colors.sorted, bars, speed);
    while (array[j] < array[j - 1] && j > 0) {
      await colorBars([j], colors.red, bars, speed);
      swapNums(j, j - 1, array);
      swapBarHeights(j, j - 1, bars);
      colorBars([j, j - 1], colors.sorted, bars);

      j--;
    }
    await colorBars([j], colors.green, bars, speed * 6);
    colorBars([j], colors.sorted, bars, speed);
  }
}
