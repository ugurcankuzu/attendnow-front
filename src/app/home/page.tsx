"use client";

import getLecturerById from "@/util/getLecturerById";
import TLecturer from "@/types/lecturerType";
import { useEffect, useState } from "react";
import GreetingsCard from "@/components/Home/greetingsCard";
import NavigationCard from "@/components/Home/navigationCard";
import ActiveSessionsCard from "@/components/Home/activeSessionsCard";
import QuickStartSessionCard from "@/components/Home/quickStartSessionCard";
import { useJwtContext } from "@/store/jwtContext";
import { useLecturerContext } from "@/store/lecturerContext";

export default function Home() {
  const [sessionId, setSessionId] = useState<string>("");
  const jwtContext = useJwtContext();
  const lecturerContext = useLecturerContext();
  useEffect(() => {
    if (jwtContext && lecturerContext) {
      window.userEvents.getJWTFromUserData();
      window.userEvents.onGetJWTFromUserData((jwtTkn: string) => {
        jwtContext.updateJWTToken(jwtTkn);
        getLecturerById(jwtTkn).then((lecturer) =>
          lecturerContext.updateLecturer(lecturer)
        );
      });
    }
  }, []);
  return (
    <main className={HomeStyles.mainWrapper}>
      {lecturerContext.lecturer.lecturerName && (
        <>
          <GreetingsCard />
          <NavigationCard />
          <ActiveSessionsCard sessionId={sessionId} />
          <QuickStartSessionCard setSessionId={setSessionId} />
        </>
      )}
    </main>
  );
}

const HomeStyles = {
  mainWrapper:
    "w-screen h-screen grid grid-cols-8 grid-rows-7 gap-4 bg-[#f7f7f7] px-4 py-8",
};
