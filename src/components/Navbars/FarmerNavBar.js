import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../images/logo.png";

const FarmerNavBar = ({ setStoredToken }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const navigate = useNavigate();

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
          <img src={logo} width={85} height={50} alt="logo" />
        </Link>

        <div>
          <ul className="hidden md:flex" style={{ color: `${linkColor}` }}>
            <Link to="/MySelectedCrops">
              <li className="ml-10 uppercase text-sm hover:border-b hover:border-y-black ">
                My Selected Crops
              </li>
            </Link>

            <Link to="/AddProductsForSale">
              <li className="ml-10 uppercase text-sm hover:border-b hover:border-y-black ">
                Add Products For Sale
              </li>
            </Link>
            <Link to="/MySoldProducts">
              <li className="ml-10 uppercase text-sm hover:border-b hover:border-y-black ">
                My Products
              </li>
            </Link>

            <Link to="/AddAnimalFeeds">
              <li className="ml-10 uppercase text-sm hover:border-b hover:border-y-black ">
                Add Animal Organic Products Feed
              </li>
            </Link>

            <Link to="/MyAnimalFeeds">
              <li className="ml-10 uppercase text-sm hover:border-b hover:border-y-black ">
                My Animal Organic Feed
              </li>
            </Link>

            <Link to="/">
              <li
                className="ml-10 uppercase text-sm hover:border-b hover:border-y-black "
                onClick={() => {
                  navigate("/");
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
                <img src={logo} width={87} height={35} alt="logo" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Welcome</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col  py-4">
              <ul onClick={handleNav}>
                <Link to="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>

                <Link to="/MySelectedCrops">
                  <li className="py-4 text-sm">My Selected Crops</li>
                </Link>

                <Link to="/AddProductsForSale">
                  <li className="py-4 text-sm">Add Products For Sale</li>
                </Link>

                <Link to="/MySoldProducts">
                  <li className="py-4 text-sm">My Produce</li>
                </Link>
                <Link to="/AddAnimalFeeds">
                  <li className="py-4 text-sm">
                    Add Animal Organic Products Feed
                  </li>
                </Link>

                <Link to="/MyAnimalFeeds">
                  <li className="py-4 text-sm">My Animal Organic Feed</li>
                </Link>

                <Link to="/">
                  <li
                    className="py-4 text-sm"
                    onClick={() => {
                      navigate("/");
                      localStorage.setItem("token", "");
                      setStoredToken("");
                    }}
                  >
                    Logout
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerNavBar;
