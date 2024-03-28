import QRCode from "react-qr-code";

interface IQRDisplayComponent {
  sessionId: string;
  serverAddress: string;
}
export default function QRDisplay({
  sessionId,
  serverAddress,
}: IQRDisplayComponent) {
  return (
    <>
      {sessionId && (
        <div>
          <div>
            <QRCode
              value={`http://${serverAddress}:5000?sessionId=${sessionId}`}
            />
          </div>
          <div>
            <h2>Attendance Check Started!</h2>
            <p>
              in your computer's network, we've started to serve attendance
              page!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
