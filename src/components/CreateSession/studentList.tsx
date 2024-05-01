import { useGlobalErrorContext } from "@/store/globalErrorContext";
import { useJwtContext } from "@/store/jwtContext";
import TAttendancy from "@/types/attendancyType";
import TStudent from "@/types/studentType";
import checkAttendancy from "@/util/checkAttendancy";
import checkSuspicious from "@/util/checkSuspicious";
import getStudentsInCourse from "@/util/getStudentsInCourse";
import getStudentsInSession from "@/util/getStudentsInSession";
import handleBadResponse from "@/util/handleBadResponse";
import {
  faCheck,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IStudentList {
  courseId: string;
  sessionId: string;
}
export default function StudentList({ courseId, sessionId }: IStudentList) {
  const [courseStudents, setCourseStudents] = useState<TStudent[]>([]);
  const [sessionStudents, setSessionStudents] = useState<TAttendancy[]>([]);
  const jwtContext = useJwtContext();
  const errorContext = useGlobalErrorContext();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      getStudentsInSession(sessionId, jwtContext.jwtToken)
        .then((attendedStudents) => setSessionStudents(attendedStudents))
        .catch((err) => {
          handleBadResponse(err, errorContext.dispatch, router);
          clearInterval(interval);
        });
    }, 5000);
    if (courseStudents.length === 0) {
      getStudentsInCourse(courseId, jwtContext.jwtToken)
        .then((students) => setCourseStudents(students))
        .catch((err) => handleBadResponse(err, errorContext.dispatch, router));
    }
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={StudentListStyles.wrapper}>
      <h2 className={StudentListStyles.cardTitle}>
        Attendance List
        <span className={StudentListStyles.counter}>
          {sessionStudents.length}/{courseStudents.length}
        </span>
      </h2>
      <div className={StudentListStyles.studentListWrapper}>
        {courseStudents.length > 0 &&
          courseStudents.map((student, index) => (
            <div className={StudentListStyles.studentWrapper} key={index}>
              <p className={StudentListStyles.no}>{student.universityNumber}</p>
              <p className={StudentListStyles.studentName}>
                {student.name} {student.surname}{" "}
              </p>
              <span className={StudentListStyles.statusIcon}>
                {checkAttendancy(student._id, sessionStudents) ? (
                  checkSuspicious(student._id, sessionStudents) ? (
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  ) : (
                    <FontAwesomeIcon icon={faCheck} />
                  )
                ) : null}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

const StudentListStyles = {
  wrapper:
    "col-span-6 row-span-3 bg-white rounded-md shadow p-4 flex flex-col gap-4",
  cardTitle: "text-4xl text-sky-magenta",
  counter: "ml-4 text-sky-magenta/30",
  studentListWrapper: "flex flex-col flex-1 divide-y overflow-y-auto",
  studentWrapper:
    "py-2 flex transition-bg duration-[.25s] hover:bg-slate-300/30",
  no: "basis-1/4",
  studentName: "basis-1/2 line-clamp-1 ",
  statusIcon: "basis-1/4 flex justify-end items-center",
};
