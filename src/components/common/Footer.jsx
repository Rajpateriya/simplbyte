import React from "react"
import logImg from "../assets/images/logo-black.png"
import { BsApple, BsGooglePlay } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom"
import { SiTheregister } from "react-icons/si";
import { DiSenchatouch } from "react-icons/di";

export const Footer = () => {
  return (
    <>
      <section className='app w-3/5 m-auto rounded-lg shadow-shadow2 text-white flex md:flex-col bg-primary mt-16 relative z-10'>
        <div className='left w-[60%] md:w-full p-10'>
          <h1 className='text-4xl font-semibold leading-tight'>
           
            Join hand with us <br /> Apply for Collaboration
          </h1>
        </div>
        <div className='right w-[40%] md:w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-[#FF7C54] md:bg-transparent md:p-8'>
          <div className='box flex gap-2 items-center px-5 py-3 border text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow1 rounded-sm'>
          <DiSenchatouch />
            <label className='text-sm'><Link to ='/partnership'>Visit</Link></label>
          </div>
          <div className='box flex gap-2 items-center px-5 py-3 bg-white text-black shadow-shadow1 rounded-sm'>
          <SiTheregister />
            <label className='text-sm'>Register Here</label>
          </div>
        </div>
      </section>
      <footer className='bg-[rgb(243,244,248)] p-10 mt-24 flex items-center justify-center w-full'>
        <div className='grid grid-cols-3 gap-5 md:grid-cols-2 place-items-center md:place-items-start md:gap-5'>
          <div className='logo'>
          <h1 className="text-black text-sm font-semibold mb-5 text-xl">
            Simpl<span className="text-sky-700">byte</span>
            </h1>
            {/* <img src={logImg} alt='logImg' className='h-5 w-5' /> <h2>Simplbyte</h2> */}
            <span className='text-[14px]'>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</span>
          </div>

          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Company</h4>
            <NavLink to='#' className=' text-[14px] block mb-2 '>
              <Link to="/contact">Contact</Link>
            </NavLink>
            {/* <NavLink to='#' className=' text-[14px] block mb-2'>
              Portfolio
            </NavLink> */}
            {/* <NavLink to='#' className=' text-[14px] block mb-2'>
              Blog
            </NavLink> */}
            {/* <NavLink to='#' className=' text-[14px] block mb-2'>
              Our team
            </NavLink> */}
            <NavLink to='#' className=' text-[14px] block mb-2'>
            <Link to="/about">blog</Link>
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
            <Link to="/contact">Get in touch</Link>
            </NavLink>
            {/* <NavLink to='#' className=' text-[14px] block mb-2'>
              FAQ
            </NavLink> */}
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Latest news
            </NavLink>
          </li>
          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Subscribe</h4>
            <NavLink to='#' className=' text-[14px] block mb-2'>
            <Link to='/about'>About us</Link>
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
            <Link to='/contact'>Contact</Link>
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
            <Link to='/internships'>Internships</Link>
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
            <Link to='/internships'>Services</Link>
            </NavLink>
          </li>
        </div>
      </footer>
    </>
  )
}
