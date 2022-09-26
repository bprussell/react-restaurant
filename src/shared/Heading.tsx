import { ForwardIcon } from "@heroicons/react/24/solid";
type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};
export default function Heading(prop: HeadingProps) {
  const Tag = `h${prop.level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className="font-bold text-xl p-2 text-slate-600">
      <ForwardIcon className="h-4 w-4 mb-1 mr-2 inline-block" />
      <span className="inline-block">{prop.children}</span>
    </Tag>
  );
}
