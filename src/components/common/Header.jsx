import React, { useState } from "react";
import LogoImg from "../assets/images/logo-black.png";
import { LinkData } from "../assets/data/dummydata";
import { Link, NavLink } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <img src={LogoImg} alt="logo" className="h-5 w-5" />
            <h1 className="ml-[-50px]">
            Simpl<span className="text-sky-700">byte</span>
            </h1>
            {/* <div className='category flex items-center text-sm gap-3'>
              <HiViewGrid size={20} />
              <span>category</span>
            </div> */}
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex items-center gap-6">
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary text-sm" : "text-[15px]"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flex items-center gap-5">
            {/* <button>
              <BiShoppingBag size={25} />
            </button> */}
            {/* <button className="text-center rounded-md bg-sky-300 text-white  px-3 py-1 focus:outline-none flex gap-3 items-center  justify-center hover:bg-white hover:text-black hover: border-solid hover:border-black hover:rounded-md"><Link to='/internships'>APPLY</Link> </button> */}
            <button class="h-12 mx-1 w-32 bg-gradient-to-br from-gray-700 to-gray-400 flex justify-center items-center cursor-pointer font-mono border border-gray-700 text-gray-400 transition duration-500 rounded-md shadow-md hover:shadow-xl hover:text-gray-200 active:shadow-inner active:shadow-2xl">
              <Link to="/internships">APPLY</Link>
            </button>

            <button className="open-menu" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
