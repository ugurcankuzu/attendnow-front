import LoginRegisterCover from "@/components/LoginRegister/loginRegisterCoverSection";
import LoginRegisterFormSection from "@/components/LoginRegister/loginRegisterFormSection";

export default function LoginRegister() {
  return (
    <main className={loginRegisterStyles.mainFrame}>
      <LoginRegisterCover />
      <LoginRegisterFormSection />
    </main>
  );
}

const loginRegisterStyles = {
  mainFrame: "w-screen h-screen flex items-center",
};
