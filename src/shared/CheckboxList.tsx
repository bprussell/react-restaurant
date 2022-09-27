import Checkbox from "./Checkbox";

type CheckboxOption = {
  label: string;
  value: string;
  checked?: boolean;
};

type CheckboxListProps = {
  className?: string;
  children: React.ReactNode;
};

export default function CheckboxList({
  children,
  className = "",
}: CheckboxListProps) {
  return <div className={className}>{children}</div>;
}
