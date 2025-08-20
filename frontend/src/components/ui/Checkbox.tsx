import React from "react";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  children?: React.ReactNode;
  type: "checkbox" | "radio";
}

function Checkbox({ children, className, ...props }: CheckboxProps) {
  return (
    <label className={`flex items-center ${className || ""}`}>
      <input className="form-checkbox h-5 w-5 text-blue-500" {...props} />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
