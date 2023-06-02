import DialogCourse from "@/types/dialog/dialogCourse";
import Dialog from "..";
import Image from "next/image";

export default function CourseDialog(props: DialogCourse) {

    if(!props.course) return (<></>);

  return (
    <Dialog
      open={props.open}
      closeDialog={props.onClose}
      title="Curso"
      className="flex flex-row flex-wrap gap-x-3 justify-between h-fit overflow-y-scroll mt-5 max-h-[90%]"
    >
      <div className="flex flex-row justify-between">
        <Image 
            src={props.course.image}
            alt={props.course.title}
            width={200}
            height={200}
            className="rounded-md w-4/12"
        />
        <div className="flex flex-col gap-y-5 w-7/12">
            <h4 className="text-white font-bold text-2xl ">
                {props.course.title}
            </h4>
            <p className="text-white">
                {props.course.description}
            </p>
        </div>
      </div>
    </Dialog>
  );
}
