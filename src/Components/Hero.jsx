import React from "react";
import heroImage from "../assets/anime.png"; // your profile image
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="Hero" className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20 bg-black">
      {/* Left Text Section */}
      <div className="md:w-1/2 md:pt-10 text-center md:text-left">
        <h1 className="text-2xl md:text-6xl font-bold tracking-tight leading-tight">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Preethika
          </span>
        </h1>
        <div className="text-md md:text-3xl font-semibold mt-2 text-green-400">
          <Typewriter
            options={{
              strings: [
                "Front-End Developer",
                "ML Enthusiast",
                "Data Analytics Enthusiast",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>

        <p className="mt-4 text-sm md:text-xl text-gray-300 tracking-tight">
          I build modern, user-friendly interfaces using React and love exploring ML and analytics to bring value through data.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="#Contact">
          <button className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r from-green-500 to-blue-500">
            Contact Me
          </button>
          </a>
          <a href="#">
          <button className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r from-yellow-500 to-pink-500">
            Resume
          </button>
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="mb-8 md:mb-0 flex justify-center md:justify-end">
        <img
          src={heroImage}
          alt="Profile"
          className="w-90 h-90 md:w-[28rem] md:h-[28rem] object-contain rounded-full transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Hero;
