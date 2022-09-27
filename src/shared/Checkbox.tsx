import React from "react";

type CheckboxProps = {
  id?: string;
  label?: string;
  checked?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Checkbox({
  id = "",
  label = "",
  checked = false,
  value = "",
  onChange,
}: CheckboxProps) {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label className="ml-1" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
