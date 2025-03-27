import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((ev) => {
          return (
            <Link href={`/events/${ev.city}/${ev.id}`} key={ev.id}>
              <Image width={50} height={50} src={ev.image} alt={ev.name} />
              <div key={ev.id}>
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: { cat: ev.id.toString() },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");
  
  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);
  
  return {
    props: { data , pageName: id},
  };
}
