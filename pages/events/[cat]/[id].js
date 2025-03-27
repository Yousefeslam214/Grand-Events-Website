import Image from "next/image";

const EventPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      EventPage
      {data.map((ev) => (
        <div key={ev.id}>
          <Image width={1000} height={500} src={ev.image} alt={ev.title} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");
  const allPaths = allEvents.map((ev) => {
    return {
      params: {
        cat: ev.city,
        id: ev.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { cat, id } = context?.params;
  const { allEvents } = await import("../../../data/data.json");
  const data = allEvents.filter((ev) => ev.city === cat && ev.id === id);
  return {
    props: { data },
  };
}
