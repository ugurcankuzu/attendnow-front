import Input from "../shared/Input";

export default function RegisterForm() {
  return (
    <div className={registerFormStyles.formWrapper}>
      <div className={registerFormStyles.nameSurnameWrapper}>
        <Input
          labelText="Name"
          styleOpts={{ inputWrapper: registerFormStyles.halfInput }}
        />
        <Input
          labelText="Surname"
          styleOpts={{
            inputWrapper: registerFormStyles.halfInput,
          }}
        />
      </div>
      <Input labelText="E-mail" inputOpts={{ type: "email" }} />
      <Input labelText="Password" inputOpts={{ type: "password" }} />
      <Input labelText="Pasword Correct" inputOpts={{ type: "password" }} />
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
