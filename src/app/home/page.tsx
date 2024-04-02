"use client";

import QuickStartSessionCard from "@/components/Home/quickStartSessionCard";
import { useJwtContext } from "@/store/jwtContext";
import { useLecturerContext } from "@/store/lecturerContext";
import getLecturerById from "@/util/getLecturerById";
import { useEffect, useState } from "react";

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
  return <QuickStartSessionCard setSessionId={setSessionId} />;
}

const HomeStyles = {
  mainWrapper:
    "w-screen h-screen grid grid-cols-8 grid-rows-7 gap-4 bg-[#f7f7f7] px-4 py-8",
};
