import Header from "@/src/components/header/header";
import Image from "next/image";

const EventPage = ({ data }) => {
  const event = data[0]; // لأننا بنجيب واحد بس بعد الفلترة

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-[#E91E63]">Event Not Found</h1>
        <p className="text-gray-300 mt-4">
          Sorry, we couldn’t find this event.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Header />

      <header className="text-center mb-12 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E91E63] mb-4">
          {event.title}
        </h1>
        <p className="text-xl text-gray-300">{event.description}</p>
      </header>

      <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800">
        <div className="relative w-full h-[400px]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            About This Event
          </h2>
          <p className="text-gray-300 mb-6">
            {event.longDescription || "More details coming soon."}
          </p>
          <button>
            <a
              href="https://wa.me/201005307391"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#E91E63] text-white rounded-md hover:bg-[#d81b60] transition-colors">
              Book Your Spot on WhatsApp
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");
  const allPaths = allEvents.map((ev) => ({
    params: {
      cat: ev.city,
      id: ev.id,
    },
  }));
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
