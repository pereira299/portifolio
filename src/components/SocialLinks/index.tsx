import Link from "next/link";
import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import React from "react";

export default function SocialLinks(props: {
  showLabel?: boolean;
  className?: string;
  itemClass?: string;
}) {
  const links = [
    {
      href: "mailto:lucasper057@gmail.com",
      icon: MailIcon,
      label: "lucasper057@gmail.com",
    },
    {
      href: "https://github.com/pereira299",
      icon: GithubIcon,
      label: "@pereira299",
    },
    {
      href: "https://www.linkedin.com/in/lucas-pereira-69a4a6217/",
      icon: LinkedinIcon,
      label: "Lucas Pereira",
    },
  ];

  return (
    <ul
      className={
        "flex flex-row justify-between px-4 w-8/12 lg:w-4/12 " + props.className
      }
    >
      {links.map((link) => (
        <li key={link.label} className="cursor-pointer w-fit">
          <Link
            target="_blank"
            href={link.href}
            className={props.itemClass}
          >
            {React.createElement(link.icon, {
              size: 40,
              className: "text-sky-700 transition-colors duration-200 hover:text-white",
            })}
            {props.showLabel && (
              <p className="text-gray-500 text-xl lg:text-md transition-colors duration-200 hover:text-white">
                {link.label}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
