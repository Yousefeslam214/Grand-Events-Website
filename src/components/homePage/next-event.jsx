import React from "react";

const NextEvent = () => {
  return (
    <>
      <div className="px-[68px] py-[10px] mt-2">
        <h2
          className="
        section-title
        animate-fadeIn
        ">
          {/* // text-3xl text-center uppercase animate-fadeIn next-event-black leading-[48px] */}
          Next Event Will Start In
        </h2>
      </div>
      <div>
        <div className="flex  flex-wrap justify-center items-center m-[0px_0px_50px_0]">
          <TimeBox value="Days" num="0" />
          <TimeBox value="Hours" num="00" />
          <TimeBox value="Minutes" num="00" />
          <TimeBox value="Seconds" num="00" />
        </div>
        <div className="text-center mt-4">
          {/* <button
            className="btn bg-[#ea1e63] text-white px-4 py-2 rounded-sm text-xs md:text-sm lg:text-base xl:text-lg
          mb-20
          ">
            ADD TO MY CALENDER
          </button> */}
          <button
            className="btn bg-[#ea1e63] text-black
 px-4 py-2 rounded-sm text-xs md:text-sm lg:text-base xl:text-lg
          mb-20
          ">
            ADD TO MY CALENDER
          </button>
          {/* <button className="bg-[#ea1e63] text-black px-4 py-2 rounded-sm ...">
            ADD TO MY CALENDER
          </button> */}
        </div>
      </div>
    </>
  );
};

export default NextEvent;
const TimeBox = ({ value, num }) => {
  return (
    <div
      className="inline-block w-30 m-4 h-30 p-5 rounded bg-white text-center font-normal text-black text-base uppercase leading-6 shadow-md
      normal next-event-black shadow-box 
      "
      style={{ fontFamily: "'Lato', sans-serif" }}>
      <h2 className="text-[45px] leading-[45px] font-bold font-[700] block text-[#212121] mb-[10px]">
        {num.toUpperCase ? num.toUpperCase() : num}
      </h2>
      <p>{value.toUpperCase ? value.toUpperCase() : value}</p>
    </div>
  );
};
