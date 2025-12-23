// TeacherCoordinator.tsx
import { Mail } from "lucide-react";
import aartiImg from "../../assets/aarti.png";
import kavitaImg from "../../assets/kavita.png";

export function TeacherCoordinator() {
  const coordinators = [
    {
      name: "Dr. Aarti Deveshwar",
      role: "Assistant Professor",
      department: "Department of Management Studies",
      image: aartiImg,
      bio: "The hard work, dedication, and continuous support of our teachers have played a very important role in shaping and strengthening our society. Their guidance and encouragement have helped us grow, learn, and move forward with confidence, making our society what it is today.",
    },
    {
      name: "Dr. Kavita Rathi",
      role: "Associate Professor",
      department: "Department of Computer Science Engineering",
      image: kavitaImg,
      bio: "The constant efforts, mentorship, and support of our teachers have been instrumental in the development of our society. Their guidance has encouraged us to improve, evolve, and work together, laying a strong foundation for everything we achieve today.",
    },
  ];

  return (
    <section id="coordinators" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Teacher Coordinators
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The dedicated faculty members guiding our musical journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-blue-100"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src={coordinator.image}
                    alt={coordinator.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <h3 className="font-bold text-2xl mb-1">
                    {coordinator.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {coordinator.role}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <span className="font-semibold">Department:</span>{" "}
                    {coordinator.department}
                  </p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {coordinator.bio}
                  </p>
                  {/* <a
                    href={`mailto:${coordinator.email}`}
                    className="inline-flex items-center gap-1 text-purple-600 hover:underline"
                  >
                    <Mail size={16} /> {coordinator.email}
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
