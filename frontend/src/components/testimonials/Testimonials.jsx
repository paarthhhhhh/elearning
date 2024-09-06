import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "John Doe",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 4,
      name: "Jane Smith",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];



  return (
    <div className="pb-12 text-purple-100 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-900 via-cyan-950 to-indigo-900 w-full">
      <div className="m-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-purple-200">The best of the industry course...</h2>
        <h3 className="mt-2 text-4xl font-bold tracking-tight text-purple-50">...but ONLY the parts you need</h3>
        <p className="mt-4 text-base text-purple-200 md:text-lg">Take what you want and nothing more!</p>
      </div>
      <div className="flex justify-center flex-wrap gap-6 px-4">

        
        {testimonialsData.map((e) => (
          <div
            className="relative flex flex-col justify-between w-80 rounded-md border border-purple-200/20 bg-white/5 transition-colors hover:border-purple-300/50"
            key={e.id}
          >
            <div className="flex items-center space-x-4 bg-white/10 p-2 pl-5 transition-colors hover:bg-white/20">
              <img src={e.image} alt="" className="w-16 h-16 rounded-full object-cover" />
              <p className="name">{e.name}</p>
            </div>
            <div className="m-6 h-full text-sm text-purple-100 subpixel-antialiased">
              <p>{e.message}</p>
              <p>{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
