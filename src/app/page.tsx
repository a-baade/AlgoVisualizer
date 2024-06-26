"use client";

import {Select} from "@/components/input/select";
import {Slider} from "@/components/input/slider";
import {useSortingAlgorithmContext} from "@/context/visualizer";
import {SortingAlgorithmType} from "@/lib/types";
import {algorithmOptions, generateAnimationArray} from "@/lib/utils";
import {sortingAlgorithmData} from "@/lib/algorithmData";
import {memo, useEffect} from "react";
import {FaPlayCircle} from "react-icons/fa";
import {RxReset} from "react-icons/rx";

const Home = memo(function Home() {
  const {
    arrayToSort,
    isSorting,
    animationSpeed,
    setAnimationSpeed,
    selectedAlgorithm,
    setSelectedAlgorithm,
    resetArrayAndAnimation,
    requiresReset,
    runAnimation,
  } = useSortingAlgorithmContext();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
  };

  const handleAnimationSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnimationSpeed(Number(e.target.value));
  };

  useEffect(() => {
    console.log(
      "Algo ",
      selectedAlgorithm,
      sortingAlgorithmData[selectedAlgorithm]
    );
  }, [selectedAlgorithm]);

  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      return;
    }
    generateAnimationArray(
      selectedAlgorithm,
      isSorting,
      arrayToSort,
      runAnimation
    );
  };

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
            <div className="flex items-center justify-center gap-3">
              <Slider
                isDisabled={isSorting}
                value={animationSpeed}
                handleChange={handleAnimationSpeed}
              />
              <Select
                options={algorithmOptions}
                defaultValue={selectedAlgorithm}
                onChange={handleSelectChange}
                isDisabled={isSorting}
              />
              <button
                className="flex items-center justify-center"
                onClick={handlePlay}
              >
                {requiresReset ? (
                  <RxReset className="text-gray-300 h-8 w-8" />
                ) : (
                  <FaPlayCircle className="text-neutral-400 hover:text-neutral-300 h-8 w-8" />
                )}
              </button>
            </div>
            <div className="hidden sm:flex absolute top-[120%] left-0 w-full">
              <div className="flex w-full text-gray-400 p-4 rounded border bg-opacity-10 gap-6">
                <div className="flex flex-col items-start justify-start w-3/4">
                  <h3 className="text-lg">
                    {sortingAlgorithmData[selectedAlgorithm].title}
                  </h3>
                  <p className="text-sm text-grey-500 pt-2">
                    {sortingAlgorithmData[selectedAlgorithm].description}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-start w-1/4 gap-2">
                  <h3 className="text-lg">Time Complexity</h3>
                  <div className="flex flex-col gap-2">
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Worst Case:</span>
                      <span>
                        {sortingAlgorithmData[selectedAlgorithm].worstCase}
                      </span>
                    </p>
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Average Case:</span>
                      <span>
                        {sortingAlgorithmData[selectedAlgorithm].averageCase}
                      </span>
                    </p>
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Best Case:</span>
                      <span>
                        {sortingAlgorithmData[selectedAlgorithm].bestCase}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="relative h-[calc(100vh-66px)] w-full overflow-hidden">
            <div className="absolute bottom-[32px] w-full mx-auto left-o right-0 flex justify-center items-end ">
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
      </div>
    </main>
  );
});
export default Home;
