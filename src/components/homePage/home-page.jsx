import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadPage from "./HeadPage";

const HomePage = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Event Cards Grid */}
      <HeadPage
        content={"Upcoming Events"}
        second="Join us for the latest events!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
        {data.map((ev) => (
          <Link
            href={`/events/${ev.id}`}
            key={ev.id}
            className="group block overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white p-2">
            <div className="relative h-48 w-full">
              <Image
                src={ev.image}
                alt={ev.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800  group-hover:text-[#ed0d5d]  mb-2">
                {ev.title}
              </h2>
              <p className="text-gray-600  line-clamp-2">{ev.description}</p>
              <button className="mt-4 px-4 py-2 bg-[#ed0d5d] text-white rounded-md transition-colors duration-300 hover:bg-black text-sm pointer-events-none z-10">
                Read More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
