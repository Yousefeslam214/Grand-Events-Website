import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

// Dynamically load heavy components
const ContactForm = dynamic(() => import("@/src/components/ContactForm"));
const MapSection = dynamic(() => import("@/src/components/MapSection"), {
  loading: () => (
    <div className="w-full h-64 bg-gray-200 rounded-xl animate-pulse" />
  ),
  ssr: false,
});

const Contact = () => {
  // Import social icons from react-icons

  return (
    <section className="px-4 py-12 max-w-screen-xl mx-auto mt-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions or ready to plan your next event? Our team is here to
          help.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Phone */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-[#E91E63]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <FaPhone className="text-[#E91E63] text-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600 mb-2">Available 10AM-10PM, Sat-Thu</p>
          <a
            href="tel:+201005307391"
            className="text-[#E91E63] hover:underline font-medium">
            +20 100 530 7391
          </a>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-[#E91E63]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <FaEnvelope className="text-[#E91E63] text-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
          <a
            href="mailto:yousefeslam214@gmail.com"
            className="text-[#E91E63] hover:underline font-medium">
            yousefeslam214@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-[#E91E63]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <FaMapMarkerAlt className="text-[#E91E63] text-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600 mb-2">Jakarta Headquarters</p>
          <button className="text-[#E91E63] hover:underline font-medium cursor-pointer">
            <Link href="https://www.google.com/maps?ll=-6.229746,106.829518&z=13&t=m&hl=en-US&gl=US&mapclient=embed&q=Jakarta+Indonesia">
              View on Map
            </Link>
          </button>
        </div>
      </div>

      {/* Form + Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Location</h2>
          <MapSection />
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Grand Events HQ</h3>
            <p className="text-gray-600">
              Jl. Sudirman No. 1, Jakarta 12190
              <br />
              Indonesia
            </p>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Business Hours:</h4>
              <p className="text-gray-600">
                Sat-Thu: 10AM - 10PM
                <br />
                Friday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6">
          <a
            href="https://facebook.com/yousefeslam214"
            className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookF className="text-[#1877F3] text-2xl" />
          </a>
          <a
            href="https://wa.me/201005307391"
            className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer">
            <FaWhatsapp className="text-[#25D366] text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/yousef-eslam-dev/"
            className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn className="text-[#0A66C2] text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
