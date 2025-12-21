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
      {/* HOME TOP (for Home button scroll) */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="events">
        <Events />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="coordinators">
        <TeacherCoordinator />
      </section>

      <section id="alumni">
        <Alumini />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      {/* CONTACT SECTION (for Contact button scroll) */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
