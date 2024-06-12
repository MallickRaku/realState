import React from "react";

function PropertyFeature() {
  const checkImgUrl = "https://m3m-properties.net/m3m-altitude/images/check1.png";
  return (
    <div className=" md:absolute pl-8 md:pl-0 top-[20%] left-[10%]">
      <h3 className="title">M3M Altitude</h3>
      <h2 className=" text-3xl font-semibold md:text-white">4.5 BHK + Servant Room</h2>

      <ul className=" my-3">
        <li className=" featureList ">
          {/* <img src={checkImgUrl} alt="" /> */}
          Payment Plan : 20:80
        </li>
        <li className=" featureList">{/* <img src={checkImgUrl} alt="" /> */}3 Towers With 32 Floors</li>
        <li className="featureList">{/* <img src={checkImgUrl} alt="" /> */}4 Apartments Per Core</li>
      </ul>

      <button
        className=" rounded-lg px-5 py-2 text-lg "
        style={{
          backgroundColor: "#ffffffa8",
        }}
      >
        Know More
        <i className="icon-next "></i>
      </button>
    </div>
  );
}

export default PropertyFeature;
