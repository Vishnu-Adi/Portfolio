// "use client";

// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Github, ExternalLink, Circle } from 'lucide-react';

// const cardStyles = [
//   {
//     bg: "bg-[#fdf9c4]",
//     pattern: "radial-gradient(circle, rgba(249, 57, 87, 0.1) 1px, transparent 1px)",
//     border: "border-[#f93957]"
//   },
//   {
//     bg: "bg-[#f0f4ff]",
//     pattern: "repeating-linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0px, rgba(59, 130, 246, 0.1) 1px, transparent 1px, transparent 10px)",
//     border: "border-blue-500"
//   },
//   {
//     bg: "bg-[#fff1f2]",
//     pattern: "radial-gradient(circle at 10px 10px, rgba(249, 57, 87, 0.1) 2px, transparent 0)",
//     border: "border-pink-500"
//   },
//   {
//     bg: "bg-[#f0fdf4]",
//     pattern: "linear-gradient(0deg, transparent 24%, rgba(22, 163, 74, 0.1) 25%, rgba(22, 163, 74, 0.1) 26%, transparent 27%, transparent 74%, rgba(22, 163, 74, 0.1) 75%, rgba(22, 163, 74, 0.1) 76%, transparent 77%, transparent)",
//     border: "border-green-500"
//   },
//   {
//     bg: "bg-[#faf5ff]",
//     pattern: "repeating-linear-gradient(-45deg, rgba(147, 51, 234, 0.1) 0px, rgba(147, 51, 234, 0.1) 1px, transparent 1px, transparent 10px)",
//     border: "border-purple-500"
//   },
//   {
//     bg: "bg-[#fff7ed]",
//     pattern: "radial-gradient(circle at 2px 2px, rgba(234, 88, 12, 0.1) 1px, transparent 0)",
//     border: "border-orange-500"
//   }
// ];

// const ProjectCard = ({ project, index }) => {
//   const style = cardStyles[index % cardStyles.length];
  
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className={`group relative w-full rounded-xl ${style.bg} border-2 ${style.border} p-8 shadow-md`}
//       style={{
//         backgroundImage: style.pattern,
//         backgroundSize: "20px 20px"
//       }}
//     >
//       <h2 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h2>
//       <p className="text-gray-600 mb-4">{project.description}</p>
//       <div className="flex flex-wrap gap-2 mb-6">
//         {project.technologies.map((tech, idx) => (
//           <span
//             key={idx}
//             className="px-4 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//       <div className="flex gap-3">
//         {project.link && (
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors"
//           >
//             <ExternalLink className="w-5 h-5 text-white" />
//           </motion.a>
//         )}
//         {project.github && (
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
//           >
//             <Github className="w-5 h-5 text-gray-800" />
//           </motion.a>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default function ProjectsPage() {
//   const projects = [
//     {
//       title: "Harmony",
//       description: "A music-based social networking app that connects users through their musical tastes, featuring AI-powered music recommendations and collaborative playlists.",
//       technologies: ["React Native", "AI/ML", "NLP", "TensorFlow"],
//       link: "https://github.com/Vishnu-adi",
//       github: "https://github.com/Vishnu-adi"
//     },
//     {
//       title: "AnemiaSense",
//       description: "An AI-based mobile application that uses image processing and machine learning to detect anemia in patients through non-invasive methods.",
//       technologies: ["Bootstrap CSS", "TensorFlow", "Random Forest Classifier"],
//       link: "https://anemiasense.onrender.com/",
//       github: "https://github.com/Vishnu-adi/Anemia_Sense"
//     },
//     {
//       title: "Movie Recommendation",
//       description: "A personalized movie recommendation system using the MERN stack and machine learning algorithms to provide users with tailored suggestions.",
//       technologies: ["MongoDB", "Express", "React", "Node.js", "Python", "Machine Learning", "NLP"],
//       link: "https://your-live-demo.com",
//       github: "https://github.com/Vishnu-adi/"
//     },
//     {
//       title: "StockInsight",
//       description: "A comprehensive stock market information website providing users with real-time data and insights, featuring favorite stock tracking and historical data analysis.",
//       technologies: ["MERN Stack", "Finnhub API"],
//       link: "https://your-live-demo.com",
//       github: "https://github.com/yourusername/project"
//     },
//     {
//       title: "Flutter Expense Tracker",
//       description: "A cross-platform application to help users manage and track their expenses, featuring expense categorization, visual summaries, and report generation.",
//       technologies: ["Flutter", "Dart", "Hive"],
//       link: "https://your-live-demo.com",
//       github: "https://github.com/Vishnu-Adi/Expense_tracker"
//     },
//     {
//       title: "Personal Bookshelf",
//       description: "A digital bookshelf application that allows users to manage their reading list, discover new books, and track their reading progress.",
//       technologies: ["React", "Open Library API"],
//       link: "https://personal-bookshelf-hazel.vercel.app/",
//       github: "https://github.com/Vishnu-Adi/personal-bookshelf"
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-7xl mx-auto mb-12"
//       >
//         <h1 className="text-6xl font-bold mb-3 text-[#f93957]">Projects</h1>
//         <p className="text-lg text-gray-600">Showcasing my work and creative endeavors</p>
//       </motion.div>
      
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
const cardStyles = [
  {
    bg: "bg-[#ff007f]", // Vibrant dark pink
    border: "border-[#e60073]", // Slightly darker pink border
  },
  {
    bg: "bg-[#ff6f00]", // Bright orange
    border: "border-[#e65c00]", // Slightly darker orange border
  },
  {
    bg: "bg-[#007f5f]", // Deep teal
    border: "border-[#005f47]", // Darker teal border
  },
  {
    bg: "bg-[#5f00a5]", // Rich purple
    border: "border-[#4b0082]", // Indigo border
  },
  {
    bg: "bg-[#0073e6]", // Bright blue
    border: "border-[#005bb5]", // Slightly darker blue border
  },
  {
    bg: "bg-[#a52a2a]", // Bold brown-red
    border: "border-[#8b2323]", // Darker brown-red border
  },
];



const ProjectCard = ({ project, index }) => {
  const style = cardStyles[index % cardStyles.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group w-full rounded-xl shadow-lg ${style.bg} ${style.border} border p-6 backdrop-blur-md`}
    >
      <div className="absolute inset-0 rounded-xl bg-white opacity-40 blur-xl"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.link && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-900 transition-all"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.a>
          )}
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
            >
              <Github className="w-5 h-5 text-gray-800" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  
    const projects = [
    {
      title: "Harmony",
      description: "A music-based social networking app that connects users through their musical tastes, featuring AI-powered music recommendations and collaborative playlists.",
      technologies: ["React Native", "AI/ML", "NLP", "TensorFlow"],
      link: "https://github.com/Vishnu-adi",
      github: "https://github.com/Vishnu-adi"
    },
    {
      title: "AnemiaSense",
      description: "An AI-based mobile application that uses image processing and machine learning to detect anemia in patients through non-invasive methods.",
      technologies: ["Bootstrap CSS", "TensorFlow", "Random Forest Classifier"],
      link: "https://anemiasense.onrender.com/",
      github: "https://github.com/Vishnu-adi/Anemia_Sense"
    },
    {
      title: "Movie Recommendation",
      description: "A personalized movie recommendation system using the MERN stack and machine learning algorithms to provide users with tailored suggestions.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Python", "Machine Learning", "NLP"],
      link: "https://your-live-demo.com",
      github: "https://github.com/Vishnu-adi/"
    },
    {
      title: "StockInsight",
      description: "A comprehensive stock market information website providing users with real-time data and insights, featuring favorite stock tracking and historical data analysis.",
      technologies: ["MERN Stack", "Finnhub API"],
      link: "https://your-live-demo.com",
      github: "https://github.com/yourusername/project"
    },
    {
      title: "Flutter Expense Tracker",
      description: "A cross-platform application to help users manage and track their expenses, featuring expense categorization, visual summaries, and report generation.",
      technologies: ["Flutter", "Dart", "Hive"],
      link: "https://your-live-demo.com",
      github: "https://github.com/Vishnu-Adi/Expense_tracker"
    },
    {
      title: "Personal Bookshelf",
      description: "A digital bookshelf application that allows users to manage their reading list, discover new books, and track their reading progress.",
      technologies: ["React", "Open Library API"],
      link: "https://personal-bookshelf-hazel.vercel.app/",
      github: "https://github.com/Vishnu-Adi/personal-bookshelf"
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-12 text-center"
      >
        <h1 className="text-5xl font-extrabold mb-3 text-gray-800">Projects</h1>
        <p className="text-lg text-gray-600">
          Showcasing my work and creative endeavors
        </p>
      </motion.div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

