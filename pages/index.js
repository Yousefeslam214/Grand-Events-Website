import Link from "next/link";
import HomePage from "../src/components/home/home-page";
import Footer from "@/src/components/footer/footer";
import Nav from "@/src/components/nav/nav";
import Carousel from "@/src/components/carousel/carousel";
import NewCarousel from "@/src/components/newCarousel/newCarousel";
import Slider from "@/src/components/slider/slider";

export default function Home(props) {
  const { data, carouselItems } = props; // Destructure carouselItems from props
  console.log(data);

  return (
    <>
          <Slider items={carouselItems} />
      <div className="min-h-screen flex flex-col bg-black">
        <div className="container mx-auto p-4">
          <Carousel items={carouselItems}  />
          {/* <NewCarousel items={carouselItems} /> */}

        </div>
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <HomePage data={data} />
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { events_categories } = await import("../data/data.json");
    const carouselItems = await import("../data/carouselItems.json");
    // const carouselData = await import("../data/carousel.json");

    return {
      props: {
        data: events_categories || null, // Fallback to null if undefined
        carouselItems: carouselItems.default || [], // Note the .default
      },
    };
  } catch (error) {
    console.error("Error loading data:", error);
    return {
      props: {
        data: null,
        carouselItems: [],
      },
    };
  }
}
