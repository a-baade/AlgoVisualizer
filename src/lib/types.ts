export type SortingAlgorithmType =
  | "bubble"
  | "insertion"
  | "selection"
  | "merge"
  | "quick"
  | "shaker"
  | "radix"
  | "shell"
  | "gnome"
  | "bogo"
  | "heap";

export type SelectOptionsType = {
  value: string;
  label: string;
};

export type AnimationArrayType = [number[], boolean][];
