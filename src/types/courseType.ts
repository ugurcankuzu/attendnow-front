import TStudent from "./studentType";

type TCourses = {
  _id: string;
  courseName: string;
  students: Array<TStudent>;
};

export default TCourses;
