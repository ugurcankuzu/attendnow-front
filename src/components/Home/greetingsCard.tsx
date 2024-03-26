import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IGreetingsCardComponent {
  lecturerName: string;
  lecturerSurname: string;
}
export default function GreetingsCard({
  lecturerName,
  lecturerSurname,
}: IGreetingsCardComponent) {
  return (
    <div className={GreetingsCardStyles.cardWrapper}>
      <div className={GreetingsCardStyles.cardContent}>
        <div className={GreetingsCardStyles.logoSection}>
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div className={GreetingsCardStyles.contentSection}>
          <p className={GreetingsCardStyles.subContent}>Welcome</p>
          <p
            className={GreetingsCardStyles.mainContent}
          >{`${lecturerName} ${lecturerSurname}`}</p>
        </div>
      </div>
    </div>
  );
}

const GreetingsCardStyles = {
  cardWrapper:
    "col-span-2 flex items-center justify-center bg-white shadow rounded-md",
  cardContent: "flex items-center gap-4 w-full px-2",
  logoSection:
    "bg-gradient-pink-green-cross w-[50px] h-[50px] flex justify-center items-center text-white text-3xl rounded-md",
  contentSection: "leading-5",
  subContent: "text-sm text-sky-magenta",
  mainContent: "text-lg font-bold",
};
