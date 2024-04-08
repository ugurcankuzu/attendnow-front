import TAttendancy from "@/types/attendancyType";
import TStudent from "@/types/studentType";

export default function findSuspiciousSender(
  studentId: string,
  attendancies: TAttendancy[],
  courseStudents: TStudent[]
) {
  console.log("triggered");
  console.log(studentId, attendancies, courseStudents);
  const attendancyOwner = attendancies.find(
    (attendedStudent) => attendedStudent.studentId === studentId
  );
  if (attendancyOwner) {
    const attendancyOwnersDeviceId = attendancyOwner.deviceId;
    const devicesOwner = attendancies.find(
      (attendancy) =>
        attendancyOwnersDeviceId === attendancy.deviceId &&
        attendancy.suspicious === false
    );
    if (devicesOwner) {
      const deviceOwnersInformation = courseStudents.find(
        (student) => student._id === devicesOwner.studentId
      );
      if (deviceOwnersInformation) {
        return `${deviceOwnersInformation.name} ${deviceOwnersInformation.surname}`;
      }
    }
  }
  return "No Information";
}
