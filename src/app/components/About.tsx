import { Music, Users, CalendarDays } from "lucide-react";
import kunalSir from "../../assets/Senior.jpg";

export function About() {
  const features = [
    {
      icon: Music,
      title: "Multiple Genres",
      description:
        "From classical to contemporary, we explore all forms of music",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Connect with fellow musicians and build lasting friendships",
    },
    {
      icon: CalendarDays,
      title: "Regular Practice Sessions",
      description: "Daily Practice @ 5 P.M (M.V. Room No. 412)",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            More About Goonj
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            As the official musical society of DCRUST, Goonj offers freshers a
            vibrant platform to explore the beautiful art of music. Here,
            students can overcome stage fear, make new friends, and create
            unforgettable memories while immersing themselves in the serene
            world of melodies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
          <div className="max-w-5xl mx-auto md:flex md:items-start md:gap-8">
            {/* Left Side - Image */}
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img
                src={kunalSir}
                alt="Mr. Kunal Bhardwaj"
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <p className="text-center mt-2 font-bold text-gray-800">
                (Mr. Kunal Bhardwaj)
              </p>
            </div>

            {/* Right Side - Text */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Re-Birth of Goonj</h3>
              <p className="text-gray-700 text-justify">
                Basically it's not only me who took the society towards the new
                beginning but rather all the members of the society...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
