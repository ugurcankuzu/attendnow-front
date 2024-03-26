"use client";

import getLecturerById from "@/util/getLecturerById";
import TLecturer from "@/types/lecturerType";
import { useEffect, useState } from "react";
import GreetingsCard from "@/components/Home/greetingsCard";

export default function Home() {
  const [lecturer, setLecturer] = useState<TLecturer>({} as TLecturer);
  useEffect(() => {
    window.userEvents.getJWTFromUserData();
    window.userEvents.onGetJWTFromUserData((jwtTkn: string) => {
      getLecturerById(jwtTkn).then((lecturer) => setLecturer(lecturer));
    });
  }, []);
  return (
    <main className={HomeStyles.mainWrapper}>
      {lecturer && (
        <>
          <GreetingsCard
            lecturerName={lecturer.lecturerName}
            lecturerSurname={lecturer.lecturerSurname}
          />
        </>
      )}
    </main>
  );
}

const HomeStyles = {
  mainWrapper:
    "w-screen h-screen grid grid-cols-8 grid-rows-7 gap-4 bg-[#f7f7f7] px-4 py-8",
};
