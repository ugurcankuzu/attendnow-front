import QRCode from "react-qr-code";

interface IQRFaceDetectionComponent {
  serverAddress: string;
}
export default function QRFaceDetection({
  serverAddress,
}: IQRFaceDetectionComponent) {
  return (
    <div className={QRFaceDetectionStyles.cardWrapper}>
      <div className={QRFaceDetectionStyles.qrWrapper}>
        <QRCode
          value={`http://${serverAddress}:5000/counter`}
          className={QRFaceDetectionStyles.qrDisplay}
        />
      </div>
      <div className={QRFaceDetectionStyles.contentWrapper}>
        <h2 className={QRFaceDetectionStyles.contentTitle}>
          Do you want to try our new experimental feature ?
        </h2>
        <p className={QRFaceDetectionStyles.contentText}>
          Scan this QR code to go to the face detection page to count your
          class. <span className={QRFaceDetectionStyles.caution}>*</span>
        </p>
        <p className={QRFaceDetectionStyles.note}>
          *:This feature for lecturers.
        </p>
      </div>
    </div>
  );
}

const QRFaceDetectionStyles = {
  cardWrapper:
    "col-span-6 row-span-2 col-start-3 row-start-3 bg-white shadow rounded-md flex p-2",
  qrWrapper: "flex flex-1 justify-center items-center",
  qrDisplay: "w-36",
  contentWrapper: "flex flex-col justify-center items-center flex-1 gap-2 p-4",
  contentTitle:
    "text-2xl font-bold bg-gradient-pink-green-cross bg-clip-text text-transparent filter-shadow",
  contentText: "text-md font-normal",
  caution: "text-sky-magenta text-xs",
  note: "self-start text-xs text-slate-300",
};
