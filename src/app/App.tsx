import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Import pages
import Home from "../pages/Home";
import EventsPage from "../pages/EventsPage";
import TeamPage from "../pages/TeamPage";
import GalleryPage from "../pages/GalleryPage";
import AlumniPage from "../pages/AlumniPage";
import AchievementsPage from "../pages/AchievementsPage";
import ContactPage from "../pages/ContactPage";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
