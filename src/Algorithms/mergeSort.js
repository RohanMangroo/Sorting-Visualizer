import { colorBars, colors } from '../utils';
import { displaySort } from '../utils';

//================================================================================================================//

export default async function mergeSort(arr, bars, speed, heights) {
  if (arr.length <= 1) return;

  bars = Array.from(bars);

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
    speed
  );
  // for (let i = 0; i < array.length; i++) {
  //   if (i < array.length) {
  //     await colorBars([i], colors.sorted, bars, speed, bars, updateNums_);
  //   }
  // }
}

//================================================================================================================//

async function mergeHelper(srt, stp, main, aux, hgts, auxHgts, bars, spd) {
  if (srt === stp) return;
  const midPoint = Math.floor((srt + stp) / 2);
  await mergeHelper(srt, midPoint, aux, main, auxHgts, hgts, bars, spd);
  await mergeHelper(midPoint + 1, stp, aux, main, auxHgts, hgts, bars, spd);
  await merge(srt, stp, midPoint, main, aux, hgts, auxHgts, bars, spd);
}

async function merge(
  start,
  stop,
  midPoint,
  main,
  aux,
  heights,
  auxHeights,
  bars,
  speed
) {
  //'k' is the position in the main array
  let k = start;
  //'i' is the beginning of the first half of the aux array
  let i = start;
  //'j' is the beginning of the second half of the aux array
  let j = midPoint + 1;

  //midPoint is the end of the first half
  //stop is the end of the second half

  //Here we are coloring the ends of the two halfs
  // colorBars([midPoint, stop], colors.red, bars);

  while (i <= midPoint && j <= stop) {
    // await colorBars([k], colors.orange, bars, speed);
    if (aux[i] <= aux[j]) {
      main[k] = aux[i];
      heights[k] = auxHeights[i];
      i++;
    } else {
      main[k] = aux[j];
      heights[k] = auxHeights[j];
      j++;
    }
    // colorBars([k], 'white', bars);
    k++;
  }

  while (i <= midPoint) {
    // await colorBars([k], colors.orange, bars, speed);
    main[k] = aux[i];
    heights[k] = auxHeights[i];
    // colorBars([k], 'white', bars, speed);
    i++;
    k++;
  }

  while (j <= stop) {
    // await colorBars([k], colors.orange, bars, speed);
    main[k] = aux[j];
    heights[k] = auxHeights[j];
    // colorBars([k], 'white', bars, speed);
    j++;
    k++;
  }

  await displaySort(start, stop, bars, heights, speed);
  // await colorBars([midPoint, stop], colors.red, bars, speed);
}
