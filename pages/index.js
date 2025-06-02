import Link from "next/link";
import HomePage from "../src/components/homePage/home-page";
import Footer from "@/src/components/footer/footer";
import Nav from "@/src/components/nav/nav";
import Carousel from "@/src/components/carousel/carousel";
import NewCarousel from "@/src/components/newCarousel/newCarousel";
import Slider from "@/src/components/slider/slider";
import NextEvent from "@/src/components/homePage/next-event";
import WhyUs from "@/src/components/homePage/why-us";
import Schedules from "@/src/components/homePage/event-schedules";
import Speakers from "@/src/components/homePage/speakers";
import EventGallery from "@/src/components/homePage/event-gallery";
import Question from "@/src/components/homePage/question";
import Sponsors from "@/src/components/homePage/sponsors";
import Pricing from "@/src/components/homePage/Pricing";
import EventGuideline from "@/src/components/homePage/eventGuideline";
import BlogSection from "@/src/components/homePage/blog-section";
import NewsletterSection from "@/src/components/homePage/newsletter-section";
import MessageSection from "@/src/components/homePage/message-section";

export default function Home(props) {
  const { data, carouselItems } = props; // Destructure carouselItems from props
  console.log(data);

  return (
    <>
      <Slider items={carouselItems} />
      <div className="min-h-screen flex flex-col bg-white">
        <div className="container mx-auto p-4">
          {/* <Carousel items={carouselItems}  /> */}
          {/* <NewCarousel items={carouselItems} /> */}
        </div>
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <NextEvent />
          <WhyUs />
          <HomePage data={data} />
        </main>
        <Schedules className="w-full" />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <Speakers />
        </main>
        <div className=" bg-[#f4f4f4]">
          <main className="flex-1 flex flex-col items-center justify-center p-4">
            <EventGallery />
          </main>
        </div>
        <Question />
        <div className=" bg-[#f4f4f4]">
          <main className="flex-1 flex flex-col items-center justify-center p-4">
            <Sponsors />
          </main>
        </div>
        <Pricing />
        <EventGuideline />
        <BlogSection />
      </div>
      <NewsletterSection />
      <MessageSection />
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
