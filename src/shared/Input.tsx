type InputProps = {
  id: string;
  label: string;
};
export default function Input(prop: InputProps) {
  return (
    <>
      <label htmlFor={prop.id} className="block">
        {prop.label}
      </label>
      <input id={prop.id} className="border border-gray-600 p-2" type="text" />
    </>
  );
}
