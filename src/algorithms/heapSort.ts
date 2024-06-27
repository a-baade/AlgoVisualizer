import {AnimationArrayType} from "@/lib/types";

function heapify(
  arr: number[],
  n: number,
  i: number,
  animations: AnimationArrayType
) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    animations.push([[i, largest], true]);
    animations.push([[largest, arr[i]], true]);
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapify(arr, n, largest, animations);
  }
}

function runHeapSort(arr: number[], animations: AnimationArrayType) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, arr.length, i, animations);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    animations.push([[0, i], true]);
    animations.push([[i, arr[0]], true]);
    [arr[0], arr[i]] = [arr[i], arr[0]];

    heapify(arr, i, 0, animations);
  }
}

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
