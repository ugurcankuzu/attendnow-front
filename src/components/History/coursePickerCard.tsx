import TCourses from "@/types/courseType";
import { Dispatch, SetStateAction } from "react";
import CoursePicker from "../shared/coursePicker";

interface ICoursePickerCardComponent {
  selectedCourse: TCourses;
  setSelectedCourse: Dispatch<SetStateAction<TCourses>>;
}

export default function CoursePickerCard({
  selectedCourse,
  setSelectedCourse,
}: ICoursePickerCardComponent) {
  return (
    <div className={CoursePickerCardStyles.pickerWrapper}>
      <h2 className={CoursePickerCardStyles.cardTitle}>History</h2>
      <CoursePicker
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
      />
    </div>
  );
}

const CoursePickerCardStyles = {
  pickerWrapper:
    "col-span-6 row-span-1 row-start-1 col-start-3 bg-white flex justify-between items-center px-4 shadow rounded-md",
  cardTitle: "text-xl text-sky-magenta",
};
