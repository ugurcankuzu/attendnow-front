"use client";
import SharedLayout from "@/components/shared/sharedLayout";
import {
  ErrorContextProvider,
  useGlobalErrorContext,
} from "@/store/globalErrorContext";
import { useJwtContext } from "@/store/jwtContext";
import { useLecturerContext } from "@/store/lecturerContext";
import getLecturerById from "@/util/getLecturerById";
import handleBadResponse from "@/util/handleBadResponse";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface IHomeLayout {
  children: ReactNode;
}
export default function HomeLayout({ children }: IHomeLayout) {
  const jwtContext = useJwtContext();
  const lecturerContext = useLecturerContext();
  const router = useRouter();
  const errorContext = useGlobalErrorContext();
  useEffect(() => {
    if (jwtContext.jwtToken) {
      getLecturerById(jwtContext.jwtToken)
        .then((lecturer) => lecturerContext.updateLecturer(lecturer))
        .catch((err) => handleBadResponse(err, errorContext.dispatch, router));
    } else {
      window.userEvents.getJWTFromUserData();
      window.userEvents.onGetJWTFromUserData((jwtToken: string) => {
        jwtContext.updateJWTToken(jwtToken);
      });
    }
  }, [jwtContext.jwtToken]);
  return (
    <ErrorContextProvider>
      <SharedLayout>{children}</SharedLayout>
    </ErrorContextProvider>
  );
}
