// import React from "react";

import { cn } from "../../utils/cn";

const Input = ({
  type,
  //   name,
  label,
  id,
  register,
  error,
}: {
  type: string;
  //   name: string;
  label: string;
  id: string;
  register: object;
  error?: string;
}) => {
  return (
    <div className="w-full flex gap-1 flex-col items-start my-2">
      <label htmlFor={id} className="font-semibold text-gray-500 text-[14px]">
        {label}
      </label>
      <input
        type={type}
        // name={name}
        id={id}
        {...register}
        className={cn(
          "w-full border-[1px] px-1 rounded-[4px] h-[40px]",
          `${error ? "outline-red-400 border-red-400" : "border-gray-200"}`
        )}
      />
      {error && (
        <p className="text-red-400 text-[12px] font-normal">{error.message}</p>
      )}
    </div>
  );
};

export default Input;
