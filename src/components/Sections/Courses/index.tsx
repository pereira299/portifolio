import TitleSection from "@/components/TitleSection";
import CardCourse from "@/components/Cards/CardCourse";
import Course from "@/types/course";
import CourseDataset from "../../../../public/courses.json";

export default function Courses() {
  const courseList: Course[] = CourseDataset as Course[];
  return (
    <section
      id="courses"
      className=" flex flex-row justify-between gap-x-5 items-center py-10 px-14"
    >
      <div className="w-4/12">
        <TitleSection title="Cursos" />
        <p className="text-md text-gray-500 font-lato">
          A área de desenvolvimento de interfaces web está em constante
          evolução, e para acompanhar essa evolução, é necessário estar sempre
          estudando e aprendendo novas tecnologias que surgem a cada dia. Ao
          lado você pode conferir alguns dos cursos que já fiz ou que estou
          fazendo.
        </p>
      </div>
      <div className="w-7/12 flex flex-row justify-between gap-y-10 gap-x-3 flex-wrap">
        {courseList.map((course) => (
          <CardCourse {...course} key={course.title} />
        ))}
      </div>
    </section>
  );
}
