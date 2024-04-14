import { useLecturerContext } from "@/store/lecturerContext";
import GreetingsCard from "./greetingsCard";
import NavigationCard from "./navigationCard";
import getLecturerById from "@/util/getLecturerById";
import { useJwtContext } from "@/store/jwtContext";
import handleBadResponse from "@/util/handleBadResponse";
import { useGlobalErrorContext } from "@/store/globalErrorContext";

interface ISharedLayout {
  children: React.ReactNode;
}

export default function SharedLayout({ children }: ISharedLayout) {
  const lecturerContext = useLecturerContext();
  const jwtContext = useJwtContext();
  const errorContext = useGlobalErrorContext();
  return (
    <main className={SharedLayoutStyles.mainWrapper}>
      {lecturerContext.lecturer.lecturerName && (
        <>
          <GreetingsCard />
          <NavigationCard />
          {children}
        </>
      )}
      {!lecturerContext.lecturer.lecturerName && (
        <div>
          <h2>
            {errorContext.state.showError && errorContext.state.error?.message}
          </h2>
          <button
            onClick={() => {
              getLecturerById(jwtContext.jwtToken)
                .then((lecturer) => lecturerContext.updateLecturer(lecturer))
                .catch((err) => handleBadResponse(err, errorContext.dispatch));
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </main>
  );
}

const SharedLayoutStyles = {
  mainWrapper:
    "w-screen h-screen grid grid-cols-8 grid-rows-7 gap-4 bg-[#f7f7f7] px-4 py-8",
};
