import React from "react";

interface Props {
  onChange: (checked) => void;
  check?: boolean;
  label?: string;
}

const Toggle = (props: Props) => {
  return (
    <div>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={props.check}
          onChange={(e) => props.onChange(e.target.checked)}
          className="checked:right-0 checked:bg-blue-600 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        />
      </div>
      {props.label && (
        <span className="text-gray-400 font-medium">{props.label}</span>
      )}
    </div>
  );
};
export default Toggle;