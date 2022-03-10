# Sorting Visualizer

https://rohanmangroo.github.io/Sorting-Visualizer/

## Features

- Algorithms
  - Bubble
  - Selection
  - Insertion
  - Quick
  - Heap
  - Merge

- Extras
  - Adjust Bar Count
  - Adjust Speed
  - Tracking of swaps, checks and recursive splits
  - Brief description of selected algorithm

## How It Works

All the *animation* is done during the execution of the sorting function using the async/await process.

*Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected.*

By leveraging the idea of suspending function execution until the returned promise is fulfilled we can effectivly create a pause allowing for the viewer to see what has happened on the screen. 

Here is the pause...
``` javascript
async function pause(speed) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, speed)
  );
} 
```
Here is a function using the *pause*...
``` javascript
async function colorBars(arrayOfPos, color, bars, speed = 0) {
  for (let i = 0; i < arrayOfPos.length; i++) {
    bars[arrayOfPos[i]].style.backgroundColor = color;
  }
  await pause(speed / 3);
}
```
After bars have been colored, we will *pause* for a certain amout of time(*speed*)

Here is code of the Bubble Sort function with all the pauses/swapping/color changes...
``` javascript
/**====================================================================================================================================
 * The array of numbers being sorted and the array of bars on the screen are NOT one in the same, but they do have a connection
 * When the array of numbers is generated, an array of heights is also generated
 * The array of heights is based off of the random numbers AND the current height of the container
 * This way we can assign the height of the bar as a percentage, so now the bar height will always be responsive to the container height
 * So no matter the current heights of the bars on the screen they always maintain their relationship to the numbers that generated them
=======================================================================================================================================*/

export default async function bubbleSort(bars, updates) {
  //Destructuring the redux states
  const { updateSwaps_, updateChecks_, updateMainButton_ } = updates;
  let { nums: array, displayBars, speed } = bars;

  //Local swaps and checks
  let swaps = 0;
  let checks = 0;

  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  displayBars = Array.from(displayBars);

  //A stop position used in bubbleSort to prevent the algorithm from scanning already sorted items
  let stopPos = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < stopPos; j++) {
      //Coloring the current bar
      await colorBars([j], colors.red, displayBars, speed);
      //Adding to the checks count
      updateChecks_(++checks);
      if (array[j] > array[j + 1]) {
        //Adding to the swaps count
        updateSwaps_(++swaps);
        //Here we are swapping the numbers in the array, this is a seperate array than the bars on the screen
        swapNums(j, j + 1, array);
        //If the bars are out of order, they need to be swapped so we color both red
        await colorBars([j, j + 1], colors.orange, displayBars, speed);
        //The swapping of heights on the screen
        swapBarHeights(j, j + 1, displayBars);
      } else {
        //If they are in order, no need to swap them so we color both green
        await colorBars([j, j + 1], colors.green, displayBars, speed * 4);
      }
      //After we process the first position we need to put it's color back to white to simulate movement
      colorBars([j], 'white', displayBars);
    }
    //Once we reach the end we'll color the bar sorted
    colorBars([stopPos], colors.sorted, displayBars);
    stopPos -= 1;
  }

  updateMainButton_('NEW');
}
```
## Alternative Approach

An alternative approach would be gather all the *animation changes* into an array *during* the function execution and then *after* loop through all the changes and do all pauses/swaps/etc...
