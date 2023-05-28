type TitleSectionProps = {
    title: string;
    className?: string;
};

export default function TitleSection({ title, className }: TitleSectionProps) {
  return (
    <ul className={"list-image-[url(/images/square-dot.svg)] list-outside list " + className}>
      <li>
        <h2 className="text-4xl font-oxanium-bold text-white">{title}</h2>
      </li>
    </ul>
  );
}
