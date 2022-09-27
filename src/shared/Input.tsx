type InputProps = {
  id: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  className?: string;
  value?: string;
};
export default function Input({
  id,
  label,
  type = "text",
  className = "",
  value = "",
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
      />
    </div>
  );
}
