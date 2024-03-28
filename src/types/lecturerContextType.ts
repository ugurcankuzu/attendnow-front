import TLecturer from "./lecturerType";

type TLecturerContext = {
  lecturer: TLecturer;
  updateLecturer: (lecturer: TLecturer) => void;
};

export default TLecturerContext;
