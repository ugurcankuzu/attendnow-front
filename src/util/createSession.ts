export default async function createServer(jwtToken: string, courseId: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOST_URL +
      "/lecturer/createSession?courseId=" +
      courseId,
    {
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
      method: "GET",
    }
  );
  if (response.ok) {
    const result = await response.json();
    return result.sessionId;
  }
}
