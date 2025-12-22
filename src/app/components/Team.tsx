import { useState } from "react";

/* Assets imports */
import lokesh from "../../assets/lokesh.jpeg";
import rajni from "../../assets/rajni.jpeg";
import himanshu from "../../assets/himanshu.png";
import twinkle from "../../assets/twinkle.jpeg";
import akshay from "../../assets/akshay.png";
import vipul from "../../assets/vipul.png";
import harpreet from "../../assets/harpreet.jpeg";
import aditi from "../../assets/aditi.jpeg";
import ankit from "../../assets/Ankit.jpeg";
import nikita from "../../assets/nikita.jpeg";
import harshit from "../../assets/harshit.jpg";
import dikshant from "../../assets/dikshant.jpg";
import arun from "../../assets/arun.jpg";
import aastha from "../../assets/aastha.jpeg";
import aman from "../../assets/aman.jpeg";
import manthan from "../../assets/manthan.jpg";
import saman from "../../assets/saman.jpeg";
import omi from "../../assets/omi.jpeg";
import sahil from "../../assets/sahil.jpeg";
import janvi from "../../assets/janvi.jpeg";
import rajkumar from "../../assets/rajkumar.jpeg";
import ayushi from "../../assets/ayushi.jpeg";
import rishabh from "../../assets/rishabh.jpeg";
import lavisha from "../../assets/lavisha.jpeg";
import preet from "../../assets/preet.jpeg";
import ambika from "../../assets/ambika.jpeg";
import nandini from "../../assets/nandini.jpeg";
import dharmendar from "../../assets/dharmendar.jpeg";
import mahesh from "../../assets/mahesh.jpeg";
import rupen from "../../assets/rupen.jpeg";
import sehrish from "../../assets/sehrish.jpeg";
import pavnesh from "../../assets/pavnesh.jpeg";
import harshpreet from "../../assets/harshpreet.jpeg";
import abhishek from "../../assets/abhishek.jpeg";
import mohit from "../../assets/mohit.jpg";
import sachin from "../../assets/sachin.jpg";

export function Team() {
  const [showAll, setShowAll] = useState(false);

  const teamMembers = [
    {
      name: "Lokesh",
      role: "Coordinator",
      instrument: "Drummer",
      image: lokesh,
    },
    {
      name: "Rajni",
      role: "Coordinator",
      instrument: "Vocalist",
      image: rajni,
    },
    {
      name: "Himanshu",
      role: "Management Coordinator",
      instrument: "",
      image: himanshu,
    },
    {
      name: "Twinkle",
      role: "Management Coordinator",
      instrument: "Vocalist",
      image: twinkle,
    },
    {
      name: "Akshay Bholay",
      role: "",
      instrument: "Vocalist & Guitarist",
      image: akshay,
    },
    {
      name: "Vipul",
      role: "",
      instrument: "Vocalist & Guitarist",
      image: vipul,
    },
    {
      name: "Harpreet",
      role: "",
      instrument: "Vocalist & Guitarist",
      image: harpreet,
    },
    { name: "Aditi", role: "", instrument: "Vocalist", image: aditi },
    {
      name: "Ankit",
      role: "",
      instrument: "Guitarist & Vocalist",
      image: ankit,
    },
    { name: "Nikita", role: "", instrument: "Vocalist", image: nikita },
    {
      name: "Harshit Gupta",
      role: "",
      instrument: "Management",
      image: harshit,
    },
    {
      name: "Dikshant Bhardwaj",
      role: "",
      instrument: "Vocalist",
      image: dikshant,
    },
    { name: "Arun", role: "", instrument: "Vocalist", image: arun },
    { name: "Aastha", role: "", instrument: "Vocalist", image: aastha },
    { name: "Aman", role: "", instrument: "Drummer", image: aman },
    {
      name: "Manthan",
      role: "",
      instrument: "Vocalist & Guitarist",
      image: manthan,
    },
    { name: "Saman", role: "", instrument: "Vocalist", image: saman },
    { name: "Omi", role: "", instrument: "Management", image: omi },
    { name: "Sahil", role: "", instrument: "Management", image: sahil },
    { name: "Janvi", role: "", instrument: "Management", image: janvi },
    { name: "Raj Kumar", role: "", instrument: "Vocalist", image: rajkumar },
    { name: "Ayushi", role: "", instrument: "Vocalist", image: ayushi },
    { name: "Rishabh", role: "", instrument: "Guitarist", image: rishabh },
    { name: "Lavisha", role: "", instrument: "Vocalist", image: lavisha },
    { name: "Preet", role: "", instrument: "Vocalist", image: preet },
    { name: "Ambika", role: "", instrument: "Vocalist", image: ambika },
    { name: "Nandini", role: "", instrument: "Vocalist", image: nandini },
    {
      name: "Dharmendra",
      role: "",
      instrument: "Lyricist & Rapper",
      image: dharmendar,
    },
    { name: "Mahesh", role: "", instrument: "Keyboard Player", image: mahesh },
    { name: "Rupen", role: "", instrument: "Vocalist", image: rupen },
    { name: "Sehrish", role: "", instrument: "Vocalist", image: sehrish },
    { name: "Pavnesh", role: "", instrument: "Rapper", image: pavnesh },
    { name: "Harshpreet", role: "", instrument: "Flutist", image: harshpreet },
    {
      name: "Abhishek Sinha",
      role: "",
      instrument: "Vocalist",
      image: abhishek,
    },
    { name: "Mohit Jangra", role: "", instrument: "Vocalist", image: mohit },
    {
      name: "Sachin Dadarwal",
      role: "",
      instrument: "Vocalist",
      image: sachin,
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
