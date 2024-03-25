import TLoginInputs from "@/types/loginInputType";
export async function login(formInputs: TLoginInputs) {
  const { email, password } = formInputs;
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOST_URL + "/auth/lecturer/login",
    {
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  );

  if (response.ok) {
    const result = await response.text();
    return result;
  }
}
