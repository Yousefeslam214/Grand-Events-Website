import React from "react";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import FAQSection from "@/src/components/FAQSection";
import WhyTrustSection from "@/src/components/WhyTrustSection";
import VisionMission from "@/src/components/VisionMission";
import Link from "next/link";
import TestimonialsSection from "@/src/components/Testimonials";
import ServicesSection from "@/src/components/ServicesSection";
import CTASection from "@/src/components/CTASection";

const About = () => {
  return (
    <section className="px-4 mt-18 ">
      {/* <section className="px-4 mt-18"> */}
      <div className="relative rounded-lg overflow-hidden max-w-screen-xl mx-auto min-h-[24rem] md:min-h-[30rem] lg:min-h-[36rem]">
        <Image
          src="/assets/large-group-fans-with-arms-raised-having-fun-music-concert-night.webp"
          alt="Event Agency Hero"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 z-10 text-white h-full">
          <div className="flex flex-col justify-center px-6 py-8 md:py-12 space-y-4 text-balance">
            <h1 className="text-3xl md:text-4xl font-bold">
              Bringing Events to Life
            </h1>
            <h3 className="text-lg md:text-xl font-semibold">
              From concept to celebration – we plan unforgettable experiences
            </h3>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Grand Events is your creative partner for everything events. From
              corporate galas and workshops to concerts and private gatherings,
              we make your vision a reality. With expert planning, vibrant
              execution, and a touch of flair, your next event will be nothing
              short of extraordinary.
            </p>
            <Link
              href="#map"
              className="text-lg md:text-xl font-semibold underline underline-offset-2">
              See Where We Work
            </Link>
          </div>
          <div
            className="flex items-center justify-center px-6 mt-12 py-8 md:py-12 *:
          sm:hidden md:block
          ">
            <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm space-y-4 transition-all duration-300">
              <h2 className="text-xl text-black font-bold">Working Hours</h2>
              <p className="text-gray-600">Sat – Thu, 10AM – 10PM</p>
              <a
                className="text-[#E91E63] hover:underline"
                href="https://wa.me/201005307391">
                Contact Our Team
              </a>
              <Link
                className="mt-2 px-4 py-2 bg-[#E91E63] text-white rounded-md hover:bg-[#d81b60] transition-colors w-full text-center block"
                href="https://wa.me/201005307391"
                target="_blank"
                rel="noopener noreferrer">
                Book a Free Consultation
              </Link>
              <Link
                href="/events"
                className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors w-full text-center block">
                View Past Events
              </Link>
              <div className="flex justify-center">
                <a
                  href="#faq"
                  className="text-[#E91E63] hover:underline text-center">
                  Visit FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 py-10 max-w-screen-xl mx-auto"
        id="map">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-1.5">
              Who We Are
            </h3>
            <p className="text-base md:text-md leading-relaxed text-gray-700">
              At Grand Events, we are passionate storytellers, visual designers,
              and expert organizers. Our team specializes in curating
              unforgettable event experiences tailored to your audience,
              purpose, and style. Whether it’s a tech summit, fashion show, or
              intimate party—we've got it covered.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-1.5">
              Business Hours
            </h3>
            <p className="text-base md:text-md leading-relaxed">
              Weekdays: <span className="text-[#E91E63]">10AM – 10PM</span>
              <br />
              Friday: <span className="text-[#E91E63]">Closed</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              What We Do
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                Corporate Events
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                Workshops
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                Festivals
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                Conferences
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                Virtual Events
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-1.5">
              Get in Touch
            </h3>
            <p className="text-base md:text-md leading-relaxed">
              Visit{" "}
              <a
                href="https://www.yousef-eslam.me"
                className="text-[#E91E63] hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                yousef-eslam.me
              </a>{" "}
              or send us a message on{" "}
              <a
                href="https://wa.me/201005307391"
                className="text-[#E91E63] hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                WhatsApp
              </a>{" "}
              to start planning your next event.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Main Office
            </h3>
            <div>
              <iframe
                title="Our Location"
                className="w-full h-64 rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19846.51598589966!2d106.8166666!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c1e2f62c0f%3A0x3dbac6fdc0406e4a!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2seg!4v1717420000000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h4 className="text-md md:text-lg font-medium mb-1.5 mt-3">
              Jakarta Headquarters
            </h4>
            <p className="text-base md:text-md leading-relaxed text-gray-700">
              We operate globally with a strong presence in the MENA region.
              Let's meet and create something unforgettable.
            </p>
          </div>

          <div
            className="
  flex 
  items-center 
  justify-center
          2xs:flex 
          2xs:items-center 
          2xs:justify-center

          xs:flex 
          xs:items-center 
          xs:justify-center

          xs:flex 
          xs:items-center 
          xs:justify-center
          sm:flex 
          sm:items-center 
          sm:justify-center
          md:block
          ">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2.5 flex">
                Follow Us
              </h3>
              <div className="flex items-center gap-4 text-[#E91E63] text-xl">
                <a
                  href="https://www.facebook.com/yousefeslam214"
                  aria-label="Facebook">
                  <FaFacebookF className="hover:scale-110 transition-transform" />
                </a>
                <a href="https://wa.me/201005307391" aria-label="WhatsApp">
                  <FaWhatsapp className="hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yousef-eslam-dev/"
                  aria-label="LinkedIn">
                  <FaLinkedinIn className="hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VisionMission />
      <ServicesSection />
      <WhyTrustSection />
      <CTASection />
      <TestimonialsSection />
      <div id="faq">
        <FAQSection />
      </div>
    </section>
  );
};

export default About;
