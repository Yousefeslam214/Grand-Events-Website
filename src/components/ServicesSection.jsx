const ServicesSection = () => {
  return (
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
              We craft compelling themes and narratives to bring your vision to
              life.
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
              Interactive brand experiences designed to engage and convert your
              audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
