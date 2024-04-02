"use client";
import SharedLayout from "@/components/shared/sharedLayout";
import { useJwtContext } from "@/store/jwtContext";
import { useLecturerContext } from "@/store/lecturerContext";
import getLecturerById from "@/util/getLecturerById";
import { ReactNode, useEffect } from "react";

interface IHomeLayout {
  children: ReactNode;
}
export default function HomeLayout({ children }: IHomeLayout) {
  const jwtContext = useJwtContext();
  const lecturerContext = useLecturerContext();

  useEffect(() => {
    if (jwtContext.jwtToken) {
      getLecturerById(jwtContext.jwtToken).then((lecturer) =>
        lecturerContext.updateLecturer(lecturer)
      );
    } else {
      window.userEvents.getJWTFromUserData();
      window.userEvents.onGetJWTFromUserData((jwtToken: string) => {
        jwtContext.updateJWTToken(jwtToken);
      });
    }
  }, [jwtContext.jwtToken]);
  return <SharedLayout>{children}</SharedLayout>;
}
