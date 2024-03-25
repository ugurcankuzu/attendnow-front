import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Input from "../shared/Input";
import TLoginInputs from "@/types/loginInputType";
import TRegisterInputs from "@/types/registerInputType";

interface IRegisterForm {
  setFormInputs: Dispatch<SetStateAction<TLoginInputs | TRegisterInputs>>;
}
export default function RegisterForm({ setFormInputs }: IRegisterForm) {
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputs((state) => ({ ...state, name: event.target.value }));
  };
  const handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputs((state) => ({ ...state, surname: event.target.value }));
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputs((state) => ({ ...state, email: event.target.value }));
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputs((state) => ({ ...state, password: event.target.value }));
  };
  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setFormInputs((state) => ({
      ...state,
      confirmpassword: event.target.value,
    }));
  };
  return (
    <div className={registerFormStyles.formWrapper}>
      <div className={registerFormStyles.nameSurnameWrapper}>
        <Input
          labelText="Name"
          styleOpts={{ inputWrapper: registerFormStyles.halfInput }}
          inputOpts={{ onChange: handleNameChange }}
        />
        <Input
          labelText="Surname"
          styleOpts={{
            inputWrapper: registerFormStyles.halfInput,
          }}
          inputOpts={{ onChange: handleSurnameChange }}
        />
      </div>
      <Input
        labelText="E-mail"
        inputOpts={{ type: "email", onChange: handleEmailChange }}
      />
      <Input
        labelText="Password"
        inputOpts={{ type: "password", onChange: handlePasswordChange }}
      />
      <Input
        labelText="Pasword Confirm"
        inputOpts={{ type: "password", onChange: handleConfirmPasswordChange }}
      />
      <button className={registerFormStyles.registerButton}>REGISTER</button>
    </div>
  );
}

const registerFormStyles = {
  formWrapper: "w-full flex flex-col gap-2",
  nameSurnameWrapper: "flex gap-2",
  halfInput: "w-1/2",
  registerButton:
    "bg-gradient-pink-green-cross text-white px-4 py-2 rounded my-2 tracking-widest font-bold transition-bg duration-[.25s] hover:bg-levander-pink/80",
};
