import {generateBubbleSortAnimationArray} from "@/algorithms/bubbleSort";
import {AnimationArrayType, SortingAlgorithmType} from "./types";
import {generateInsertionSortAnimationArray} from "@/algorithms/insertionSort";
import {generateSelectionSortAnimationArray} from "@/algorithms/selectionSort";
import {generateQuickSortAnimationArray} from "@/algorithms/quickSort";
import {generateMergeSortAnimationArray} from "@/algorithms/mergeSort";
import {generateShakerSortAnimationArray} from "@/algorithms/shakerSort";
import {generateHeapSortAnimationArray} from "@/algorithms/heapSort";

export const MIN_ANIM_SPEED = 100;
export const MAX_ANIM_SPEED = 500;

export function generateRandomNumFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
  {label: "bubble", value: "bubble"},
  {label: "insertion", value: "insertion"},
  {label: "quick", value: "quick"},
  {label: "merge", value: "merge"},
  {label: "selection", value: "selection"},
  {label: "shaker", value: "shaker"},
  {label: "radix", value: "radix"},
  {label: "shell", value: "shell"},
  {label: "heap", value: "heap"},
  {label: "gnome", value: "gnome"},
  {label: "bogo", value: "bogo"},
];

export function generateAnimationArray(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "insertion":
      generateInsertionSortAnimationArray(isSorting, array, runAnimation);
    case "quick":
      generateQuickSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "merge":
      generateMergeSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "selection":
      generateSelectionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "shaker":
      generateShakerSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "heap":
      generateHeapSortAnimationArray(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
}
