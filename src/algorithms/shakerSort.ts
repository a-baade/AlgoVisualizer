import {AnimationArrayType} from "@/lib/types";

function runShakerSort(array: number[], animations: AnimationArrayType) {
  let swapped = true;
  let start = 0;
  let end = array.length;

  while (swapped) {
    swapped = false;

    for (let i = start; i < end - 1; i++) {
      animations.push([[i, i + 1], false]);
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        animations.push([[i + 1, array[i + 1]], true]); // Corrected index to i+1
        animations.push([[i, array[i]], true]); // Ensure correct index and value
      }
    }
    if (!swapped) break;
    start;

    for (let i = end - 1; i >= start; i--) {
      animations.push([[i, i - 1], false]);
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        animations.push([[i + 1, array[i + 1]], true]);
        animations.push([[i, array[i]], true]);
      }
    }
    end;
  }
}

export function generateShakerSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxArray = array.slice();
  runShakerSort(auxArray, animations);
  runAnimation(animations);
}
