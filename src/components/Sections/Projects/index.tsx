import CardProject from "@/components/Cards/CardProject";
import TitleSection from "@/components/TitleSection";
import projects from "../../../../public/projects.json"

export default function Projects() {
    const vitrine = projects.filter((project) => project.vitrine === true)

    return (
        <section id="projects" className="h-[90vh] flex flex-col items-center py-10">
            <TitleSection title="Projetos" className="mx-auto" />
            <div className="flex flex-row justify-between w-8/12 my-auto">
                {vitrine.map((project) => (
                    <CardProject project={project} key={project.title} />
                ))}
            </div>
            <p className="text-sky-600 font-lato font-bold cursor-pointer hover:text-white mx-auto text-lg">Ver todos</p>
        </section>
    )
}