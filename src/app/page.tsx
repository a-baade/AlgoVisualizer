"use client";

import {useSortingAlgorithmContext} from "@/context/visualizer";
import {useEffect} from "react";

export default function Home() {
  const {arrayToSort, isSorting} = useSortingAlgorithmContext();

  return (
    <main className="absolute top-0 h-screen w-screen bg-custom-bg">
      <div className="flex h-full justify-center">
        {/* Container */}
        <div
          id="content-container"
          className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4"
        >
          {/* Header */}
          <div className="h-[66px] relative flex items-center justify-between w-full">
            <h1 className="text-neutral-300 text-2xl font-light hidden md:flex">
              AlgoVisualizer
            </h1>
            <div>Controls</div>
          </div>
          {/* Content */}
          <div className="relative h-[calc(100vh-66px)] w-full"></div>
          <div className="absolute bottom-[32px] w-full mx-auto left-o right-0 flex justify-center items-end">
            {arrayToSort.map((value, index) => (
              <div
                key={index}
                className="array-line relative w-1 mx-0.5 shadow-lg opacity-70 rounded-lg default-line-color"
                style={{height: `${value}px`}}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
