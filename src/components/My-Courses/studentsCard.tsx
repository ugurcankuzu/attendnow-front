import { useGlobalErrorContext } from "@/store/globalErrorContext";
import { useJwtContext } from "@/store/jwtContext";
import TCourses from "@/types/courseType";
import TStudent from "@/types/studentType";
import getStudentsInCourse from "@/util/getStudentsInCourse";
import handleBadResponse from "@/util/handleBadResponse";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IStudentsCardComponent {
  selectedCourse: TCourses;
}
export default function StudentsCard({
  selectedCourse,
}: IStudentsCardComponent) {
  const jwtContext = useJwtContext();
  const errorContext = useGlobalErrorContext();
  const [resolvedStudents, setResolvedStudents] = useState<TStudent[]>();
  const router = useRouter();
  useEffect(() => {
    getStudentsInCourse(selectedCourse._id, jwtContext.jwtToken)
      .then((students) => setResolvedStudents(students))
      .catch((err) => handleBadResponse(err, errorContext.dispatch, router));
  }, [selectedCourse]);
  return (
    <div className={StudentsCardStyles.cardWrapper}>
      <h2 className={StudentsCardStyles.cardTitle}>Students in Course</h2>
      <div className={StudentsCardStyles.studentList}>
        {resolvedStudents &&
          resolvedStudents.length > 0 &&
          resolvedStudents.map((student, index) => (
            <div key={index} className={StudentsCardStyles.studentWrapper}>
              <p className={StudentsCardStyles.studentNumber}>
                {student.universityNumber}
              </p>
              <p className={StudentsCardStyles.studentName}>
                {student.name} {student.surname}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
const StudentsCardStyles = {
  cardWrapper:
    "col-span-6 row-span-4 col-start-3 row-start-4 bg-white rounded-md shadow p-4 flex flex-col gap-4",
  cardTitle: "text-2xl text-sky-magenta",
  studentList: "flex flex-col divide-y overflow-y-auto",
  studentWrapper: "flex gap-4 py-2",
  studentNumber: "",
  studentName: "",
};
