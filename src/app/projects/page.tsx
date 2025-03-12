"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
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

const ProjectSection: React.FC<{
  project: Project;
  index: number;
  isLast: boolean;
}> = ({ project, index, isLast }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative" ref={ref}>
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-[50%] top-[4rem] bottom-[-4rem] w-[2px] bg-gradient-to-b from-primary/80 to-primary/20 z-0" />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 50, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "relative z-10 flex flex-col items-start mb-24",
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        {/* Project number */}
        <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white font-bold text-xl absolute left-[calc(50%-2.5rem)] top-0 z-10 shadow-lg">
          {index + 1}
        </div>
        
        {/* Project content */}
        <div className={cn(
          "w-full md:w-[45%]",
          isEven ? "md:pr-12" : "md:pl-12"
        )}>
          <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-br from-background/90 to-background p-1">
            <div className="p-6 backdrop-blur-sm">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                {project.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="px-3 py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.link && (
                  <Button
                    variant="default"
                    size="sm"
                    className="group"
                    asChild
                  >
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                )}
                
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="group"
                    asChild
                  >
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
        
        {/* Illustration placeholder - replace with actual project images */}
        {/* <div className={cn(
          "w-full md:w-[45%] aspect-video rounded-xl overflow-hidden hidden md:block",
          isEven ? "md:pl-12" : "md:pr-12"
        )}>
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary/30">{project.title[0]}</span>
          </div>
        </div> */}
      </motion.div>
    </div>
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
    <div ref={ref} className="relative min-h-screen bg-gradient-to-b from-background to-background/50 py-32 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
        <div className="absolute -bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto mb-24 text-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore my portfolio of work showcasing expertise in modern web technologies, 
          AI/ML solutions, and innovative digital experiences.
        </p>
      </motion.div>
      
      {/* Projects timeline */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectSection 
            key={index} 
            project={project} 
            index={index}
            isLast={index === projects.length - 1}
          />
        ))}
      </div>
      
      {/* Scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}