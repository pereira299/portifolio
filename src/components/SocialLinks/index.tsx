import Link from "next/link";
import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export default function SocialLinks() {
  return (
    <ul className="flex flex-row justify-between px-4 w-4/12 mx-auto ">
      <li className="cursor-pointer">
        <Link target="_blank" href="mailto:lucasper057@gmail.com">
          <MailIcon
            size={35}
            className="text-sky-700 hover:text-white transition-colors duration-200"
          />
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link target="_blank" href="https://github.com/pereira299">
          <GithubIcon
            size={35}
            className="text-sky-700 hover:text-white transition-colors duration-200"
          />
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/lucas-pereira-69a4a6217/"
        >
          <LinkedinIcon
            size={35}
            className="text-sky-700 hover:text-white transition-colors duration-200"
          />
        </Link>
      </li>
    </ul>
  );
}
