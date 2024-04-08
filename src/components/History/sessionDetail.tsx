import { useJwtContext } from "@/store/jwtContext";
import TAttendancy from "@/types/attendancyType";
import TSession from "@/types/sessionType";
import TStudent from "@/types/studentType";
import checkAttendancy from "@/util/checkAttendancy";
import checkSuspicious from "@/util/checkSuspicious";
import convertTimetoReadable from "@/util/convertTimetoReadable";
import findSuspiciousSender from "@/util/findSuspiciousSender";
import getStudentsInCourse from "@/util/getStudentsInCourse";
import getStudentsInSession from "@/util/getStudentsInSession";
import {
  faCheck,
  faExclamation,
  faMinus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface ISessionDetailCardComponent {
  session: TSession;
  selectedCourse: string;
}
export default function SessionDetailCard({
  session,
  selectedCourse,
}: ISessionDetailCardComponent) {
  const jwtContext = useJwtContext();
  const [attendedStudents, setAttendedStudents] = useState<TAttendancy[]>([]);
  const [courseStudents, setCourseStudents] = useState<TStudent[]>([]);
  useEffect(() => {
    getStudentsInSession(session._id, jwtContext.jwtToken).then((students) =>
      setAttendedStudents(students)
    );
    getStudentsInCourse(selectedCourse, jwtContext.jwtToken).then(
      (courseStudents) => setCourseStudents(courseStudents)
    );
  }, [session._id]);
  return (
    <div className={SessionDetailCardStyles.cardWrapper}>
      <h2 className={SessionDetailCardStyles.cardTitle}>Session Details</h2>
      <div className={SessionDetailCardStyles.sessionDetailWrapper}>
        <p className={SessionDetailCardStyles.sessionCourseName}>
          {session.course.courseName}
        </p>
        <p className={SessionDetailCardStyles.sessionDate}>
          {convertTimetoReadable(session.date)}
        </p>
        <p className={SessionDetailCardStyles.attendedStudents}>
          <FontAwesomeIcon icon={faUsers} /> {attendedStudents.length}/
          {courseStudents.length}
        </p>
      </div>
      <div className={SessionDetailCardStyles.studentsWrapper}>
        <h2 className={SessionDetailCardStyles.listTitle}>Attendants</h2>
        {courseStudents.length > 0 &&
          courseStudents.map((student, index) => (
            <div key={index} className={SessionDetailCardStyles.attendancies}>
              <div className={SessionDetailCardStyles.attendancyDetails}>
                {" "}
                <p>
                  {student.name} {student.surname}
                </p>
                <FontAwesomeIcon
                  icon={
                    checkAttendancy(student._id, attendedStudents)
                      ? checkSuspicious(student._id, attendedStudents)
                        ? faExclamation
                        : faCheck
                      : faMinus
                  }
                />
              </div>
              {checkSuspicious(student._id, attendedStudents) && (
                <div
                  className={
                    SessionDetailCardStyles.suspiciousAttendanciesWrapper
                  }
                >
                  <p>
                    Possible Device Owner:{" "}
                    {findSuspiciousSender(
                      student._id,
                      attendedStudents,
                      courseStudents
                    ) || "No Data"}
                  </p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
const SessionDetailCardStyles = {
  cardWrapper:
    "col-span-3 row-span-6 bg-white rounded-md shadow p-4 flex flex-col gap-4 overflow-y-scroll",
  sessionDetailWrapper: "flex flex-col gap-2",
  cardTitle: "text-2xl text-sky-magenta",
  sessionCourseName: "text-lg",
  sessionDate: "text-black/30",
  studentsWrapper: "flex flex-col gap-2 divide-y",
  attendancies: "flex flex-col gap-2 py-2",
  attendancyDetails: "flex justify-between",
  suspiciousAttendanciesWrapper: "text-sm text-black/50",
  listTitle: "text-sky-magenta text-md",
  attendedStudents: "text-sky-magenta",
};
