export default async function getSessionHistory(
  courseId: string,
  jwtToken: string
) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOST_URL +
      "/lecturer/getSessionHistory?courseId=" +
      courseId,
    { headers: { Authorization: "Bearer " + jwtToken }, method: "GET" }
  );
  if (response.ok) {
    const result = await response.json();
    return result.sessions;
  } else if (response.status === 400 || response.status === 401) {
    throw new Error("AUTH_ERROR");
  }
}
