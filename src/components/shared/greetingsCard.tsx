import { useLecturerContext } from "@/store/lecturerContext";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GreetingsCard() {
  const lecturerContext = useLecturerContext();
  return (
    <div className={GreetingsCardStyles.cardWrapper}>
      <div className={GreetingsCardStyles.logoSection}>
        <FontAwesomeIcon icon={faCalendar} />
      </div>
      <div className={GreetingsCardStyles.contentSection}>
        <p className={GreetingsCardStyles.subContent}>Welcome</p>
        <p className={GreetingsCardStyles.mainContent}>
          {lecturerContext.lecturer.lecturerName}!
        </p>
      </div>
    </div>
  );
}

const GreetingsCardStyles = {
  cardWrapper:
    "col-span-2 flex items-center justify-start px-6 py-4 gap-4 bg-white shadow rounded-md",
  logoSection:
    "bg-gradient-pink-green-cross w-[50px] h-[50px] min-w-[50px] min-h-[50px] flex justify-center items-center text-white text-lg rounded-md",
  contentSection: "leading-5",
  subContent: "text-sm text-sky-magenta",
  mainContent: "text-lg font-bold line-clamp-1",
};
