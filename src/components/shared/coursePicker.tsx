import { useJwtContext } from "@/store/jwtContext";
import { useLecturerContext } from "@/store/lecturerContext";
import TCourses from "@/types/courseType";
import getCourseDetailsById from "@/util/getCourseDetailsById";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dispatch,
  FocusEvent,
  FocusEventHandler,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ICoursePickerComponent {
  setSelectedCourse: Dispatch<SetStateAction<TCourses>>;
  selectedCourse: TCourses;
}
export default function CoursePicker({
  setSelectedCourse,
  selectedCourse,
}: ICoursePickerComponent) {
  const [resolvedCourseList, setResolvedCourses] = useState<Array<TCourses>>(
    [] as Array<TCourses>
  );
  const jwtContext = useJwtContext();
  const lecturerContext = useLecturerContext();
  const [isPickerVisible, setPickerVisibile] = useState<boolean>(false);
  const handleCourseList = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.focus();
    setPickerVisibile((state) => !state);
  };
  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    setPickerVisibile(false);
  };
  const handleCourseSelection = (course: TCourses) => {
    setSelectedCourse(course);
    setPickerVisibile((state) => !state);
  };

  useEffect(() => {
    getCourseDetailsById(
      lecturerContext.lecturer.lecturerCourses,
      jwtContext.jwtToken
    ).then((courses) => setResolvedCourses(courses));
  }, [lecturerContext.lecturer.lecturerCourses]);
  return (
    <div
      onClick={handleCourseList}
      className={CoursePickerStyles.wrapper}
      onBlur={handleBlur}
    >
      <div className={CoursePickerStyles.picker}>
        {!selectedCourse.courseName && (
          <>
            <FontAwesomeIcon icon={faArrowDown} />
            <p className={CoursePickerStyles.pickerText}>Select Course</p>
          </>
        )}
        {selectedCourse.courseName && (
          <p className={CoursePickerStyles.pickerText}>
            {selectedCourse.courseName}
          </p>
        )}
      </div>

      {isPickerVisible && (
        <div className={CoursePickerStyles.courseList}>
          <ul>
            {resolvedCourseList &&
              resolvedCourseList.map((course, index) => (
                <li
                  className={CoursePickerStyles.courseItem}
                  key={index}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleCourseSelection(course);
                  }}
                >
                  {course.courseName}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const CoursePickerStyles = {
  wrapper: "bg-white rounded-md px-4 py-2 hover:cursor-pointer relative",
  picker: "flex justify-center items-center gap-4 text-sky-magenta",
  pickerText: "",
  courseList:
    "absolute bg-white shadow w-full left-0 top-full rounded-md p-2 flex flex-col mt-2",
  courseItem: "text-left line-clamp-1 text-sky-magenta",
};
