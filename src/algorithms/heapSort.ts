import {AnimationArrayType} from "@/lib/types";

function runHeapSort(array: number[], animations: AnimationArrayType) {}

export function generateHeapSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
): AnimationArrayType | undefined {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxArray = array.slice();
  runHeapSort(auxArray, animations);
  runAnimation(animations);
  return animations;
}
