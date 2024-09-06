import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { fetchUser } = UserData();

  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);



  const checkoutHandler = () => {
    // Open a new window with the dummy payment link
    const paymentWindow = window.open(
      process.env.Razor_Pay_Dummy_URL,
      "_blank",
      "width=500,height=500"
    );

    setTimeout(() => {
      if (paymentWindow) {
        paymentWindow.close();
      }
    }, 6000);
  };



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>

          {course && (
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-indigo-950 via-blue-950 to-violet-900 h-screen text-gray-200 p-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl">
                <img
                  src={`${server}/${course.image}`}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-2 text-gray-800">{course.title}</h2>
                  <p className="text-lg text-gray-600 mb-2">Instructor: {course.createdBy}</p>
                  <p className="text-lg text-gray-600 mb-4">Duration: {course.duration} weeks</p>
                  <p className="text-md text-gray-700 mb-4">{course.description}</p>
                  <p className="text-lg font-semibold text-gray-900 mb-6">Let's get started with the course at ₹{course.price}</p>
                  {user ? (
                    <button
                      onClick={() => navigate(`/course/study/${course._id}`)}
                      className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
                    >
                      Study
                    </button>
                  ) : (
                    <button
                      onClick={checkoutHandler}
                      className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
                    >
                      Buy Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}




        </>
      )}
    </>
  );
};

export default CourseDescription;
