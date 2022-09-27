import React from "react";

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  className?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Input({
  id,
  label,
  type = "text",
  className = "",
  value = "",
  onChange,
}: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block">
        {label}
      </label>
      <input
        id={id}
        className="border border-gray-600 p-2"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
