import clsx from "clsx";
type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit";
  variant?: "primary" | "secondary";
};

const variantMap = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  secondary: "bg-gray-500 hover:bg-gray-700 text-white",
};

export default function Button({
  children,
  type,
  variant = "secondary",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        variantMap[variant],
        className,
        "font-bold py-2 px-4 rounded"
      )}
    >
      {children}
    </button>
  );
}
