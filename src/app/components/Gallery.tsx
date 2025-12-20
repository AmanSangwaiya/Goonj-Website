import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import g1 from "../../assets/1.png";
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
import g67 from "../../assets/67.png";
import g68 from "../../assets/68.png";
import g69 from "../../assets/69.jpg";

export function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: g1,
      alt: "Orchestra Performance",
    },
    {
      src: g2,
      alt: "Students Practicing",
    },
    {
      src: g3,
      alt: "Choir Singing",
    },
    {
      src: g4,
      alt: "Guitar Practice",
    },
    {
      src: g5,
      alt: "Studio Recording",
    },
    {
      src: g6,
      alt: "Grand Performance",
    },
    {
      src: g7,
      alt: "Violin Performance",
    },
    {
      src: g8,
      alt: "Concert Audience",
    },
    {
      src: g9,
      alt: "Piano Recital",
    },
    {
      src: g10,
      alt: "Drum Performance",
    },
    {
      src: g11,
      alt: "Band Rehearsal",
    },
    {
      src: g12,
      alt: "String Ensemble",
    },
    {
      src: g13,
      alt: "Microphone on Stage",
    },
    {
      src: g14,
      alt: "Saxophone Player",
    },
    {
      src: g15,
      alt: "Concert Lights",
    },
    {
      src: g16,
      alt: "Sheet Music",
    },
    {
      src: g17,
      alt: "Acoustic Guitar",
    },
    {
      src: g18,
      alt: "Trumpet Section",
    },
    {
      src: g19,
      alt: "Sheet Music",
    },
    {
      src: g20,
      alt: "Acoustic Guitar",
    },
    {
      src: g21,
      alt: "Acoustic Guitar",
    },
    {
      src: g22,
      alt: "Trumpet Section",
    },
    {
      src: g23,
      alt: "Sheet Music",
    },
    {
      src: g24,
      alt: "Acoustic Guitar",
    },
    {
      src: g25,
      alt: "Trumpet Section",
    },
    {
      src: g26,
      alt: "Sheet Music",
    },
    {
      src: g27,
      alt: "Acoustic Guitar",
    },
    {
      src: g28,
      alt: "Trumpet Section",
    },
    {
      src: g29,
      alt: "Sheet Music",
    },
    {
      src: g30,
      alt: "Acoustic Guitar",
    },
    {
      src: g31,
      alt: "Trumpet Section",
    },
    {
      src: g32,
      alt: "Sheet Music",
    },
    {
      src: g33,
      alt: "Acoustic Guitar",
    },
    {
      src: g34,
      alt: "Trumpet Section",
    },
    {
      src: g35,
      alt: "Sheet Music",
    },
    {
      src: g36,
      alt: "Acoustic Guitar",
    },
    {
      src: g37,
      alt: "Trumpet Section",
    },
    {
      src: g38,
      alt: "Sheet Music",
    },
    {
      src: g39,
      alt: "Acoustic Guitar",
    },
    {
      src: g40,
      alt: "Trumpet Section",
    },
    {
      src: g41,
      alt: "Sheet Music",
    },
    {
      src: g42,
      alt: "Acoustic Guitar",
    },
    {
      src: g43,
      alt: "Trumpet Section",
    },
    {
      src: g44,
      alt: "Sheet Music",
    },
    {
      src: g45,
      alt: "Acoustic Guitar",
    },
    {
      src: g46,
      alt: "Trumpet Section",
    },
    {
      src: g47,
      alt: "Sheet Music",
    },
    {
      src: g48,
      alt: "Acoustic Guitar",
    },
    {
      src: g49,
      alt: "Trumpet Section",
    },
    {
      src: g50,
      alt: "Sheet Music",
    },
    {
      src: g51,
      alt: "Acoustic Guitar",
    },
    {
      src: g52,
      alt: "Trumpet Section",
    },
    {
      src: g53,
      alt: "Sheet Music",
    },
    {
      src: g54,
      alt: "Acoustic Guitar",
    },
    {
      src: g55,
      alt: "Trumpet Section",
    },
    {
      src: g56,
      alt: "Sheet Music",
    },
    {
      src: g57,
      alt: "Acoustic Guitar",
    },
    {
      src: g58,
      alt: "Trumpet Section",
    },
    {
      src: g59,
      alt: "Sheet Music",
    },
    {
      src: g60,
      alt: "Acoustic Guitar",
    },
    {
      src: g61,
      alt: "Trumpet Section",
    },
    {
      src: g62,
      alt: "Sheet Music",
    },
    {
      src: g63,
      alt: "Acoustic Guitar",
    },
    {
      src: g64,
      alt: "Trumpet Section",
    },
    {
      src: g65,
      alt: "Sheet Music",
    },
    {
      src: g66,
      alt: "Acoustic Guitar",
    },
    {
      src: g67,
      alt: "Trumpet Section",
    },
    {
      src: g68,
      alt: "Acoustic Guitar",
    },
    {
      src: g69,
      alt: "Trumpet Section",
    },
  ];

  const allImages = galleryImages;
  const displayedImages = showAll ? allImages : allImages.slice(0, 9);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight")
        setCurrentIndex((i) => (i + 1) % allImages.length);
      if (e.key === "ArrowLeft")
        setCurrentIndex((i) => (i === 0 ? allImages.length - 1 : i - 1));
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, allImages.length]);

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

        {!showAll && allImages.length > 9 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              See More ({allImages.length - 9})
            </button>
          </div>
        )}
      </div>

      {/* IMAGE POPUP */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative bg-black rounded-xl shadow-2xl max-w-4xl w-full p-2">
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-lg hover:scale-110 transition"
            >
              ✕
            </button>

            <div className="relative flex items-center justify-center">
              <img
                src={allImages[currentIndex].src}
                alt={allImages[currentIndex].alt}
                className="max-h-[75vh] w-full object-contain rounded-lg"
              />

              <button
                onClick={() =>
                  setCurrentIndex((i) =>
                    i === 0 ? allImages.length - 1 : i - 1
                  )
                }
                className="absolute left-2 bg-black/70 text-white text-2xl px-3 py-1 rounded-full"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setCurrentIndex((i) =>
                    i === allImages.length - 1 ? 0 : i + 1
                  )
                }
                className="absolute right-2 bg-black/70 text-white text-2xl px-3 py-1 rounded-full"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
