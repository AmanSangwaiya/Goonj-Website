// Gallery.tsx
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// --- IMPORT ALL 69 IMAGES ---
import g1 from "../../assets/1.1.png";
import g2 from "../../assets/2.jpg";
import g3 from "../../assets/3.jpg";
import g4 from "../../assets/4.jpg";
import g5 from "../../assets/5.jpg";
import g6 from "../../assets/6.jpg";
import g7 from "../../assets/7.jpg";
import g8 from "../../assets/8.jpg";
import g9 from "../../assets/9.jpg";
import g10 from "../../assets/10.jpg";
import g11 from "../../assets/11.jpg";
import g12 from "../../assets/12.jpg";
import g13 from "../../assets/13.jpg";
import g14 from "../../assets/14.jpg";
import g15 from "../../assets/15.jpg";
import g16 from "../../assets/16.jpg";
import g17 from "../../assets/17.jpg";
import g18 from "../../assets/18.jpg";
import g19 from "../../assets/19.jpg";
import g20 from "../../assets/20.jpg";
import g21 from "../../assets/21.jpg";
import g22 from "../../assets/22.jpg";
import g23 from "../../assets/23.jpg";
import g24 from "../../assets/24.jpg";
import g25 from "../../assets/25.jpg";
import g26 from "../../assets/26.jpg";
import g27 from "../../assets/27.jpg";
import g28 from "../../assets/28.jpg";
import g29 from "../../assets/29.jpg";
import g30 from "../../assets/30.jpg";
import g31 from "../../assets/31.jpg";
import g32 from "../../assets/32.jpg";
import g33 from "../../assets/33.jpg";
import g34 from "../../assets/34.jpg";
import g35 from "../../assets/35.jpg";
import g36 from "../../assets/36.jpg";
import g37 from "../../assets/37.jpg";
import g38 from "../../assets/38.jpg";
import g39 from "../../assets/39.jpg";
import g40 from "../../assets/40.jpg";
import g41 from "../../assets/41.jpg";
import g42 from "../../assets/42.jpg";
import g43 from "../../assets/43.jpg";
import g44 from "../../assets/44.jpg";
import g45 from "../../assets/45.jpg";
import g46 from "../../assets/46.jpg";
import g47 from "../../assets/47.jpg";
import g48 from "../../assets/48.jpg";
import g49 from "../../assets/49.jpg";
import g50 from "../../assets/50.jpg";
import g51 from "../../assets/51.jpg";
import g52 from "../../assets/52.jpg";
import g53 from "../../assets/53.jpg";
import g54 from "../../assets/54.jpg";
import g55 from "../../assets/55.jpg";
import g56 from "../../assets/56.jpg";
import g57 from "../../assets/57.jpeg";
import g58 from "../../assets/58.jpeg";
import g59 from "../../assets/59.jpeg";
import g60 from "../../assets/60.jpeg";
import g61 from "../../assets/61.jpeg";
import g62 from "../../assets/62.jpeg";
import g63 from "../../assets/63.jpeg";
import g64 from "../../assets/64.jpeg";
import g65 from "../../assets/65.jpeg";
import g66 from "../../assets/66.png";
import g67 from "../../assets/67.jpg";
import g68 from "../../assets/68.1.png";
import g69 from "../../assets/69.jpg";
import g70 from "../../assets/70.jpg";
import g71_1 from "../../assets/71_1.jpg";
import g72 from "../../assets/72.jpg";
import g73 from "../../assets/73.jpg";
import g74 from "../../assets/74.jpg";
import g75 from "../../assets/75.jpg";
import g76 from "../../assets/76.jpg";

export function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const galleryImages = [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
    g12,
    g13,
    g14,
    g15,
    g16,
    g17,
    g18,
    g19,
    g20,
    g21,
    g22,
    g23,
    g24,
    g25,
    g26,
    g27,
    g28,
    g29,
    g30,
    g31,
    g32,
    g33,
    g34,
    g35,
    g36,
    g37,
    g38,
    g39,
    g40,
    g41,
    g42,
    g43,
    g44,
    g45,
    g46,
    g47,
    g48,
    g49,
    g50,
    g51,
    g52,
    g53,
    g54,
    g55,
    g56,
    g57,
    g58,
    g59,
    g60,
    g61,
    g62,
    g63,
    g64,
    g65,
    g66,
    g67,
    g68,
    g69,
    g70,
    g71_1,
    g72,
    g73,
    g74,
    g75,
  ].map((src, index) => ({ src, alt: `Gallery Image ${index + 1}` }));

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 9);

  // Keyboard navigation
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

  // Swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      // swipe left -> next image
      setCurrentIndex((i) => (i + 1) % galleryImages.length);
    } else if (diff < -50) {
      // swipe right -> prev image
      setCurrentIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
    }

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
                loading="lazy"
                decoding="async"
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

      {/* IMAGE MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative bg-black rounded-xl shadow-2xl max-w-4xl w-full p-2">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-lg hover:scale-110 transition"
            >
              ✕
            </button>

            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              loading="lazy"
              decoding="async"
              className="max-h-[75vh] w-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
