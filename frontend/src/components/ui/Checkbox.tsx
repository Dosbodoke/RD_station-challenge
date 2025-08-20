import React from "react";

interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  type: "checkbox" | "radio";
  description?: string;
  noCheckmarkIcon?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, description, noCheckmarkIcon, className, id, type, ...props },
    ref
  ) => {
    const inputId = id || `${props.name}-${props.value}`;

    return (
      <label
        htmlFor={inputId}
        className={`
          relative flex gap-2 items-center cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm
          transition-transform duration-75 ease-in-out
          focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2

          // These classes apply the styles you requested
          has-[input:checked]:border-indigo-600
          active:scale-95

          ${className || ""}
        `}
      >
        <input
          id={inputId}
          ref={ref}
          type={type}
          className="peer sr-only"
          {...props}
        />

        {noCheckmarkIcon ? null : (
          <svg
            className="h-6 w-6 text-indigo-600 transition-opacity contrast-0 peer-checked:contrast-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        )}

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">{label}</span>
          {description && (
            <span className="mt-1 text-sm text-gray-600">{description}</span>
          )}
        </div>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
