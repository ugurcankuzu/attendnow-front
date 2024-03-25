import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Input from "../shared/Input";
import TLoginInputs from "@/types/loginInputType";
import TRegisterInputs from "@/types/registerInputType";

interface ILoginForm {
  setFormInputs: Dispatch<SetStateAction<TLoginInputs | TRegisterInputs>>;
}
export default function LoginForm({ setFormInputs }: ILoginForm) {
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputs((state) => ({ ...state, email: event.target.value }));
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputs((state) => ({ ...state, password: event.target.value }));
  };
  return (
    <div className={loginFormStyles.formWrapper}>
      <Input
        labelText="E-mail"
        inputOpts={{
          type: "email",
          placeholder: "Enter your E-mail",
          onChange: handleEmailChange,
        }}
      />
      <Input
        labelText="Password"
        inputOpts={{
          type: "password",
          placeholder: "Enter your password",
          onChange: handlePasswordChange,
        }}
      />
      <button className={loginFormStyles.loginButton}>LOGIN</button>
    </div>
  );
}

const loginFormStyles = {
  formWrapper: "flex flex-col gap-4",
  loginButton:
    "bg-gradient-pink-green-cross text-white px-4 py-2 rounded my-2 tracking-widest font-bold transition-bg duration-[.25s] hover:bg-levander-pink/80",
};
