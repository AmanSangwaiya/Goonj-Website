import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../../assets/logoTransparent.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Scroll to a section (like Contact)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Home button click
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      scrollToTop();
    } else {
      navigate("/");
    }
  };

  // Contact button click
  const handleContactClick = () => {
    if (location.pathname === "/") {
      scrollToSection("contact");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection("contact"), 100); // wait for navigation
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-90rem mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={handleHomeClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img className="w-8" src={logo} alt="Goonj Logo" />
          <span className="font-sans text-2xl">Goonj : Feel Your Soul</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={handleHomeClick}
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
            onClick={handleContactClick}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={handleHomeClick}
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
            <Link
              to="/team"
              className="hover:text-purple-600 transition-colors"
            >
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
              onClick={handleContactClick}
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
