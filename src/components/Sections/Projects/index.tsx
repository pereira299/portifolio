import CardProject from "@/components/Cards/CardProject";
import TitleSection from "@/components/TitleSection";

export default function Projects() {
    const projects = [
        {
            title: "Projeto 1",
            description: "Descrição do projeto 1",
            image: "https://via.placeholder.com/600x400",
            link: "https://google.com",
            stack: ["React", "TailwindCSS", "Next.JS", "TypeScript"]
        },
        {
            title: "Projeto 2",
            description: "Descrição do projeto 2",
            image: "https://via.placeholder.com/600x400",
            link: "https://google.com",
            stack: ["React", "TailwindCSS", "Next.JS", "TypeScript"]
        },
        {
            title: "Projeto 3",
            description: "Descrição do projeto 3",
            image: "https://via.placeholder.com/600x400",
            link: "https://google.com",
            stack: ["React", "TailwindCSS", "Next.JS", "TypeScript"]
        },
    ]


    return (
        <section id="projects" className="h-[90vh] flex flex-col items-center py-10">
            <TitleSection title="Projetos" className="mx-auto" />
            <div className="flex flex-row justify-between w-8/12 my-auto">
                {projects.map((project) => (
                    <CardProject project={project} key={project.title} />
                ))}
            </div>
            <p className="text-sky-600 font-lato font-bold cursor-pointer hover:text-white mx-auto text-lg">Ver todos</p>
        </section>
    )
}