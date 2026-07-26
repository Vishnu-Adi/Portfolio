"use client";

import type { NextPage } from "next";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Github as GhIcon, Linkedin, FileText, Zap, Code, FolderGit2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import ChatInterface from "@/components/chat-interface";

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
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center bg-zinc-50 dark:bg-black transition-colors duration-500">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {/* 1. Hero Section (Span 2x2) */}
        <motion.div variants={item} className="md:col-span-2 md:row-span-2">
          <Link href="/about" className="block h-full">
            <Card className="relative h-full p-8 flex flex-col justify-between bg-white dark:bg-zinc-900 border-0 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-3xl overflow-hidden group">
              <div className="z-10">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
                  VISHNU<br />
                  <span className="text-zinc-400 dark:text-zinc-600">ADITHYA.</span>
                </h1>
                <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400 max-w-sm">
                  Building reliable software and ML systems with a focus on clarity, deployment safety, and measurable outcomes.
                </p>
              </div>
              <div className="flex justify-between items-end z-10 mt-12">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-mono font-bold">
                  OPEN TO SWE / ML ROLES
                </span>
                <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white dark:text-black" />
                </div>
              </div>
              {/* Abstract Bg */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/20 to-purple-500/20 blur-3xl rounded-full -mr-16 -mt-16" />
            </Card>
          </Link>
        </motion.div>

        {/* 2. Chatbot (Span 2x1) */}
        <motion.div variants={item} className="md:col-span-2 min-h-[200px]">
          <div className="h-full rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <ChatInterface />
          </div>
        </motion.div>

        {/* 3. Projects (Span 1x1) */}
        <motion.div variants={item} className="md:col-span-1">
          <Link href="/projects" className="block h-full">
            <Card className="h-full p-6 flex flex-col justify-between bg-zinc-900 dark:bg-white text-white dark:text-black border-0 shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-3xl group">
              <FolderGit2 className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold mb-1">Projects</h3>
                <p className="text-xs opacity-70 font-mono">VIEW WORK</p>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* 4. Skills (Span 1x1) */}
        <motion.div variants={item} className="md:col-span-1">
          <Link href="/skills" className="block h-full">
            <Card className="h-full p-6 flex flex-col justify-between bg-red-500 text-white border-0 shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-3xl group">
              <Code className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold mb-1">Skills</h3>
                <p className="text-xs opacity-70 font-mono">TECH STACK</p>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* 5. Resume (Span 1x1) */}
        <motion.div variants={item} className="md:col-span-1">
          <Link href="https://drive.google.com/file/d/1oZkEncq59B4plTXUwCzj6KG3hQQwww1X/view?usp=sharing" target="_blank" className="block h-full">
            <Card className="h-full p-6 flex flex-col justify-between bg-white dark:bg-zinc-900 border-0 shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-3xl group">
              <FileText className="w-8 h-8 text-zinc-400 group-hover:text-red-500 transition-colors" />
              <div>
                <h3 className="text-xl font-bold mb-1">Resume</h3>
                <p className="text-xs text-zinc-500 font-mono">UPDATED CV</p>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* 6. Socials (Span 1x1 - Split) */}
        <motion.div variants={item} className="md:col-span-1 grid grid-rows-2 gap-4">
          <Link href="https://github.com/Vishnu-Adi" target="_blank" className="block h-full">
            <Card className="h-full p-4 flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 border-0 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors rounded-2xl">
              <GhIcon className="w-6 h-6" />
              <ArrowUpRight className="w-4 h-4" />
            </Card>
          </Link>
          <Link href="https://www.linkedin.com/in/vishnu-adithya-261477255" target="_blank" className="block h-full">
            <Card className="h-full p-4 flex items-center justify-between bg-[#0077B5] text-white border-0 hover:opacity-90 transition-opacity rounded-2xl">
              <Linkedin className="w-6 h-6" />
              <ArrowUpRight className="w-4 h-4" />
            </Card>
          </Link>
        </motion.div>

        {/* 7. Contact / Email (Span 2x1) */}
        <motion.div variants={item} className="md:col-span-2">
          <a href="mailto:vishnuadithya7@gmail.com" className="block h-full">
            <Card className="h-full p-6 flex items-center justify-between bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-zinc-100 dark:to-zinc-200 text-white dark:text-black border-0 shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-3xl group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 dark:bg-black/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Let's work together</h3>
                  <p className="text-sm opacity-70">vishnuadithya7@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Card>
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Home;
