export default async function getCourseDetailsById(
  courseId: Array<string>,
  jwtToken: string
) {
  // HATANIN SEBEBİ MUHTEMELEN JWT TOKEN. YARIN SABAH BU APP İÇİN BİR CONTEXT API YAZ JWT'Yİ TÜM UYGULAMAYA ORDAN DAĞIT
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
  }
}
