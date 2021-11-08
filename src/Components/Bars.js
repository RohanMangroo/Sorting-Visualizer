import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Bars() {
  const [heights, setHeights] = useState([]);
  const [nums, setNums] = useState([]);
  const barsContainer = useRef(null);

  useEffect(() => {
    const containerHeight = barsContainer.current.clientHeight;
    const { nums, arrayOfHeights } = genArray(200, containerHeight);

    setHeights(arrayOfHeights);
    setNums(nums);
  }, []);

  return (
    <div ref={barsContainer} className="bars-container">
      {heights.map((height) => (
        <div
          className="bar"
          key={uuidv4()}
          style={{ height: `${height}%` }}
        ></div>
      ))}
    </div>
  );
}

function genArray(value, containerHeight) {
  const arrayOfNums = [];
  const arrayOfHeights = [];
  for (let i = 0; i < value; i++) {
    const randomNum = genRandomNum(5, 450);
    const heightPercentage = (randomNum / containerHeight) * 100;
    arrayOfNums.push(randomNum);
    arrayOfHeights.push(heightPercentage);
  }
  return {
    nums: arrayOfNums,
    arrayOfHeights,
  };
}

function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//-------------------------//
// async function bubbleSort(bars, array) {
//   bars = Array.from(bars);
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//       // bars[j].style.backgroundColor = 'blue';

//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];

//         await new Promise((resolve) =>
//           setTimeout(() => {
//             const heightOne = bars[j].style.height;
//             const heightTwo = bars[j + 1].style.height;
//             bars[j].style.height = heightTwo;
//             bars[j + 1].style.height = heightOne;

//             resolve();
//           }, 100)
//         );
//       }
//     }
//   }
// }
