import TCourses from "@/types/courseType";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import CoursePicker from "../shared/coursePicker";
import getRoute from "@/util/getRoute";
import { useRouter } from "next/navigation";

export default function QuickStartSessionCard() {
  const [selectedCourse, setSelectedCourse] = useState<TCourses>({
    _id: "",
    courseName: "",
    students: [],
  });
  const router = useRouter();
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(
      getRoute("New Session").routeHref + `?courseId=${selectedCourse._id}`
    );
  };
  return (
    <div className={QuickStartSessionCardStyles.cardWrapper}>
      <div className={QuickStartSessionCardStyles.contentSection}>
        <h2 className={QuickStartSessionCardStyles.contentTitle}>
          Quick Start
        </h2>
        <p className={QuickStartSessionCardStyles.contentText}>
          Choose a course and start a session !
        </p>
      </div>
      <div className={QuickStartSessionCardStyles.controllerSection}>
        <div className={QuickStartSessionCardStyles.controllerWrapper}>
          <CoursePicker
            setSelectedCourse={setSelectedCourse}
            selectedCourse={selectedCourse}
          />
          <button
            onClick={handleClick}
            className={QuickStartSessionCardStyles.ctaButton}
            disabled={selectedCourse._id ? false : true}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

const QuickStartSessionCardStyles = {
  cardWrapper:
    "col-span-6 row-span-3 bg-gradient-pink-green-cross col-start-3 row-start-1 rounded-md shadow flex p-4",
  contentSection: "flex-1 flex flex-col gap-4",
  contentTitle: "font-extrabold text-4xl text-white",
  contentText: "text-xl text-white font-light",
  controllerSection: "flex-1 flex items-end justify-end",
  controllerWrapper: "flex gap-4 items-center",
  ctaButton:
    "bg-white rounded-full w-[25px] h-[25px] flex justify-center items-center p-4 text-sky-magenta disabled:opacity-50",
};
