import React from "react";
import HeadPage from "./HeadPage";

const NewsletterSection = () => {
  // Coordinates for Washington Dulles International Airport (IAD)
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.215573823641!2d-77.4555487241686!3d38.95311637181838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6477329f5d3f3%3A0x6e501c35d73f4fa0!2sWashington%20Dulles%20International%20Airport%20(IAD)!5e0!3m2!1sen!2sus!4v1712345678901";

  return (
    <section
      className="py-20 
    w-full mx-auto bg-[#f2f2f2]
      
    ">
      <HeadPage content="Sign Up For Our Newsletter" />

      <div className="mt-8 flex flex-col  gap-8 items-center">
        {/* Newsletter Form */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e91f63]"
            />
            <button
              className="bg-[#e91f63] text-white px-6 py-3 rounded-md hover:bg-[#c2185b] transition-colors duration-300 font-medium"
              aria-label="Submit form">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full mt-10 ">
          <div
            className="
            aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md
          
          ">
            <iframe
              src={mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Washington Dulles Airport Map"
              className="rounded-lg"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
