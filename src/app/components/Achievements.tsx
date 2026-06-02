import { Trophy, Award, Medal, Star } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Star,
      year: "2026",
      title: "EXODIA'26 IIT MANDI",
      description: [
        "• Battle of Bands - 2nd 🥈 ",
        <br />,
        "• Duet Singing -  2nd 🥈 ",
        <br />,
      ],
      category: "Competition",
    },
    {
      icon: Trophy,
      year: "2026",
      title: "PRISMA SRM",
      description: [
        "• Battle of Bands - 1st 🥇 ",
        <br />,
        "• Solo Instrumental -  1st 🥇 ",
        <br />,
        "• Solo Instrumental -  2nd 🥈 ",
        <br />,
        "• Solo Instrumental -  3rd 🥉 ",
        <br />,
        "• Solo Singing -  3rd 🥉 ",
        <br />,
      ],
      category: "Competition",
    },
    {
      icon: Trophy,
      year: "2026",
      title: "PRISMA SRM",
      description: [
        "• Battle of Bands - 1st 🥇 ",
        <br />,
        "• Solo Instrumental -  1st 🥇 ",
        <br />,
        "• Solo Instrumental -  2nd 🥈 ",
        <br />,
        "• Solo Instrumental -  3rd 🥉 ",
        <br />,
        "• Solo Singing -  3rd 🥉 ",
        <br />,
      ],
      category: "Competition",
    },
    {
      icon: Star,
      year: "2025",
      title: "Selected for Inter-University North Zone Competition",
      description:
        "Goonj claimed victory at Rhythm 2025 with outstanding performances across various categories. This achievement qualified the team to represent DCRUST at the Inter-University North Zone Competition in 2026, organized by the Association of Indian Universities (AIU).",
      category: "Competition",
    },
    {
      icon: Trophy,
      year: "2025",
      title: "RHYTHM 2025",
      description: [
        "• Battle of Bands - 1st 🥇 & 2nd 🥈 ",
        <br />,
        "• Ghazal -  1st 🥇 Rajni",
        <br />,
        "• Bhajan -  2nd 🥈 Manthan",
        <br />,
        "• Western -  3rd 🥉 Aastha",
        <br />,
        "• Duet-Singing -  2nd 🥈 Manthan & Nikita",
        <br />,
        "• Folk -  3rd 🥉 Rajni",
        <br />,
        "• Classical Instrumental -  2nd 🥈 Harshpreet",
        <br />,
        "• Western Instrumental -  3rd 🥉 Mahesh",
        <br />,
        "• Rap Battle -  3rd 🥉 Dharmendar",
        <br />,
      ],
      category: "Competition",
    },
    {
      icon: Star,
      year: "2024",
      title: "Selected for Inter-University North Zone Competition",
      description:
        "Continuing the winning legacy, Goonj emerged victorious at Rhythm 2024, earning top honors across multiple musical categories. This success secured selection to represent DCRUST at the Inter-University North Zone Competition in 2025 under the Association of Indian Universities (AIU).",
      category: "Competition",
    },
    {
      icon: Trophy,
      year: "2024",
      title: "RHYTHM 2024",
      description: [
        "• Classical Vocal Solo - 1st🥇 @ Manthan",
        <br />,
        "• Western light music solo - 3rd🥉 Harpreet",
        <br />,
        "• Bhajan - 1st🥇 Arun , 3rd🥉 Manthan",
        <br />,
        "• Folk - 1st🥇 Rajni , 2nd🥈 Nidhi",
        <br />,
        "• Duet-Singing - 2nd🥈 Manthan & Nidhi",
        <br />,
        "• Battle of Bands- 3rd 🥉 ",
      ],
      category: "Competition",
    },
    {
      icon: Medal,
      year: "2024",
      title: "3rd🥉 position at CULT 2024 , WUD",
      description:
        "Goonj won 3rd🥉 prize in Solo Singing at the cultural fest of WUD, enhancing DCRUST's reputation among other colleges. ",
      category: "Competition",
    },
    {
      icon: Star,
      year: "2024",
      title: "1st🥇 Position at Maestros 2024, PIET",
      description:
        "Goonj won 1st🥇 prize in Folk Solo at the cultural fest of PIET, enhancing DCRUST's reputation among other colleges.  ",
      category: "Competition",
    },
    {
      icon: Trophy,
      year: "2024 , 2023 , 2019 , 2018",
      title: "Position Holder @ IIT MANDI",
      description: [
        "• 3rd🥉 in Battle of Bands - (14 Apr - 16 Apr 2024)",
        <br />,
        "• Overall Winner at IIT MANDI EXODIA'23 ",
        <br />,
        "• 2nd🥈in Battle of Bands (2023) ",
        <br />,
        "• 2nd🥈 in Solo Singing (2023) ",
        <br />,
        "• 3rd🥉 in Solo Singing (2023) ",
        <br />,
        "• 1st🥇 in Solo Singing (2019) ",
        <br />,
        "• 2nd🥈 in Solo Singing (2019) ",
        <br />,
        "• 2nd🥈 in Solo Singing (2018) ",
      ],
      category: "Competition",
    },
    {
      icon: Award,
      year: "2024",
      title: "Represented DCRUST at 93.5 RED FM ",
      description:
        "Goonj became the first group from DCRUST to be invited to represent their college on this prestigious platform. Two members of the group were fortunate enough to showcase their musical talents to the radio audience.",
      category: "Representation",
    },
    {
      icon: Star,
      year: "2024 , 2018",
      title: "Represented University at NIFTEM, Kundli ",
      description:
        "We had the opportunity to represent our university at NIFTEM, Kundli during 2018 and 2024, where we showcased our talent, gained valuable exposure, and enriched our experience through meaningful participation and learning.",
      category: "Representation",
    },

    {
      icon: Star,
      year: "2023",
      title: "Selected for Inter University North Zone Competition ",
      description:
        "Goonj emerged as the Rhythm 2023 Winner, earning multiple prizes in Solo Singing, Duet Music, and Group Singing categories. This honor qualified us to represent DCRUST at the Inter-University North Zone Competition organized by the Association of Indian Universities (AIU).",
      category: "Competition",
    },

    {
      icon: Medal,
      year: "2023",
      title: "RHYTHM 2023",
      description: [
        "• 1st🥇 in Solo Singing - Folk",
        <br />,
        "• 1st🥇 in Solo Singing - Bhajan",
        <br />,
        "• 1st🥇 in Solo Singing - Ghazal",
        <br />,
        "• 1st🥇 in Duet Singing - Light Music",
        <br />,
        "• 2nd🥈 in Solo Singing - Western",
        <br />,
        "• 2nd🥈 in Duet Singing - Light Music",
        <br />,
        "• 3rd🥉in Duet Singing - Light Music",
      ],
      category: "Competition",
    },

    {
      icon: Star,
      year: "2022",
      title: "Abhinav Bharat Performers ",
      description:
        "Goonj performed a beautiful group song during the International Conference on Smart Packaging and Printed Electronics in front of various international delegates.",
      category: "Representation",
    },
    {
      icon: Award,
      year: "2022",
      title:
        "Performed under the prestigious banner of AZZADI KA AMRIT MAHOTSAV",
      description:
        "Goonj performed a beautiful group song during the International Conference on Smart Packaging and Printed Electronics in front of various international delegates.",
      category: "Representation",
    },
    {
      icon: Medal,
      year: "2022",
      title: "Aaghaaz Winners ",
      description: [
        "• 2nd🥈 in Solo Singing",
        <br />,
        "• 3rd🥉 in Solo Singing",
        <br />,
        "• 1st🥇 in Group Singing",
      ],
      category: "Competition",
    },
    {
      icon: Star,
      year: "2019",
      title: "Position Holders at CULT, WUD, Sonipat",
      description: [
        "• 2nd🥈 in Battle of Bands",
        <br />,
        "• Position holder in DUET MUSIC",
        <br />,
        "• Position holder in SOLO SINGING",
      ],
      category: "Competition",
    },
    {
      icon: Star,
      year: "2019",
      title: "Position Holders at KUK , Kurukshetra",
      description:
        "Won 1st🥇 position in the Battle of Bands at KUK, Kurukshetra, providing an enriching platform to explore creativity, learn new techniques, and grow as performers.",
      category: "Competition",
    },
    {
      icon: Star,
      year: "2019 , 2018",
      title: "Other Achievements",
      description: [
        "• University representatives at AIU at Zonal Level.",
        <br />,
        "• Position holder at NIT Kurukshetra (2018)",
        <br />,
        "• University representatives at IIT Ropar (2019).",
        <br />,
        "• Position holder at NIT Delhi (2018)",
        <br />,
        "• Represented university at NIFTEM, Kundli (2018 & 2024).",
      ],
      category: "Representation",
    },
  ];

  const categories = ["All", "Competition", "Representation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredAchievements =
    selectedCategory === "All"
      ? achievements
      : achievements.filter((a) => a.category === selectedCategory);

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating our journey of excellence and recognition
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredAchievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-lg">
                  <achievement.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {achievement.year}
                  </span>
                  <h3 className="font-bold text-lg mb-2">
                    {achievement.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-purple-600">
                  {achievement.category.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No achievements found in this category.
          </div>
        )}
      </div>
    </section>
  );
}

// Import React for useState
import React from "react";
