import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePic from '../assets/arakumypic.jpg';

const About = () => {
  const workExperience = [
    {
      title: 'MERN Stack Intern',
      company: 'IIDT-Blackbucks',
      type: 'Internship',
      period: 'May 2025 - Jul 2025',
    },
    {
      title: 'ML Intern',
      company: 'IIDT-Blackbucks',
      type: 'Internship',
      period: 'Jun 2024 - Aug 2024',
    },
    {
      title: 'ML Intern',
      company: 'Adverk Technologies',
      type: 'Internship',
      period: 'Aug 2024 - Jan 2025',
    },
  ];

  return (
    <div id="About" className="bg-black text-white min-h-screen px-6 md:px-16 py-16 space-y-16" >
      {/* Heading */}
      <motion.h2
                className="text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount:0.3 }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 max-w-6xl mx-auto"
      >
        <div className="relative group w-fit">
  {/* Neon glow background */}
  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-900 blur-md opacity-75 group-hover:opacity-100 transition duration-300 z-0"></div>

  {/* Image with padding and solid border */}
  <div className="relative z-10 p-1 bg-black rounded-xl">
    <img
      src={profilePic}
      alt="Profile"
      className="w-64 h-80 object-cover object-top rounded-xl"
    />
  </div>
</div>

        <div className="md:w-2/3 flex flex-col justify-center h-80 text-center space-y-4">
          <p className="text-gray-300 text-lg">
            I’m{' '}
            <span className="text-green-400 font-semibold">Preethika</span>, a passionate Front-End
            Developer, Data and ML enthusiast.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-center">
                B.TECH in Computer Science and Engineering
              </h3>
              <div className="text-gray-400 text-sm flex flex-wrap items-center gap-2 mt-1 justify-center">
                <GraduationCap size={14} />
                <span>SRKR Engineering College</span>
                <MapPin size={14} />
                <span>Bhimavaram</span>
              </div>
              <div className="mt-2 flex items-center text-sm justify-center">
                <span className="text-gray-400">2022 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Work Experience Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 z-0"></div>

          {/* Timeline Cards */}
          <div className="space-y-16 relative z-10">
            {workExperience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center justify-between gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Bubble Indicator */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rounded-full z-20 border-4 border-blue-500 mt-2"></div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="w-full md:w-1/2 px-4 text-center"
                  >
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-5 rounded-lg shadow-lg text-sm border border-white">
                      <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                      <p className="text-gray-900">{exp.company}</p>
                      <p className="text-black text-xs mt-2">{exp.type}</p>
                      <p className="text-black text-xs">{exp.period}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
