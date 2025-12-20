import { CalendarDays, ChevronRight, X } from "lucide-react";
import { useState } from "react";

interface Event {
  date: string;
  title: string;
  description: string;
  venue: string;
  fullDescription: string;
  organizers: string;
  highlights: string[];
}

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      date: "16 October, 2025",
      title: "Kaarwaan - Retro Musical Night",
      description:
        "An evening where timeless classics come alive again, reminding us of love, memories, and moments that never fade.",
      venue: "Auditorium",
      fullDescription:
        " Kaarwaan was a beautiful retro musical night event that took everyone on a journey back to the golden era of music. The stage came alive with soulful performances of classic old songs , filling the atmosphere with nostalgia and warmth. Teachers and Guests thoroughly enjoyed the evening , reliving cherished memories and celebrating the timeless charm of retro music. Kaarwaan was not just an event , but an experience- where generations connected through song that never fade.",
      organizers: "Goonj",
      highlights: [
        "Live retro song performances celebrating timeless musical classics",
        "Enthusiastic participation and appreciation from teachers and faculty",
        "Special alumni guest performances",
        "Memorable post-event interactions and shared moments",
      ],
    },
    {
      date: "25 August , 2025 - 4 September , 2025",
      title: "Musical Workshop ",
      description:
        "A fun-filled musical workshop for freshers where learning met rhythm, voices met confidence, and strangers turned into bandmates.",
      venue: "UCC Seminar Hall",
      fullDescription:
        "We organized a musical workshop for the freshers where students were trained according to their individual interests. The workshop included sessions on vocals, guitar, cajón, drums, and other instruments, allowing freshers to choose what they were most passionate about.The interactive sessions helped students learn the basics, gain confidence, and express themselves through music. Overall, the workshop created an energetic and welcoming environment, helping freshers connect, learn, and begin their college journey on a melodious note.",
      organizers: "Goonj",
      highlights: [
        "Interest-based learning sessions for freshers",
        "Training in vocals, guitar, cajón, drums, and other instruments",
        "Interactive and hands-on practice sessions",
        "Interactive audience engagement",
        "Guidance from experienced mentors and seniors",
        "Group jamming and collaborative performances",
        "A fun, energetic, and welcoming musical atmosphere",
      ],
    },
    {
      date: "21 May , 2025",
      title: "Crescendo",
      description:
        "Crescendo was a mesmerizing musical showcase featuring soulful vocals and live instrumental performances, captivating the audience throughout.The seamless flow of acts and collaborative energy made it a truly immersive musical experience.",
      venue: "Front of Auditorium",
      fullDescription:
        "Crescendo was a mesmerizing musical showcase featuring soulful vocals and live instrumental performances, captivating the audience throughout.The seamless flow of acts and collaborative energy made it a truly immersive musical experience.",
      organizers: "Goonj",
      highlights: [
        "Soulful vocals and live instrumental performances",
        "Seamless progression of acts creating an engaging flow",
        "Harmonies and collaborative performances that mesmerized the audience",
        "Live improvisation moments",
        "Interactive audience engagement",
        "Energetic and immersive musical atmosphere",
      ],
    },
    {
      date: "22 october, 2024",
      title: "Roohdaad-E-Mohabbat 3.0",
      description:
        "Roohdaad-e-Mohabbat was a mesmerizing Sufi night where music transcended boundaries, spreading the message of love, peace, and divine connection.",
      venue: "Courtyard near Central Workshop",
      fullDescription:
        "Roohdaad-e-Mohabbat was a soulful Sufi night filled with melodies of love, devotion, and spirituality. The evening came alive with heartfelt Sufi performances that created a serene and emotional atmosphere. Special alumni performances truly added chaar chaand to the event, making the night even more memorable and enriching for everyone present.",
      organizers: "Goonj & ROOH - The Band ",
      highlights: [
        "Soulful Sufi night celebrating love, devotion, and spirituality",
        "Mesmerizing Sufi performances creating a serene atmosphere",
        "Special alumni performances that added chaar chaand to the evening",
        "An emotionally enriching experience for all present",
      ],
    },
    {
      date: "18 October , 2023",
      title: "Roohdaad-E-Mohabbat 2.0 ",
      description:
        "Roohdaad-e-Mohabbat – A Sufi Musical Night, where soulful melodies and alumni performances added chaar chaand to an unforgettable evening",
      venue: "Courtyard near Central Workshop",
      fullDescription:
        "Roohdaad-e-Mohabbat was a mesmerizing Sufi musical night, where soulful melodies and heartfelt poetry created an atmosphere full of love, devotion, and serenity. The evening was made even more special by alumni performances, which added a touch of nostalgia and elegance to the night. Every performance touched hearts, leaving the audience immersed in music, emotions, and unforgettable memories that lingered long after the last note",
      organizers: "Goonj & ROOH-The Band",
      highlights: [
        "Soul-stirring Sufi performances filled with love and devotion",
        "Mesmerizing poetry and melodies creating a serene atmosphere",
        "Special alumni performances that added warmth and nostalgia",
        "An evening of peace, emotion, and spiritual connection",
        "Audience immersed in soulful music and heartfelt expressions",
      ],
    },
    {
      date: "5 december , 2022",
      title: "Flash Mob 2.0 ",
      description:
        "A flashmob is a musical event featuring an energetic mix of Bollywood, indie, rock, and jazz.The powerful student performances, along with seniors joining in, created a concert-like atmosphere on campus",
      venue: "Front of Auditorium",
      fullDescription:
        "The flashmob turned into a high-energy spectacle, featuring a powerful mix of Bollywood, indie, rock, and jazz songs. The students performed with such confidence and coordination that the entire crowd stayed fully engaged throughout. Their energy and stage presence were so impactful that even the seniors joined in, making the performance feel less like a flashmob and more like a live concert experience on campus",
      organizers: "Goonj & ROOH-The Band",
      highlights: [
        "Student-led  band performances",
        "Fusion of Bollywood, indie, rock, and jazz tracks",
        "Vocal jazz sessions",
        "Live improvisation moments",
        "Interactive audience engagement",
        "Seniors joining in, adding to the excitement and energy",
        "High enthusiasm, cheers, and unforgettable vibes",
      ],
    },
    {
      date: "30 March, 2022",
      title: "Roohdaad-E-Mohabbat  ",
      description:
        "Roohdaad-e-Mohabbat – A Sufi Musical Night, where soulful melodies and alumni performances added chaar chaand to an unforgettable evening",
      venue: "Courtyard near Central Workshop",
      fullDescription:
        "Roohdaad-e-Mohabbat was a mesmerizing Sufi musical night, where soulful melodies and heartfelt poetry created an atmosphere full of love, devotion, and serenity. The evening was made even more special by alumni performances, which added a touch of nostalgia and elegance to the night. Every performance touched hearts, leaving the audience immersed in music, emotions, and unforgettable memories that lingered long after the last note",
      organizers: "Goonj & ROOH-The Band",
      highlights: [
        "Soulful Sufi night celebrating love, devotion, and spirituality",
        "Mesmerizing Sufi performances creating a serene atmosphere",
        "Special alumni performances that added chaar chaand to the evening",
        "An emotionally enriching experience for all present",
      ],
    },
    {
      date: "16 December , 2021",
      title: "Flash Mob",
      description:
        "A flashmob is a musical event featuring an energetic mix of Bollywood, indie, rock, and jazz.The powerful student performances, along with seniors joining in, created a concert-like atmosphere on campus",
      venue: "Courtyard near Central Workshop",
      fullDescription:
        "The flashmob was a high-energy performance blending Bollywood, indie, rock, and jazz songs. Students showcased remarkable confidence and coordination, keeping everyone engaged from start to finish. Their electrifying energy and stage presence were so captivating that seniors joined in, transforming the performance into a concert-like experience on campus.",
      organizers: "Goonj & ROOH-The Band",
      highlights: [
        "Student-led jazz band performances",
        "Vocal jazz sessions",
        "Live improvisation moments",
        "Interactive audience engagement",
      ],
    },
  ];

  return (
    <>
      {/* EVENTS SECTION */}
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Events Organised
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into the musical journeys and moments created by Goonj
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <div
                key={index}
                onClick={() => setSelectedEvent(event)}
                className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white p-3 rounded-lg">
                    <CalendarDays className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <p className="text-purple-600 font-semibold mb-1">
                      {event.date}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <p className="text-sm text-gray-500">📍 {event.venue}</p>
                  </div>
                </div>

                <button className="mt-4 text-sm text-gray-700 hover:text-purple-600 font-medium flex items-center gap-1">
                  Read More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT DETAILS MODAL */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-t-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-purple-100 mb-2">{selectedEvent.date}</p>
                  <h2 className="text-3xl font-bold">{selectedEvent.title}</h2>
                  <p className="text-purple-100 mt-1">
                    📍 {selectedEvent.venue}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="hover:bg-white/20 p-2 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* MODAL CONTENT */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">About This Event</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedEvent.fullDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Organized By</p>
                  <p className="font-semibold text-gray-800">
                    {selectedEvent.organizers}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Moments from the Event
                </h3>
                <div className="space-y-3">
                  {selectedEvent.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-3 rounded-md text-gray-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
