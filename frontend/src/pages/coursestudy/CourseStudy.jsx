import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  return (
    <>

<div className="bg-gradient-to-b from-indigo-950 via-blue-950 to-violet-900 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full text-center">
        <img
          src={`${server}/${course.image}`}
          alt={course.title}
          className="w-80 h-48 object-cover rounded-md mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h2>
        <h4 className="text-lg text-gray-600 mb-4">{course.description}</h4>
        <h5 className="text-md text-gray-700 mb-2">by - {course.createdBy}</h5>
        <h5 className="text-md text-gray-700 mb-6">Duration - {course.duration} weeks</h5>
        <Link
          to={`/lectures/${course._id}`}
          className="inline-block py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        >
          Lectures
        </Link>
      </div>
    </div>
    </>
  );
};

export default CourseStudy;
