import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

/**====================================================================================================================================
 * The array of numbers being sorted and the array of bars on the screen are NOT one in the same, but they do have a connection
 * When the array of numbers is generated, an array of heights is also generated
 * The array of heights is based off of the random numbers AND the current height of the container
 * This way we can assign the height of the bar as a percentage, so now the bar height will always be responsive to the container height
 * So no matter the current heights of the bars on the screen they always maintain their relationship to the numbers that generated them
=======================================================================================================================================*/

export default async function insertionSort(bars, updates) {
  //Destructuring the redux states
  const { updateSwaps_, updateChecks_, updateMainButton_ } = updates;
  let { nums: array, displayBars, speed } = bars;

  //Local checks and swaps
  let checks = 0;
  let swaps = 0;

  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  displayBars = Array.from(displayBars);

  for (let i = 1; i < array.length; i++) {
    let j = i;
    //Adding to the checks count
    updateChecks_(++checks);
    //Coloring the initial sorted partition of the array, which begins at the oth index
    colorBars([j - 1], colors.sorted, displayBars, speed);
    //This while loop will place the current element in it's sorted place
    while (array[j] < array[j - 1] && j > 0) {
      //If position 'j' needs to move to the front, color it red
      await colorBars([j], colors.red, displayBars, speed);
      //Here we are swapping the numbers in the array, this is a seperate array than the bars on the screen
      swapNums(j, j - 1, array);
      //The swapping of heights on the screen
      swapBarHeights(j, j - 1, displayBars);
      //Once we swap positions position 'j', which is sorted needs to be colored sorted
      colorBars([j], colors.sorted, displayBars);
      //position j will move one step to the left and on the next iteration of the while loop will be colored red
      j--;
      //Adding to the swaps count
      updateSwaps_(++swaps);
    }
    //If position 'j' has found it's place, color it green
    await colorBars([j], colors.green, displayBars, speed * 6);
    //Then color it sorted
    colorBars([j], colors.sorted, displayBars, speed);
  }

  updateMainButton_('NEW');
}
