"use client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Input from "../shared/Input";
import TLoginInputs from "@/types/loginInputType";
import TRegisterInputs from "@/types/registerInputType";
import { useGlobalErrorContext } from "@/store/globalErrorContext";

interface ILoginFormComponent {
  setFormInputs: Dispatch<SetStateAction<TLoginInputs | TRegisterInputs>>;
  isSubmit: boolean;
}
export default function LoginForm({
  setFormInputs,
  isSubmit,
}: ILoginFormComponent) {
  const errorContext = useGlobalErrorContext();
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputs((state) => ({ ...state, email: event.target.value }));
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputs((state) => ({ ...state, password: event.target.value }));
  };
  return (
    <div className={loginFormStyles.formWrapper}>
      {errorContext.state.showError && (
        <p className={loginFormStyles.error}>
          {errorContext.state.error?.message}
        </p>
      )}
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
      <button className={loginFormStyles.loginButton} disabled={isSubmit}>
        LOGIN
      </button>
    </div>
  );
}

const loginFormStyles = {
  formWrapper: "flex flex-col gap-4",
  error: "text-sm text-english-violet",
  loginButton:
    "bg-gradient-pink-green-cross text-white px-4 py-2 rounded my-2 tracking-widest font-bold transition-bg duration-[.25s] hover:bg-levander-pink/80  disabled:bg-none disabled:bg-slate-300/50",
};
