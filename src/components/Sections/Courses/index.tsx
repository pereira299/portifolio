"use client";
import TitleSection from "@/components/TitleSection";
import CardCourse from "@/components/Cards/CardCourse";
import Course from "@/types/course";
import CourseDataset from "../../../../public/dataset/courses.json";
import { useState } from "react";
import CourseDialog from "@/components/Dialog/CourseDialog";

export default function Courses() {
  const [courseIndex, setCourseIndex] = useState<number>(-1);
  const courseList: Course[] = CourseDataset as Course[];

  const sortByDate = (a: Course, b: Course) => {
    const dateA = new Date(a.period?.end || "2021-01-01");
    const dateB = new Date(b.period?.end || "2021-01-01");

    return dateB.getTime() - dateA.getTime();
  };

  return (
    <section
      id="courses"
      className=" flex flex-col justify-between gap-x-5 lg:items-center py-20 px-5 lg:px-14"
    >
      <TitleSection title="Cursos" className="mx-auto"/>
      <div className="w-full flex flex-col lg:flex-row justify-between mx-auto gap-y-10 flex-wrap mt-5">
        {courseList.sort(sortByDate).map((course, i) => (
          <CardCourse
            {...course}
            readMore={() => setCourseIndex(i)}
            key={course.title}
          />
        ))}
      </div>
      <CourseDialog
        open={courseList[courseIndex] !== undefined}
        course={courseList[courseIndex]}
        onClose={() => setCourseIndex(-1)}
      />
    </section>
  );
}
