import React from "react";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
