import React from "react";

interface SubmitButtonProps {
  children: React.ReactNode;
  error?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  error,
}) => {
  return (
    <>
      {error && (
        <div className="text-sm text-center text-red-500 mb-2">
          Selecione pelo menos uma preferência ou funcionalidade.
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all active:scale-95 duration-75"
      >
        {children}
      </button>
    </>
  );
};
