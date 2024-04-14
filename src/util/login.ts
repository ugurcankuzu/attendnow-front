import TLoginInputs from "@/types/loginInputType";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
import getRoute from "./getRoute";
export async function login(
  formInputs: TLoginInputs,
  setSubmit: Dispatch<SetStateAction<boolean>>,
  writeJWTFunction: any,
  writeJWTListenerFunction: any,
  router: AppRouterInstance
) {
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
    setSubmit(false);
    writeJWTFunction(result);
    writeJWTListenerFunction(() => {
      router.push(getRoute("Home").routeHref);
    });
  } else {
    throw new Error("SERVER_ERROR");
  }
}
