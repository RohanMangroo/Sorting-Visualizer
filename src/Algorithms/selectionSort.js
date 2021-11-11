import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

const speed = 75;
export default async function selectionSort(array, bars) {
  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  bars = Array.from(bars);

  for (let i = 0; i < array.length; i++) {
    let currentSmallest = i;

    for (let j = i + 1; j < array.length; j++) {
      //We will color the currentSmallest bar red
      colorBars([currentSmallest], colors.red, bars);
      //The bar who's position we are holding we color orange
      colorBars([i], colors.orange, bars);
      //The scanning bars we color orange
      await colorBars([j], colors.orange, bars, speed);
      if (array[j] <= array[currentSmallest]) {
        //If the bar that we are at is less than the current smallest bar we swap their colors
        colorBars([j], colors.red, bars);
        colorBars([currentSmallest], 'white', bars);
        //We then update currenSmallest to be the new smallest bar
        currentSmallest = j;
      } else {
        //Otherwise, after we have processed the current bar we turn it back to white to simulate movement
        colorBars([j], 'white', bars);
      }
    }
    //Once we have gone through a pass of the inner for loop we have found a currentSmallest now we will swap it with the position we are holding in the outter loop
    swapNums(i, currentSmallest, array);
    swapBarHeights(i, currentSmallest, bars);
    //We set both the i position and the currentSmallest position back to white
    colorBars([i, currentSmallest], 'white', bars);
    //We update the sorted bar to be colored
    colorBars([i], colors.sorted, bars);
  }
}
