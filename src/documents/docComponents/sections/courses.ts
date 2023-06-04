import Course from "@/types/course";
import courseList from "../../../../public/dataset/courses.json";

const Courses = () => {
  return [
    ...courseList.map((course: Course) => {
      const end = course.description.indexOf(".") + 1;
      return [
        {
          text: course.title,
          style: {
            bold: true,
          },
        },
        { text: course.description.slice(0, end), margin: [0, 0, 0, 10] },
      ];
    }),
  ];
};

export default Courses;
