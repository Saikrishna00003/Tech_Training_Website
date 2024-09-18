import React from "react";
import homeimg from "../assests/homeimg.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  px-4 md:flex-row">
        <div className="flex flex-col justify-center h-screen">
          <h2 className="text-2xl sm:text-7xl font-bold text-white">
            Building skills, shaping futures
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Our training programs equip students with the skills and knowledge
            needed to excel in their careers. With a focus on hands-on learning
            and industry relevance, we ensure that every individual is prepared
            for successful placements, leading to rewarding career
            opportunities.
          </p>

          <div>
            <Link
              to="courses"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Our Courses
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="m-4">
          <img
            src={homeimg}
            alt="my profile"
            className="rounded-md mx-auto w-2/3 md:w-full h-96 max-w-screen-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
