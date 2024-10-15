import React, { useId } from "react";

// this forward ref helps in passing the data from lower component to upper component. like passing data or reference from lower component to parent component.
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props }, // this is all prop. 
  ref // this ref is necessary as this ref is the only thing which helps in recognizing this input and helps to gather data from parent component. 
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        {...props}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-300 w-full ${className}`}
      />
    </div>
  );
});

export default Input;
