import React from 'react';
import { motion } from 'framer-motion';
import portfoliopic from '../assets/portfoliopic.png';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'Developed a responsive portfolio website using HTML, Tailwind CSS, and ReactJS, showcasing projects and skills. Integrated real-time email sending functionality, enabling seamless communication with visitors.',
    image: portfoliopic,
    link: 'https://github.com/Preethika111/portfolio',
  },
  {
    title: 'Task Manager',
    description:
      'A smart task manager built using the MERN stack and AI features to boost productivity.',
    image:'https//images.unsplash.com/photo-1551033406-611cf9a28f73?auto=format&fit=crop&w=800&q=80' ,
    link: '#',
  },
  {
    title: 'Data Dashboard',
    description:
      'Created interactive Tableau dashboards for business data visualization and insights.',
    image:'https://images.unsplash.com/photo-1551033406-611cf9a28f73?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="Projects" className="bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-72 h-96 [perspective:1000px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">

                {/* Front */}
                <div className="absolute w-full h-full backface-hidden  bg-gray-900 border-1 border-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 bg-black bg-opacity-60 w-full text-center p-3">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{project.title}</h3>
                    </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-gray-900 text-white rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-center">{project.title}</h3>
                    <p className="text-sm text-gray-300 text-center">{project.description}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-center"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
