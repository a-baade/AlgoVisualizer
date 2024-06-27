import {AnimationArrayType} from "@/lib/types";

function gapInsertion(
  array: number[],
  animations: AnimationArrayType,
  gap: number
) {
  for (let i = gap; i < array.length; i += 1) {
    animations.push([[i], false]);
    const currentValue = array[i];
    let j = i;

    while (j >= gap && array[j - gap] > currentValue) {
      animations.push([[j, j - gap, i], false]);
      array[j] = array[j - gap];
      animations.push([[j, array[j - gap]], true]);
      j -= gap;
    }

    array[j] = currentValue;
    animations.push([[j, currentValue], true]);
  }
}

function runShellSort(array: number[], animations: AnimationArrayType) {
  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    gapInsertion(array, animations, gap);
    gap = Math.floor(gap / 2);
  }

  for (let i = 1; i < array.length; i++) {
    animations.push([[i], false]);
    const currentValue = array[i];
    let j = i;

    while (j > 0 && array[j - 1] > currentValue) {
      animations.push([[j, j - 1, i], false]);
      array[j] = array[j - 1];
      animations.push([[j, array[j - 1]], true]);
      j -= 1;
    }

    array[j] = currentValue;
    animations.push([[j, currentValue], true]);
  }
}

export function generateShellSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxArray = array.slice();
  runShellSort(auxArray, animations);
  runAnimation(animations);
}
