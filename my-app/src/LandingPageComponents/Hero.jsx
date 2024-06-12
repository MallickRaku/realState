import React from "react";
import { Slide } from "react-slideshow-image";
import { HomeScrollImgs } from "../AllData/Data";
import Header from "../Header";
import PropertyFeature from "./PropertyFeature";
import BookingInfo from "./BookingInfo";
import AddressSidebar from "./AddressSidebar";
import SiteVistForm from "./SiteVistForm";
import Offers from "./Offers";

function Hero() {
  return (
    <>
      <div className=" md:h-screen h-fit w-full relative md:bg-slate-100  ">
        <Header bg={false} WhiteColor={true} absolute={true} />
        <Slide arrows={false}>
          {HomeScrollImgs.map((img) => {
            return (
              <div
                className="  md:h-screen h-80 lg:bg-contain  bg-cover bg-no-repeat  "
                style={{ backgroundImage: `url(${img})` }}
              >
                <div
                  className="overlay absolute inset-0 bg-slate-50 "
                  style={{ backgroundColor: " rgba(0, 0, 0, 0.1)" }}
                ></div>
              </div>
            );
          })}
        </Slide>

        {/* absoloute */}
        <PropertyFeature />
        <AddressSidebar />
        <BookingInfo />

        <SiteVistForm />
      </div>
    </>
  );
}

export default Hero;
