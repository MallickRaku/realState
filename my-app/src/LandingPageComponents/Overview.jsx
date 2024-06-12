import React from "react";

function Overview() {
  return (
    <div className="Overview ">
      <div className=" container mx-auto grid lg:grid-rows-1 lg:grid-cols-2 py-20 px-4">
        <div className="">
          <div className=" relative py-16 ">
            <img
              class="first_img"
              src="https://m3m-properties.net/m3m-altitude/images/about-img2.webp"
              className=" p-5 absolute left-[10px]  bg-white top-0 z-10"
            />

            <div className=" ml-52 mt-5 relative ">
              <img
                src="https://m3m-properties.net/m3m-altitude/images/about-img.webp"
                // className=" max-w-[500px] h-[500px] "
              />
            </div>
          </div>
        </div>
        <div className=" p-8 flex flex-col justify-center ">
          <h4 className="heading">Overview</h4>
          <h3 className=" text-3xl text-black tracking-wide font-medium  ">
            Building Dreams, Creating Homes: Our Story
          </h3>
          <p className=" py-4 text-slate-500">
            M3M Altitude - a pinnacle of luxury living in Sector 65, Gurugram, crafted by M3M Developers.It presents an
            array selection of luxury 4.5 BHK + Servent Apartments designed to redefine contemporary living amidst
            Gurugram's bustling landscape.
          </p>
          <button className="mt-4 text-xl w-[200px]  ">Know More</button>
        </div>{" "}
      </div>
    </div>
  );
}

export default Overview;
