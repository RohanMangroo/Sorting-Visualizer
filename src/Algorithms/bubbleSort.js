export default async function bubbleSort(array, bars) {
  bars = Array.from(bars);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      // bars[j].style.backgroundColor = 'blue';

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        await new Promise((resolve) =>
          setTimeout(() => {
            const heightOne = bars[j].style.height;
            const heightTwo = bars[j + 1].style.height;
            bars[j].style.height = heightTwo;
            bars[j + 1].style.height = heightOne;

            resolve();
          }, 100)
        );
      }
    }
  }
}
