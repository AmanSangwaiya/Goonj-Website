import React, { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";

// Images from public folder
const images = [
  "/bg.jpg",
  "/41.jpg",
  "/57.jpeg",
  "/67.jpg",
  "/i.jpg",
  "/12.jpg",
  "/5.jpg",
  "/i3.jpg",
  "/30.jpg",
  "/i2.jpg",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  const startX = useRef(0);
  const endX = useRef(0);

  const nextSlide = () => setCurrentIndex((p) => (p + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    endX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10 && !hasScrolledOnce) {
        setHasScrolledOnce(true);
        setShowScrollIcon(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasScrolledOnce]);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section
        id="home"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          {images.map((img, i) => (
            <ImageWithFallback
              key={i}
              src={img}
              alt="Goonj Musical Event"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white"
        >
          <ChevronLeft size={26} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white"
        >
          <ChevronRight size={26} />
        </button>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-7xl font-bold mb-3">Goonj</h1>
          <p className="text-sm sm:text-2xl mb-6 text-gray-200">
            Official Musical Society of DCRUST, Murthal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={scrollToAbout}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors border border-white/50"
            >
              Learn More
            </button>
          </div>
        </div>

        {showScrollIcon && (
          <div
            onClick={scrollToAbout}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer animate-[bounce_1.2s_infinite]"
          >
            <div className="w-11 h-11 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <ArrowDown size={20} className="text-white" />
            </div>
            <span className="text-white text-xs mt-1 opacity-80">
              Scroll Down
            </span>
          </div>
        )}

        <div className="absolute bottom-12 sm:bottom-6 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                i === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section id="about" className="bg-white">
        {/* About content */}
      </section>
    </>
  );
}
