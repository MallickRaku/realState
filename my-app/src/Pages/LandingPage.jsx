import React, { useEffect, useRef } from "react";
import Hero from "../LandingPageComponents/Hero";
import Overview from "../LandingPageComponents/Overview";
import Offers from "../LandingPageComponents/Offers";
import Highlights from "../LandingPageComponents/Highlights";
import Amenities from "../LandingPageComponents/Amenities";
import PriceList from "../LandingPageComponents/PriceList";
import FloorPlan from "../LandingPageComponents/FloorPlan";
import Gallery from "../LandingPageComponents/Gallery";
import Location from "../LandingPageComponents/Location";
import ContactUs from "../LandingPageComponents/ContactUs";
import Footer from "../Footer";
import Header from "../Header";

function LandingPage() {
  const AboluteHeader = useRef();
  useEffect(() => {
    const listener = document.addEventListener("scroll", (e) => {
      console.clear();
      // console.log(window.scrollX);
      console.log(window.scrollY);

      if (window.scrollY > 85) {
        if (AboluteHeader.current) {
          AboluteHeader.current.style.top = "0px";
          console.log("jeeke");
        }
      } else {
        if (AboluteHeader.current) {
          AboluteHeader.current.style.top = "-140px";
        }
      }
    });
  }, []);

  return (
    <div>
      <div className=" fixed top-[-100px]  left-0 right-0 z-30 " ref={AboluteHeader}>
        <Header bg={true} />
      </div>

      <Hero />
      <Offers />
      <Overview />
      <Highlights />
      <Amenities />
      <PriceList />
      <FloorPlan />
      <Gallery />
      <Location />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
