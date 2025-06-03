// import React from "react";
// import Image from "next/image";

// const about = () => {
//   return (
//     <div className="px-4 py-12 mt-8">
//       <div className="relative h-96 mb-15">
//         <Image
//           src="/assets/large-group-fans-with-arms-raised-having-fun-music-concert-night.webp"
//           alt="hero image"
//           width={1600} // Increased width
//           height={684}
//           className="w-full h-120 object-cover rounded-lg shadow-lg"
//           priority
//         />
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/50 rounded-lg h-120"></div>

//         {/* Grid Container */}
//         <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 h-120 z-10 text-white">
//           {/* Left Side: Text */}
//           <div className="flex flex-col justify-center px-6 py-12">
//             <h1 className="text-3xl md:text-4xl font-bold">
//               Dream world wide in jakatra
//             </h1>
//             <h3 className="text-lg md:text-xl font-semibold">
//               Experience the vibrant culture and energy of Jakarta
//             </h3>
//             <p className="">
//               DesignHub organized a 3D Modeling Workshop using Blender on 16th
//               February at 5 PM. The workshop taught participants the magic of
//               creating stunning 3D models and animations using Blender. It was
//               suitable for both beginners and experienced users. The event was
//               followed by a blender-render competition, which added to the
//               excitement.
//             </p>
//             <h3 className="text-lg md:text-xl font-semibold">View map</h3>
//           </div>

//           {/* Right Side: Centered White Box */}
//           <div className="flex items-center justify-center px-6 py-12 ">
//             <div className="bg-white p-6 shadow-lg w-64 rounded-lg w-[200px] md:w-[250px] lg:w-[350px]">
//               <h1 className="text-xl text-black font-bold">Date &amp; time</h1>
//               <p className="text-gray-500 mt-2 text-base font-sans text-md mb-1">
//                 Saturday, March 18 2026, 9.30PM
//               </p>
//               <a className="text-[#E91E63] mt-2 text-base font-sans text-sm">
//                 Add to calendar
//               </a>
//               <button className="mt-4 px-4 py-2 bg-[#E91E63] text-white rounded-md hover:bg-[#d81b60] transition-colors w-full">
//                 Book Your Spot
//               </button>
//               <button className="mt-4 px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors w-full">
//                 Show Our Events
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default about;
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import FAQSection from "@/src/components/FAQSection";
import WhyTrustSection from "@/src/components/WhyTrustSection";

const About = () => {
  return (
    <section className="px-4 py-12 mt-8">
      <div className="relative rounded-lg overflow-hidden max-w-screen-xl mx-auto min-h-[24rem] md:min-h-[30rem] lg:min-h-[36rem]">
        {/* Background Image */}
        <Image
          src="/assets/large-group-fans-with-arms-raised-having-fun-music-concert-night.webp"
          alt="Hero Image"
          fill
          className="object-cover w-full h-full"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Grid Content */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 z-10 text-white h-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-6 py-8 md:py-12 space-y-4 text-balance">
            <h1 className="text-3xl md:text-4xl font-bold">
              Dream Worldwide in Jakarta
            </h1>
            <h3 className="text-lg md:text-xl font-semibold">
              Experience the vibrant culture and energy of Jakarta
            </h3>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th
              February at 5 PM. The workshop taught participants the magic of
              creating stunning 3D models and animations using Blender. It was
              suitable for both beginners and experienced users. The event was
              followed by a blender-render competition, which added to the
              excitement.
            </p>
            <h3 className="text-lg md:text-xl font-semibold underline underline-offset-2">
              View Map
            </h3>
          </div>

          {/* Right Side White Box */}
          <div className="flex items-center justify-center px-6 py-8 md:py-12">
            <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm space-y-4 transition-all duration-300">
              <h2 className="text-xl text-black font-bold">Date &amp; Time</h2>
              <p className="text-gray-600">Saturday, March 18 2026, 9:30 PM</p>
              <a href="#" className="text-[#E91E63] hover:underline">
                Add to calendar
              </a>
              <button className="mt-2 px-4 py-2 bg-[#E91E63] text-white rounded-md hover:bg-[#d81b60] transition-colors w-full">
                Book Your Spot
              </button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors w-full">
                Show Our Events
              </button>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="text-[#E91E63] hover:underline text-center">
                  No Refunds
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 py-10 max-w-screen-xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-1.5">
              Description
            </h3>
            <p className="text-base md:text-md leading-relaxed text-gray-700">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th
              February at 5 PM. The workshop taught participants the magic of
              creating stunning 3D models and animations using Blender. It was
              suitable for both beginners and experienced users. The event was
              followed by a blender-render competition, which added to the
              excitement. DesignHub organized a 3D Modeling Workshop using
              Blender again on 16th February at 5 PM. It was exciting!
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-1.5">Hours</h3>
            <p className="text-base md:text-md leading-relaxed">
              Weekdays: <span className="text-[#E91E63]">7PM - 10PM</span>{" "}
              <br />
              Sunday: <span className="text-[#E91E63]">7PM - 10PM</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-1.5">
              Organizer Contact
            </h3>
            <p className="text-base md:text-md leading-relaxed">
              Please visit{" "}
              <a
                href="https://www.yousef-eslam.me"
                className="text-[#E91E63] hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                www.sneakypeeks.com
              </a>{" "}
              and refer to the FAQ section for more details.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Our Main Office
            </h3>
            {/* Map Embed */}
            <div>
              <iframe
                title="Event Location Map"
                className="w-full h-64 rounded-xl "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19846.51598589966!2d106.8166666!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c1e2f62c0f%3A0x3dbac6fdc0406e4a!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2seg!4v1717420000000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h4 className="text-md md:text-lg font-medium mb-1.5 mt-3">
              Dream worldwide in Jakarta
            </h4>
            <p className="text-base md:text-md leading-relaxed text-gray-700">
              Dummy location generation model by RSU ... Our approach generates
              more realistic dummy locations.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                Egypt events
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                Laubia events
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                Saudi events
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                EAU events
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                Tech events
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2.5">
              Share with Friends
            </h3>
            <div className="flex items-center gap-4 text-[#E91E63] text-xl">
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="hover:scale-110 transition-transform" />
              </a>
              <a href="#" aria-label="WhatsApp">
                <FaWhatsapp className="hover:scale-110 transition-transform" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <FAQSection />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            🎨 Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Service 1 */}
            <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                🎤 Event Planning & Management
              </h3>
              <p className="text-gray-700">
                End-to-end event execution from logistics to showtime.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                🧠 Creative Concept Development
              </h3>
              <p className="text-gray-700">
                We craft compelling themes and narratives to bring your vision
                to life.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                📢 Marketing & Promotion
              </h3>
              <p className="text-gray-700">
                From social media and influencers to paid campaigns, we boost
                reach and attendance.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                🖥️ Digital Event Experiences
              </h3>
              <p className="text-gray-700">
                Virtual & hybrid event solutions with livestreaming and
                interactivity.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                🤝 Sponsor & Speaker Management
              </h3>
              <p className="text-gray-700">
                We coordinate with speakers and sponsors to ensure smooth
                collaboration.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                🎯 Brand Activations & Exhibitions
              </h3>
              <p className="text-gray-700">
                Interactive brand experiences designed to engage and convert
                your audience.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* why us  */}
      <WhyTrustSection />

      {/* cta */}
      <section className="py-16 bg-[#E91E63] text-white text-center px-4 w-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📞 Let's Plan Your Next Big Event
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Have an idea? We’ll bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              className="bg-white text-[#E91E63] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              📩 Book a Free Consultation
            </a>
            <a
              href="https://wa.me/201005307391"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#E91E63] transition-colors">
              ☎️ Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#E91E63]">
          📝 What Our Clients Say
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <p className="text-gray-700 italic mb-4">
              “Grand Events brought our product launch to life! The energy, the
              attention to detail, and the flawless execution left our guests
              speechless.”
            </p>
            <div className="font-bold text-[#E91E63]">
              – Sarah M., Brand Manager
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <p className="text-gray-700 italic mb-4">
              “We needed something creative and bold. They nailed the concept
              and handled everything with professionalism and passion.”
            </p>
            <div className="font-bold text-[#E91E63]">
              – Omar H., Marketing Director
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <p className="text-gray-700 italic mb-4">
              “From planning to promotion, Grand Events took care of it all. Our
              hybrid event was a huge success, and we couldn't have done it
              without them.”
            </p>
            <div className="font-bold text-[#E91E63]">
              – Laila F., Event Organizer
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

// 📝 Newsletter Sign-up
// Centered form:

// Email input + Submit button

// Text: “Stay updated with the latest events & offers”

// 📩 Contact / Drop a Message
// Form with:

// Name, Email, Subject, Message

// Submit button → styled with your main brand colors
