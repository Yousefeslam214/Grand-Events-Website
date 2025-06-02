import React from "react";
import HeadPage from "./HeadPage";

const MessageSection = () => {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto mt-10 mb-10">
      <div className="text-center mb-12">
        <HeadPage
          content="DROP A MESSAGE"
          second="Global Grand Event on Digital Design"
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Enter subject"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Enter your message"></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#e91f63] hover:bg-[#c2185b] text-white font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105">
              SEND US NOW
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MessageSection;
