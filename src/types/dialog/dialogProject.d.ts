import Project from "../project";

export default interface DialogProject {
  open: boolean;
  onClose: () => void;
  projects: Project[];
}
