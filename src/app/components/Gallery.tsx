// Gallery.tsx
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const galleryImages = [
    "/1.1.png",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
    "/16.jpg",
    "/17.jpg",
    "/18.jpg",
    "/19.jpg",
    "/20.jpg",
    "/21.jpg",
    "/22.jpg",
    "/23.jpg",
    "/24.jpg",
    "/25.jpg",
    "/26.jpg",
    "/27.jpg",
    "/28.jpg",
    "/29.jpg",
    "/30.jpg",
    "/31.jpg",
    "/32.jpg",
    "/33.jpg",
    "/34.jpg",
    "/35.jpg",
    "/36.jpg",
    "/37.jpg",
    "/38.jpg",
    "/39.jpg",
    "/40.jpg",
    "/41.jpg",
    "/42.jpg",
    "/43.jpg",
    "/44.jpg",
    "/45.jpg",
    "/46.jpg",
    "/47.jpg",
    "/48.jpg",
    "/49.jpg",
    "/50.jpg",
    "/51.jpg",
    "/52.jpg",
    "/53.jpg",
    "/54.jpg",
    "/55.jpg",
    "/56.jpg",
    "/57.jpeg",
    "/58.jpeg",
    "/59.jpeg",
    "/60.jpeg",
    "/61.jpeg",
    "/62.jpeg",
    "/63.jpeg",
    "/64.jpeg",
    "/65.jpeg",
    "/66.png",
    "/67.jpg",
    "/68.1.png",
    "/69.jpg",
    "/70.jpg",
    "/71_1.jpg",
    "/72.jpg",
    "/73.jpg",
    "/74.jpg",
    "/75.jpg",
  ].map((src, index) => ({
    src,
    alt: `Gallery Image ${index + 1}`,
  }));

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 9);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight")
        setCurrentIndex((i) => (i + 1) % galleryImages.length);
      if (e.key === "ArrowLeft")
        setCurrentIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, galleryImages.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;

    if (diff > 50) setCurrentIndex((i) => (i + 1) % galleryImages.length);
    else if (diff < -50)
      setCurrentIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));

    setTouchStartX(null);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Moments captured from our performances and events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-8">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsOpen(true);
              }}
              className="relative aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              See More ({galleryImages.length - 9})
            </button>
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative bg-black rounded-xl shadow-2xl max-w-4xl w-full p-2">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-lg"
            >
              ✕
            </button>

            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="max-h-[75vh] w-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
