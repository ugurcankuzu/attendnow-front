export default async function getStudentsInCourse(
  courseId: string,
  jwtToken: string
) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOST_URL +
      "/lecturer/getStudentsInCourse?courseId=" +
      courseId,
    { method: "GET", headers: { Authorization: "Bearer " + jwtToken } }
  );
  if (response.ok) {
    const result = await response.json();
    return result.students;
  }else if (response.status === 400 || response.status === 401) {
    throw new Error("AUTH_ERROR");
  }
}
