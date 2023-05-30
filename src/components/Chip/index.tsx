export default function Chip({ text }: { text: string }) {
  return (
    <div className="bg-transparent h-fit rounded-full uppercase border-sky-600 transition-all duration-150 text-sky-600 px-3 py-1 text-xs font-bold border-2 hover:border-sky-500 hover:text-sky-500">
      {text}
    </div>
  );
}
