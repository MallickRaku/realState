import React from "react";
import { Slide } from "react-slideshow-image";
import { aminitiesFacilities } from "../AllData/Data";

function Amenities() {
  return (
    <div className="Amenities">
      <div className="container mx-auto grid lg:grid-rows-1 lg:grid-cols-2 py-20 px-4  ">
        <div className=" md:block hidden ">
          <img src="https://m3m-properties.net/m3m-altitude/images/amenities.webp" alt="" />
        </div>

        <div className=" md:p-8 ">
          <h4 className="heading">Amenities</h4>
          <h3 className=" text-2xl text-black tracking-wide font-medium  ">
            Elevated Living: Unparalleled Amenities For Every Lifestyle
          </h3>

          <div className=" relative lg:left-[-11%]">
            <Slide arrows={false}>
              {aminitiesFacilities.map((item, index) => {
                const { title, desc, url } = item;
                return (
                  <div className="slide ">
                    <div className="firstChild">
                      <div
                        className=" absolute inset-0 flex flex-col justify-center p-4 border-4 ml-3 mb-3 mt-[-5%] mr-[-5%] "
                        style={{
                          border: ` 4px solid #fbe486 `,
                        }}
                      >
                        <h2 className=" md:text-2xl text-lg  font-bold mb-2 ">{title}</h2>
                        <p className=" md:text-sm text-xs">{desc}</p>
                      </div>
                    </div>
                    <div>
                      <img src={url} className=" w-full  h-full" alt="" />
                    </div>
                  </div>
                );
              })}
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amenities;

// https://m3m-properties.net/m3m-altitude/images/amenities/a3.webp
