"use client";
import Image from "next/image";
import logo from "../../../public/logopink.png";
import FormPicker from "./formPicker";
import { useState } from "react";
import TLoginRegister from "@/types/loginRegisterFormType";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
export default function LoginRegisterFormSection() {
  const [form, setFormType] = useState<TLoginRegister>("LOGIN");
  return (
    <section className={loginRegisterFormSectionStyles.formSection}>
      <form className={loginRegisterFormSectionStyles.formWrapper}>
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
          {form == "LOGIN" ? <LoginForm /> : <RegisterForm/>}
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
  form:"flex flex-col gap-4"
};
