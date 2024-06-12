import React from "react";

function ContactUs() {
  return (
    <div className="ContactUs">
      <div className="container grid lg:grid-rows-1 lg:grid-cols-2  ">
        <div>
          <h4 className="heading">About Developer</h4>
          <h3 className=" text-2xl text-black tracking-wide font-medium  ">M3M India</h3>
          <p className=" py-4 text-slate-500">
            M3M India, established in 2010, is one of the fastest-growing real estate developers in the country. It is
            driven by Founder Chairman Basant Bansal and supported by promoters Roop Bansal and Pankaj Bansal. The
            growth story is built upon a foundation of ethical corporate governance, transparency, commitment, and
            passion. The Chairman and promoters have designed a progressive vision for M3M India, aiming to establish
            the company as one of the most sought-after players in the real estate sector. Over time, M3M India has
            emerged as a game-changer in the luxury, residential, and retail segments of the real estate industry in the
            country.
          </p>
        </div>

        <div className="">
          <div className=" p-6 bg-black  rounded-lg lg:ml-32  " style={{ color: "#fbe486" }}>
            <h2 className=" text-3xl font-semibold text-center my-4 "> Keep In Touch </h2>
            <form action="">
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Enter Email" />
              <input type="number" placeholder="Enter Number" />
              <input type="text" placeholder="Enter Message" />
              <button type="submit">Submit Now</button>

              <div className=" flex items-start gap-2">
                <div>
                  <input type="checkbox" checked className=" m-0 " />{" "}
                </div>

                <span className=" text-[9px]">
                  I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers.
                  This consent overrides any registration for DNC/NDNC.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
