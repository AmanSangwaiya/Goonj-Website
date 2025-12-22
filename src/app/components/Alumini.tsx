import { useState } from "react";
import nopic from "../../assets/nopic.jpg";

import Kunal from "../../assets/Senior.jpg";
import khushi from "../../assets/khushi.png";
import apurva from "../../assets/apurva.png";
import kunalChauhan from "../../assets/kunalChauhan.png";
import nishar from "../../assets/nishar.png";
import jayesh from "../../assets/jayesh.png";
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
import abhishekMittal from "../../assets/abhishekMittal.png";
import dhruv from "../../assets/dhruv.png";
import manish from "../../assets/manish.png";
import utkarsh from "../../assets/utkarsh.png";
import rahulJangra from "../../assets/rahuljangra.png";
import ansh1 from "../../assets/ansh1.jpg";

export function Alumini() {
  const [showAll, setShowAll] = useState(false);

  const alumni = [
    { name: "Kunal Bhardwaj", batch: "BATCH 2K14", image: Kunal },
    { name: "Abhishek", batch: "BATCH 2K14", image: abhishekMittal },
    { name: "Lakshay", batch: "BATCH 2K14", image: nopic },
    { name: "Sapna", batch: "BATCH 2K14", image: nopic },
    { name: "Harshita", batch: "BATCH 2K14", image: nopic },
    { name: "Sunny Gaur", batch: "BATCH 2K14", image: nopic },
    { name: "Utkarsh", batch: "BATCH 2K15", image: utkarsh },
    { name: "Ayush", batch: "BATCH 2K16", image: ayush },
    { name: "Deepanshu", batch: "BATCH 2K16", image: deepanshuSir },
    { name: "Manish", batch: "BATCH 2K16", image: manish },
    { name: "Paras", batch: "BATCH 2K16", image: nopic },
    { name: "Anika", batch: "BATCH 2K16", image: nopic },
    { name: "Mahima", batch: "BATCH 2K16", image: mahima },
    { name: "Rahul Sagar", batch: "BATCH 2K17", image: rahul },
    { name: "Ashwini", batch: "BATCH 2K17", image: nopic },
    { name: "Dhruv Balyan", batch: "BATCH 2K17", image: dhruv },
    { name: "Nidhi", batch: "BATCH 2K17", image: nopic },
    { name: "Hemant", batch: "BATCH 2K17", image: nopic },
    { name: "Rahul Jangra", batch: "BATCH 2K17", image: rahulJangra },
    { name: "Yugpurush", batch: "BATCH 2K18", image: yug },
    { name: "Rishabh", batch: "BATCH 2K18", image: rishabh },
    { name: "Shivam", batch: "BATCH 2K18", image: nopic },
    { name: "Abhishek", batch: "BATCH 2K18", image: abhishekSir },
    { name: "Dakshita", batch: "BATCH 2K18", image: nopic },
    { name: "Mansha", batch: "BATCH 2K18", image: nopic },
    { name: "Garima", batch: "BATCH 2K18", image: nopic },
    { name: "Vinayak Verma", batch: "BATCH 2K19", image: vinayak },
    { name: "Dimple", batch: "BATCH 2K19", image: dimple },
    { name: "Prateek", batch: "BATCH 2K19", image: prateek },
    { name: "Ashutosh Mishra", batch: "BATCH 2K19", image: ashutosh },
    { name: "Bahul Raina", batch: "BATCH 2K19", image: bahul },
    { name: "Khushboo", batch: "BATCH 2K19", image: khushbo },
    { name: "Tannu", batch: "BATCH 2K19", image: tanu },
    { name: "Kajal", batch: "BATCH 2K19", image: kajal },
    { name: "Anmol", batch: "BATCH 2K20", image: anmol },
    { name: "Deepanshu", batch: "BATCH 2K20", image: deepanshu },
    { name: "Ansh", batch: "BATCH 2K20", image: ansh1 },
    { name: "Prisha", batch: "BATCH 2K20", image: prisha },
    { name: "Prerna", batch: "BATCH 2K20", image: prerna },
    { name: "Aaryan Mandi", batch: "BATCH 2K20", image: aryan },
    { name: "Jatin", batch: "BATCH 2K20", image: jatin },
    { name: "Saksham Arora", batch: "BATCH 2K20", image: saksham },
    { name: "Rishita", batch: "BATCH 2K20", image: rishita },
    { name: "Mridul Birla", batch: "BATCH 2K21", image: mridul },
    { name: "Bhargavi Koul", batch: "BATCH 2K21", image: bhargavi },
    { name: "Khushi", batch: "BATCH 2K21", image: khushi },
    { name: "Apurva", batch: "BATCH 2K21", image: apurva },
    { name: "Kunal Chauhan", batch: "BATCH 2K21", image: kunalChauhan },
    { name: "Nishar", batch: "BATCH 2K21", image: nishar },
    { name: "Jayesh", batch: "BATCH 2K21", image: jayesh },
    { name: "Abhay", batch: "BATCH 2K21", image: abhay },
    { name: "Chitrak", batch: "BATCH 2K21", image: chitrak },
    { name: "Chirag Saxena", batch: "BATCH 2K21", image: nopic },
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
                  loading="lazy"
                  decoding="async"
                  onError={(e) =>
                    ((e.currentTarget as HTMLImageElement).src = nopic)
                  }
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{alumnus.name}</h3>
                <p className="text-orange-600 font-semibold text-sm">
                  {alumnus.batch}
                </p>
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
              See More Alumni
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
