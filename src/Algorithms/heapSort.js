import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

//=================================================================//
export default async function heapSort(bars, updates) {
  let { nums: array, displayBars, speed } = bars;

  //Here we are creating an object that holds all the metric info that we will pass down
  const metricsInfo = { swaps: 0, checks: 0, updates };

  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  displayBars = Array.from(displayBars);

  //Here we are first contructing a max heap
  //This will make sure that the current largest number in the unsorted partition of the array is at the front(0th index)
  await constructHeap(array, displayBars, speed, metricsInfo);

  //Once we construct the max heap we will swap the 0th element with the lat element in the unsorted partition of the array
  for (let i = array.length - 1; i >= 0; i--) {
    //Here position i starts at the very last element in the array and moves forward
    //We always swap the 0th element with the 'i' position
    swap(0, i, array, displayBars, metricsInfo);
    //Here we are coloring the 'i' position that was just swapped. Not that element is in the sorted partition of the array
    await colorBars([i], colors.sorted, displayBars, speed);
    //After we swap the 0th element with the last element. We need to reconstruct the max heap, which requires sifting down that just swapped element at the 0th index
    await siftDown(0, i - 1, array, displayBars, speed, metricsInfo);
  }

  colorBars([0], colors.sorted, displayBars, speed);

  updates.updateMainButton_('NEW');
}

//=================================================================//

async function constructHeap(array, displayBars, speed, metricsInfo) {
  //First we must calculate the location of the very first element with children, in other words, the first parent
  const firstParentIndex = Math.floor((array.length - 2) / 2);
  //Here we will use that first parent position to find it's children and move the first parent position to the left as we go, always calculating the position for that parents children
  for (let i = firstParentIndex; i >= 0; i--) {
    //The parents bar will be colored green
    await colorBars([i], colors.green, displayBars, speed);
    //The childrensposition is dependant on the parent position so we will pass the info down to 'siftDown' so the algorithm can decide what to do with the children and parent
    await siftDown(i, array.length - 1, array, displayBars, speed, metricsInfo);
    //After we process the children and parent we color the parent white
    await colorBars([i], 'white', displayBars, speed);
  }
}

//=================================================================//

async function siftDown(pos, lastIndex, array, bars, speed, metricsInfo) {
  const { updateChecks_ } = metricsInfo.updates;

  let leftChild = pos * 2 + 1;

  while (leftChild <= lastIndex) {
    await colorBars([leftChild], colors.red, bars, speed);
    //Checking if the right child is available
    const rightChild = pos * 2 + 2 <= lastIndex ? pos * 2 + 2 : -1;
    //If it is color is red
    if (rightChild !== -1)
      await colorBars([rightChild], colors.red, bars, speed);

    let indexToSwap;
    //Checking which of the two is greater leftChild or rightChild and assigning that to indexToSwap
    if (rightChild !== -1 && array[rightChild] > array[leftChild]) {
      indexToSwap = rightChild;
    } else {
      indexToSwap = leftChild;
    }
    updateChecks_(++metricsInfo.checks);
    //ONce we have decided which is larger turn the bars white
    colorBars([leftChild], 'white', bars);
    if (rightChild !== -1) colorBars([rightChild], 'white', bars, speed);

    //Now we check if that child is great than our parent
    if (array[indexToSwap] > array[pos]) {
      //If it is we color them green
      await colorBars([indexToSwap, pos], colors.green, bars, speed);
      //Swap there positions
      swap(pos, indexToSwap, array, bars, metricsInfo);

      await colorBars([pos], colors.green, bars, speed);
      colorBars([pos], 'white', bars, speed);

      //Once we swap we move pos to be at the position of the child that just took it's place so we can now calculate the children of this new position
      pos = indexToSwap;
      leftChild = pos * 2 + 1;
      colorBars([indexToSwap], 'white', bars);
    } else {
      await colorBars([pos, indexToSwap], 'white', bars, speed);
      return;
    }
  }
  colorBars([pos], 'white', bars);
}

async function swap(positionOne, positionTwo, array, bars, metricsInfo) {
  const { updateSwaps_ } = metricsInfo.updates;
  swapNums(positionOne, positionTwo, array);
  swapBarHeights(positionOne, positionTwo, bars);
  updateSwaps_(++metricsInfo.swaps);
}
