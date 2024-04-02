import { useLecturerContext } from "@/store/lecturerContext";
import GreetingsCard from "./greetingsCard";
import NavigationCard from "./navigationCard";

interface ISharedLayout {
  children: React.ReactNode;
}

export default function SharedLayout({ children }: ISharedLayout) {
  const lecturerContext = useLecturerContext();

  return (
    <main className={SharedLayoutStyles.mainWrapper}>
      {lecturerContext.lecturer.lecturerName && (
        <>
          <GreetingsCard />
          <NavigationCard />
          {children}
        </>
      )}
    </main>
  );
}

const SharedLayoutStyles = {
  mainWrapper:
    "w-screen h-screen grid grid-cols-8 grid-rows-7 gap-4 bg-[#f7f7f7] px-4 py-8",
};
