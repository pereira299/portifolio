export default function Chip({ text }: { text: string }) {
  return (
    <div className="bg-transparent rounded-full uppercase border-sky-600 transition-all duration-150 text-sky-600 px-3 py-1 text-sm font-bold border-2 hover:border-white hover:text-white">
      {text}
    </div>
  );
}
