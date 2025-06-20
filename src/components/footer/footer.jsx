import React from "react";

const Footer = () => {
  return (
    <footer
      className="
    pt-12
    bg-[#222222] text-white py-4 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* GRAND Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#E91E63]">GRAND</h1>
          <p className="text-gray-400">
            Aerom'sman doker sit amet elit sed lata tempor incididunt ut labore
            et dolore aliquam veriam quis nostrud incididunt.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">QUICK LINKS</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/events" className="hover:text-white transition">
                Events
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="
              
              hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* RECENT EVENTS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">RECENT EVENTS</h2>
          <div className="space-y-4 text-gray-400">
            <div className="border-b border-gray-700 pb-4"></div>
            <a
              href="/events/london"
              className="hover:text-white transition text-gray-400">
              <p>London Tech Meetup</p>
              <p className="text-sm text-gray-500">OCTOBER 13, 2023</p>
            </a>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <a
              href="/events/san-francisco"
              className="hover:text-white transition text-gray-400">
              <p>San Francisco Startup Night</p>
              <p className="text-sm text-gray-500">OCTOBER 20, 2023</p>
            </a>
          </div>
        </div>

        {/* Newsletter and Social */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SUBSCRIBE US</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow px-4 py-2 bg-white border 
                text-black 
                border-gray-700 rounded-l focus:outline-none focus:border-blue-500"
              />
              {/* <button
                className="bg-[#E91E63] hover:bg-[#E91E63] px-4 py-2 rounded-r transition
              cursor-pointer
              ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button> */}
              <button
                className="text-white bg-[#E91E63] hover:bg-[#E91E63] px-4 py-2 rounded-r transition cursor-pointer"
                aria-label="Submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-md font-semibold">FOLLOW US ON</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yousefeslam214"
                className="text-gray-400 hover:text-white transition"
                aria-label="Follow us on Facebook"
                title="Facebook">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/yousef-eslam-dev/"
                className="text-gray-400 hover:text-white transition"
                aria-label="Follow us on LinkedIn"
                title="LinkedIn">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://facebook.com/yousefeslam214"
                className="text-gray-400 hover:text-white transition"
                aria-label="Follow us on Instagram"
                title="Instagram">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
