import { ForwardIcon } from "@heroicons/react/24/solid";
type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const sizeMap = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base",
};

export default function Heading(prop: HeadingProps) {
  const Tag = `h${prop.level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`font-bold ${sizeMap[prop.level]} p-2 text-slate-600`}>
      <span className="inline-block">{prop.children}</span>
    </Tag>
  );
}
