"use client";
import CoursePickerCard from "@/components/History/coursePickerCard";
import SessionDetailCard from "@/components/History/sessionDetail";
import SessionListCard from "@/components/History/sessionListCard";
import TCourses from "@/types/courseType";
import TSession from "@/types/sessionType";
import { useEffect, useState } from "react";

export default function History() {
  const [selectedCourse, setSelectedCourse] = useState<TCourses>({
    _id: "",
    courseName: "",
    students: [],
  });
  const [selectedSession, setSelectedSession] = useState<TSession>({
    _id: "",
    course: {
      _id: "",
      courseName: "",
    },
    date: "",
  });
  useEffect(() => {
    setSelectedSession({
      _id: "",
      course: { _id: "", courseName: "" },
      date: "",
    });
  }, [selectedCourse]);
  return (
    <>
      <CoursePickerCard
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
      />
      {selectedCourse._id && (
        <SessionListCard
          courseId={selectedCourse._id}
          setSelectedSession={setSelectedSession}
        />
      )}
      {selectedSession._id && (
        <SessionDetailCard
          session={selectedSession}
          selectedCourse={selectedCourse._id}
        />
      )}
    </>
  );
}
