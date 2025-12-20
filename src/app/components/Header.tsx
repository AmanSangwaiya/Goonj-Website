import { useState } from "react";
import { Menu, Music } from "lucide-react";
import logo from "../../assets/logoTransparent.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-90rem mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img className="w-8 " src={logo} alt="This is logo of Goonj" />
            <span className="font-sans  text-2xl">Goonj : Feel Your Soul</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              ["Home", "home"],
              ["About", "about"],
              ["Events", "events"],
              ["Team", "team"],
              ["Teacher Coordinators", "coordinators"],
              ["Alumni", "alumni"],
              ["Achievements", "achievements"],
              ["Gallery", "gallery"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-purple-600 transition-colors"
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {[
              ["Home", "home"],
              ["About", "about"],
              ["Events", "events"],
              ["Team", "team"],
              ["Teacher Coordinators", "coordinators"],
              ["Alumni", "alumni"],
              ["Achievements", "achievements"],
              ["Gallery", "gallery"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left hover:text-purple-600 transition-colors"
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
