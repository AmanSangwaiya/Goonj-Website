import { useState } from "react";

export function Team() {
  const [showAll, setShowAll] = useState(false);

  const teamMembers = [
    {
      name: "Lokesh",
      role: "Coordinator",
      instrument: "Drummer",
      image: "/lokesh.jpeg",
    },
    {
      name: "Rajni",
      role: "Coordinator",
      instrument: "Vocalist",
      image: "/rajni.jpeg",
    },
    {
      name: "Himanshu",
      role: "Management Coordinator",
      instrument: "",
      image: "/himanshu.png",
    },
    {
      name: "Twinkle",
      role: "Management Coordinator",
      instrument: "Vocalist",
      image: "/twinkle.jpeg",
    },
    {
      name: "Akshay Bholay",
      role: "",
      instrument: "Vocalist & Guitarist",
      image: "/akshay.png",
    },
    {
      name: "Vipul",
      role: "",
      instrument: "Vocalist & Guitarist",
      image: "/vipul.png",
    },
    {
      name: "Harpreet",
      role: "",
      instrument: "Vocalist & Guitarist",
      image: "/harpreet.jpeg",
    },
    { name: "Aditi", role: "", instrument: "Vocalist", image: "/aditi.jpeg" },
    {
      name: "Ankit",
      role: "",
      instrument: "Guitarist & Vocalist",
      image: "/Ankit.jpeg",
    },
    { name: "Nikita", role: "", instrument: "Vocalist", image: "/nikita.jpeg" },
    {
      name: "Harshit Gupta",
      role: "",
      instrument: "Management",
      image: "/harshit.jpg",
    },
    {
      name: "Dikshant Bhardwaj",
      role: "",
      instrument: "Vocalist",
      image: "/dikshant.jpg",
    },
    { name: "Arun", role: "", instrument: "Vocalist", image: "/arun.jpg" },
    { name: "Aastha", role: "", instrument: "Vocalist", image: "/aastha.jpeg" },
    { name: "Aman", role: "", instrument: "Drummer", image: "/aman.jpeg" },
    {
      name: "Manthan",
      role: "",
      instrument: "Vocalist & Guitarist",
      image: "/manthan.jpg",
    },
    { name: "Saman", role: "", instrument: "Vocalist", image: "/saman.jpeg" },
    { name: "Omi", role: "", instrument: "Management", image: "/omi.jpeg" },
    { name: "Sahil", role: "", instrument: "Management", image: "/sahil.jpeg" },
    { name: "Janvi", role: "", instrument: "Management", image: "/janvi.jpeg" },
    {
      name: "Raj Kumar",
      role: "",
      instrument: "Vocalist",
      image: "/rajkumar.jpeg",
    },
    { name: "Ayushi", role: "", instrument: "Vocalist", image: "/ayushi.jpeg" },
    {
      name: "Rishabh",
      role: "",
      instrument: "Guitarist",
      image: "/rishabh.jpeg",
    },
    {
      name: "Lavisha",
      role: "",
      instrument: "Vocalist",
      image: "/lavisha.jpeg",
    },
    { name: "Preet", role: "", instrument: "Vocalist", image: "/preet.jpeg" },
    { name: "Ambika", role: "", instrument: "Vocalist", image: "/ambika.jpeg" },
    {
      name: "Nandini",
      role: "",
      instrument: "Vocalist",
      image: "/nandini.jpeg",
    },
    {
      name: "Dharmendra",
      role: "",
      instrument: "Lyricist & Rapper",
      image: "/dharmendar.jpeg",
    },
    {
      name: "Mahesh",
      role: "",
      instrument: "Keyboard Player",
      image: "/mahesh.jpeg",
    },
    { name: "Rupen", role: "", instrument: "Vocalist", image: "/rupen.jpeg" },
    {
      name: "Sehrish",
      role: "",
      instrument: "Vocalist",
      image: "/sehrish.jpeg",
    },
    { name: "Pavnesh", role: "", instrument: "Rapper", image: "/pavnesh.jpeg" },
    {
      name: "Harshpreet",
      role: "",
      instrument: "Flutist",
      image: "/harshpreet.jpeg",
    },
    {
      name: "Abhishek Sinha",
      role: "",
      instrument: "Vocalist",
      image: "/abhishek.jpeg",
    },
    {
      name: "Mohit Jangra",
      role: "",
      instrument: "Vocalist",
      image: "/mohit.jpg",
    },
    {
      name: "Sachin Dadarwal",
      role: "",
      instrument: "Vocalist",
      image: "/sachin.jpg",
    },
  ];

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 8);

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The talented individuals leading Goonj
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {displayedMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                {member.role && (
                  <p className="text-purple-600 font-semibold mb-1">
                    {member.role}
                  </p>
                )}
                <p className="text-gray-600">{member.instrument}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              setShowAll(!showAll);
              document
                .getElementById("team")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-8 py-3 rounded-full transition-colors ${
              showAll
                ? "bg-gray-600 text-white hover:bg-gray-700"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {showAll ? "Show Less" : "See More Team Members"}
          </button>
        </div>
      </div>
    </section>
  );
}
