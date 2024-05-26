import React from "react"
import aboutImg from "../components/assets/images/boy.jpg"
// import aboutImgBanner from "../components/assets/images/boy.jpg"
import imgs from "../components/assets/images/join1.png"
import { FaBookDead, FaCode, FaCodeBranch } from "react-icons/fa"
import { RiGroupLine } from "react-icons/ri";
import { BsHddStack } from "react-icons/bs";
import {Link} from "react-router-dom";
import aboutPageImg from "../components/assets/images/aboutPageImg.png"

import { AiOutlineCheck } from "react-icons/ai"

export const About = () => {
  return (
    <>
      <section className='about py-4'>
        <div className='flex flex-col justify-center items-center p-3 '>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-bold text-black'>Know More About Us</h1>
            <span className='text-sm mt-2 block font-semibold'>Well you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-2'>
            <AboutCard color='bg-white' icon={<FaCode color="red" size={40} />} title='Simplified Internships' desc="Explore virtual internships in Web Dev, App Dev, Full Stack, ML, and Data Science; focused learning" />
            <AboutCard color='bg-white' icon={<FaCodeBranch color="red" size={40} />} title='Build your Network' desc="We believe in networking to connect with other interns who are interested in the same things. " />
            <AboutCard color='bg-white' icon={<RiGroupLine color="red" size={40} />} title='Building Student Trust' desc="We ensures your success and building a trusted platform for valuable learning experiences. " />
            <AboutCard color='bg-white' icon={<BsHddStack color="red" size={40} />} title='Structured Learning' desc="Enjoy growth-oriented internship at Bharat Intern, tailored for maximum skill development. " />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-black ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 hover:bg-gray-300 `}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
    <section className='mb-16'>
      <div className='container'>
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
          <img src={aboutPageImg} alt='aboutImg' className='rounded-xl m-auto object-contain' />
          {/* <img src={aboutImgBanner} alt='aboutImg' className='rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80' /> */}
          {/* <div className='img-group ml-24 mt-3'>
            <img src={imgs} alt='' />
            <span className='text-[14px]'>
              Joined over <label className='text-black text-sm'>,7000+</label> students
            </span>
          </div> */}
        </div>
        <div className='right w-2/3 md:w-full md:mt-16 p-5'>
          <div className='heading w-4/5 md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Achieve Your Goals With Simplbyte</h1>
            <span className='text-[14px] mt-2 block'> Welcome to SimplyByte! We specialize in cultivating tech expertise through immersive internships in web/app development, Java, data science, marketing, and graphic design. Our meticulously crafted programs deliver hands-on training, mentorship, and collaboration with industry leaders. Embracing diversity, inclusion, and innovation, we empower individuals to excel in the dynamic tech domain.</span>
            <ul className='my-5'>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' /> Hands-on experience and mentorship.
              </li>
              <li className='text-sm flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-green-500' />
                Real-world projects.
              </li>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' />
                Inclusive community fostering innovation.
              </li>
              <li className='text-sm flex items-center gap-5 mt-2'>
                <AiOutlineCheck className='text-green-500' />
                Join us to unleash your tech talent!
              </li>
            </ul>
            <button className='px-5 py-2 border border-black bg-gradient-to-br from-blue-600 to-blue-400 rounded-md text-sm text-white'><Link to='/internships'>APPLY NOW</Link></button>
          </div>
        </div>
      </div>
    </section>
  )
}
