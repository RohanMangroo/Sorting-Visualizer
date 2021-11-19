import { colorBars, colors } from '../utils';
import { displaySort } from '../utils';

/**====================================================================================================================================
 * The array of numbers being sorted and the array of bars on the screen are NOT one in the same, but they do have a connection
 * When the array of numbers is generated, an array of heights is also generated
 * The array of heights is based off of the random numbers AND the current height of the container
 * This way we can assign the height of the bar as a percentage, so now the bar height will always be responsive to the container height
 * So no matter the current heights of the bars on the screen they always maintain their relationship to the numbers that generated them
=======================================================================================================================================*/

export default async function mergeSort(bars, updates) {
  if (bars.nums.length <= 1) return;

  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from()
  bars.displayBars = Array.from(bars.displayBars);

  //Destructuring the Redux states
  const { nums: arr, initialHeights: heights } = bars;

  //Here we are creating an object that holds all the metric info that we will pass down
  const metricsInfo = { swaps: 0, checks: 0, splits: 0, updates };

  const auxArr = arr.slice();
  const auxHeights = heights.slice();

  await mergeHelper(
    0,
    arr.length - 1,
    arr,
    auxArr,
    heights,
    auxHeights,
    bars,
    metricsInfo
  );
  updates.updateMainButton_('NEW');
}
/*================================================================================================================*/

/*
I decided to shorten the names for the prameters because there were to many and the formatting was looking un-readable
mergeHelper(start, stop, main, auxArray, heights, auxHeights, bars, metricsInfo)
*/

async function mergeHelper(st, sp, mn, ax, hts, axHts, bars, metInfo) {
  const { updateRecursiveSplits_ } = metInfo.updates;
  const { displayBars: dP, speed: spd } = bars;

  //Base case
  if (st === sp) return;
  //Calculating the midPosition, this is what we will use to determine the left and right splits
  const mP = Math.floor((st + sp) / 2);
  //Updating the recursive split count
  updateRecursiveSplits_(++metInfo.splits);

  //It's important to know that in this version of merge sort the main and aux arrays will filp positions each time they are passed in to the recursive mergeHelper function

  //Here we are recursivly splitting left
  await mergeHelper(st, mP, ax, mn, axHts, hts, bars, metInfo);
  //Here we are recursivly splitting right
  await mergeHelper(mP + 1, sp, ax, mn, axHts, hts, bars, metInfo);

  //Here we are merging our two halves. We pass in st(start), sp(stop) and mP(nidPoint) that way we can have access to the two halves
  await merge(st, sp, mP, mn, ax, hts, axHts, bars, metInfo);

  //Here we are cloring the bars
  await displaySort(st, sp, dP, hts, spd, metInfo);
}

//mp === midPosition
async function merge(st, sp, mP, mn, ax, hts, axHts, bars, metInfo) {
  const { updateChecks_ } = metInfo.updates;
  const { speed, displayBars } = bars;

  //'k' is the position in the main array
  let k = st;
  //'i' is the beginning of the first half of the aux array
  let i = st;
  //'j' is the beginning of the second half of the aux array
  let j = mP + 1;

  //mP(midPoint) is the end of the first half
  //sp(stop) is the end of the second half

  while (i <= mP && j <= sp) {
    //Updating the checks count
    updateChecks_(++metInfo.checks);
    await colorBars([k], colors.red, displayBars, speed);
    //Here we have two halves that we are comparing
    //We will establish two pointers(i, j) for each respective half
    //The lesser of the two values will be placed in the main array at the k position
    if (ax[i] <= ax[j]) {
      mn[k] = ax[i];
      hts[k] = axHts[i];
      i++;
    } else {
      mn[k] = ax[j];
      hts[k] = axHts[j];
      j++;
    }
    colorBars([k], colors.sorted, displayBars);
    k++;
  }

  //This while loop will handle if position 'i' is still in bounds
  while (i <= mP) {
    updateChecks_(++metInfo.checks);
    await colorBars([k], colors.red, displayBars, speed);
    mn[k] = ax[i];
    hts[k] = axHts[i];
    colorBars([k], colors.sorted, displayBars, speed);
    i++;
    k++;
  }

  //This while loop will handle if position 'j' is still in bounds
  while (j <= sp) {
    updateChecks_(++metInfo.checks);
    await colorBars([k], colors.red, displayBars, speed);
    mn[k] = ax[j];
    hts[k] = axHts[j];
    colorBars([k], colors.sorted, displayBars, speed);
    j++;
    k++;
  }
}
