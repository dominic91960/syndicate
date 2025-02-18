import { useState } from "react";

import { BsEye, BsEyeSlash } from "react-icons/bs";

import { cn } from "../../../lib/utils";

const PasswordInput = ({ column = false, id, label, className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div
      className={`grid ${column ? "grid-cols-1 gap-[0.2em]" : "grid-cols-10 gap-[1em]"} items-end`}
    >
      <label
        htmlFor={id}
        className={`${column ? "col-span-1" : "col-span-3"} w-fit font-medium`}
      >
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={isVisible ? "text" : "password"}
          id={id}
          className={cn(
            "w-full border border-white/30 px-[1em] py-[0.3em] transition-colors focus:border-white/50 focus:outline-none",
            column ? "col-span-1" : "col-span-7",
            className,
          )}
          {...props}
        />
        <button
          type="button"
          className="absolute top-[0.25em] right-[0.4em] cursor-pointer text-[1.5em] text-white/80 hover:text-white"
          onClick={toggleVisibility}
        >
          {isVisible ? <BsEyeSlash /> : <BsEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
