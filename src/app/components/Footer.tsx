import { Music } from "lucide-react";
import logoWhite from "../../assets/logoWhite.png";

export function Footer() {
  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img className="w-9" src={logoWhite} alt="This is logo of Goonj" />
            <span className="font-bold text-lg">Goonj ~ Feel Your Soul</span>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="hover:text-white transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          <p className="text-sm text-gray-400">
            <span>© 2025 Goonj. All rights reserved.</span>
            <br />
            <span>Managed by GOONJkars</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
