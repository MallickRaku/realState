import React from "react";

function FloorPlan() {
  return (
    <div className="FloorPlan">
      <div className="container mx-auto flex flex-col justify-center items-center ">
        <h4 className="heading">Floor Plan</h4>
        <h3 className=" text-2xl text-black tracking-wide font-medium  ">Choose Your Perfect Plan</h3>

        <div className="grid lg:grid-rows-1 lg:grid-cols-2  gap-6 w-[65%] mx-auto my-8">
          <div>
            <div className=" border border-black p-2 rounded-xl relative ">
              <img
                src="https://m3m-properties.net/m3m-altitude/images/floor-plan/masterplan.webp"
                className=" blur-sm"
              />
              <button
                className="bg-black text-xl px-4 py-2  absolute left-[38%] top-[45%] rounded-lg z-10 "
                style={{ color: "#ffd010" }}
              >
                View Plan
              </button>
            </div>

            <h3 className="bg-black text-2xl px-16 py-2 my-4 rounded-lg text-center " style={{ color: "#ffd010" }}>
              Master Plan
            </h3>
          </div>

          <div>
            <div className=" border border-black p-2 rounded-xl relative ">
              <img
                src="https://m3m-properties.net/m3m-altitude/images/floor-plan/masterplan.webp  "
                className=" blur-sm"
              />
              <button
                className="bg-black text-xl px-4 py-2  absolute left-[38%] top-[45%] rounded-lg z-10 "
                style={{ color: "#ffd010" }}
              >
                View Plan
              </button>
            </div>

            <h3 className="bg-black text-2xl px-16 py-2 my-4 rounded-lg text-center " style={{ color: "#ffd010" }}>
              4.5K BHK + Servent
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloorPlan;
