// Gallery.tsx
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// 👇 Import all 79 images from src/assets
import img1 from "../../assets/1.1.png";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";
import img12 from "../../assets/12.jpg";
import img13 from "../../assets/13.jpg";
import img14 from "../../assets/14.jpg";
import img15 from "../../assets/15.jpg";
import img16 from "../../assets/16.jpg";
import img17 from "../../assets/17.jpg";
import img18 from "../../assets/18.jpg";
import img19 from "../../assets/19.jpg";
import img20 from "../../assets/20.jpg";
import img21 from "../../assets/21.jpg";
import img22 from "../../assets/22.jpg";
import img23 from "../../assets/23.jpg";
import img24 from "../../assets/24.jpg";
import img25 from "../../assets/25.jpg";
import img26 from "../../assets/26.jpg";
import img27 from "../../assets/27.jpg";
import img28 from "../../assets/28.jpg";
import img29 from "../../assets/29.jpg";
import img30 from "../../assets/30.jpg";
import img31 from "../../assets/31.jpg";
import img32 from "../../assets/32.jpg";
import img33 from "../../assets/33.jpg";
import img34 from "../../assets/34.jpg";
import img35 from "../../assets/35.jpg";
import img36 from "../../assets/36.jpg";
import img37 from "../../assets/37.jpg";
import img38 from "../../assets/38.jpg";
import img39 from "../../assets/39.jpg";
import img40 from "../../assets/40.jpg";
import img41 from "../../assets/41.jpg";
import img42 from "../../assets/42.jpg";
import img43 from "../../assets/43.jpg";
import img44 from "../../assets/44.jpg";
import img45 from "../../assets/45.jpg";
import img46 from "../../assets/46.jpg";
import img47 from "../../assets/47.jpg";
import img48 from "../../assets/48.jpg";
import img49 from "../../assets/49.jpg";
import img50 from "../../assets/50.jpg";
import img51 from "../../assets/51.jpg";
import img52 from "../../assets/52.jpg";
import img53 from "../../assets/53.jpg";
import img54 from "../../assets/54.jpg";
import img55 from "../../assets/55.jpg";
import img56 from "../../assets/56.jpg";
import img57 from "../../assets/57.jpeg";
import img58 from "../../assets/58.jpeg";
import img59 from "../../assets/59.jpeg";
import img60 from "../../assets/60.jpeg";
import img61 from "../../assets/61.jpeg";
import img62 from "../../assets/62.jpeg";
import img63 from "../../assets/63.jpeg";
import img64 from "../../assets/64.jpeg";
import img65 from "../../assets/65.jpeg";
import img66 from "../../assets/66.png";
import img67 from "../../assets/67.jpg";
import img68 from "../../assets/68.1.png";
import img69 from "../../assets/69.jpg";
import img70 from "../../assets/70.jpg";
import img71 from "../../assets/71_1.jpg";
import img72 from "../../assets/72.jpg";
import img73 from "../../assets/73.jpg";
import img74 from "../../assets/74.jpg";
import img75 from "../../assets/75.jpg";
import img76 from "../../assets/76.jpg";
import img77 from "../../assets/77.jpg";
import img78 from "../../assets/78.jpg";
import img79 from "../../assets/79.jpg";

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
  img57,
  img58,
  img59,
  img60,
  img61,
  img62,
  img63,
  img64,
  img65,
  img66,
  img67,
  img68,
  img69,
  img70,
  img71,
  img72,
  img73,
  img74,
  img75,
  img76,
  img77,
  img78,
  img79,
].map((src, index) => ({
  src,
  alt: `Gallery Image ${index + 1}`,
}));

export function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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
  }, [isOpen]);

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
