import React from "react";

function BookingInfo() {
  const liStyle = {
    border: "1px solid #fbe486 ",
    padding: "5px",
    borderRadius: "10px",
  };

  return (
    <ul className=" md:absolute bottom-[5%] left-[10%] flex md:flex-row flex-col  gap-3 my-3  ">
      <li style={{ ...liStyle }}>
        <div className="BookInfoList">
          <span>9.56 cr*</span>
          <span>Starting Price</span>
        </div>
      </li>
      <li style={{ ...liStyle }}>
        <div className="BookInfoList">
          <span>20 : 80</span>
          <span>Payment Plan</span>
        </div>
      </li>
      <li style={{ ...liStyle }}>
        <div className="BookInfoList">
          <span>New Launch</span>
          <span>Status</span>
        </div>
      </li>
    </ul>
  );
}

export default BookingInfo;
