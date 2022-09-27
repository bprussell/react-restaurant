import clsx from "clsx";
import React from "react";
import Error from "./Error";

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  className?: string;
  value?: string | number;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Input({
  id,
  label,
  type = "text",
  className = "",
  value = "",
  onChange,
  error,
}: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block">
        {label}
      </label>
      <input
        id={id}
        className={clsx(
          "border p-2",
          error ? "bg-red-50 border-red-600" : "border-gray-600"
        )}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <Error error={error} />}
    </div>
  );
}
