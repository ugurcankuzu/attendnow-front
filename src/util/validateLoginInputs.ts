import TLoginInputs from "@/types/loginInputType";

function isValidPassword(password: string): boolean {
  // şimdilik şifre için sadece 8 karakter şartı vardır.
  const passwordRegex: RegExp = /^.{8,}$/;
  return passwordRegex.test(password);
}
function isValidEmail(email: string): boolean {
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
export default function validateLoginInputs(loginInputs: TLoginInputs) {
  const { email, password } = loginInputs;
  return {
    isValidEmail: isValidEmail(email),
    isValidPassword: isValidPassword(password),
  };
}
