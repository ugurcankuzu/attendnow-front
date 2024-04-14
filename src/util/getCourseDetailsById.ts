export default async function getCourseDetailsById(
  courseId: Array<string>,
  jwtToken: string
) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOST_URL + "/lecturer/getCoursesById",
    {
      method: "POST",
      body: JSON.stringify(courseId),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwtToken,
      },
    }
  );
  if (response.ok) {
    const result = await response.json();
    return result.courses;
  } else if (response.status === 400 || response.status === 401) {
    throw new Error("AUTH_ERROR");
  }
}
