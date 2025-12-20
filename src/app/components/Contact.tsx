import { Mail, Music } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_goonj", // 🔴 replace
        "template_tlwe0fb", // 🔴 replace
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "d6r0jTx_uFiHPciXU" // 🔴 replace
      )
      .then(
        () => {
          alert("Thank you! Your message has been sent.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            For any queries or further information, feel free to contact us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-900 p-8 rounded-lg shadow-xl"
          >
            <div className="mb-6">
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
                placeholder="Ask something..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Music className="w-6 h-6" />
              <p className="text-lg">Follow us on social media</p>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/goonj_dcrust_"
                className="hover:text-purple-200"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@Goonjdcurst"
                className="hover:text-purple-200"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
