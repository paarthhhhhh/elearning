import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";

const Login = () => {
  const navigate = useNavigate();
  const { btnLoading, loginUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { fetchMyCourse } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate, fetchMyCourse);
  };


  return (
    <div className="auth-page bg-gradient-to-b from-indigo-950 via-blue-950 to-violet-900 min-h-screen flex items-center justify-center p-6">
      <div className="auth-form bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={btnLoading}
            className={`w-full py-2 px-4 text-white font-semibold rounded-md shadow-md transition-colors ${btnLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'}`}
          >
            {btnLoading ? "Please Wait..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600">
          <p>
            Don't have an account? <Link to="/register" className="text-indigo-500 hover:text-indigo-600">Register</Link>
          </p>
          <p>
            <Link to="/forgot" className="text-indigo-500 hover:text-indigo-600">Forgot password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
