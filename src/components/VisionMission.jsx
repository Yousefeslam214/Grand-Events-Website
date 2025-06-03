import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          Vision & Mission
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-xl font-semibold text-[#E91E63] mb-4">Our Vision</h3>
          <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
            To be the leading event agency that transforms ordinary gatherings into unforgettable global experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-[#E91E63] mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
            We commit to delivering creative, seamless, and impactful events that connect people, inspire ideas, and elevate brands worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
