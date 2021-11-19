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
  //Establishing our positions
  let pivot = start;
  //Here we will color the current pivot green
  colorBars([pivot], colors.green, displayBars);
  let left = start + 1;
  let right = stop;

  while (left <= right) {
    //Our compared bars(left and right) will be colored red
    await colorBars([left, right], colors.red, displayBars, speed);

    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      //If those compared bars need to be swapped we will color them green
      await colorBars([left, right], colors.green, displayBars, speed);
      //Here we are swapping the actual numbers in the array
      swapNums(left, right, array);
      //Here we are swapping bar heights on the screen
      swapBarHeights(left, right, displayBars);
      //Hee we are updating swaps count
      updateSwaps_(++metricsInfo.swaps);
    } else {
      //If the value at array[left] is less than the pivot that means it's not what we are looking for so turn that bar white and move on
      if (array[left] <= array[pivot]) {
        updateChecks_(++metricsInfo.checks);
        colorBars([left], 'white', displayBars);
        left++;

        if (left <= array.length - 1) {
          await colorBars([left], colors.red, displayBars, speed);
        }
      }
      //If the value at array[right] is greater than the pivot that means it's not what we are looking for so turn that bar white and move on
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

  //After the two left and right pointer have eclipsed, the pivot number and right will swap positions

  //Here we coloring them both green
  colorBars([pivot, right], colors.green, displayBars, speed);
  //Here we are swapping the numbers in the actual array
  swapNums(pivot, right, array);
  //Here we are swapping the bar heights on the screen
  swapBarHeights(pivot, right, displayBars);
  //Here I'm using the 'sorted' color to colore them(in reality only the just swapped pivot is in sorted order)
  colorBars([right], colors.sorted, displayBars);
  //Here i'm updating the swap count
  updateSwaps_(++metricsInfo.swaps);

  if (left <= array.length - 1) {
    colorBars([left], 'white', displayBars);
  }
  //Here we are coloring the pivot position(which was just swapped) white
  colorBars([pivot], 'white', displayBars);

  //Here we are updating the recursive split count
  updateRecursiveSplits_(++metricsInfo.splits);

  //The next 2 lines are the recursion needed for quicksort to work. At every recursive split we pass in different parameters that act as new boundries to an array that quicksort will operate on
  await quickSortHelper(start, right - 1, bars, metricsInfo);
  await quickSortHelper(right + 1, stop, bars, metricsInfo);

  //Here we are coloring all the bars that are done with their respective recursive splitting, sorted
  for (let i = start; i <= stop + 1; i++) {
    if (i < array.length - 1) {
      colorBars([i], colors.sorted, displayBars);
    }
  }
}
