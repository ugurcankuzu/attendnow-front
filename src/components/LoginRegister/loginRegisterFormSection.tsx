"use client";
import Image from "next/image";
import logo from "../../../public/logopink.png";
import FormPicker from "./formPicker";
import { FormEvent, useEffect, useState } from "react";
import TLoginRegister from "@/types/loginRegisterFormType";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import TLoginInputs from "@/types/loginInputType";
import TRegisterInputs from "@/types/registerInputType";
import { login } from "@/util/login";
import { useRouter } from "next/navigation";
import validateLoginInputs from "@/util/validateLoginInputs";
import { useGlobalErrorContext } from "@/store/globalErrorContext";
import handleBadResponse from "@/util/handleBadResponse";
export default function LoginRegisterFormSection() {
  const [form, setFormType] = useState<TLoginRegister>("LOGIN");
  const router = useRouter();
  const [formInputs, setFormInputs] = useState<TLoginInputs | TRegisterInputs>(
    {} as TLoginInputs
  );
  const [isSubmit, setSubmit] = useState<boolean>(false);
  const errorContext = useGlobalErrorContext();

  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
    if (form === "LOGIN") {
      const validationResult = validateLoginInputs(formInputs);
      if (!validationResult.isValidEmail || !validationResult.isValidPassword) {
        errorContext.dispatch({
          type: "SHOW_ERROR",
          error: new Error("Please enter a valid email or password"),
        });
        setSubmit(false);
        setTimeout(() => errorContext.dispatch({ type: "HIDE_ERROR" }), 5000);
      } else {
        login(
          formInputs,
          setSubmit,
          window.userEvents.writeJWT,
          window.userEvents.onWriteJWTEnd,
          router
        )
          .catch((err) => handleBadResponse(err, errorContext.dispatch, router))
          .finally(() => setSubmit(false));
      }
    }
  };
  useEffect(() => {
    if (form === "LOGIN") {
      setFormInputs({
        email: "",
        password: "",
      });
    } else {
      setFormInputs({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    }
  }, [form]);
  return (
    <section className={loginRegisterFormSectionStyles.formSection}>
      <form
        className={loginRegisterFormSectionStyles.formWrapper}
        onSubmit={handleSubmit}
      >
        <div className={loginRegisterFormSectionStyles.logoWrapper}>
          <Image
            src={logo}
            alt="Attend Now Logo"
            className={loginRegisterFormSectionStyles.logo}
          />
          <h1 className={loginRegisterFormSectionStyles.brandName}>
            AttendNow
          </h1>
        </div>
        <div className={loginRegisterFormSectionStyles.form}>
          <FormPicker setFormType={setFormType} form={form} />
          {form == "LOGIN" ? (
            <LoginForm setFormInputs={setFormInputs} isSubmit={isSubmit} />
          ) : (
            <RegisterForm setFormInputs={setFormInputs} />
          )}
        </div>
      </form>
    </section>
  );
}

const loginRegisterFormSectionStyles = {
  formSection: "w-2/5 h-full bg-white flex justify-center items-center",
  formWrapper: "w-full min-h-[400px] flex flex-col gap-4 p-4 ",
  logoWrapper: "w-full flex justify-center items-center gap-4",
  logo: "w-[50px]",
  brandName: "text-3xl tracking-widest font-normal",
  form: "flex flex-col gap-4",
};
