import CardProject from "@/components/Cards/CardProject";
import Dialog from "..";
import Project from "@/types/project";
import DialogProject from "@/types/dialog/dialogProject";

export default function ProjectDialog({
  open,
  onClose,
  projects,
}: DialogProject) {

  const sortByDate = (a: Project, b: Project) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime();
  };

  return (
    <Dialog
      open={open}
      closeDialog={onClose}
      title="Projetos"
      className="flex flex-col lg:flex-row flex-wrap justify-between h-fit overflow-y-scroll mt-5 max-h-[90%]"
    >
        <div className="gap-y-3 flex flex-col lg:flex-row flex-wrap justify-between">
          {projects.sort(sortByDate).map((project) => (
            <CardProject project={project} key={project.title} />
          ))}
        </div>
    </Dialog>
  );
}
