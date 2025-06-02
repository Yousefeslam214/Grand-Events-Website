import React from "react";

const HeadPage = ({ content, second }) => {
  return (
    <div className="text-center mb-12">
      <h2
        className="
animation-ease-in-up 
      text-3xl font-bold mb-6 relative inline-block">
        {content}
        <span className="  absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-pink-600"></span>
        {/* <span className="  absolute top-13 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-pink-600"></span> */}
      </h2>
      <p className="text-gray-600">{second}</p>
    </div>
  );
};

export default HeadPage;
