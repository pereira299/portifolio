import Link from "next/link";
import Links from "../../../public/dataset/links.json";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Drawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {

  if (!open) return <></>;

  return (
    <dialog
      open={open}
      className="w-screen flex h-screen fixed backdrop-blur-lg bg-rhino-950/70 z-[100] top-0"
    >
      <div className="h-screen w-screen">
        <div className="flex flex-row justify-end items-center w-full h-16 px-8">
          <button onClick={onClose} className="text-white text-2xl">
            <X className="text-white" size={60} />
          </button>
        </div>
        <nav className="h-3/6 mt-20">
          <ul className="flex flex-col items-center justify-between h-full">
            {Links.map((link) => (
              <li key={link.label} className="cursor-pointer">
                <a href={link.href}>
                  <p className="text-white text-4xl transition-colors text-center duration-200 hover:text-rhino-00">
                    {link.label}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </dialog>
  );
}
