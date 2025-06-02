// import { FaLinkedin, FaFacebook } from "react-icons/fa";
import React from "react";
import HeadPage from "./HeadPage";
import Image from "next/image";

const whyUsData = [
  {
    pic: "/img/speaker/speakers-1.jpg",
    head: "JONATHON DOE",
    description: "Product Designer, Tesla",
  },
  {
    pic: "/img/speaker/speakers-2.jpg",
    head: "Patric Green",
    description: "Front-end Developer, Dropbox",
  },
  {
    pic: "/img/speaker/speakers-3.jpg",
    head: "Paul Kowalsy",
    description: "Lead Designer, TNW",
  },
  {
    pic: "/img/speaker/speakers-4.jpg",
    head: "Jhon Doe",
    description: "Back-end Developer, ASUS",
  },
];

const Speakers = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto ">
      <HeadPage
        content="Who's Speaking?"
        second="Global Grand Event on Digital Design"
      />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
      relative 
      gap-10
      ">
        {whyUsData.map((item, index) => (
          <SpeakersPic
            key={index}
            pic={item.pic}
            head={item.head}
            description={item.description}
            num={item.num}
          />
        ))}
      </div>
    </section>
  );
};

const SpeakersPic = ({ pic, head, description, num }) => {
  return (
    <div
      className="
      bg-white
      transition-all duration-300
      text-center 
      relative p-2.5
      border-2 border-gray-200 rounded-md
      shadow-md
      hover:shadow-xl
      overflow-hidden
      group
    ">
      {/* Image with overlay container */}
      <div className="relative overflow-hidden">
        <Image
          src={pic}
          width={500}
          height={800}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          alt={head || "Speaker image"}
        />

        {/* Gray overlay on hover */}
        <div
          className="
          absolute inset-0 
          bg-gray-700 
          opacity-0 
          group-hover:opacity-40 
          transition-opacity duration-500
        "></div>
        {/* Social icons that animate from top on hover */}
        <div
          className="
          absolute 
          inset-0 
          flex items-start justify-center
          gap-4
          pt-4
          opacity-0
          group-hover:opacity-100
          transition-all duration-500
          z-10
        ">
          {/* LinkedIn SVG Icon */}
          <a
            href="#"
            className="
            bg-[#ea1e63]
            p-3
            rounded-full
            text-white
            hover:bg-[#0077b5]
            transition-all duration-500
            shadow-lg
            transform 
            -translate-y-10
            group-hover:translate-y-0
            delay-75
          "
            aria-label="LinkedIn profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Facebook SVG Icon */}
          <a
            href="#"
            className="
            bg-[#ea1e63]
            p-3
            rounded-full
            text-white
            hover:bg-[#3b5998]
            transition-all duration-500
            shadow-lg
            transform 
            -translate-y-10
            group-hover:translate-y-0
            delay-100
          "
            aria-label="Facebook profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
        </div>
      </div>
      {/* Info box */}
      <div
        className="
        absolute bottom-[10px] left-0 right-0 mx-auto w-[calc(100%-18px)]
        bg-[#f4f4f4] 
        p-5
        shadow-sm
        transition-all duration-300
        group-hover:shadow-md
      ">
        <h3 className="text-md font-bold mb-2 text-gray-800">{head}</h3>
        <p className="text-gray-600 text-xs mb-2">{description}</p>
        {num && <p className="text-3xl font-bold text-[#ea1e63]">{num}</p>}
      </div>
    </div>
  );
};

export default Speakers;
