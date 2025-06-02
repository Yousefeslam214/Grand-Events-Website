import Header from "@/src/components/header/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Header />
      <header className="text-center mb-16 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E91E63] mb-4">
          Events in {pageName}
        </h1>
        <p className="text-xl text-gray-300">
          Discover exciting events happening in {pageName}
        </p>
      </header>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((ev) => (
          <div
            key={ev.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gray-800">
            <Link href={`/events/${ev.city}/${ev.id}`} className="block">
              {/* Image Container */}
              <div className="relative h-48 w-full">
                <Image
                  src={ev.image}
                  alt={ev.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 450vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent h-50" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#E91E63] transition-colors">
                  {ev.title}
                </h2>
                <p className="text-gray-300 line-clamp-2">
                  {ev.description || "Explore this exciting event"}
                </p>
                <button className="mt-4 px-4 py-2 bg-[#E91E63] text-white rounded-md hover:bg-[#E91E63] transition-colors">
                  View Details
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const allPaths = events_categories.map((ev) => ({
    params: { cat: ev.id.toString() },
  }));
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: { data, pageName: id },
  };
}
