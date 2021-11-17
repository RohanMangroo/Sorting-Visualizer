import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

export default async function insertionSort(
  array,
  bars,
  speed,
  setButton,
  updateSwaps_,
  updateChecks_
) {
  let checks = 0;
  let swaps = 0;
  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  bars = Array.from(bars);

  for (let i = 1; i < array.length; i++) {
    let j = i;
    updateChecks_(++checks);
    colorBars([j - 1], colors.sorted, bars, speed);
    while (array[j] < array[j - 1] && j > 0) {
      await colorBars([j], colors.red, bars, speed);
      swapNums(j, j - 1, array);
      swapBarHeights(j, j - 1, bars);
      colorBars([j, j - 1], colors.sorted, bars);

      j--;
      updateSwaps_(++swaps);
    }
    await colorBars([j], colors.green, bars, speed * 6);
    colorBars([j], colors.sorted, bars, speed);
  }
  setButton({
    btnName: 'NEW',
    btnType: 'new-array-btn',
  });
}
