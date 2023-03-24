import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "./images/logo.png";

const NavBar = ({ setStoredToken }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

    useEffect(() => {
      
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full py-4 px-2 2xl:px-16">
        <Link to="/">
          <img src={logo} width={85} height={50} />
        </Link>

        <div>
          <ul className="hidden md:flex" style={{ color: `${linkColor}` }}>
            <Link to="/">
              <li className="ml-10 uppercase text-sm hover:border-b hover:border-y-black ">
                Home
              </li>
            </Link>
            <Link to="/#about">
              <li className="ml-10 uppercase text-sm hover:border-b hover:border-y-black ">
                About
              </li>
            </Link>
            <Link to="/#skills">
              <li className="ml-10 uppercase text-sm hover:border-b hover:border-y-black ">
                Skills
              </li>
            </Link>
            <Link to="/#projects">
              <li className="ml-10 uppercase text-sm hover:border-b hover:border-y-black ">
                Projects
              </li>
            </Link>
            <Link to="/#blogs">
              <li className="ml-10 uppercase text-sm hover:border-b hover:border-y-black ">
                Blogs
              </li>
            </Link>
            <Link to="/#contact">
              <li
                className="ml-10 uppercase text-sm hover:border-b hover:border-y-black "
                onClick={() => {
                  localStorage.setItem("token", "");
                  setStoredToken("");
                }}
              >
                Logout
              </li>
            </Link>
          </ul>
          <div
            className="md:hidden"
            onClick={handleNav}
            style={{ color: `${linkColor}` }}
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full">
              <Link to="/">
                <img src={logo} width={87} height={35} />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something together
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col  py-4">
              <ul onClick={handleNav}>
                <Link to="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link to="/#about">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link to="/#skills">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link to="/#projects">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link to="/#blogs">
                  <li className="py-4 text-sm">Blogs</li>
                </Link>
                <Link to="/#contact">
                  <li
                    className="py-4 text-sm"
                    onClick={() => {
                      localStorage.setItem("token", "");
                      setStoredToken("");
                    }}
                  >
                    Logout
                  </li>
                </Link>
              </ul>
              <div className="pt-10">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's Connect{" "}
                </p>
                <div className="flex items-center justify-between w-full  my-4 sm:w-[80%] w-100">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:scale-110 ease-in   duration-300">
                    <a
                      href="https://www.linkedin.com/in/michael-munavu-0b0b1b1b9/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a
                      href="https://github.com/MICHAELMUNAVU83"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a
                      href="https://twitter.com/MichaelTrance1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a rel="noopener noreferrer" href="tel:0740769596">
                      <FiPhoneCall />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a
                      href="https://wa.me/254740769596"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
