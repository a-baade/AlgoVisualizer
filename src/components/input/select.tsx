import {SelectOptionsType} from "@/lib/types";

export const Select = ({
  options,
  defaultValue,
  onChange,
  isDisabled = false,
}: {
  options: SelectOptionsType[];
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled: boolean;
}) => {
  return (
    <div className="inline-block relative w-48">
      <select
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={isDisabled}
        className="block h-8 w-full py-1 pr-8   bg-custom-bg border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0  text-gray-300 capitalize"
      >
        {options.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
        <svg
          className="fill-gray-300 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
