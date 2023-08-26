import { useState, Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type Option = {
  id: number;
  name: string;
};

interface Props {
  optionList: Option[];
}

export default function MyListbox({ optionList }: Props) {
  const [selectedOption, setSelectedOption] = useState(optionList[0]);

  return (
    <div className="relative">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button className="rounded border border-customGray bg-white w-[160px] h-[36px] px-3 text-text-list-box flex items-center justify-between">
          <span
            className={`${
              optionList.length === 1 && selectedOption.id === 1
                ? "text-gray-400"
                : "text-black"
            } text-left`}
          >
            {selectedOption.name}
          </span>
          <ChevronDownIcon className="w-5 h-5 mb-1" />
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 bg-white w-[278px] h-[256px] overflow-y-scroll shadow-list-box text-text-list-box">
          {" "}
          {optionList.map((option: Option) => (
            <Listbox.Option key={option.id} value={option} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`${
                    selected
                      ? "bg-gray-300 text-primary"
                      : "bg-white hover:bg-gray-100 text-black"
                  } text-left px-3 h-[48px] flex items-center`}
                >
                  {selected}
                  {option.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
