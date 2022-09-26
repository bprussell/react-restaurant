type InputProps = {
  id: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
};
export default function Input({ id, label, type = "text" }: InputProps) {
  return (
    <>
      <label htmlFor={id} className="block">
        {label}
      </label>
      <input id={id} className="border border-gray-600 p-2" type={type} />
    </>
  );
}
