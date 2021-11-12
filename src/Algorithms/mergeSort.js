// import {
//   colorBars,
//   swapNums,
//   swapBarHeights,
//   updateBarHeight,
//   colors,
// } from '../utils';

// const speed = 0;
// export default async function mergeSort(array, bars) {
//   if (array.length <= 1) return;

//   bars = Array.from(bars);

//   const auxArray = array.slice();
//   const auxBars = bars.slice();

//   await mergeHelper(0, array.length - 1, array, auxArray, bars, auxBars, speed);

//   for (let i = 0; i < array.length; i++) {
//     if (i < array.length) {
//       await colorBars([i], colors.sorted, bars, speed);
//     }
//   }
// }

// async function mergeHelper(start, stop, main, aux, bars, auxBars, speed) {
//   if (start === stop) return;
//   const midPoint = Math.floor((start + stop) / 2);
//   await mergeHelper(start, midPoint, aux, main, bars, auxBars, speed);
//   await mergeHelper(midPoint + 1, stop, aux, main, bars, auxBars, speed);
//   await merge(start, stop, midPoint, main, aux, bars, auxBars, speed);
// }

// async function merge(start, stop, midPoint, main, aux, bars, auxBars, speed) {
//   let k = start;
//   let i = start;
//   let j = midPoint + 1;
//   colorBars([midPoint, stop], colors.red, bars);

//   while (i <= midPoint && j <= stop) {
//     await colorBars([k], colors.orange, bars, speed);
//     if (aux[i] <= aux[j]) {
//       main[k] = aux[i];
//       updateBarHeight(k, i, bars, auxBars);
//       i++;
//     } else {
//       main[k] = aux[j];
//       updateBarHeight(k, j, bars, auxBars);
//       j++;
//     }
//     colorBars([k], 'white', bars);
//     k++;
//   }

//   while (i <= midPoint) {
//     await colorBars([k], colors.orange, bars, speed);
//     main[k] = aux[i];
//     updateBarHeight(k, i, bars, auxBars);
//     colorBars([k], 'white', bars, speed);
//     i++;
//     k++;
//   }

//   while (j <= stop) {
//     await colorBars([k], colors.orange, bars, speed);
//     main[k] = aux[j];
//     updateBarHeight(k, j, bars, auxBars);
//     colorBars([k], 'white', bars, speed);
//     j++;
//     k++;
//   }
//   await colorBars([midPoint, stop], colors.red, bars, speed);
// }
