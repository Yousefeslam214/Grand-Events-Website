import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

export default function Carousel({
  items,
  autoSlide = true,
  interval = 3000,
  animationType = "slide", // 'slide', 'fade', or 'zoom'
  transitionDuration = 500,
}) {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of cloned slides
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Add cloned slides at beginning and end
  const clonedItems = [
    { ...items[items.length - 1], id: -1 }, // Clone of last item
    ...items,
    { ...items[0], id: -2 }, // Clone of first item
  ];

  useEffect(() => {
    if (!autoSlide) return;

    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [autoSlide, interval, isAnimating]);

  useEffect(() => {
    if (currentIndex === 0) {
      // Jump to the real last slide without animation
      setTransitionEnabled(false);
      setCurrentIndex(items.length);
    } else if (currentIndex === clonedItems.length - 1) {
      // Jump to the real first slide without animation
      setTransitionEnabled(false);
      setCurrentIndex(1);
    } else {
      setTransitionEnabled(true);
    }
  }, [currentIndex, items.length, clonedItems.length]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), transitionDuration);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), transitionDuration);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index + 1); // +1 because of the cloned first slide
    setTimeout(() => setIsAnimating(false), transitionDuration);
  };

  // Calculate the real index for indicators
  const realIndex = () => {
    if (currentIndex === 0) return items.length - 1;
    if (currentIndex === clonedItems.length - 1) return 0;
    return currentIndex - 1;
  };

  // Animation styles
  const getAnimationStyle = () => {
    switch (animationType) {
      case "fade":
        return {
          transition: transitionEnabled
            ? `opacity ${transitionDuration}ms ease-in-out`
            : "none",
          opacity: transitionEnabled ? 1 : 0,
        };
      case "zoom":
        return {
          transition: transitionEnabled
            ? `transform ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`
            : "none",
          transform: `translateX(-${currentIndex * 100}%) scale(${
            transitionEnabled ? 1 : 0.95
          })`,
          opacity: transitionEnabled ? 1 : 0.7,
        };
      case "slide":
      default:
        return {
          transition: transitionEnabled
            ? `transform ${transitionDuration}ms ease-in-out`
            : "none",
          transform: `translateX(-${currentIndex * 100}%)`,
        };
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Carousel container */}
      <div
        className={`flex ${animationType === "fade" ? "absolute inset-0" : ""}`}
        style={getAnimationStyle()}>
        {clonedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`w-full flex-shrink-0 relative ${
              animationType === "fade"
                ? index === currentIndex
                  ? "opacity-100"
                  : "opacity-0"
                : ""
            }`}>
            <Image
              src={item.image}
              alt={item.title || "Carousel image"}
              className={`w-full h-auto object-cover ${
                animationType === "zoom"
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              priority
            />
            {(item.title || item.description) && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                {item.title && (
                  <h3 className="text-xl font-bold animate-fadeIn">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="mt-1 text-sm animate-fadeIn">
                    {item.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons with hover animations */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-all duration-300 transform hover:scale-110"
        aria-label="Previous slide">
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

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-all duration-300 transform hover:scale-110"
        aria-label="Next slide">
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

      {/* Indicators with bounce animation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              realIndex() === index
                ? "bg-white animate-bounce"
                : "bg-white/50 hover:bg-white/70"
            }`}
            style={{
              width: realIndex() === index ? "1.5rem" : "0.5rem",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  autoSlide: PropTypes.bool,
  interval: PropTypes.number,
  animationType: PropTypes.oneOf(["slide", "fade", "zoom"]),
  transitionDuration: PropTypes.number,
};
