const descriptions = {
  bubbleSort: {
    title: 'Bubble Sort',
    algoDescript:
      'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent element and swaps them if they are in the wrong order.',
    vizDescript:
      'Be on the look out for when bars turn green. This means the current compared values are already in sorted order so the algorigthm will NOT make a swap and simply move on with the next value',
    learningMode: 'Bar: 50 Speed: 30',
    complexity: `Best: O(n) Time | O(1) Space
    Average: O(n^2) Time | O(1) Space
    Worst: O(n^2) Time | O(1) Space
    `,
  },
  selectionSort: {
    title: 'Selection Sort',
    algoDescript:
      'The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted partition and putting it at the beginning.',
    vizDescript:
      'Be on the look out for the red bar. This is the current smallest element that will be swapped with the anchor element(green bar)',
    learningMode: 'Bar: 40 Speed: 40',
    complexity: `Best: O(n^2) Time | O(1) Space
    Average: O(n^2) Time | O(1) Space
    Worst: O(n^2) Time | O(1) Space
    `,
  },
  insertionSort: {
    title: 'Insertion Sort',
    algoDescript:
      "Insertion sort, is a simple sorting algorithm that splits the input into two parts, sorted and unsorted. It will select the current unsorted element and find it's place in the sorted sub-array",
    vizDescript:
      "Be on the look out for the red bar travling back. This is the algorithm looking for it's correct place in the already sorted partition. When it finds it's position the bar will turn green",
    learningMode: 'Bar: 30 Speed: 50',
    complexity: `Best: O(n) Time | O(1) Space
    Average: O(n^2) Time | O(1) Space
    Worst: O(n^2) Time | O(1) Space
    `,
  },
  quickSort: {
    title: 'Quick Sort',
    algoDescript: `Quick sort is a pivot sorting recursive algorithm. It compares values based on an established pivot value and sections the array into elements less than the pivot and elements greater than the pivot. 
      
      It recursively continues this work for every partition(less than partition, greater than partition) of the input array`,
    vizDescript: `Be on the look out for the green bar(pivot) and two red bars moving closer and closer to each other. The green bar is the pivot, and the two red bars are the left and right pointers respectively. 
    
    The left pointer is looking for values greater than the pivot value, the right pointer is looking for values less than the pivot. If they don't have what they need they move on, but if they BOTH have what they need they swap values(bars).
    
    Once the left and right pointers eclipse each other the pivot will take it's place at that intersection point and the result will be all values to the left are smaller than the pivot and all values to the right are bigger than the pivot.`,
    learningMode: 'Bar: 20 Speed: 60',
    complexity: `Best: O(nlog(n)) Time | O(log(n)) Space
    Average: O(nlog(n)) Time | O(log(n)) Space
    Worst: O(n^2) Time | O(log(n)) Space
    `,
  },
  mergeSort: {
    title: 'Merge Sort',
    algoDescript: `Merge sort repeatedly breaks down a list into 'n' sublists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.`,
    vizDescript: `Merge sort will break down an array into single elements by splitting in half at each iteration(left half, right half). 
      
    When it reaches it's base case(single element) it will return. Remember that a single element is by definition, sorted. At each return it will have a left sorted sub-array and a right sorted sub-array. 
      
    It will merge these two sorted sub-arrays, producing a merged sorted sub-array for that recursive level, then return it. 
      
    That returned sub-array is now one of the sorted halves that will be merged with the other sorted half from the opposite side of the recursive tree
    
    Be on the look out for the 'spiked' partitions. These are the sorted sub-arrays that will be merged into a larger sorted sub-array. Notice how the 'spiked' partitions are merged in two's(left half, right half)`,
    learningMode: 'Bar: 10 Speed: 70',
    complexity: `Best: O(nlog(n)) Time | O(nlog(n)) Space
    Average: O(nlog(n)) Time | O(nlog(n)) Space
    Worst: O(nlog(n)) Time | O(nlog(n)) Space
    `,
  },
  heapSort: {
    title: 'Heap Sort',
    algoDescript: `Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. 
      
    Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step.`,
    vizDescript: `Heap sort will begin by building a MAX HEAP. This will guarantee that the largest number in the unsorted partition of the array is at the beginning of the array. 
    
    After the max heap has been built it will swap the largest value, which is now located at the 0th index with the value at the last index. Then it will rebuild the max heap in the unsorted partition and once again grab the largest element at the 0th index and swap it with the last index in the unsorted partition.
      
    A max heap is built by conceptually viewing the array as a heap data structure, which is in essance a binary tree where every node is greater than or equal to it's two children nodes.
    
    Be on the look out for the green and red bars. The green bar is the 'parent' and the red bars are the 'children' of the parent. The 'parent' node will ask it self, 'Which one of my children is of greater value than I ?'. If a child of greater value is found the parent will swap positions with it.
    
    To calculate parent-child positional relationship use the following formula...
    
    leftChild = parentIndex * 2 + 1
    rightChild = parentIndex * 2 + 2`,
    learningMode: 'Bar: 0 Speed: 80',
    complexity: `Best: O(nlog(n)) Time | O(1) Space
    Average: O(nlog(n)) Time | O(1) Space
    Worst: O(nlog(n)) Time | O(1) Space
    `,
  },
};

export default descriptions;
