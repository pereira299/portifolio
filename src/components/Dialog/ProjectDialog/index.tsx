import CardProject from "@/components/Cards/CardProject";
import Dialog from "..";
import Image from "next/image";
import Link from "next/link";

interface ProjectDialogProps {
  open: boolean;
  onClose: () => void;
  projects: Array<{
    title: string;
    image: string;
    description: string;
    link: string;
    stack: string[];
    date: string;
  }>;
}

export default function ProjectDialog({
  open,
  onClose,
  projects,
}: ProjectDialogProps) {
  return (
    <Dialog
      open={open}
      closeDialog={onClose}
      title="Projetos"
      className="flex flex-row flex-wrap justify-between h-fit overflow-y-scroll mt-5 max-h-[90%]"
    >
      <div className="">
        <div className="gap-y-3 flex flex-row flex-wrap justify-between">
          {projects.map((project) => (
            <CardProject project={project} key={project.title} />
          ))}
        </div>
      </div>
    </Dialog>
  );
}