import Button from "@/types/button";
import Link from "next/link";

export default function Button(props: Button) {
  let btnStyle = "";
  switch (props.variant) {
    case "contained":
      btnStyle = "bg-sky-600 hover:bg-white hover:text-sky-500 text-white";
      break;
    case "outlined":
      btnStyle = "border-sky-600 border-2 hover:border-white hover:text-white text-sky-600";
      break;
    case "text":
      btnStyle = "hover:text-white text-sky-600";
      break;
    default:
      btnStyle = "border-sky-600 border-2 hover:border-white hover:text-white text-sky-600";
      break;
  }

  if (props.link) {
    return (
      <Link
        href={props.link}
        className={`${btnStyle} flex rounded-md px-2 py-1 ${props.className}`}
      >
        <p className=" text-center w-full font-semibold">{props.text}</p>
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={`${btnStyle} flex rounded-md px-2 py-1 ${props.className}`}
    >
      <p className=" text-center w-full font-semibold">{props.text}</p>
    </button>
  );
}
