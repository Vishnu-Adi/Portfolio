"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Code, Database, Layers, Terminal, Wrench, Laptop } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SkillCategory: React.FC<{
  title: string;
  icon: React.ReactElement<{ className?: string }>;
  skills: string[];
  index: number;
}> = ({ title, icon, skills, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isOdd = index % 2 === 1;
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isOdd ? 50 : -50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "flex flex-col md:flex-row items-center gap-10 py-24",
        isOdd && "md:flex-row-reverse"
      )}
    >
      {/* Icon Circle */}
      <div className="flex-shrink-0 w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 shadow-xl">
        <div className="w-16 h-16 flex items-center justify-center text-primary">
          {React.cloneElement(icon, { className: "w-14 h-14" ,...icon.props})}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            >
              <Badge 
                variant="outline"
                className="px-4 py-2 text-base font-medium bg-white shadow-md hover:bg-gray-50 border-gray-200"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
        
        <div className={cn(
          "h-2 w-full mt-8 bg-gradient-to-r rounded-full",
          index % 3 === 0 ? "from-primary to-purple-500" :
          index % 3 === 1 ? "from-blue-500 to-cyan-400" : 
          "from-emerald-500 to-green-400"
        )}/>
      </div>
    </motion.div>
  );
};

const ExpertiseCard: React.FC<{
  title: string;
  level: number;
  index: number;
}> = ({ title, level, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl p-7 shadow-xl border border-gray-100"
    >
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
        <span className="text-lg font-medium text-gray-600">{level}%</span>
      </div>
      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className={cn(
            "h-full rounded-full",
            index % 3 === 0 ? "bg-gradient-to-r from-primary to-purple-500" :
            index % 3 === 1 ? "bg-gradient-to-r from-blue-500 to-cyan-400" : 
            "bg-gradient-to-r from-emerald-500 to-green-400"
          )}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
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
      icon: <Code className="w-8 h-8" />,
      skills: ["JavaScript", "TypeScript", "Python", "C/C++", "Java", "Dart", "HTML", "CSS"]
    },
    {
      title: "Frameworks",
      icon: <Layers className="w-8 h-8" />,
      skills: ["React", "Next.js", "Flutter", "Django", "Express", "TailwindCSS", "Bootstrap"]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="w-8 h-8" />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Netlify"]
    },
    {
      title: "Development",
      icon: <Laptop className="w-8 h-8" />,
      skills: ["VS Code", "Postman", "Figma", "Chrome DevTools", "Power BI", "Slack"]
    },
    {
      title: "Paradigms",
      icon: <Terminal className="w-8 h-8" />,
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
    <div ref={ref} className="relative min-h-screen bg-gray-50 py-36 px-4 sm:px-6 lg:px-8">
      {/* Subtle patterns */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute right-0 top-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute left-20 bottom-40 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto mb-20 text-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-8 text-gray-900">
          Skills & <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Expertise</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Modern technologies and tools I use to build digital experiences that make an impact.
        </p>
      </motion.div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Timeline-style skill categories */}
        <div className="mb-32">
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
        
        {/* Expertise grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            Proficiency <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Levels</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertises.map((expertise, index) => (
              <ExpertiseCard 
                key={expertise.title}
                title={expertise.title}
                level={expertise.level}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}