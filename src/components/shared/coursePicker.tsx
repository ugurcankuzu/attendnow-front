import { useGlobalErrorContext } from "@/store/globalErrorContext";
import { useJwtContext } from "@/store/jwtContext";
import { useLecturerContext } from "@/store/lecturerContext";
import TCourses from "@/types/courseType";
import getCourseDetailsById from "@/util/getCourseDetailsById";
import handleBadResponse from "@/util/handleBadResponse";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const errorContext = useGlobalErrorContext();
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
    )
      .then((courses) => setResolvedCourses(courses))
      .catch((err) => handleBadResponse(err, errorContext.dispatch, router));
  }, [lecturerContext.lecturer.lecturerCourses]);
  return (
    <div onClick={handleCourseList} className={CoursePickerStyles.wrapper}>
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
        <div className={CoursePickerStyles.courseList} onBlur={handleBlur}>
          <ul className={CoursePickerStyles.listWrapper}>
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
    "absolute bg-white shadow w-full left-0 top-full rounded-md p-2 flex flex-col mt-2 ",
  listWrapper: "flex flex-col gap-4",
  courseItem:
    "text-left line-clamp-1 text-sky-magenta transition-bg duration-[.25s] hover:bg-slate-300/30",
};
