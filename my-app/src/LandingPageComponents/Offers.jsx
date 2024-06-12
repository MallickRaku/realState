import React from "react";
import { Slide } from "react-slideshow-image";
import { offersImg } from "../AllData/Data";

function Offers() {
  return (
    <div className="">
      <Slide arrows={false}>
        {offersImg.map((imgs) => {
          return <img src={imgs.lgImg} alt="" className=" h-full" />;
        })}
      </Slide>
    </div>
  );
}

export default Offers;
