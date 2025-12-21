import { Hero } from "../app/components/Hero";
import { About } from "../app/components/About";
import { Events } from "../app/components/Events";
import { Team } from "../app/components/Team";
import { TeacherCoordinator } from "../app/components/TeacherCoordinator";
import { Alumini } from "../app/components/Alumini";
import { Achievements } from "../app/components/Achievements";
import { Gallery } from "../app/components/Gallery";
import { Contact } from "../app/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Team />
      <TeacherCoordinator />
      <Alumini />
      <Achievements />
      <Gallery />
      <Contact />
    </>
  );
}
