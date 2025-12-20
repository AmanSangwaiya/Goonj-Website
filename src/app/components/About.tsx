import { Music, Users, CalendarDays } from "lucide-react";
import seniorImg from "../../assets/Senior.jpg";

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
                src={seniorImg} // replace with your image path
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
              <p className="text-gray-700">
                Basically it's not only me who took the society towards the new
                beginning but rather all the members of the society, be it my
                juniors or my batch mates. It was a combined effort by all of us
                and cooperation and hard work of my juniors. Being a coordinator
                it was my duty to fulfill and act towards all the problems and
                to the feedback got from the members of the society or from any
                person outside to the society and I really appreciate all the
                members who always welcomed and supported each and every
                decision and always stood by my side which led towards the
                thriving and beautiful journey. And I really want to thank my
                seniors that they always stood by us and helped us out at every
                phase, supported our harsh decisions and understood us which
                really helped us out for the betterment of the society. Really
                it was such an astonishing journey full of roller coaster rides
                but at last the will power and dedication of all the members led
                to the new beginnings and achieving such heights. Basically the
                driving force which led towards this wonderful journey was the
                bond which each and every member of the society shares and stood
                as a unity, as a family which was the most important thing to
                maintain and continue to achieve the position where we are today
                and by God's grace it could be seen today also and I hope that
                this journey will continue as it is and all the upcoming members
                and coordinators will make it even bigger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
