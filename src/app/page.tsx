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
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl mx-auto grid grid-cols-12 gap-6"
      >
        {/* Left Column */}
        <div className="col-span-12 md:col-span-7 grid grid-rows-[auto_1fr] gap-6">
          {/* Intro Card */}
          <motion.div variants={item} className="h-full">
            <Link href="/about" className="block h-full">
              <Card className="bg-neo-yellow h-full p-8 md:p-12 flex flex-col justify-center hover:rotate-1 transition-transform duration-300">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
                    Hello,<br />
                    I&apos;m Vishnu.
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-neo-black pl-4">
                    I design & <span className="underline decoration-4 decoration-neo-pink">build</span> stuff for the web.
                  </h2>
                  <p className="text-lg font-medium max-w-xl">
                    Apart from making a lot of side projects, I like <span className="bg-neo-pink px-1">Machine Learning</span> and <span className="bg-neo-blue text-white px-1">Deep Learning</span> stuff that interests me.
                  </p>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* Socials Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={item}>
              <Link href="https://github.com/Vishnu-adi" target="_blank">
                <Card className="bg-neo-black text-neo-white h-full p-6 flex flex-col justify-between min-h-[240px] group">
                  <div>
                    <GhIcon className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-4xl font-bold uppercase">GitHub</h3>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-gray-400 font-mono text-sm">Check my repos</p>
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href="https://www.linkedin.com/in/vishnu-adithya-261477255" target="_blank">
                <Card className="bg-neo-blue text-white h-full p-6 flex flex-col justify-between min-h-[240px] group">
                  <div>
                    <Linkedin className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-4xl font-bold uppercase">LinkedIn</h3>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-blue-100 font-mono text-sm">Let's connect</p>
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 md:col-span-5 grid grid-rows-[auto_auto_1fr] gap-6">
          {/* Resume Card */}
          <motion.div variants={item}>
            <Link href="https://drive.google.com/file/d/15CQ3mQnccQBDvKiQ92PHsYSts2J4GoOy/view" target="_blank">
              <Card className="bg-neo-pink text-neo-black h-full p-6 min-h-[200px] flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                  <FileText className="w-12 h-12 group-hover:rotate-12 transition-transform" />
                  <ArrowUpRight className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-4xl font-black uppercase">Resume</h3>
                  <p className="font-bold mt-1">Professional Experience</p>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* Now / About Card */}
          <motion.div variants={item}>
            <Link href="/about">
              <Card className="bg-neo-green text-neo-black h-full p-6 min-h-[200px] flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                  <Zap className="w-12 h-12 group-hover:rotate-12 transition-transform" />
                  <ArrowUpRight className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-4xl font-black uppercase">NOW</h3>
                  <p className="font-bold mt-1">What I'm doing currently</p>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* Skills & Projects Row */}
          <div className="grid grid-cols-2 gap-6 h-full">
            <motion.div variants={item} className="h-full">
              <Link href="/skills" className="block h-full">
                <Card className="bg-white h-full p-6 flex flex-col justify-between min-h-[200px] group">
                  <Code className="w-12 h-12 text-neo-black group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-3xl font-black uppercase break-all">Skills</h3>
                    <ArrowUpRight className="w-6 h-6 mt-2 ml-auto" />
                  </div>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={item} className="h-full">
              <Link href="/projects" className="block h-full">
                <Card className="bg-neo-black text-neo-yellow h-full p-6 flex flex-col justify-between min-h-[200px] group">
                  <FolderGit2 className="w-12 h-12 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-3xl font-black uppercase break-all">Work</h3>
                    <ArrowUpRight className="w-6 h-6 mt-2 ml-auto" />
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
