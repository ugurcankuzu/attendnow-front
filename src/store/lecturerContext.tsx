"use client";

import TLecturerContext from "@/types/lecturerContextType";
import TLecturer from "@/types/lecturerType";
import { createContext, useContext, useState } from "react";

export const LecturerContext = createContext<TLecturerContext>({
  lecturer: {
    lecturerName: "",
    lecturerSurname: "",
    lecturerCourses: [],
    lecturerSessions: [],
  },
  updateLecturer: (lecturer: TLecturer): void => {},
});

export function useLecturerContext() {
  const context = useContext(LecturerContext);
  return context;
}

export function LecturerContextProvider({ children }: any) {
  const [lecturer, setLecturer] = useState<TLecturer>({
    lecturerName: "",
    lecturerCourses: [],
    lecturerSessions: [],
    lecturerSurname: "",
  });
  const updateLecturer = (lecturer: TLecturer) => {
    setLecturer(lecturer);
  };

  return (
    <LecturerContext.Provider
      value={{ lecturer: lecturer, updateLecturer: updateLecturer }}
    >
      {children}
    </LecturerContext.Provider>
  );
}
