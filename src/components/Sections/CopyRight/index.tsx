import Link from "next/link";

export default function CopyRight() {
    const year = new Date().getFullYear();
  return (
    <div className="bg-gray-950 py-5 px-5 w-full">
      <p className="text-center text-gray-500">
        © {year} Lucas Pereira - Design by{" "}
        <Link
          href="https://dribbble.com/laviniamelo"
          className="text-rhino-500 hover:text-white"
        >
          Lavinia Melo
        </Link>
      </p>
    </div>
  );
}
