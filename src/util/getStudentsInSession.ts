export default async function getStudentsInSession(
  sessionId: string,
  jwtToken: string
) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOST_URL +
      "/lecturer/getStudentsInSession?sessionId=" +
      sessionId,
    { method: "GET", headers: { Authorization: "Bearer " + jwtToken } }
  );
  if (response.ok) {
    const result = await response.json();
    return result.students;
  }
}
