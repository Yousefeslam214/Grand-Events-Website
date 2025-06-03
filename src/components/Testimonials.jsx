const testimonials = [
  {
    quote:
      "Grand Events brought our product launch to life! The energy, the attention to detail, and the flawless execution left our guests speechless.",
    name: "Sarah M., Brand Manager",
  },
  {
    quote:
      "We needed something creative and bold. They nailed the concept and handled everything with professionalism and passion.",
    name: "Omar H., Marketing Director",
  },
  {
    quote:
      "From planning to promotion, Grand Events took care of it all. Our hybrid event was a huge success, and we couldn't have done it without them.",
    name: "Laila F., Event Organizer",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#E91E63]">
          📝 What Our Clients Say
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-left">
              <blockquote className="text-gray-700 italic mb-4">
                “{testimonial.quote}”
              </blockquote>
              <cite className="block font-bold text-[#E91E63] not-italic">
                – {testimonial.name}
              </cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
