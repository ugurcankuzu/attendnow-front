import Image from "next/image";
import splash from "../../../public/splash.jpeg";
export default function LoginRegisterCover() {
  return (
    <div className={loginRegisterCoverStyles.imageWrapper}>
      <Image
        src={splash}
        className={loginRegisterCoverStyles.image}
        alt="Welcome screen splash art"
      />
      <span className={loginRegisterCoverStyles.sideFilter}>
        <div className={loginRegisterCoverStyles.sideContent}>
          <h1 className={loginRegisterCoverStyles.sideTitle}>ATTENDNOW</h1>
          <p className={loginRegisterCoverStyles.sideSub}>
            Yoklama almanın hızlı, güvenilir yolu.
          </p>
        </div>
      </span>
    </div>
  );
}
const loginRegisterCoverStyles = {
  imageWrapper: "h-full w-3/5 relative",
  image: "w-full h-full",
  sideFilter:
    "absolute w-full h-full bg-black/60 top-0 flex justify-start items-center backdrop-blur",
  sideContent: "p-8 flex flex-col gap-2",
  sideTitle: "text-white text-5xl tracking-widest font-bold",
  sideSub: "text-white text-xl",
};
