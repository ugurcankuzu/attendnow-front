import { useJwtContext } from "@/store/jwtContext";
import { useLecturerContext } from "@/store/lecturerContext";
import TCourses from "@/types/courseType";
import getCourseDetailsById from "@/util/getCourseDetailsById";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CourseItem from "./courseItem";
import { useRouter } from "next/navigation";
import handleBadResponse from "@/util/handleBadResponse";
import { useGlobalErrorContext } from "@/store/globalErrorContext";

interface ICoursesCardComponent {
  setSelectedCourse: Dispatch<SetStateAction<TCourses>>;
}

export default function CoursesCard({
  setSelectedCourse,
}: ICoursesCardComponent) {
  const lecturerContext = useLecturerContext();
  const jwtContext = useJwtContext();
  const router = useRouter();
  const errorContext = useGlobalErrorContext();
  const [resolvedCourses, setResolvedCourses] = useState<TCourses[]>();
  useEffect(() => {
    getCourseDetailsById(
      lecturerContext.lecturer.lecturerCourses,
      jwtContext.jwtToken
    )
      .then((courseDetails) => setResolvedCourses(courseDetails))
      .catch((err) => handleBadResponse(err, errorContext.dispatch, router));
  }, [lecturerContext.lecturer.lecturerCourses]);
  return (
    <div className={CoursesCardStyles.cardWrapper}>
      <h2 className={CoursesCardStyles.cardTitle}>My Courses</h2>
      <div className={CoursesCardStyles.courseList}>
        {resolvedCourses &&
          resolvedCourses.map((course, index) => (
            <CourseItem
              key={index}
              course={course}
              setSelectedCourse={setSelectedCourse}
            />
          ))}
      </div>
    </div>
  );
}

const CoursesCardStyles = {
  cardWrapper:
    "col-span-6 row-span-3 col-start-3 row-start-1 bg-white rounded-md shadow p-4 flex flex-col gap-2",
  cardTitle: "text-2xl text-sky-magenta",
  courseList: "flex flex-col overflow-y-auto divide-y",
};
