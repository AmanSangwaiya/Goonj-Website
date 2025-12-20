import { Music } from "lucide-react";
import logoWhite from "../../assets/logoWhite.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img className="w-9 " src={logoWhite} alt="This is logo of Goonj" />
            <span className="font-bold text-lg">Goonj ~ Feel Your Soul</span>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#events" className="hover:text-white transition-colors">
              Events
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
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
