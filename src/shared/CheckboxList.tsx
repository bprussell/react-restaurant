import Checkbox from "./Checkbox";

type CheckboxOption = {
  label: string;
  value: string;
  checked?: boolean;
};

type CheckboxListProps = {
  className?: string;
  children: React.ReactNode;
  legend: string;
};

export default function CheckboxList({
  children,
  className = "",
  legend,
}: CheckboxListProps) {
  return (
    <fieldset className={className}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
