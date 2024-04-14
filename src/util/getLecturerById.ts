export default async function getLecturerById(jwtTkn: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOST_URL + "/lecturer/",
    {
      headers: { Authorization: "Bearer " + jwtTkn },
      method: "GET",
    }
  );
  if (response.ok) {
    const result = await response.json();
    return result.lecturer;
  } else if (response.status === 400 || response.status === 401) {
    throw new Error("AUTH_ERROR");
  }
}
