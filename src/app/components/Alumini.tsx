import { useState } from "react";

export function Alumini() {
  const [showAll, setShowAll] = useState(false);

  const alumni = [
    { name: "Kunal Bhardwaj", batch: "BATCH 2K14", image: "/Senior.jpg" },
    {
      name: "Abhishek Mittal",
      batch: "BATCH 2K14",
      image: "/abhishekMittal.png",
    },
    { name: "Lakshay", batch: "BATCH 2K14", image: "/nopic.jpg" },
    { name: "Sapna", batch: "BATCH 2K14", image: "/nopic.jpg" },
    { name: "Harshita", batch: "BATCH 2K14", image: "/nopic.jpg" },
    { name: "Sunny Gaur", batch: "BATCH 2K14", image: "/nopic.jpg" },
    { name: "Utkarsh", batch: "BATCH 2K15", image: "/utkarsh.png" },
    { name: "Ayush", batch: "BATCH 2K16", image: "/ayush.png" },
    { name: "Deepanshu", batch: "BATCH 2K16", image: "/deepanshuSir.png" },
    { name: "Manish", batch: "BATCH 2K16", image: "/manish.png" },
    { name: "Paras", batch: "BATCH 2K16", image: "/nopic.jpg" },
    { name: "Anika", batch: "BATCH 2K16", image: "/nopic.jpg" },
    { name: "Mahima", batch: "BATCH 2K16", image: "/mahima.png" },
    { name: "Rahul Sagar", batch: "BATCH 2K17", image: "/rahul.png" },
    { name: "Ashwini", batch: "BATCH 2K17", image: "/nopic.jpg" },
    { name: "Dhruv Balyan", batch: "BATCH 2K17", image: "/dhruv.png" },
    { name: "Nidhi", batch: "BATCH 2K17", image: "/nopic.jpg" },
    { name: "Hemant", batch: "BATCH 2K17", image: "/nopic.jpg" },
    { name: "Rahul Jangra", batch: "BATCH 2K17", image: "/rahuljangra.png" },
    { name: "Yugpurush", batch: "BATCH 2K18", image: "/yug.png" },
    { name: "Rishabh", batch: "BATCH 2K18", image: "/rishabh.png" },
    { name: "Shivam", batch: "BATCH 2K18", image: "/nopic.jpg" },
    { name: "Abhishek Sir", batch: "BATCH 2K18", image: "/abhsihekSenior.png" },
    { name: "Dakshita", batch: "BATCH 2K18", image: "/nopic.jpg" },
    { name: "Mansha", batch: "BATCH 2K18", image: "/nopic.jpg" },
    { name: "Garima", batch: "BATCH 2K18", image: "/nopic.jpg" },
    { name: "Vinayak Verma", batch: "BATCH 2K19", image: "/vinayak.png" },
    { name: "Dimple", batch: "BATCH 2K19", image: "/dimple.png" },
    { name: "Prateek", batch: "BATCH 2K19", image: "/prateek.png" },
    { name: "Ashutosh Mishra", batch: "BATCH 2K19", image: "/ashutosh.png" },
    { name: "Bahul Raina", batch: "BATCH 2K19", image: "/bahul.png" },
    { name: "Khushboo", batch: "BATCH 2K19", image: "/khushbo.png" },
    { name: "Tannu", batch: "BATCH 2K19", image: "/tanu.png" },
    { name: "Kajal", batch: "BATCH 2K19", image: "/kajal.png" },
    { name: "Anmol", batch: "BATCH 2K20", image: "/Anmol.jpg" },
    { name: "Deepanshu", batch: "BATCH 2K20", image: "/deepanshu1.jpg" },
    { name: "Ansh", batch: "BATCH 2K20", image: "/ansh1.jpg" },
    { name: "Prisha", batch: "BATCH 2K20", image: "/prisha.png" },
    { name: "Prerna", batch: "BATCH 2K20", image: "/prerna.png" },
    { name: "Aaryan Mandi", batch: "BATCH 2K20", image: "/aryan.png" },
    { name: "Jatin", batch: "BATCH 2K20", image: "/jatin.jpg" },
    { name: "Saksham Arora", batch: "BATCH 2K20", image: "/saksham.jpg" },
    { name: "Rishita", batch: "BATCH 2K20", image: "/rishita.png" },
    { name: "Mridul Birla", batch: "BATCH 2K21", image: "/mridul.png" },
    { name: "Bhargavi Koul", batch: "BATCH 2K21", image: "/bhargavi.jpg" },
    { name: "Khushi", batch: "BATCH 2K21", image: "/khushi.png" },
    { name: "Apurva", batch: "BATCH 2K21", image: "/apurva.png" },
    { name: "Kunal Chauhan", batch: "BATCH 2K21", image: "/kunalChauhan.png" },
    { name: "Nishar", batch: "BATCH 2K21", image: "/nishar.png" },
    { name: "Jayesh", batch: "BATCH 2K21", image: "/jayesh.png" },
    { name: "Abhay", batch: "BATCH 2K21", image: "/abhay.png" },
    { name: "Chitrak", batch: "BATCH 2K21", image: "/chitrak.jpg" },
    { name: "Chirag Saxena", batch: "BATCH 2K21", image: "/nopic.jpg" },
  ];

  const displayedAlumni = showAll ? alumni : alumni.slice(0, 8);

  return (
    <section
      id="alumni"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedAlumni.map((a) => (
            <div key={a.name} className="bg-white rounded-lg shadow">
              <img
                src={a.image}
                onError={(e) => (e.currentTarget.src = "/nopic.jpg")}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">{a.name}</h3>
                <p className="text-sm text-orange-600">{a.batch}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
