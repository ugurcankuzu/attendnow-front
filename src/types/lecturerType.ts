type TLecturer = {
  lecturerName: string;
  lecturerSurname: string;
  lecturerCourses: Array<string>;
  lecturerSessions: Array<string>;
  lecturerActiveSession: string | null;
};

export default TLecturer;
