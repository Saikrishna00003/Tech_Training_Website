import React from "react";

import trainerimg from "../assests/trainerimg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Trainers = () => {
  const techs = [
    {
      id: 1,
      src: trainerimg,
      title: "Sai Krishna",
      heading: "FULL STACK DEVELOPER",
      description: "Skilled in HTML, CSS, TailwindCSS, JavaScript, React.js, MySQL, Java, and Spring Boot, the trainer guides students through full-stack development, preparing them for real-world projects.",
      child: (
        <div className="flex justify-center space-x-4 mt-4 social-icon">
          <a
            href="https://www.linkedin.com/in/gvsaikrishna"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Saikrishna00003"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      ),
        },
  ];

  return (
    <div
      name="trainers"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-blue-500 p-2 inline">
            Faculty that brings out the best in you
          </p>
          <p className="py-6 text-2xl">The Executive Team</p>
        </div>

        <div className="w-full grid grid-cols-2  sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, heading, description,child, href }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 shadow-blue-200 py-2 rounded-lg `}
            >
              <img src={src} alt="" className="w-20 mx-auto rounded" />
              <p className="mt-2 text-2xl">{title}</p>
              <p className="mt-2 text-2xl text-sky-300">{heading}</p>

              <p className="py-2 px-3 ">{description}</p>
              
              {child}
            
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
