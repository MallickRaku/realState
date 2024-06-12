import React from "react";

function Highlights() {
  const facilities = [
    "3 Towers With 32 Floors",

    "4 Apartments Per Core",

    "1,25,000 Sq.Ft Clubhouse",

    "Triple-Height Lobby",

    "VRV/VRF Air Conditioning",

    "Premium Modular Kitchen",
  ];

  const bgImg = "https://m3m-properties.net/m3m-altitude/images/highlight-bg.png";
  //   <div className="  h-screen  bg-contain bg-no-repeat  " style={{ backgroundImage: `url(${img})` }}>

  return (
    <div className="Highlights">
      <div className="container grid lg:grid-rows-1 lg:grid-cols-2">
        <div>
          <h4 className="heading">Highlight</h4>
          <h3 className=" text-3xl text-black tracking-wide font-medium  ">
            Elevating Properties: Our Spotlight Features
          </h3>
          <ul>
            {facilities.map((item, index) => {
              return (
                <li>
                  <span>0{index + 1}</span> {item}{" "}
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" py-16 flex justify-center items-center ">
          <img src="https://m3m-properties.net/m3m-altitude/images/hightlight.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Highlights;
