import Error from "./Error";

type CheckboxOption = {
  label: string;
  value: string;
  checked?: boolean;
};

type CheckboxListProps = {
  className?: string;
  children: React.ReactNode;
  legend: string;
  error?: string;
};

export default function CheckboxList({
  children,
  className = "",
  legend,
  error,
}: CheckboxListProps) {
  return (
    <fieldset className={className}>
      <legend>{legend}</legend>
      {error && <Error error={error} />}
      {children}
    </fieldset>
  );
}
