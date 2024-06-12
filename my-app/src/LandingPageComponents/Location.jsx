import React, { useRef } from "react";

function Location() {
  const ulRef = useRef(null);
  const handleClick = (e) => {
    if (ulRef.current) {
      if (e.target.parentElement.offsetHeight == 64) {
        e.target.parentElement.style.height = "100%";
      } else {
        e.target.parentElement.style.height = "64px";
      }

      console.log(e.target.parentElement);
    }
  };

  return (
    <div className="Location">
      <div className="container mx-auto grid lg:grid-rows-1 lg:grid-cols-2  ">
        <div className=" flex justify-center items-center">
          <img
            src="https://m3m-properties.net/m3m-altitude/images/location-map.webp"
            alt=""
            className=" md:w-fit md:h-fit  "
          />
        </div>

        <div className=" md:px-10 py-4 ">
          <h4 className="heading">Location</h4>
          <h3 className=" text-3xl text-black tracking-wide font-medium  ">
            Perfectly Positioned: Discover Our Ideal Locations
          </h3>

          <div>
            <ul className=" my-4" ref={ulRef}>
              <li className=" h-16 overflow-hidden transition ease-linear duration-75 " onClick={(e) => handleClick(e)}>
                <h5 className=" flex items-center text-xl font-semibold py-3 border-b border-black cursor-pointer  ">
                  <img src="https://m3m-properties.net/m3m-altitude/images/icon/road.png" className=" pr-4" alt="" />{" "}
                  <span>Highway</span>
                </h5>
                <p className=" pl-4 py-4 font-sm font-medium ">Located On A 60 Metre Wide Main Arterial Sector Road.</p>
              </li>
              <li className=" h-16 overflow-hidden " onClick={(e) => handleClick(e)}>
                <h5 className=" flex   items-center text-xl font-semibold py-3 border-b border-black cursor-pointer  ">
                  <img src="	https://m3m-properties.net/m3m-altitude/images/icon/school.png" className=" pr-4" alt="" />{" "}
                  <span>School</span>
                </h5>
                <p className=" pl-4 py-4 font-sm font-medium ">5 Km To Gurugram University</p>
              </li>

              <li className=" h-16 overflow-hidden " onClick={(e) => handleClick(e)}>
                <h5 className=" flex  items-center  text-xl font-semibold py-3 border-b border-black cursor-pointer  ">
                  <img src="https://m3m-properties.net/m3m-altitude/images/icon/plane.png" alt="" className=" pr-4" />{" "}
                  <span>Airport</span>
                </h5>
                <p className=" pl-4 py-4 font-sm font-medium ">
                  Just A 30 Minute Drive From Delhi International Airport.
                </p>
              </li>
              <li className=" h-16 overflow-hidden " onClick={(e) => handleClick(e)}>
                <h5 className=" flex  items-center  text-xl font-semibold py-3 border-b border-black  cursor-pointer ">
                  <img
                    src="https://m3m-properties.net/m3m-altitude/images/icon/pin.png"
                    alt=""
                    className=" pr-4 h-fit "
                  />{" "}
                  <span>Others</span>
                </h5>
                <p className=" pl-4 py-2 font-sm font-medium ">7 Km To Sector 55-56 Metro Station</p>
                <p className=" pl-4 py-2 font-sm font-medium ">6.3 Km To Medanta - The Medicity</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
