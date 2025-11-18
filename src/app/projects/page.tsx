"use client";

import React, { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const ProjectCard: React.FC<{
  project: Project;
  index: number;
}> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Cycle through neo colors
  const colors = [
    "bg-neo-yellow",
    "bg-neo-pink",
    "bg-neo-blue",
    "bg-neo-green",
    "bg-neo-white",
  ];
  const bgColor = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: -2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: -2 }}
      whileHover={{ rotate: index % 2 === 0 ? 1 : -1, scale: 1.02 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="h-full"
    >
      <Card className={cn("h-full flex flex-col border-4 border-neo-black shadow-neo", bgColor)}>
        {/* Mac-like Window Header */}
        <div className="border-b-4 border-neo-black bg-white p-3 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-neo-black bg-neo-pink" />
          <div className="w-4 h-4 rounded-full border-2 border-neo-black bg-neo-yellow" />
          <div className="w-4 h-4 rounded-full border-2 border-neo-black bg-neo-green" />
        </div>
        
        <div className="p-6 md:p-8 flex-grow flex flex-col">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tight text-neo-black">
            {project.title}
          </h2>
          
          <p className="text-lg font-medium text-neo-black/80 mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, idx) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="border-2 border-neo-black bg-white text-neo-black font-bold px-3 py-1 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-4 mt-auto">
            {project.link && (
              <Button asChild className="bg-neo-black text-neo-white hover:bg-gray-800 shadow-neo border-2 border-transparent">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <span>Visit</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            
            {project.github && (
              <Button asChild variant="outline" className="bg-white border-2 border-neo-black shadow-neo hover:bg-gray-100">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  <span>Code</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  
  const projects: Project[] = [
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
      technologies: ["Bootstrap CSS", "TensorFlow", "Random Forest"],
      link: "https://anemiasense.onrender.com/",
      github: "https://github.com/Vishnu-adi/Anemia_Sense"
    },
    {
      title: "Movie Recs",
      description: "A personalized movie recommendation system using the MERN stack and machine learning algorithms to provide users with tailored suggestions.",
      technologies: ["MERN Stack", "Python", "ML", "NLP"],
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
      title: "Expense Tracker",
      description: "A cross-platform application to help users manage and track their expenses, featuring expense categorization, visual summaries, and report generation.",
      technologies: ["Flutter", "Dart", "Hive"],
      link: "https://your-live-demo.com",
      github: "https://github.com/Vishnu-Adi/Expense_tracker"
    },
    {
      title: "My Bookshelf",
      description: "A digital bookshelf application that allows users to manage their reading list, discover new books, and track their reading progress.",
      technologies: ["React", "Open Library API"],
      link: "https://personal-bookshelf-hazel.vercel.app/",
      github: "https://github.com/Vishnu-Adi/personal-bookshelf"
    },
  ];

  return (
    <div ref={ref} className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-neo-white">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto mb-20 text-center"
      >
        <Badge className="mb-6 text-xl px-6 py-2 bg-neo-black text-neo-white hover:bg-neo-black">PORTFOLIO</Badge>
        <h1 className="text-7xl md:text-9xl font-black mb-6 text-neo-black uppercase tracking-tighter">
          Projects
        </h1>
        <p className="text-2xl font-bold text-neo-black max-w-3xl mx-auto border-b-4 border-neo-pink pb-4 inline-block">
          Stuff I've built. Some serious, some just for fun.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index}
          />
        ))}
      </div>
      
      {/* Scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-neo-black z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
