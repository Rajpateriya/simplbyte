import React, { useState } from "react";
import updatedLogo from "../assets/images/updatedLogo.png";
import { LinkData } from "../assets/data/dummydata";
import { Link, NavLink } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
        <div className="flex flex-row items-center justify-around">
          <div className="flex items-center justify-center font-bold">
            <Link to="/">
              <img src={updatedLogo} alt="logo" className="h-12 w-12" />
            </Link>
            <Link to="/">
              <h1 className="ml-[-75px]">
                Simpl<span className="text-sky-700">byte</span>
              </h1>
            </Link>
            {/* <div className='category flex items-center text-sm gap-3'>
              <HiViewGrid size={20} />
              <span>category</span>
            </div> */}
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex items-center gap-6 bg-white p-2">
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
            <button class="h-12 mx-1 w-32 bg-gradient-to-br from-blue-600 to-blue-400 flex justify-center items-center cursor-pointer font-mono border border-gray-700 text-white transition duration-500 rounded-md shadow-md hover:shadow-lg hover:text-white active:shadow-inner active:shadow-2xl">
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
