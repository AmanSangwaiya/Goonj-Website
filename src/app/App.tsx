import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Team } from './components/Team';
import { TeacherCoordinator } from './components/TeacherCoordinator';
import { Alumini } from './components/Alumini';
import { Achievements } from './components/Achievements';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Events />
      <Team />
      <TeacherCoordinator />
      <Alumini />
      <Achievements />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}