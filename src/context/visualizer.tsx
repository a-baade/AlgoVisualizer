"use client";

import {SortingAlgorithmType} from "@/lib/types";
import {MAX_ANIM_SPEED, generateRandomNumFromInterval} from "@/lib/utils";
import {createContext, useState, useEffect, useContext} from "react";

interface SortingAlgorithmContextType {
  arrayToSort: number[];
  setArrayToSort: (array: number[]) => void;
  selectedAlgorithm: SortingAlgorithmType;
  setSelectedAlgorithm: (algorithm: SortingAlgorithmType) => void;
  isSorting: boolean;
  setIsSorting: (isSorting: boolean) => void;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
  isAnimComplete: boolean;
  setIsAnimComplete: (isAnimComplete: boolean) => void;
  resetArrayAndAnimation: () => void;
  runAnimation: () => void;
}

const SortingAlgorithmContext = createContext<
  SortingAlgorithmContextType | undefined
>(undefined);

export const SortingAlgorithmProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [arrayToSort, setArrayToSort] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<SortingAlgorithmType>("selection");
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_ANIM_SPEED);
  const [isAnimComplete, setIsAnimComplete] = useState<boolean>(false);

  useEffect(() => {
    resetArrayAndAnimation();
    window.addEventListener("resize", resetArrayAndAnimation);
    return () => {
      window.removeEventListener("resize", resetArrayAndAnimation);
    };
  }, []);

  const resetArrayAndAnimation = () => {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) return;

    const contentContainerWidth = contentContainer.clientWidth;
    const tempArray: number[] = [];
    const numLines = contentContainerWidth / 8;
    const contentContainerHeight = window.innerHeight;
    const maxLineHeight = Math.max(contentContainerHeight - 420, 100);
    for (let i = 0; i < numLines; i++) {
      tempArray.push(generateRandomNumFromInterval(35, maxLineHeight));
    }
    setArrayToSort(tempArray);
    setIsAnimComplete(false);
    setIsSorting(false);
  };

  const runAnimation = () => {};

  const value = {
    arrayToSort,
    setArrayToSort,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isSorting,
    setIsSorting,
    animationSpeed,
    setAnimationSpeed,
    isAnimComplete,
    setIsAnimComplete,
    resetArrayAndAnimation,
    runAnimation,
  };

  return (
    <SortingAlgorithmContext.Provider value={value}>
      {children}
    </SortingAlgorithmContext.Provider>
  );
};

export const useSortingAlgorithmContext = () => {
  const context = useContext(SortingAlgorithmContext);
  if (!context) {
    throw new Error(
      "SortingAlgorithmContext must be used within a SortingAlgorithmProvider"
    );
  }
  return context;
};
