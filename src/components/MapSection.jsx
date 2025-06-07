const MapSection = () => {
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden">
      <iframe
        title="Our Location"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19846.51598589966!2d106.8166666!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c1e2f62c0f%3A0x3dbac6fdc0406e4a!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2seg!4v1717420000000"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapSection;
