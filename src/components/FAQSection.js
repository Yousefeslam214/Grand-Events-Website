"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of events do you organize?",
      answer:
        "We specialize in tech workshops, networking events, product launches, and community meetups. We also tailor events to match your brand and audience.",
    },
    {
      question: "Do you promote events created by other companies?",
      answer:
        "Yes! We offer complete promotional support for external events including content creation, social media ads, and email marketing.",
    },
    {
      question: "How can I collaborate with your team?",
      answer:
        "You can reach out through our contact page or send us an email. We’ll schedule a quick meeting to discuss your goals and how we can help.",
    },
    {
      question: "Do you handle virtual or hybrid events?",
      answer:
        "Absolutely. We provide tools and support for virtual, in-person, and hybrid formats, including livestreams, virtual booths, and digital ticketing.",
    },
    {
      question: "Can I list my event on your platform?",
      answer:
        "Yes! If you already have an event, we can help you list it on our site and promote it across multiple channels to drive engagement and attendance.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-3 text-gray-600 text-sm md:text-base py-3 bg-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
