import React from "react";
import { useNavigate } from "react-router-dom";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 w-full">
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-indigo-950 via-blue-950 to-violet-900 text-white h-screen w-full">

          <h1 className="text-center text-9xl font-bold tracking-tight text-white mt-20">
            The best way to start a<br />
            <span className="text-[hsl(200,100%,60%)]"> full-stack </span>,
            <span className="whitespace-nowrap text-[hsl(240,100%,70%)]"> frontend </span>,<br />
            <span className="text-[hsl(280,100%,60%)]"> backend </span>
            developer journey
          </h1>
          <button
            onClick={() => navigate("/courses")}
            className="bg-gradient-to-b from-indigo-850 via-blue-850 to-violet-850  text-white font-semibold py-3 px-6 rounded-lg shadow-2xl transition duration-300 w-1/4 mt-14"
          >
            Get Started
          </button>
        </div>

        <Testimonials />
      </div>
    </>
  );

};



export default Home;
