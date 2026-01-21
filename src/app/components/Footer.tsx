import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logoWhite.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Goonj Logo"
              className="w-9 h-9 object-contain"
            />
            <span className="font-bold text-lg">Goonj ~ Feel Your Soul</span>
          </div>

          {/* Navigation */}
          <div className="flex gap-8 text-sm text-gray-400">
            <HashLink
              smooth
              to="/#home"
              className="hover:text-white transition-colors"
            >
              Home
            </HashLink>

            <HashLink
              smooth
              to="/#about"
              className="hover:text-white transition-colors"
            >
              About
            </HashLink>

            <HashLink
              smooth
              to="/#events"
              className="hover:text-white transition-colors"
            >
              Events
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </HashLink>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-right">
            <span>© 2025 Goonj. All rights reserved.</span>
            <br />
            <span>Managed by GOONJkars</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
