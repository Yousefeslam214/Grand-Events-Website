import React from "react";
import HeadPage from "./HeadPage";

const BlogSection = () => {
  return (
    <section
      className="py-12 px-4 max-w-6xl mx-auto min-h-100
    
    ">
      <HeadPage
        content="Our Latest News & Articles"
        second="Global Grand Event on Digital Design"
      />
      <div className="flex items-center flex-col mt-100 mb-20">
        <button
          className="bg-[#e91f63] text-white px-6 py-3 rounded-md hover:bg-[#c2185b] transition-colors duration-300 font-medium cursor-pointer
        ">
          ReadMore
        </button>{" "}
      </div>
    </section>
  );
};

export default BlogSection;
