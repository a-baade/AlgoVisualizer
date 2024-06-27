export type AlgorithmInfo = {
  title: string;
  description: string;
  worstCase: string;
  averageCase: string;
  bestCase: string;
};

export const sortingAlgorithmData = {
  bubble: {
    title: "Bubble",
    description:
      "Bubble sort is a simple sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted. Despite its simplicity, it's inefficient for large datasets due to its O(n^2) time complexity.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  insertion: {
    title: "Insertion",
    description:
      "Insertion sort is a simple, stable, in-place sorting algorithm that builds a sorted array one element at a time. It starts with the assumption that the first element is sorted and then iteratively inserts each subsequent element into its correct position within the sorted segment of the array. This process continues until the entire array is sorted. While it's straightforward and efficient for small or nearly sorted arrays, its performance degrades significantly for larger, randomly ordered datasets due to its O(n^2) time complexity in the worst and average cases.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection",
    description:
      "Selection sort is a simple, in-place comparison-based sorting algorithm that works by repeatedly selecting the smallest (or largest, depending on the sorting order) element from the unsorted portion of the list and moving it to the sorted portion. This process involves dividing the list into two parts: a sorted sublist at the beginning and an unsorted sublist at the end. The algorithm finds the smallest element in the unsorted sublist, swaps it with the leftmost unsorted element, and moves the sublist boundaries one element to the right. ",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  merge: {
    title: "Merge",
    description:
      "Merge sort is a highly efficient, stable sorting algorithm that operates based on the divide-and-conquer principle. It works by recursively splitting an array into two halves until each section contains only one element (which is inherently sorted), then continuously merging these sections back together in a way that maintains sorted order. This process ensures that the final array is sorted. Merge sort is particularly noted for its efficiency, achieving a time complexity of O(n log n) in all cases (best, average, and worst).",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  quick: {
    title: "Quick",
    description:
      "QuickSort is a highly efficient sorting algorithm that employs a divide-and-conquer strategy. It works by selecting a 'pivot' element from the array and partitioning the other elements into two groups: those less than the pivot and those greater than the pivot. This process is repeated recursively for both subgroups until the entire array is sorted. QuickSort is known for its speed, especially on large datasets, with an average and best-case time complexity of O(n log n).",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  shaker: {
    title: "Shaker",
    description:
      "Shaker Sort is a variation of Bubble sort. The Bubble sort algorithm always traverses elements from left and moves the largest element to its correct position in the first iteration and second-largest in the second iteration and so on. Shaker Sort traverses through a given array in both directions alternatively. Shaker sort does not go through the unnecessary iteration making it efficient for large arrays",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  heap: {
    title: "Heap",
    description:
      "Heap Sort is an efficient sorting algorithm that uses a binary heap data structure. It operates by building a max heap (or min heap) from the input data, then repeatedly removing the maximum element from the heap and inserting it at the end of the sorted section of the array. This process continues until the entire array is sorted.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  shell: {
    title: "Shell",
    description:
      "Shell Sort is an optimization of Insertion Sort that allows elements far apart to be compared and swapped. It starts by comparing elements that are far apart and progressively reduces the gap between elements until it becomes 1, at which point the algorithm reverts to standard Insertion Sort.",
    worstCase: "O(n²)",
    averageCase: "O(n*log n)~O(n1.25)",
    bestCase: " Ω(n log(n))",
  },
  gnome: {
    title: "Gnome",
    description:
      "Gnome Sort also called Stupid sort is based on the concept of a Garden Gnome sorting his flower pots. A garden gnome sorts the flower pots by the following method, He looks at the flower pot next to him and the previous one; if they are in the right order he steps one pot forward, otherwise he swaps them and steps one pot backwards. If there is no previous pot (he is at the starting of the pot line), he steps forwards; if there is no pot next to him (he is at the end of the pot line), he is done.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
};
