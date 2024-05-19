"use client";
import QRFaceDetection from "@/components/CreateSession/qrFaceDetection";
import QRDisplay from "@/components/CreateSession/qrdisplay";
import StudentList from "@/components/CreateSession/studentList";
import { useGlobalErrorContext } from "@/store/globalErrorContext";
import { useJwtContext } from "@/store/jwtContext";
import { useLecturerContext } from "@/store/lecturerContext";
import createSession from "@/util/createSession";
import getActiveSession from "@/util/getActiveSession";
import handleBadResponse from "@/util/handleBadResponse";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SessionStart() {
  const courseId = useSearchParams().get("courseId") as string;
  const [serverAddress, setServerAddress] = useState<string>("");
  const [sessionId, setSessionId] = useState<string>("");
  const jwtContext = useJwtContext();
  const lecturerContext = useLecturerContext();
  const errorContext = useGlobalErrorContext();
  const router = useRouter();
  useEffect(() => {
    //Aktif bir session var mı kontrol et.
    //Aktif session yoksa oluştur varsa onu display et.
    window.userEvents.getIPAddress();
    window.userEvents.onGetIPAddress((ipAddress: string) =>
      setServerAddress(ipAddress)
    );
    getActiveSession(jwtContext.jwtToken)
      .then((sessionId: string | null) => {
        if (sessionId) {
          setSessionId(sessionId);
        } else {
          createSession(jwtContext.jwtToken, courseId)
            .then((sessionId: string) => {
              setSessionId(sessionId);
            })
            .catch((err) =>
              handleBadResponse(err, errorContext.dispatch, router)
            );
        }
        console.log(sessionId);
      })
      .catch((err) => handleBadResponse(err, errorContext.dispatch, router));
  }, [jwtContext.jwtToken, courseId]);
  return (
    <>
      {sessionId && courseId && (
        <>
          <QRDisplay serverAddress={serverAddress} sessionId={sessionId} />
          <QRFaceDetection serverAddress={serverAddress} />
          <StudentList courseId={courseId} sessionId={sessionId} />
        </>
      )}
    </>
  );
}

const SessionStartStyles = {};
