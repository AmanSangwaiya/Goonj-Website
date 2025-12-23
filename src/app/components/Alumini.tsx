import { useState } from "react";

// 👇 Import all images
import SeniorImg from "../../assets/Senior.jpg";
import AbhishekMittal from "../../assets/abhishekMittal.png";
import LakshayImg from "../../assets/nopic.jpg";
import SapnaImg from "../../assets/nopic.jpg";
import HarshitaImg from "../../assets/nopic.jpg";
import SunnyGaurImg from "../../assets/nopic.jpg";
import UtkarshImg from "../../assets/utkarsh.png";
import AyushImg from "../../assets/ayush.png";
import DeepanshuSirImg from "../../assets/deepanshuSir.png";
import ManishImg from "../../assets/manish.png";
import ParasImg from "../../assets/nopic.jpg";
import AnikaImg from "../../assets/nopic.jpg";
import MahimaImg from "../../assets/mahima.png";
import RahulSagarImg from "../../assets/rahul.png";
import AshwiniImg from "../../assets/nopic.jpg";
import DhruvBalyanImg from "../../assets/dhruv.png";
import NidhiImg from "../../assets/nopic.jpg";
import HemantImg from "../../assets/nopic.jpg";
import RahulJangraImg from "../../assets/rahuljangra.png";
import YugImg from "../../assets/yug.png";
import RishabhImg from "../../assets/rishabh.png";
import ShivamImg from "../../assets/nopic.jpg";
import AbhishekSeniorImg from "../../assets/abhsihekSenior.png";
import DakshitaImg from "../../assets/nopic.jpg";
import ManshaImg from "../../assets/nopic.jpg";
import GarimaImg from "../../assets/nopic.jpg";
import VinayakImg from "../../assets/vinayak.png";
import DimpleImg from "../../assets/dimple.png";
import PrateekImg from "../../assets/prateek.png";
import AshutoshImg from "../../assets/ashutosh.png";
import BahulImg from "../../assets/bahul.png";
import KhushbooImg from "../../assets/khushbo.png";
import TannuImg from "../../assets/tanu.png";
import KajalImg from "../../assets/kajal.png";
import AnmolImg from "../../assets/Anmol.jpg";
import Deepanshu1Img from "../../assets/deepanshu1.jpg";
import AnshImg from "../../assets/ansh1.jpg";
import PrishaImg from "../../assets/prisha.png";
import PrernaImg from "../../assets/prerna.png";
import AryanImg from "../../assets/aryan.jpg";
import JatinImg from "../../assets/jatin.jpg";
import SakshamImg from "../../assets/saksham.jpg";
import RishitaImg from "../../assets/rishita.png";
import MridulImg from "../../assets/mridul.png";
import BhargaviImg from "../../assets/bhargavi.jpg";
import KhushiImg from "../../assets/khushi.png";
import ApurvaImg from "../../assets/apurva.png";
import KunalChauhanImg from "../../assets/kunalChauhan.png";
import NisharImg from "../../assets/nishar.png";
import JayeshImg from "../../assets/jayesh.png";
import AbhayImg from "../../assets/abhay.png";
import ChitrakImg from "../../assets/chitrak.jpg";
import ChiragSaxenaImg from "../../assets/nopic.jpg";

export function Alumni() {
  const [showAll, setShowAll] = useState(false);

  const alumni = [
    { name: "Kunal Bhardwaj", batch: "BATCH 2K14", image: SeniorImg },
    { name: "Abhishek Mittal", batch: "BATCH 2K14", image: AbhishekMittal },
    { name: "Lakshay", batch: "BATCH 2K14", image: LakshayImg },
    { name: "Sapna", batch: "BATCH 2K14", image: SapnaImg },
    { name: "Harshita", batch: "BATCH 2K14", image: HarshitaImg },
    { name: "Sunny Gaur", batch: "BATCH 2K14", image: SunnyGaurImg },
    { name: "Utkarsh", batch: "BATCH 2K15", image: UtkarshImg },
    { name: "Ayush", batch: "BATCH 2K16", image: AyushImg },
    { name: "Deepanshu", batch: "BATCH 2K16", image: DeepanshuSirImg },
    { name: "Manish", batch: "BATCH 2K16", image: ManishImg },
    { name: "Paras", batch: "BATCH 2K16", image: ParasImg },
    { name: "Anika", batch: "BATCH 2K16", image: AnikaImg },
    { name: "Mahima", batch: "BATCH 2K16", image: MahimaImg },
    { name: "Rahul Sagar", batch: "BATCH 2K17", image: RahulSagarImg },
    { name: "Ashwini", batch: "BATCH 2K17", image: AshwiniImg },
    { name: "Dhruv Balyan", batch: "BATCH 2K17", image: DhruvBalyanImg },
    { name: "Nidhi", batch: "BATCH 2K17", image: NidhiImg },
    { name: "Hemant", batch: "BATCH 2K17", image: HemantImg },
    { name: "Rahul Jangra", batch: "BATCH 2K17", image: RahulJangraImg },
    { name: "Yugpurush", batch: "BATCH 2K18", image: YugImg },
    { name: "Rishabh", batch: "BATCH 2K18", image: RishabhImg },
    { name: "Shivam", batch: "BATCH 2K18", image: ShivamImg },
    { name: "Abhishek Sir", batch: "BATCH 2K18", image: AbhishekSeniorImg },
    { name: "Dakshita", batch: "BATCH 2K18", image: DakshitaImg },
    { name: "Mansha", batch: "BATCH 2K18", image: ManshaImg },
    { name: "Garima", batch: "BATCH 2K18", image: GarimaImg },
    { name: "Vinayak Verma", batch: "BATCH 2K19", image: VinayakImg },
    { name: "Dimple", batch: "BATCH 2K19", image: DimpleImg },
    { name: "Prateek", batch: "BATCH 2K19", image: PrateekImg },
    { name: "Ashutosh Mishra", batch: "BATCH 2K19", image: AshutoshImg },
    { name: "Bahul Raina", batch: "BATCH 2K19", image: BahulImg },
    { name: "Khushboo", batch: "BATCH 2K19", image: KhushbooImg },
    { name: "Tannu", batch: "BATCH 2K19", image: TannuImg },
    { name: "Kajal", batch: "BATCH 2K19", image: KajalImg },
    { name: "Anmol", batch: "BATCH 2K20", image: AnmolImg },
    { name: "Deepanshu", batch: "BATCH 2K20", image: Deepanshu1Img },
    { name: "Ansh", batch: "BATCH 2K20", image: AnshImg },
    { name: "Prisha", batch: "BATCH 2K20", image: PrishaImg },
    { name: "Prerna", batch: "BATCH 2K20", image: PrernaImg },
    { name: "Aaryan Mandi", batch: "BATCH 2K20", image: AryanImg },
    { name: "Jatin", batch: "BATCH 2K20", image: JatinImg },
    { name: "Saksham Arora", batch: "BATCH 2K20", image: SakshamImg },
    { name: "Rishita", batch: "BATCH 2K20", image: RishitaImg },
    { name: "Mridul Birla", batch: "BATCH 2K21", image: MridulImg },
    { name: "Bhargavi Koul", batch: "BATCH 2K21", image: BhargaviImg },
    { name: "Khushi", batch: "BATCH 2K21", image: KhushiImg },
    { name: "Apurva", batch: "BATCH 2K21", image: ApurvaImg },
    { name: "Kunal Chauhan", batch: "BATCH 2K21", image: KunalChauhanImg },
    { name: "Nishar", batch: "BATCH 2K21", image: NisharImg },
    { name: "Jayesh", batch: "BATCH 2K21", image: JayeshImg },
    { name: "Abhay", batch: "BATCH 2K21", image: AbhayImg },
    { name: "Chitrak", batch: "BATCH 2K21", image: ChitrakImg },
    { name: "Chirag Saxena", batch: "BATCH 2K21", image: ChiragSaxenaImg },
  ];

  const displayedAlumni = showAll ? alumni : alumni.slice(0, 8);

  return (
    <section
      id="alumni"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our Alumni
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our past members who contributed to our musical journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedAlumni.map((a) => (
            <div
              key={a.name}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden rounded-t-xl">
                <img
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  className="w-full h-full object-cover
                             transition-transform duration-300
                             hover:scale-110"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-bold">{a.name}</h3>
                <p className="text-sm font-bold text-orange-600">{a.batch}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SEE MORE / SEE LESS */}
        <div className="text-center mt-10">
          <button
            onClick={() => {
              setShowAll(!showAll);
              document
                .getElementById("alumni")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-purple-600 text-white px-8 py-3 rounded-full
                       hover:bg-purple-700 transition-colors"
          >
            {showAll ? "See Less" : `See More (${alumni.length - 8})`}
          </button>
        </div>
      </div>
    </section>
  );
}
