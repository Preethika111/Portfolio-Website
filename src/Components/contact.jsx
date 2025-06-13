import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, User, MessageCircle } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_5plvlef",     // e.g., "service_123abc"
        "template_8mbji9a",    // e.g., "template_xxx000"
        form.current,
        "mRjmf9JFjgNDMUFTz"      // e.g., "VZyDpzHYoJ3QaPxyz"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          form.current.reset();
          alert("Message sent successfully!");
        },
        (error) => {
          setLoading(false);
          console.error(error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="bg-black text-white py-20 px-4 md:px-16" id="Contact">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-start max-w-6xl mx-auto">
        {/* Left Block */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-center">
          <p className="text-lg text-gray-300">
            Feel free to contact me using the form below or through my social links.
          </p>

          <div className="space-y-2 flex flex-col items-center md:items-center">
            {['Hero', 'About', 'Skills', 'Projects'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white hover:underline justify-center"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-4 justify-center md:justify-center">
            <a href="https://github.com/Preethika111" target="_blank" rel="noreferrer">
              <div className="p-3 rounded-full ring-2 ring-white hover:scale-110 transition-transform duration-300">
                <img
                  src="/github.svg"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/geesala-preethika-18626828a/" target="_blank" rel="noreferrer">
              <div className="p-3 rounded-full ring-2 ring-white hover:scale-110 transition-transform duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="flex items-center gap-2 bg-gray-800 p-3 rounded">
            <User size={18} />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="bg-transparent w-full outline-none text-white"
            />
          </div>

          <div className="flex items-center gap-2 bg-gray-800 p-3 rounded">
            <Mail size={18} />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="bg-transparent w-full outline-none text-white"
            />
          </div>

          <div className="flex items-start gap-2 bg-gray-800 p-3 rounded">
            <MessageCircle size={18} className="mt-1" />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="bg-transparent w-full outline-none text-white resize-none"
              rows="4"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
