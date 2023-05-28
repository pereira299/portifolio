export default function Header() {
  const links = [
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Projetos" },
    { href: "#courses", label: "Cursos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className=" px-14 items-center bg-gray-800/30 z-50 backdrop-blur-lg text-white fixed top-0 h-16 left-0 shadow-md flex flex-row justify-between w-screen">
      <h1 className="font-oxanium-bold text-xl hover:text-gray-300 cursor-pointer transition-colors">Lucas Pereira</h1>
      <nav>
        <ul className="flex space-x-14">
          {links.map(({ href, label }) => (
            <li key={label} className="font-oxanium hover-line">
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
