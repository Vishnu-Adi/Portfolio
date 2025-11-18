"use client";

import type { NextPage } from "next";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Github as GhIcon, Linkedin, FileText, Zap, Code, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Home: NextPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="h-full min-h-[calc(100vh-5rem)] p-4 md:p-8 flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
      >
        {/* Left Column (7 cols) */}
        <div className="md:col-span-7 grid grid-rows-[auto_1fr] gap-4 md:gap-6">
          
          {/* Main Intro Card */}
          <motion.div variants={item} className="h-full">
            <Link href="/about" className="block h-full">
              <Card className="relative h-full p-8 md:p-12 flex flex-col justify-center border-2 border-black dark:border-white bg-white dark:bg-zinc-950 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
                <div className="space-y-6 z-10">
                  <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
                    Hello,<br />
                    I&apos;m <span className="text-red-500">Vishnu.</span>
                  </h1>
                  <h2 className="text-xl md:text-3xl font-bold border-l-4 border-red-500 pl-4 font-mono">
                    I engineer <span className="underline decoration-4 decoration-black dark:decoration-white">robust</span> systems.
                  </h2>
                  <p className="text-lg font-medium max-w-xl text-zinc-600 dark:text-zinc-400">
                    Final-year CSE student. Data Science enthusiast. Full-stack developer. I turn complex problems into elegant code.
                  </p>
                </div>
                {/* Decorative pattern */}
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors" />
              </Card>
            </Link>
          </motion.div>

          {/* Socials Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <motion.div variants={item}>
              <Link href="https://github.com/Vishnu-adi" target="_blank">
                <Card className="bg-black text-white dark:bg-white dark:text-black h-full p-6 flex flex-col justify-between min-h-[200px] group border-2 border-black dark:border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                  <div>
                    <GhIcon className="w-12 h-12 mb-4 group-hover:text-red-500 transition-colors" />
                    <h3 className="text-2xl font-black uppercase tracking-wider">GitHub</h3>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-zinc-400 dark:text-zinc-600 font-mono text-xs">Check my code</p>
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href="https://www.linkedin.com/in/vishnu-adithya-261477255" target="_blank">
                <Card className="bg-[#0077B5] text-white h-full p-6 flex flex-col justify-between min-h-[200px] group border-2 border-black dark:border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                  <div>
                    <Linkedin className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-black uppercase tracking-wider">LinkedIn</h3>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-white/80 font-mono text-xs">Connect with me</p>
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Column (5 cols) */}
        <div className="md:col-span-5 grid grid-rows-[auto_auto_1fr] gap-4 md:gap-6">
          
          {/* Resume Card */}
          <motion.div variants={item}>
            <Link href="https://drive.google.com/file/d/15CQ3mQnccQBDvKiQ92PHsYSts2J4GoOy/view" target="_blank">
              <Card className="bg-zinc-100 dark:bg-zinc-900 h-full p-6 min-h-[180px] flex flex-col justify-between group border-2 border-black dark:border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                <div className="flex justify-between items-start">
                  <FileText className="w-10 h-10 text-red-500 group-hover:rotate-12 transition-transform" />
                  <ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-red-500 transition-colors" />
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Resume</h3>
                  <p className="font-mono text-xs font-bold mt-1 text-zinc-500">VIEW CV / DOWNLOAD</p>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* Now / About Card */}
          <motion.div variants={item}>
            <Link href="/about">
              <Card className="bg-white dark:bg-zinc-950 h-full p-6 min-h-[180px] flex flex-col justify-between group border-2 border-black dark:border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                <div className="flex justify-between items-start">
                  <Zap className="w-10 h-10 text-yellow-500 group-hover:scale-110 transition-transform" />
                  <ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">About</h3>
                  <p className="font-mono text-xs font-bold mt-1 text-zinc-500">MY JOURNEY & EXPERIENCE</p>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* Skills & Projects Row */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
            <motion.div variants={item} className="h-full">
              <Link href="/skills" className="block h-full">
                <Card className="bg-zinc-50 dark:bg-zinc-900 h-full p-5 flex flex-col justify-between min-h-[160px] group border-2 border-black dark:border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                  <Code className="w-8 h-8 text-black dark:text-white group-hover:text-red-500 transition-colors" />
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Skills</h3>
                    <div className="w-full h-1 bg-zinc-200 mt-2 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-red-500 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={item} className="h-full">
              <Link href="/projects" className="block h-full">
                <Card className="bg-red-500 text-white h-full p-5 flex flex-col justify-between min-h-[160px] group border-2 border-black dark:border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                  <FolderGit2 className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Work</h3>
                    <p className="font-mono text-[10px] mt-1 opacity-80 group-hover:opacity-100">VIEW PORTFOLIO</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
