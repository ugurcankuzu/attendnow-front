import Input from "../shared/Input";

export default function LoginForm() {
  return (
    <div className={loginFormStyles.formWrapper}>
      <Input
        labelText="E-mail"
        inputOpts={{ type: "email", placeholder: "Enter your E-mail" }}
      />
      <Input
        labelText="Password"
        inputOpts={{ type: "password", placeholder: "Enter your password" }}
      />
      <button className={loginFormStyles.loginButton}>LOGIN</button>
    </div>
  );
}

const loginFormStyles = {
  formWrapper: "flex flex-col gap-4",
  loginButton: "bg-gradient-pink-green-cross text-white px-4 py-2 rounded my-2 tracking-widest font-bold transition-bg duration-[.25s] hover:bg-levander-pink/80",
};
