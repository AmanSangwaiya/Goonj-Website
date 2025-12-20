import { ImageWithFallback } from "./figma/ImageWithFallback";
import bg from "../../assets/bg.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={bg}
          alt="Musical Concert Stage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Goonj</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          <span>Official Musical Society of DCRUST , Murthal</span>
          <br />
          <br />
          {/* <span>Uniting talented musicians and music lovers to create unforgettable experiences</span> */}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={scrollToContact}
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </button>
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/30 transition-colors border border-white/50"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
