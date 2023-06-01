'use client'
import CardProject from "@/components/Cards/CardFlipProject";
import TitleSection from "@/components/TitleSection";
import projects from "../../../../public/projects.json";
import ProjectDialog from "@/components/Dialog/ProjectDialog";
import { useState } from "react";

export default function Projects() {
  const vitrine = projects.filter((project) => project.vitrine === true);
  const [open, setOpen] = useState(false);

  const closeDialog = () => setOpen(false);
  const openDialog = () => setOpen(true);
  return (
    <section
      id="projects"
      className="h-[90vh] flex flex-col items-center py-10"
    >
      <TitleSection title="Projetos" className="mx-auto" />
      <div className="flex flex-row justify-between w-8/12 my-auto h-64 gap-x-8">
        {vitrine.map((project) => (
          <CardProject project={project} key={project.title} />
        ))}
      </div>
      <button
        onClick={openDialog}
        className="text-sky-600 font-lato font-bold cursor-pointer hover:text-white mx-auto text-lg"
      >
        Ver todos
      </button>
      <ProjectDialog
        open={open}
        onClose={closeDialog}
        projects={projects}
      />
    </section>
  );
}
