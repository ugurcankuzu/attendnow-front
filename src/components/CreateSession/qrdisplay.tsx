import { useJwtContext } from "@/store/jwtContext";
import closeSession from "@/util/closeSession";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import QRCode from "react-qr-code";

interface IQRDisplayComponent {
  sessionId: string;
  serverAddress: string;
}
export default function QRDisplay({
  sessionId,
  serverAddress,
}: IQRDisplayComponent) {
  const jwtContext = useJwtContext();
  const router = useRouter();
  const handleCloseSession = (event: MouseEvent<HTMLButtonElement>) => {
    closeSession(jwtContext.jwtToken, router);
  };
  return (
    <>
      {sessionId && (
        <div className={QRDisplayStyles.cardWrapper}>
          <div className={QRDisplayStyles.qrWrapper}>
            <QRCode
              value={`http://${serverAddress}:5000?sessionId=${sessionId}`}
            />
          </div>
          <div className={QRDisplayStyles.contentWrapper}>
            <h2 className={QRDisplayStyles.contentTitle}>
              Attendance Check Started!
            </h2>
            <p className={QRDisplayStyles.contentText}>
              Scan this QR code to go to the attendance form.
            </p>
            <button
              onClick={handleCloseSession}
              className={QRDisplayStyles.endButton}
            >
              End Session
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const QRDisplayStyles = {
  cardWrapper:
    "col-span-6 row-span-4 col-start-3 row-start-1 bg-white shadow rounded-md flex p-2",
  qrWrapper: "flex flex-1 justify-center items-center",
  contentWrapper: "flex flex-col justify-center flex-1 gap-4 p-4",
  contentTitle:
    "text-4xl font-bold bg-gradient-pink-green-cross bg-clip-text text-transparent filter-shadow",
  contentText: "font-normal text-lg",
  endButton:
    "bg-gradient-pink-green-cross py-2 px-1 rounded-md text-white font-bold text-lg shadow-md",
};
