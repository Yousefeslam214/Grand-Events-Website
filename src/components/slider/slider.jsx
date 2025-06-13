import Image from "next/image";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTransition(true);
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length, isPaused]);
  const nextSlide = () => {
    setTransition(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };
  const prevSlide = () => {
    setTransition(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setTransition(true);
    setCurrentIndex(index);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Image carousel"
      aria-roledescription="carousel"
      aria-live="polite"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh", // fill hero screen
        overflow: "hidden",
        // aspectRatio: "16/9", // e.g., 16:9 ratio (common for banners)
        // // height: "500px", // Fixed height

        // // height: "100%",
        // overflow: "hidden",
        // // touchAction: "pan-y", // Add this line
      }}>
      <button
        className=" 
        hidden sm:inline
        absolute  z-2 right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-all duration-300 transform hover:scale-110"
        aria-label="Next slide"
        onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div
        className="carousel-track"
        style={{
          display: "flex",
          position: "relative",
          width: `${items.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / items.length)}%)`,
          transition: transition ? "transform 0.5s ease-in-out" : "none",
        }}>
        {items.map((item) => (
          <div
            key={item.id}
            className="carousel-slide"
            style={{
              width: `${100 / items.length}%`,
              flexShrink: 0,
              position: "relative",
              height: "100vh", // full screen height
            }}>
            <Image
              src={item.image}
              alt={item.title || "Carousel image"}
              // layout="responsive"
              fill
              // width={800}
              // height={400}
              objectFit="cover"
              loading="lazy"
            />
            {(item.title || item.description) && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gradient-to-t from-black/70 to-transparent p-4 text-white ">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="
                  mt-4
                  items-center justify-center
                  ">
                  {item.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mt-2 md:mt-3   text-xs  sm:text-sm   md:text-lg     lg:text-xl     leading-relaxedtracking-normaltext-center    max-w-2xl      mx-auto        px-4 sm:px-6   text-gray-100  opacity-90">
                      {item.description}
                    </motion.p>
                  )}
                  {/* Title */}
                  {item.title && (
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0 }}
                      className="
                      text-2xl
                      xs:text-sm
                      sm:text-xs

                      md:text-4xl
                      lg:text-5xl
                      xl:text-6xl   
                      font-bold 
                      mb-2
                      md:mb-4
                      leading-tight 
                      tracking-tight
                      text-center
                      px-4
                    ">
                      {item.title}
                    </motion.h1>
                  )}

                  {/* Description */}
                  <motion.button
                    style={{ backgroundColor: "#ea1e63" }}
                    aria-label="explore"
                    className=" btn
                    text-white px-4 py-2 rounded-sm  text-xs md:text-sm  lg:text-base xl:text-lg"
                    // whileHover={{ scale: 1.1 }}
                    // whileTap={{ scale: 0.9 }}
                  >
                    EXPLORE
                  </motion.button>
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        className="
       hidden sm:inline
        absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-all duration-300 transform hover:scale-110"
        aria-label={`perevious slide`}
        onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            aria-label={`Go to slide ${index + 1}`}
            key={index}
            onClick={() => goToSlide(index)}
            className={`
                hidden sm:inline
                h-3 w-3 rounded-full ${
                  currentIndex === index ? " bg-white scale-115" : "bg-gray-400"
                }`}
          />
        ))}
      </div>
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Slider;
