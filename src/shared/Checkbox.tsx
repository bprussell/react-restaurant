type CheckboxProps = {
  id?: string;
  label?: string;
  checked?: boolean;
  value?: string;
};
export default function Checkbox({
  id = "",
  label = "",
  checked = true,
  value = "",
}: CheckboxProps) {
  return (
    <>
      <input id={id} type="checkbox" checked={checked} value={value} />
      <label className="block" htmlFor={id}>
        {label}
      </label>
    </>
  );
}
