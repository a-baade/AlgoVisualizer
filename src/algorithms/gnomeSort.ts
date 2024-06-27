import {AnimationArrayType} from "@/lib/types";

function runGnomeSort(array: number[], animations: AnimationArrayType) {
  let pos = 0;
  while (pos < array.length) {
    animations.push([[pos], false]);

    if (pos === 0 || array[pos] >= array[pos - 1]) {
      pos++;
    } else {
      animations.push([[pos, pos - 1], false]);

      let temp = array[pos];
      array[pos] = array[pos - 1];
      array[pos - 1] = temp;

      animations.push([[pos, array[pos]], true]);
      animations.push([[pos - 1, array[pos - 1]], true]);

      pos--;
    }
  }
  return array;
}

export function generateGnomeSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxArray = array.slice();
  runGnomeSort(auxArray, animations);
  runAnimation(animations);
}
