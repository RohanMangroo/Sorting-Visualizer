import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

const speed = 0;
export default async function bubbleSort(array, bars) {
  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  bars = Array.from(bars);
  //A stop position used in bubbleSort to prevent the algorithm from scanning already sorted items
  let stopPos = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < stopPos; j++) {
      //Coloring the current bar
      await colorBars([j], colors.purple, bars, speed);
      if (array[j] > array[j + 1]) {
        swapNums(j, j + 1, array);
        //If the bars are out of order, they need to be swapped so we color both red
        await colorBars([j, j + 1], colors.red, bars, speed);
        swapBarHeights(j, j + 1, bars, 0);
      } else {
        //If they are in order, no need to swap them so we color both green
        await colorBars([j, j + 1], colors.green, bars, speed);
      }
      //After we process the first position we need to put it's color back to white to simulate the feeling of movement
      colorBars([j], 'white', bars, 0);
    }
    //Once we reach the end we'll color the bar purple
    colorBars([stopPos], colors.blue, bars);
    stopPos -= 1;
  }
}
