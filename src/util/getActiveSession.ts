export default async function getActiveSession(jwtToken: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOST_URL + "/lecturer/getActiveSession",
    { headers: { Authorization: "Bearer " + jwtToken }, method: "GET" }
  );
  if (response.ok) {
    const result = await response.json();
    return result.sessionId;
  }
}
