import React from "react";
import { internships } from "../components/assets/data/dummydata";
import { FaBook } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Internships = () => {
  return (
    <>
      <section className="courses bg-[#F3F4F8] py-5 ">
        <div className="w-4/5 m-auto">
          <div className="heading py-10 text-center w-2/3 m-auto md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              Find The Right Opportunity For You
            </h1>
            <span className="text-[14px] mt-2 block">
              you don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-1">
            {internships.map((item) => (
              <div className="box rounded-lg shadow-shadow1 bg-white">
                <div className="images rounded-t-lg relative overflow-hidden  h-40 w-ful">
                  <img
                    src={item.cover}
                    alt=""
                    className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
                  />
                  <div className="categ flex gap-4 absolute top-0 m-3">
                    {/* <span className='text-[14px] bg-blue-700 p-1 px-3 text-white rounded-[5px] shadow-md'>Finance</span> */}
                    {/* <span className='text-[14px] bg-pink-700 p-1 px-3 text-white rounded-[5px] shadow-md'>Lifestyle</span> */}
                  </div>
                </div>
                <div className="text p-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FaBook />
                      <span className="text-[14px] ml-2"> 2 Task</span>
                    </div>
                    <div className="flex items-center">
                      <AiFillStar className="text-orange-500" />
                      <span className="text-[14px] ml-2"> 4.50(2)</span>
                    </div>
                  </div>
                  <h3 className="text-black my-4 font-medium h-10">
                    {item.title}
                  </h3>
                  <div className="user flex items-center">
                    {/* <img className='rounded-full' src='' alt='' /> */}
                    {/* <span className='text-[14px] ml-2'> Simplbyte</span> */}
                    <p>{item.description}</p>
                  </div>
                </div>
                <div
                  to="/"
                  className="flex items-center justify-between border-t border-gray-200 p-3"
                >
                  {/* <span className='text-sm text-primary'>49rs</span> */}
                  <div className="text-[14px] ml-2 flex items-center">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfXFT0GRVAloio82BlhnL2C50oD2q4uyD3e227GBtzKmXiAcQ/viewform"
                      target="_blank"
                    >
                      Apply Now
                    </a>{" "}
                    <HiOutlineArrowNarrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
