import TAttendancy from "@/types/attendancyType";
import TStudent from "@/types/studentType";

export default function checkAttendancy(
  studentId: string,
  attendancies: TAttendancy[]
) {
  const studentIds = attendancies.map((attendancy) => attendancy.studentId);
  const isAttended = studentIds.includes(studentId);
  if (isAttended) {
    return true;
  }
  return false;
}
