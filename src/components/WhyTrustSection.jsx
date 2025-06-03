import { motion } from "framer-motion";

const trustItems = [
  { text: "Proven Success in 50+ Events" },
  { text: "Local & Global Reach" },
  { text: "Audience-Centric Approach" },
  { text: "Creative Strategy Meets Precision" },
  { text: "We Care About Every Detail" },
  { text: "Global Experience Team" }, // Updated item
];

export default function WhyTrustSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Why Brands Trust Grand Events
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto text-left">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              //   viewport={{ once: true }}
              className="flex items-start space-x-4 ">
              <div className=" text-white bg-[#E91E63] text-xl rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <p className="text-base font-medium text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
