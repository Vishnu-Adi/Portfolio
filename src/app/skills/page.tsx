"use client";

import React, { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { Code, Database, Layers, Terminal, Wrench, Laptop } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SkillCategory: React.FC<{
  title: string;
  icon: React.ReactElement<{ className?: string }>;
  skills: string[];
  index: number;
}> = ({ title, icon, skills, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-16"
    >
      <Card className="border-4 border-neo-black shadow-neo bg-white overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-6 mb-6 border-b-4 border-neo-black pb-6">
            <div className="w-20 h-20 flex items-center justify-center bg-neo-black text-neo-yellow border-4 border-neo-black shadow-[4px_4px_0px_0px_#000]">
              {React.cloneElement(icon, { className: "w-10 h-10" ,...icon.props})}
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neo-black">
              {title}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Badge 
                  className="px-4 py-2 text-sm font-bold bg-neo-white text-neo-black border-2 border-neo-black hover:bg-neo-black hover:text-neo-white transition-colors shadow-[2px_2px_0px_0px_#000]"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const ExpertiseBar: React.FC<{
  title: string;
  level: number;
  index: number;
}> = ({ title, level, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const colors = ["bg-neo-yellow", "bg-neo-pink", "bg-neo-blue", "bg-neo-green"];
  const barColor = colors[index % colors.length];

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between items-end mb-2">
        <h4 className="text-xl font-bold uppercase text-neo-black">{title}</h4>
        <span className="text-xl font-black text-neo-black">{level}%</span>
      </div>
      <div className="h-8 w-full bg-white border-2 border-neo-black p-1 shadow-[4px_4px_0px_0px_#000]">
        <motion.div
          className={cn("h-full border-2 border-neo-black", barColor)}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default function SkillsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code />,
      skills: ["JavaScript", "TypeScript", "Python", "C/C++", "Java", "Dart", "HTML", "CSS"]
    },
    {
      title: "Frameworks",
      icon: <Layers />,
      skills: ["React", "Next.js", "Flutter", "Django", "Express", "TailwindCSS", "Bootstrap"]
    },
    {
      title: "Databases",
      icon: <Database />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Netlify"]
    },
    {
      title: "Development",
      icon: <Laptop />,
      skills: ["VS Code", "Postman", "Figma", "Chrome DevTools", "Power BI", "Slack"]
    },
    {
      title: "Paradigms",
      icon: <Terminal />,
      skills: ["RESTful APIs", "GraphQL", "Agile", "TDD", "CI/CD", "Microservices"]
    }
  ];

  const expertises = [
    { title: "Frontend Development", level: 92 },
    { title: "Mobile Development", level: 85 },
    { title: "Backend Development", level: 80 },
    { title: "UI/UX Design", level: 75 },
    { title: "DevOps & Cloud", level: 70 },
    { title: "AI & Machine Learning", level: 65 }
  ];

  return (
    <div ref={ref} className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-neo-white">
      
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto mb-20 text-center"
      >
        <Badge className="mb-6 text-xl px-6 py-2 bg-neo-black text-neo-white hover:bg-neo-black">EXPERTISE</Badge>
        <h1 className="text-7xl md:text-9xl font-black mb-8 text-neo-black uppercase tracking-tighter">
          Skills
        </h1>
        <p className="text-2xl font-bold text-neo-black max-w-3xl mx-auto bg-neo-yellow inline-block px-2 rotate-1 border-2 border-neo-black shadow-neo">
          My technical arsenal for building cool stuff.
        </p>
      </motion.div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Skill Categories */}
        <div>
          <h2 className="text-4xl font-black mb-12 uppercase border-b-4 border-neo-black inline-block">Tech Stack</h2>
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
        
        {/* Right Column: Expertise Levels */}
        <div>
          <div className="sticky top-24">
            <Card className="border-4 border-neo-black shadow-neo bg-white p-8">
              <h2 className="text-4xl font-black mb-12 uppercase border-b-4 border-neo-black inline-block">Proficiency</h2>
              
              {expertises.map((expertise, index) => (
                <ExpertiseBar 
                  key={expertise.title}
                  title={expertise.title}
                  level={expertise.level}
                  index={index}
                />
              ))}
            </Card>
          </div>
        </div>
      </div>
      
      {/* Scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-neo-black z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
