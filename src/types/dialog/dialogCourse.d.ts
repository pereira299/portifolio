import Course from "../course";

export default interface DialogCourse {
  open: boolean;
  onClose: () => void;
  course: Course;
}
