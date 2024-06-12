import React from "react";

function Gallery() {
  return (
    <div className="Gallery">
      <div className="container">
        <div className="heading">Gallery</div>
        <h3 className=" text-2xl text-black tracking-wide font-medium  ">
          Discover Your Dream Home: Explore Our Stunning Gallery
        </h3>

        <div className=" flex gap-2   mt-12 flex-wrap ">
          <img
            src="	https://m3m-properties.net/m3m-altitude/images/gallery/g1-sm.webp  "
            className=" border-4 border-white rounded-lg shadow-lg h-full "
            alt=""
          />
          <img
            src="	https://m3m-properties.net/m3m-altitude/images/gallery/g2-sm.webp"
            className=" border-4 border-white rounded-lg shadow-lg "
            alt=""
          />
          <img
            src="	https://m3m-properties.net/m3m-altitude/images/gallery/g3-sm.webp"
            className=" border-4 border-white rounded-lg shadow-lg "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
