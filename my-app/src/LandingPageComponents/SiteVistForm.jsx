import React from "react";

function SiteVistForm() {
  return (
    <div className="SiteVistForm">
      <h3 className=" xl:text-3xl text-xl font-medium text-center">Book A Site Visit !</h3>
      <form action="">
        <input type="text" className=" px-4 py-3" placeholder="Enter Name" />
        <input type="text" className=" px-4 py-3" placeholder="Enter Email" />
        <input type="number" className=" px-4 py-3" placeholder="Enter Number" />
        <input type="text" className=" px-4 py-3" placeholder="Enter Message" />
        <button type="submit">Submit Now</button>

        <div className=" flex items-start gap-2">
          <input type="checkbox" checked />{" "}
          <span className=" text-[9px]">
            I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This
            consent overrides any registration for DNC/NDNC.
          </span>
        </div>
      </form>
    </div>
  );
}

export default SiteVistForm;
