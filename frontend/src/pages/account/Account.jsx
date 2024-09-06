import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };
  return (

    <div className="bg-gradient-to-b from-indigo-950 via-blue-950 to-violet-900 h-screen flex flex-col justify-center items-center p-6">
  {user && (
    <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-indigo-800 mb-6 text-center">My Profile</h2>
      <div className="mb-6">
        <p className="text-xl text-gray-700 mb-2">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-xl text-gray-700">
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate(`/${user._id}/dashboard`)}
          className="flex items-center justify-center py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        >
          <MdDashboard className="mr-2" />
          Dashboard
        </button>

        {user.role === "admin" && (
          <button
            onClick={() => navigate(`/admin/dashboard`)}
            className="flex items-center justify-center py-3 px-6 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition-colors"
          >
            <MdDashboard className="mr-2" />
            Admin Dashboard
          </button>
        )}

        <button
          onClick={logoutHandler}
          className="flex items-center justify-center py-3 px-6 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
        >
          <IoMdLogOut className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  )}
</div>

  );
};

export default Account;
