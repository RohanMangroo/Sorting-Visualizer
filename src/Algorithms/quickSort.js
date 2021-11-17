import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

/**====================================================================================================================================
 * The array of numbers being sorted and the array of bars on the screen are NOT one in the same, but they do have a connection
 * When the array of numbers is generated, an array of heights is also generated
 * The array of heights is based off of the random numbers AND the current height of the container
 * This way we can assign the height of the bar as a percentage, so now the bar height will always be responsive to the container height
 * So no matter the current heights of the bars on the screen they always maintain their relationship to the numbers that generated them
=======================================================================================================================================*/

/*============
Main Function
==============*/
export default async function quickSort(bars, updates) {
  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from()
  bars.displayBars = Array.from(bars.displayBars);

  //Here we are creating an object that holds all the metric info that we will pass down
  const metricsInfo = { swaps: 0, checks: 0, splits: 0, updates };

  //Helper method that will do the work
  await quickSortHelper(0, bars.nums.length - 1, bars, metricsInfo);

  updates.updateMainButton_('NEW');
}

/*============
Helper Function
==============*/
async function quickSortHelper(start, stop, bars, metricsInfo) {
  //Destructuring the attributes
  const { updateSwaps_, updateChecks_, updateRecursiveSplits_ } =
    metricsInfo.updates;

  //Here i'm renaming 'nums' to be array
  const { nums: array, speed, displayBars } = bars;

  //============================================================//

  if (start >= stop) {
    if (start < array.length) {
      colorBars([start], colors.sorted, displayBars);
    }
    return array;
  }

  let pivot = start;
  colorBars([pivot], colors.green, displayBars);
  let left = start + 1;
  let right = stop;

  while (left <= right) {
    await colorBars([left, right], colors.red, displayBars, speed);
    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      await colorBars([left, right], colors.green, displayBars, speed);
      swapNums(left, right, array);
      swapBarHeights(left, right, displayBars);
      updateSwaps_(++metricsInfo.swaps);
    } else {
      if (array[left] <= array[pivot]) {
        updateChecks_(++metricsInfo.checks);
        colorBars([left], 'white', displayBars);
        left++;

        if (left <= array.length - 1) {
          await colorBars([left], colors.red, displayBars, speed);
        }
      }
      if (array[right] >= array[pivot]) {
        updateChecks_(metricsInfo.checks);
        colorBars([right], 'white', displayBars);
        right--;
        if (right >= 0) {
          await colorBars([right], colors.red, displayBars, speed);
        }
      }
    }
  }

  await colorBars([pivot, right], colors.green, displayBars, speed);
  swapNums(pivot, right, array);
  swapBarHeights(pivot, right, displayBars);
  colorBars([right], colors.sorted, displayBars);

  if (left <= array.length - 1) {
    colorBars([left], 'white', displayBars);
  }

  colorBars([pivot], 'white', displayBars);
  updateRecursiveSplits_(++metricsInfo.splits);
  await quickSortHelper(start, right - 1, bars, metricsInfo);
  await quickSortHelper(right + 1, stop, bars, metricsInfo);

  for (let i = start; i <= stop + 1; i++) {
    if (i < array.length - 1) {
      colorBars([i], colors.sorted, displayBars);
    }
  }
}
