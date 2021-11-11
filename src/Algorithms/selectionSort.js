// import { colorBars, swapNums, swapBarHeights, colors } from '../utils';

// const speed = 800;
// export default async function selectionSort(array, bars) {
//   bars = Array.from(bars);

//   for (let i = 0; i < array.length; i++) {
//     let currentSmallest = i;

//     for (let j = i + 1; j < array.length; j++) {
//       colorBars([currentSmallest], colors.red, bars, speed);
//       await colorBars([i], colors.green, bars, speed);

//       //   await colorBars([j], colors.purple, bars, speed);
//       if (array[j] <= array[currentSmallest]) {
//         swapNums(j, currentSmallest, array);
//         swapBarHeights(j, currentSmallest, bars, speed);
//         colorBars([j], colors.red, bars, speed);
//         colorBars([currentSmallest], 'white', bars, speed);
//         currentSmallest = j;
//       } else {
//         colorBars([j], 'white', bars, speed);
//       }
//     }

//     [array[i], array[currentSmallest]] = [array[currentSmallest], array[i]];

//     colorBars([i, currentSmallest], 'white', bars, speed);
//     colorBars([i], colors.purple, bars, speed);
//   }
// }
