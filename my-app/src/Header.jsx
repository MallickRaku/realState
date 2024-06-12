import React from "react";

function Header({ bg, WhiteColor, absolute }) {
  return (
    <>
      <header
        className={` md:flex  hidden ${bg && "bg-primaryBackground"} ${WhiteColor && "text-white"} ${
          absolute && " absolute z-10 top-0 right-0 left-0  "
        }   `}
      >
        <div className="logoImg bg-transparent w-[15%]">
          <img src="https://m3m-properties.net/m3m-altitude/images/logo.png" className=" w-full text-black  " />
        </div>
        <ul className=" flex justify-between ">
          <li className="navItem">
            <a href="">Overview</a>
          </li>
          <li className="navItem">
            <a href="">Highlight</a>
          </li>
          <li className="navItem">
            <a href="">Amenities</a>
          </li>
          <li className="navItem">
            <a href=""> Price List</a>
          </li>
          <li className="navItem">
            <a href=""> Floor Plan</a>
          </li>
          <li className="navItem">
            <a href="">Gallery</a>
          </li>
          <li className="navItem">
            <a href="">Location</a>
          </li>
          <li className="navItem">
            <a href=""> Contact Us</a>
          </li>
        </ul>
        <button className="MobileNo">
          <img
            src="https://m3m-properties.net/m3m-altitude/images/icon/telephone14.png"
            alt=""
            className=" pr-2 lg:w-10 w-4 "
          />
          <span>+918882721721</span>
        </button>
      </header>

      <header
        className={` md:hidden flex p-3  ${bg && "bg-primaryBackground"} ${WhiteColor && "text-white"} ${
          absolute && " absolute z-10 top-0 right-0 left-0   "
        }   `}
      >
        <div className={`logoImg bg-transparent w-[30%]  `}>
          <img src="https://m3m-properties.net/m3m-altitude/images/logo.png" className=" w-full text-black  " />
        </div>

        <i class={`fa-solid fa-bars  ${WhiteColor ? "text-white" : "text-black"} `}></i>
      </header>
    </>
  );
}

export default Header;
