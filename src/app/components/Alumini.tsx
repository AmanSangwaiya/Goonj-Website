import { useState } from "react";
import { Quote } from "lucide-react";
import Kunal from "../../assets/Senior.jpg";
import khushi from "../../assets/khushi.png";
import apurva from "../../assets/apurva.png";
import kunalChauhan from "../../assets/kunalChauhan.png";
import nishar from "../../assets/nishar.png";
import jayesh from "../../assets/jayesh.png";
import ansh from "../../assets/ansh.jpg";
import anmol from "../../assets/Anmol.jpg";
import chitrak from "../../assets/chitrak.jpg";
import jatin from "../../assets/jatin.jpg";
import mridul from "../../assets/mridul.png";
import deepanshu from "../../assets/deepanshu.jpg";
import rishita from "../../assets/rishita.png";
import abhay from "../../assets/abhay.png";
import saksham from "../../assets/saksham.jpg";
import aryan from "../../assets/aryan.jpg";
import vinayak from "../../assets/vinayak.png";
import ashutosh from "../../assets/ashutosh.png";
import ayush from "../../assets/ayush.png";
import bahul from "../../assets/bahul.png";
import tanu from "../../assets/tanu.png";
import khushbo from "../../assets/khushbo.png";
import kajal from "../../assets/kajal.png";
import abhishekSir from "../../assets/abhsihekSenior.png";
import yug from "../../assets/yug.png";
import rahul from "../../assets/rahul.png";
import prerna from "../../assets/prerna.png";
import rishabh from "../../assets/rishabh.png";
import bhargavi from "../../assets/bhargavi.jpg";
import prateek from "../../assets/prateek.png";
import deepanshuSir from "../../assets/deepanshuSir.png";
import prisha from "../../assets/prisha.png";
import dimple from "../../assets/dimple.png";
import mahima from "../../assets/mahima.png";
export function Alumini() {
  const [showAll, setShowAll] = useState(false);

  const alumni = [
    {
      name: "Kunal Bhardwaj",
      batch: "BATCH  2K14",
      image: Kunal,
    },
    {
      name: "Abhishek",
      batch: "BATCH  2K14",
      image: Kunal,
    },
    {
      name: "Lakshay",
      batch: "BATCH  2K14",
      image: Kunal,
    },
    {
      name: "Sapna",
      batch: "BATCH  2K14",
      image: Kunal,
    },
    {
      name: "Harshita",
      batch: "BATCH  2K14",
      image: Kunal,
    },
    {
      name: "Sunny Gaur",
      batch: "BATCH  2K14",
      image: Kunal,
    },
    {
      name: "Utkarsh",
      batch: "BATCH  2K15",
      image: Kunal,
    },
    {
      name: "Ayush",
      batch: "BATCH  2K16",
      image: ayush,
    },
    {
      name: "Deepanshu",
      batch: "BATCH  2K16",
      image: deepanshuSir,
    },
    {
      name: "Manish",
      batch: "BATCH  2K16",
      image: ayush,
    },
    {
      name: "Paras",
      batch: "BATCH  2K16",
      image: ayush,
    },
    {
      name: "Anika",
      batch: "BATCH  2K16",
      image: ayush,
    },
    {
      name: "Mahima",
      batch: "BATCH  2K16",
      image: ayush,
    },
    {
      name: "Rahul Sagar",
      batch: "BATCH  2K17",
      image: rahul,
    },
    {
      name: "Ashwini",
      batch: "BATCH  2K17",
      image: rahul,
    },
    {
      name: "Dhruv Balyan",
      batch: "BATCH  2K17",
      image: rahul,
    },
    {
      name: "Nidhi",
      batch: "BATCH  2K17",
      image: rahul,
    },
    {
      name: "Hemant",
      batch: "BATCH  2K17",
      image: rahul,
    },
    {
      name: "Rahul Jangra",
      batch: "BATCH  2K17",
      image: rahul,
    },
    {
      name: "Yugpurush",
      batch: "BATCH  2K18",
      image: yug,
    },
    {
      name: "Rishabh",
      batch: "BATCH  2K18",
      image: yug,
    },
    {
      name: "Shivam",
      batch: "BATCH  2K18",
      image: yug,
    },
    {
      name: "Abhishek",
      batch: "BATCH  2K18",
      image: abhishekSir,
    },
    {
      name: "Dakshita",
      batch: "BATCH  2K18",
      image: yug,
    },
    {
      name: "Mansha",
      batch: "BATCH  2K18",
      image: yug,
    },
    {
      name: "Garima",
      batch: "BATCH  2K18",
      image: yug,
    },
    {
      name: "Vinayak Verma",
      batch: "BATCH  2K19",
      asGoonjMember: "Vocalist ",
      image: vinayak,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Rishabh Indora",
      batch: "BATCH  2K19",
      asGoonjMember: "Keyboard Player & Beatboxer",
      image: rishabh,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Dimple",
      batch: "BATCH  2K19",
      asGoonjMember: "Vocalist",
      image: dimple,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Prateek",
      batch: "BATCH  2K19",
      asGoonjMember: "Keyboard Player",
      image: prateek,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Ashutosh Mishra",
      batch: " BATCH  2K19",
      asGoonjMember: "Vocalist",
      image: ashutosh,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Bahul Raina",
      batch: "BATCH  2K19",
      asGoonjMember: "Vocalist",
      image: bahul,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Khushboo",
      batch: " BATCH  2K19",
      asGoonjMember: "Vocalist",
      image: khushbo,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Tannu",
      batch: "BATCH  2K19",
      asGoonjMember: "Vocalist",
      image: tanu,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Kajal",
      batch: "BATCH  2K19",
      asGoonjMember: "Keyboard Player",
      image: kajal,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Anmol",
      batch: "BATCH  2K20",
      asGoonjMember: "Guitarist",
      image: anmol,
      quote:
        "Harmony Society taught me the healing power of music. Now I use it to help people every day in my practice.",
    },
    {
      name: "Deepanshu",
      batch: "BATCH  2K20",
      asGoonjMember: "Vocalist",
      image: deepanshu,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Ansh",
      batch: "BATCH  2K20",
      asGoonjMember: "Drummer",
      image: ansh,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Prisha",
      batch: "BATCH  2K20",
      asGoonjMember: "Vocalist & Keyboard Player",
      image: prisha,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Prerna",
      batch: "BATCH  2K20",
      asGoonjMember: "Vocalist",
      image: prerna,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Aaryan Mandi",
      batch: "BATCH  2K20",
      asGoonjMember: "Management",
      image: aryan,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Jatin",
      batch: "BATCH  2K20",
      asGoonjMember: "Management",
      image: jatin,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Saksham Arora",
      batch: "BATCH  2K20",
      asGoonjMember: "Management",
      image: saksham,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Rishita",
      batch: "BATCH  2K20",
      asGoonjMember: "Vocalist",
      image: rishita,
      quote:
        "Leading ensembles here prepared me for my dream job of inspiring young musicians as a conductor.",
    },
    {
      name: "Mridul Birla",
      batch: "BATCH  2K21",
      asGoonjMember: "Vocalist & Guitarist",
      image: mridul,
      quote:
        "The collaborative spirit at Harmony Society taught me how to blend different musical styles and work with diverse artists.",
    },
    {
      name: "Bhargavi Koul",
      batch: "BATCH  2K21",
      asGoonjMember: "Vocalist",
      image: bhargavi,
      quote:
        "My first solo performance was at a Harmony Society event. That confidence boost was invaluable for my journey to the opera stage.",
    },
    {
      name: "Khushi",
      batch: "BATCH  2K21",
      asGoonjMember: "Vocalist",
      image: khushi,
      quote:
        "Leading the jazz ensemble here prepared me for the fast-paced world of Broadway. Forever grateful for those jam sessions!",
    },
    {
      name: "Apurva",
      batch: "BATCH  2K21",
      asGoonjMember: "Vocalist",
      image: apurva,
      quote:
        "Harmony Society encouraged me to experiment with composition. Now I'm scoring films for major studios!",
    },
    {
      name: "Kunal Chauhan",
      batch: "BATCH  2K21",
      asGoonjMember: "Management & Guitarist",
      image: kunalChauhan,
      quote:
        "The supportive community here helped me overcome performance anxiety. Now I perform for audiences of thousands.",
    },
    {
      name: "Nishar",
      batch: "BATCH  2K21",
      asGoonjMember: "Management",
      image: nishar,
      quote:
        "Harmony Society showed me the joy of sharing music with others. Now I reach millions through my educational content.",
    },
    {
      name: "Jayesh",
      batch: "BATCH  2K21",
      asGoonjMember: "Management",
      image: jayesh,
      quote:
        "From campus performances to world tours - it all started at Harmony Society. Best musical family ever!",
    },
    {
      name: "Abhay",
      batch: "BATCH  2K21",
      asGoonjMember: "Management",
      image: abhay,
      quote:
        "The diverse musical experiences here opened my mind to fusion styles that define my unique sound today.",
    },
    {
      name: "Chitrak",
      batch: "BATCH  2K21",
      asGoonjMember: "Flautist & Management",
      image: chitrak,
      quote:
        "Working on Harmony Society's recordings taught me the technical skills I use daily with world-famous artists.",
    },
  ];

  const displayedAlumni = showAll ? alumni : alumni.slice(0, 8);

  return (
    <section
      id="alumni"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Alumni</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse of the talented individuals who were once a part of our
            society across different batches.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {displayedAlumni.map((alumnus, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={alumnus.image}
                  alt={alumnus.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{alumnus.name}</h3>
                <p className="text-orange-600 font-semibold text-sm mb-2">
                  {alumnus.batch}
                </p>
                {/* <p className="text-gray-700 font-semibold mb-3">
                  {alumnus.asGoonjMember}
                </p> */}
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
            >
              See More Alumni ({alumni.length - 6} more)
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setShowAll(false);
                document
                  .getElementById("alumni")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gray-600 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
