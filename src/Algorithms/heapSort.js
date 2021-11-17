import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

//=================================================================//
export default async function heapSort(
  array,
  bars,
  speed,
  setButton,
  updateSwaps_,
  updateChecks_,
  updateRecursiveSplits_
) {
  const metricsInfo = {
    updateChecks_,
    updateSwaps_,
    updateRecursiveSplits_,
    checks: 0,
    swaps: 0,
    splits: 0,
  };
  //The bars grabbed from the DOM are 'array-like' and not an actual array so we need to convert it to an array by calling Array.from
  bars = Array.from(bars);

  await constructHeap(array, bars, speed, metricsInfo);

  for (let i = array.length - 1; i >= 0; i--) {
    await swap(0, i, array, bars, metricsInfo);
    await colorBars([i], colors.sorted, bars, speed);
    await siftDown(0, i - 1, array, bars, speed, metricsInfo);
  }
  await colorBars([0], colors.sorted, bars, speed);
  setButton({
    btnName: 'NEW',
    btnType: 'new-array-btn',
  });
}

//=================================================================//

async function constructHeap(array, bars, speed, metricsInfo) {
  const firstParentIndex = Math.floor((array.length - 2) / 2);
  for (let i = firstParentIndex; i >= 0; i--) {
    await colorBars([i], colors.green, bars, speed);
    await siftDown(i, array.length - 1, array, bars, speed, metricsInfo);
    await colorBars([i], 'white', bars, speed);
  }
}

//=================================================================//

async function siftDown(
  position,
  lastIndexOfHeap,
  array,
  bars,
  speed,
  metricsInfo
) {
  let leftChild = position * 2 + 1;

  while (leftChild <= lastIndexOfHeap) {
    await colorBars([leftChild], colors.red, bars, speed);
    const rightChild =
      position * 2 + 2 <= lastIndexOfHeap ? position * 2 + 2 : -1;
    if (rightChild !== -1)
      await colorBars([rightChild], colors.red, bars, speed);

    let indexToSwap;
    if (rightChild !== -1 && array[rightChild] > array[leftChild]) {
      indexToSwap = rightChild;
    } else {
      indexToSwap = leftChild;
    }
    metricsInfo.updateChecks_(++metricsInfo.checks);
    colorBars([leftChild], 'white', bars);
    if (rightChild !== -1) colorBars([rightChild], 'white', bars, speed);

    if (array[indexToSwap] > array[position]) {
      await colorBars([indexToSwap, position], colors.green, bars, speed);
      await swap(position, indexToSwap, array, bars, metricsInfo);

      await colorBars([position], colors.green, bars, speed);
      colorBars([position], 'white', bars, speed);

      position = indexToSwap;
      leftChild = position * 2 + 1;
      colorBars([indexToSwap], 'white', bars);
      // await colorBars([position], colors.orange, bars, speed);
    } else {
      await colorBars([position, indexToSwap], 'white', bars, speed);
      return;
    }
  }
  colorBars([position], 'white', bars);
}

async function swap(positionOne, positionTwo, array, bars, metricsInfo) {
  swapNums(positionOne, positionTwo, array);
  swapBarHeights(positionOne, positionTwo, bars);
  metricsInfo.updateSwaps_(++metricsInfo.swaps);
}
