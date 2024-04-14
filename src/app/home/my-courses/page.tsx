"use client";
import CoursesCard from "@/components/My-Courses/coursesCard";
import StudentsCard from "@/components/My-Courses/studentsCard";
import TCourses from "@/types/courseType";
import { useState } from "react";

export default function MyCourses() {
  const [selectedCourse, setSelectedCourse] = useState<TCourses>({
    _id: "",
    courseName: "",
    students: [],
  });
  return (
    <>
      <CoursesCard setSelectedCourse={setSelectedCourse} />
      {selectedCourse._id && <StudentsCard selectedCourse={selectedCourse} />}
    </>
  );
}
