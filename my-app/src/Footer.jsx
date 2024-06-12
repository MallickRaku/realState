import React, { useRef } from "react";

function Footer() {
  const pElement = useRef();

  const handleClick = (e) => {
    const buttonElement = e.target;

    buttonElement.innerHTML == "Read More"
      ? (buttonElement.innerHTML = "Read Less")
      : (buttonElement.innerHTML = "Read More");

    pElement.current.style.display == "none"
      ? (pElement.current.style.display = "block")
      : (pElement.current.style.display = "none");
  };

  return (
    <footer className=" text-center">
      <p className=" py-2">
        <span className=" font-semibold">Project Rera No :</span>
        RC/REP/HARERA/GGM/821/553/2024/48
      </p>

      <p className=" py-2">
        Disclaimer - The content provided on this website is for information purposes only and does not constitute an
        offer to avail any service. The prices mentioned are subject to change without prior notice, and the
        availability of properties mentioned is not guaranteed.
      </p>

      <p className=" py-2 transition-all duration-100 ease-linear " style={{ display: "none" }} ref={pElement}>
        The images displayed on the website are for representation purposes only and may not reflect the actual
        properties accurately. Please note that this is the official website of an authorized marketing partner. We may
        share data with Real Estate Regulatory Authority (RERA) registered brokers/companies for further processing as
        required. We may also send updates and information to the mobile number or email ID registered with us. All
        rights reserved. The content, design, and information on this website are protected by copyright and other
        intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws.
        For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is
        advisable to contact us directly through the provided contact information on this website. Thank you for
        visiting our website.
      </p>

      <button className=" font-semibold" onClick={(e) => handleClick(e)}>
        Read More
      </button>
      <p className=" py-2">
        <a href="" className=" font-semibold">
          Disclaimer & Privacy Policy
        </a>
        | Digital Media Planned By
        <a href="" className=" font-semibold">
          GTF Technologies
        </a>
      </p>
    </footer>
  );
}

export default Footer;
