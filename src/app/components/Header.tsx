import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logoTransparent.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Universal Home + Section navigation
  const goToHomeSection = (id?: string) => {
    setIsMenuOpen(false);

    // If already on Home page
    if (location.pathname === "/") {
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    // If on another page
    else {
      navigate(`/#${id ?? ""}`);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/40 backdrop-blur-lg shadow-sm z-50">
      <nav className="max-w-90rem mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => goToHomeSection()}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img className="w-8" src={logo} alt="Goonj Logo" />
          <span className="font-sans text-2xl">Goonj : Feel Your Soul</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => goToHomeSection()}
            className="hover:text-purple-600 transition-colors"
          >
            Home
          </button>

          <Link
            to="/events"
            className="hover:text-purple-600 transition-colors"
          >
            Events
          </Link>

          <Link to="/team" className="hover:text-purple-600 transition-colors">
            Team
          </Link>

          <Link
            to="/gallery"
            className="hover:text-purple-600 transition-colors"
          >
            Gallery
          </Link>

          <Link
            to="/alumni"
            className="hover:text-purple-600 transition-colors"
          >
            Alumni
          </Link>

          <Link
            to="/achievements"
            className="hover:text-purple-600 transition-colors"
          >
            Achievements
          </Link>

          <button
            onClick={() => goToHomeSection("contact")}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white flex flex-col gap-6 p-6 z-50 shadow-lg">
          <button
            onClick={() => goToHomeSection()}
            className="text-lg font-medium hover:text-purple-600"
          >
            Home
          </button>

          <Link
            to="/events"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-purple-600"
          >
            Events
          </Link>

          <Link
            to="/team"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-purple-600"
          >
            Team
          </Link>

          <Link
            to="/gallery"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-purple-600"
          >
            Gallery
          </Link>

          <Link
            to="/alumni"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-purple-600"
          >
            Alumni
          </Link>

          <Link
            to="/achievements"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-purple-600"
          >
            Achievements
          </Link>

          <button
            onClick={() => goToHomeSection("contact")}
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
