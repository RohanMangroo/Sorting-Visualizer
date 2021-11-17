import { colorBars, colors } from '../utils';
import { displaySort } from '../utils';

//================================================================================================================//

export default async function mergeSort(
  arr,
  bars,
  speed,
  heights,
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
    speed,
    metricsInfo
  );
  // for (let i = 0; i < arr.length; i++) {
  //   if (i < arr.length) {
  //     await colorBars([i], colors.sorted, bars, speed, bars);
  //   }
  // }

  setButton({
    btnName: 'NEW',
    btnType: 'new-array-btn',
  });
}

//================================================================================================================//

async function mergeHelper(
  srt,
  stp,
  main,
  aux,
  hgts,
  auxHgts,
  bars,
  spd,
  metricsInfo
) {
  if (srt === stp) return;
  const midPoint = Math.floor((srt + stp) / 2);
  metricsInfo.updateRecursiveSplits_(++metricsInfo.splits);
  await mergeHelper(
    srt,
    midPoint,
    aux,
    main,
    auxHgts,
    hgts,
    bars,
    spd,
    metricsInfo
  );
  await mergeHelper(
    midPoint + 1,
    stp,
    aux,
    main,
    auxHgts,
    hgts,
    bars,
    spd,
    metricsInfo
  );
  await merge(
    srt,
    stp,
    midPoint,
    main,
    aux,
    hgts,
    auxHgts,
    bars,
    spd,
    metricsInfo
  );
  await displaySort(srt, stp, bars, hgts, spd, colors);
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
  speed,
  metricsInfo
) {
  //'k' is the position in the main array
  let k = start;
  //'i' is the beginning of the first half of the aux array
  let i = start;
  //'j' is the beginning of the second half of the aux array
  let j = midPoint + 1;

  //midPoint is the end of the first half
  //stop is the end of the second half

  while (i <= midPoint && j <= stop) {
    metricsInfo.updateChecks_(++metricsInfo.checks);
    await colorBars([k], colors.red, bars, speed);
    if (aux[i] <= aux[j]) {
      main[k] = aux[i];
      heights[k] = auxHeights[i];
      i++;
    } else {
      main[k] = aux[j];
      heights[k] = auxHeights[j];
      j++;
    }
    colorBars([k], 'white', bars);
    k++;
  }

  while (i <= midPoint) {
    metricsInfo.updateChecks_(++metricsInfo.checks);
    await colorBars([k], colors.red, bars, speed);
    main[k] = aux[i];
    heights[k] = auxHeights[i];
    colorBars([k], 'white', bars, speed);
    i++;
    k++;
  }

  while (j <= stop) {
    metricsInfo.updateChecks_(++metricsInfo.checks);
    await colorBars([k], colors.red, bars, speed);
    main[k] = aux[j];
    heights[k] = auxHeights[j];
    colorBars([k], 'white', bars, speed);
    j++;
    k++;
  }
}
