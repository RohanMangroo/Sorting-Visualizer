import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

/**====================================================================================================================================
 * The array of numbers being sorted and the array of bars on the screen are NOT one in the same, but they do have a connection
 * When the array of numbers is generated, an array of heights is also generated
 * The array of heights is based off of the random numbers AND the current height of the container
 * This way we can assign the height of the bar as a percentage, so now the bar height will always be responsive to the container height
 * So no matter the current heights of the bars on the screen they always maintain their relationship to the numbers that generated them
=======================================================================================================================================*/

export default async function selectionSort(bars, updates) {
  //Destructuring the redux states
  const { updateSwaps_, updateChecks_, updateMainButton_ } = updates;
  let { nums: array, displayBars, speed } = bars;

  //Local swaps and checks
  let swaps = 0;
  let checks = 0;

  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  displayBars = Array.from(displayBars);

  for (let i = 0; i < array.length; i++) {
    let currentSmallest = i;

    for (let j = i + 1; j < array.length; j++) {
      //We will color the currentSmallest bar red
      colorBars([currentSmallest], colors.red, displayBars);
      //The bar who's position we are holding we color green
      colorBars([i], colors.green, displayBars);
      //Adding to the checks count
      updateChecks_(++checks);
      //The scanning bars we color orange
      await colorBars([j], colors.orange, displayBars, speed);

      if (array[j] <= array[currentSmallest]) {
        //If the bar that we are at is less than the current smallest bar we swap their colors
        colorBars([j], colors.red, displayBars);
        //We uncolor the previous smallest
        colorBars([currentSmallest], 'white', displayBars);
        //We then update currenSmallest to be the new smallest bar
        currentSmallest = j;
      } else {
        //Otherwise, after we have processed the current bar we turn it back to white to simulate movement
        colorBars([j], 'white', displayBars);
      }
    }
    //Once we have gone through a pass of the inner for loop and we have found a currentSmallest now we will swap it with the position we are holding in the outter loop
    swapNums(i, currentSmallest, array);
    //swap the bar heights
    swapBarHeights(i, currentSmallest, displayBars);
    //update swap count
    updateSwaps_(++swaps);
    //We set both the i position and the currentSmallest position back to white
    colorBars([i, currentSmallest], 'white', displayBars);
    //We update the sorted bar to be colored
    colorBars([i], colors.sorted, displayBars);
  }

  updateMainButton_('NEW');
}
