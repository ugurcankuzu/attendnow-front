import TCourses from "@/types/courseType";
import TRoute from "@/types/routeType";
import getRoute from "@/util/getRoute";
import { faHistory, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Dispatch, MouseEvent, SetStateAction } from "react";

interface ICourseItemComponent {
  course: TCourses;
  setSelectedCourse: Dispatch<SetStateAction<TCourses>>;
}
export default function CourseItem({
  course,
  setSelectedCourse,
}: ICourseItemComponent) {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setSelectedCourse(course);
  };
  return (
    <div className={CourseItemStyles.itemWrapper} onClick={handleClick}>
      <p className={CourseItemStyles.courseName}>{course.courseName}</p>
    </div>
  );
}

const CourseItemStyles = {
  itemWrapper:
    "py-2 hover:bg-slate-300/30 transition-bg duration-[.25s] hover:cursor-pointer",
  courseName: "text-xl",
};
