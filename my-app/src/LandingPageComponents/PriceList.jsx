import React from "react";

function PriceList() {
  return (
    <div className="PriceList py-20">
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <h4 className="heading text-center ">Price list</h4>
        <h3 className=" text-2xl text-black tracking-wide font-medium  text-center ">Choose Your Perfect Plan</h3>

        <div className=" bg-primaryBackground px-4 py-8 rounded-xl shadow-2xl  flex flex-col items-center ">
          <div className=" p-1 border border-black " style={{ color: "#ffd010" }}>
            <h3 className="bg-black text-3xl px-16 py-2 ">4.5 BHK + Servent</h3>
          </div>

          <div className=" text-center text-xl font-semibold my-4 pb-4 border-b  border-black border-dashed ">
            <span className=" text-3xl font-medium ">Rs 9.56 cr* </span>
            Onwards
          </div>
          <p className=" text-2xl text-center my-2 font-medium  ">Size : 4000 Sq Ft</p>
          <button className="mt-4 text-xl w-[200px] bg-white py-4 rounded-lg  ">Know More</button>
        </div>
      </div>
    </div>
  );
}

export default PriceList;
