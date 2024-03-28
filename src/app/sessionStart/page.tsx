"use client";
import QRDisplay from "@/components/CreateSession/qrdisplay";
import { useJwtContext } from "@/store/jwtContext";
import createSession from "@/util/createSession";
import getActiveSession from "@/util/getActiveSession";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SessionStart() {
  const selectedCourse = useSearchParams().get("selectedCourse") as string;
  const [serverAddress, setServerAddress] = useState<string>("");
  const [sessionId, setSessionId] = useState<string>("");
  const jwtContext = useJwtContext();
  useEffect(() => {
    //Aktif bir session var mı kontrol et.
    //Aktif session yoksa oluştur varsa onu display et.
    window.userEvents.getIPAddress();
    window.userEvents.onGetIPAddress((ipAddress: string) =>
      setServerAddress(ipAddress)
    );
    getActiveSession(jwtContext.jwtToken).then((sessionId: string | null) => {
      if (sessionId) {
        setSessionId(sessionId);
      } else {
        createSession(jwtContext.jwtToken, selectedCourse).then(
          (sessionId: string) => {
            setSessionId(sessionId);
          }
        );
      }
    });
  }, []);
  return (
    <main className="mt-24">
      <QRDisplay serverAddress={serverAddress} sessionId={sessionId} />
    </main>
  );
}

const SessionStartStyles = {};
