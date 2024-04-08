import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default async function closeSession(
  jwtToken: string,
  router: AppRouterInstance
) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOST_URL + "/lecturer/closeSession",
    { headers: { Authorization: "Bearer " + jwtToken }, method: "GET" }
  );
  if (response.ok) {
    router.push("/home");
  }
}
