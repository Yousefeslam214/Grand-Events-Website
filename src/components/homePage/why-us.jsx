import React from "react";
import HeadPage from "./HeadPage";

const whyUsData = [
  {
    icon: "heart",
    head: "Get Inspired",
    description: "Feel the passion from industry leaders and innovators",
  },
  {
    icon: "gallery",
    head: "Meet New Faces",
    description:
      "Connect with like-minded professionals and expand your network",
  },
  {
    icon: "envelope",
    head: "Fresh Tech Insights",
    description: "Receive cutting-edge knowledge directly to your inbox",
  },
  {
    icon: "cup",
    head: "Networking Session",
    description: "Enjoy casual conversations that spark new opportunities",
  },
  {
    icon: "user",
    head: "Global Event",
    description: "Join an international community of tech enthusiasts",
  },
  {
    icon: "bubble",
    head: "Free Swags",
    description: "Take home memorable goodies from our sponsors",
  },
];

const WhyUs = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <HeadPage
        content="Why You Choose Us?"
        second="Global Grand Event on Digital Design"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {whyUsData.map((item, index) => (
          <WhyUsBox
            key={index}
            icon={item.icon}
            head={item.head}
            description={item.description}
            num={item.num}
          />
        ))}
      </div>
    </section>
  );
};

const WhyUsBox = ({ icon, head, description, num }) => {
  return (
    <div
      className="
        bg-white p-8 rounded-lg text-center hover:bg-gray-100 hover:text-[#EA1E63]
        [&:nth-child(2)]:border-l-2 [&:nth-child(2)]:border-r-2 [&:nth-child(2)]:border-gray-200
        [&:nth-child(5)]:border-l-2 [&:nth-child(5)]:border-r-2 [&:nth-child(5)]:border-gray-200
        transition-all 
      ">
      <div className="icon mb-4 text-5xl">
        <i className={`lni lni-${icon} text-5xl transition-colors`}></i>
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{head}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      {num && <p className="text-3xl font-bold text-pink-600">{num}</p>}
    </div>
  );
};

export default WhyUs;
