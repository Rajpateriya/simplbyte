import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import back from "../components/assets/images/back.png";
import { About } from "./About";
// import { Blog } from "./Blog";
import { Contact } from "./Contact";
// import { Instructor } from "./Instructor";
import { Internships } from "./Internships";

export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Internships />
      {/* <Instructor /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
};
export const HomeContent = () => {
  return (
    <>
      <section className="bg-secondary py-10 h-[92vh] md:h-full md:px-3">
        <div className="container">
          <div className="flex items-center justify-center md:flex-col">
            <div className="left w-1/2 text-black md:w-full">
              <h1 className="text-4xl leading-tight text-black font-semibold">
                Unleash <br /> Your Full Potential With <br /> Simpl
                <span className="text-blue-800">byte</span>
              </h1>
              <h3 className="text-lg mt-3">
                We are a Dynamic and an Innovative Tech Company <br />
                Revolutionizing the way of learning
              </h3>
              {/* <span className="text-[16px]">
                Revolutionizing the way of learning
              </span> */}

              <div className="relative text-gray-600 focus-within:text-gray-400 mt-5">
                <button class="h-12 py-5 px-2 w-36 mb-4 bg-gradient-to-br from-blue-600 to-blue-400 flex gap-3 flex justify-center items-center cursor-pointer font-mono border border-gray-600 text-white transition duration-500 rounded-md shadow-md hover:shadow-xl hover:text-gray-200 active:shadow-inner active:shadow-2xl">
                <Link to="/internships">Get Started </Link>
                  <HiOutlineArrowNarrowRight />
                </button>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
              </div>
              <span className="text-[14px] my-30">
                You're guaranteed to find something that's right for you.
              </span>
            </div>
            <div className="right w-1/2 md:w-full relative">
              <div className="images relative">
                {/* <img src={heroImgback} alt='' className=' absolute top-32 left-10 w-96 md:left-10' /> */}
                <div className="img h-[85vh] w-full">
                  <img
                    src={back}
                    alt=""
                    className="h-full w-full object-contain z-20 relative"
                  />
                </div>
              </div>
              {/* <div className='content'> */}
              {/* <button className='bg-white shadow-md absolute top-56 left-0 z-30 p-2 flex items-center rounded-md'>
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400'>
                    <BsFillLightningChargeFill size={25} />
                  </div>
                  <div className='text flex flex-col items-start px-4'>
                    <span className='text-sm text-black'>Congrstulations</span>
                    <span className='text-[12px]'>Your admission completed</span>
                  </div>
                </button> */}
              {/* <button className='bg-white shadow-md absolute bottom-32 left-48 z-30 p-2 flex items-center rounded-md pr-8'>
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-blue-400'>
                    <FaGraduationCap size={25} />
                  </div>
                  <div className='text flex flex-col items-start px-4'>
                    <span className='text-sm text-black'>450K</span>
                    <span className='text-[12px]'>Assisted Student</span>
                  </div>
                </button>
                <button className='bg-white shadow-md absolute top-56 -right-32 z-30 p-2  md:top-96 md:-right-5 flex items-center rounded-md'>
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400'>
                    <FaUsers size={25} />
                  </div>
                  <div className='text flex flex-col items-start px-4'>
                    <span className='text-sm text-black'>User Experience Class</span>
                    <span className='text-[12px]'>Tomorrow is our</span>
                  </div>
                </button>
                <button className='bg-white shadow-md absolute top-32 right-32 z-30 p-2 flex items-center rounded-md'>
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-indigo-400'>
                    <FaBookReader size={25} />
                  </div>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
