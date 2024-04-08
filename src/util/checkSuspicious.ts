import TAttendancy from "@/types/attendancyType";

export default function checkSuspicious(
  studentId: string,
  attendancies: TAttendancy[]
) {
  const student = attendancies.find(
    (attendancy) => studentId === attendancy.studentId
  );

  if (student) {
    return student.suspicious;
  }
}
