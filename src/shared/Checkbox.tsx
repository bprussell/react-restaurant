type CheckboxProps = {
  id?: string;
  label?: string;
  checked?: boolean;
  value?: string;
};
export default function Checkbox({
  id = "",
  label = "",
  checked = false,
  value = "",
}: CheckboxProps) {
  return (
    <div>
      <input id={id} type="checkbox" checked={checked} value={value} />
      <label className="ml-1" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
