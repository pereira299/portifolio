import Button from "@/types/button";
import Link from "next/link";

export default function Button(props: Button) {
  if (props.link) {
    return (
      <Link
        href={props.link}
        className={"border-sky-600 flex border-2 w-full rounded-md px-2 py-1 hover:border-white hover:text-white text-sky-600 " + props.className}
      >
        <p className=" text-center w-full font-semibold">{props.text}</p>
      </Link>
    );
  }

  return (
    <button {...props} className={"border-sky-600 flex border-2 w-full rounded-md px-2 py-1 hover:border-white hover:text-white text-sky-600 " + props.className}>
      <p className=" text-center w-full font-semibold">{props.text}</p>
    </button>
  );
}
