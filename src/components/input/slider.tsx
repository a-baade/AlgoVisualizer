import {MAX_ANIM_SPEED, MIN_ANIM_SPEED} from "@/lib/utils";

export const Slider = ({
  min = MIN_ANIM_SPEED,
  max = MAX_ANIM_SPEED,
  step = 10,
  value,
  handleChange,
  isDisabled = false,
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <span className="text-center text-gray-300">Slow</span>
      <input
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700 range accent-gray-300"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <span className="text-center text-gray-300">Fast</span>
    </div>
  );
};
