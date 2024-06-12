import React from "react";

function AddressSidebar() {
  return (
    <div
      className=" md:absolute left-0 top-0 bottom-0 right-[94%] z-10 flex justify-center items-center p-4"
      style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }}
    >
      <h5 className=" md:rotate-minus90 text-white flex  justify-center items-center ">
        <img src="https://m3m-properties.net/m3m-altitude/images/location-mark.png" className=" pr-4 h-fit " alt="" />
        <span>Sector65,Gurugram</span>
      </h5>
    </div>
  );
}

export default AddressSidebar;
