import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const NewCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of cloned slides
  const [fadeIn, setFadeIn] = useState(true); // Animation trigger

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
        setFadeIn(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            index === currentIndex
              ? fadeIn
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0"
          }`}>
          <Image
            src={item.image}
            fill
            className="object-cover"
            alt={item.title || "Carousel image"}
          />
        </div>
      ))}
    </div>
  );
};

export default NewCarousel;

NewCarousel.PropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
