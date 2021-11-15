import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

//The important idea to remember is, the array of numbers being sorted and the array of bars on the screen are not one in the same, but they do have a connection
//When the array of numbers is generated, an array of heights is also generated
//The array of heights is based of of the random number AND the current height of the container
//This way we can assign a style height of the bar in percentage, so now the bar height will always be responsive to the container height

export default async function bubbleSort(array, bars, speed, setButton) {
  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  bars = Array.from(bars);
  //A stop position used in bubbleSort to prevent the algorithm from scanning already sorted items
  let stopPos = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < stopPos; j++) {
      //Coloring the current bar
      await colorBars([j], colors.red, bars, speed);
      if (array[j] > array[j + 1]) {
        //Here we are swapping the numbers in the array, this is a seperate array than the bars on the screen
        swapNums(j, j + 1, array);
        //If the bars are out of order, they need to be swapped so we color both red
        await colorBars([j, j + 1], colors.orange, bars, speed);
        swapBarHeights(j, j + 1, bars, 0);
      } else {
        //If they are in order, no need to swap them so we color both green
        await colorBars([j, j + 1], colors.green, bars, speed * 4);
      }
      //After we process the first position we need to put it's color back to white to simulate the feeling of movement
      colorBars([j], 'white', bars);
    }
    //Once we reach the end we'll color the bar
    colorBars([stopPos], colors.sorted, bars);
    stopPos -= 1;
  }

  setButton({
    btnName: 'START',
    btnType: 'start-btn',
  });
}
