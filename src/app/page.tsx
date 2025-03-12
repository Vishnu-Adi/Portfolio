
"use client"; // Marks this file as a Client Component
import type { NextPage } from "next";
import { Card } from "@/components/card";
import { ArrowUpRight, Github as GhIcon, Linkedin } from "lucide-react";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-full p-4">
        <div className="h-full max-w-7xl mx-auto grid grid-cols-12 gap-4">
          {/* Left Column: Intro Card (top) + GitHub/LinkedIn Cards (bottom) */}
          <div className="col-span-12 md:col-span-7 grid grid-rows-2 gap-4">
            {/* Intro Card */}
            <Card 
              href="/about" 
              className="bg-white p-8 border-0 shadow-none hover:shadow-xl"
            >
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-6xl font-bold mb-4">Hello, I&apos;m Vishnu.</h1>
                <h2 className="text-4xl font-bold mb-6">
                  I design & <span className="underline decoration-red-500">build</span> stuff for the web.
                </h2>
                <p className="text-xl text-gray-600 mb-0">
                  Apart from making a lot of side projects, I{" "}
                  <span className="text-red-500">like Machine Learning and Deep Learning</span> stuff that interests me.
                </p>
              </div>
            </Card>

            {/* New Row with GitHub & LinkedIn Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card 
                href="https://github.com/Vishnu-adi" 
                className="bg-gray-800 text-white p-6"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }}
              >
                <div className="h-full flex flex-col justify-between p-6">
                  <h3 className="flex items-center text-5xl font-semibold gap-2">
                    <GhIcon className="w-11 h-11" />
                    GitHub
                  </h3>
                  <p className="mt-2 text-gray-300">Check out my repositories and projects.</p>
                </div>
              </Card>

              <Card 
                href="https://www.linkedin.com/in/vishnu-adithya-261477255" 
                className="bg-blue-600 text-white p-6"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }}
              >
                <div className="h-full flex flex-col justify-between p-6">
                  <h3 className="flex items-center text-5xl font-semibold gap-2">
                    <Linkedin className="w-11 h-11" />
                    LinkedIn
                  </h3>
                  <p className="mt-2 text-gray-200">Connect with me professionally.</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column (Resume Card + Now Card) */}
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4">
            {/* Resume Card */}
            <Card
              href="https://drive.google.com/file/d/15CQ3mQnccQBDvKiQ92PHsYSts2J4GoOy/view"
              className="bg-[#fc205e] text-white relative"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 10px 10px, rgba(255,255,255,0.05) 2px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            >
              <div className="h-full flex flex-col justify-between p-6">
                <div className="text-5xl font-bold text-black">Resume</div>
                <div className="flex justify-between items-end">
                  <p className="text-xl text-gray-300">My professional Experience and more</p>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </Card>

            {/* Now Card */}
            <Card
              href="/about"  // Changed from '/now' to '/about'
              className="bg-[#111] text-white relative"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 10px 10px, rgba(255,255,255,0.05) 2px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            >
              <div className="h-full flex flex-col justify-between p-6">
                <div className="text-5xl font-bold text-red-500">NOW</div>
                <div className="flex justify-between items-end">
                  <p className="text-xl text-gray-300">What I am doing now?</p>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom Row */}
          <Card 
            href="/skills" 
            className="col-span-6 bg-[#08090A] text-white hover:bg-[#08090A]/90 transition-colors"
          >
            <div className="h-full flex flex-col justify-between p-6">
              <div className="text-5xl font-bold text-[#f93957]">SKILLS</div>
              <div className="flex justify-between items-end">
                <p className="text-xl text-gray-300">Tech stack & expertise</p>
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </Card>

          <Card
            href="/projects"
            className="col-span-6 bg-green-700 text-[#ADFF2F] relative"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 0 10 L 40 10 M 10 0 L 10 40 M 0 20 L 40 20 M 20 0 L 20 40 M 0 30 L 40 30 M 30 0 L 30 40' fill='none' stroke='%23008000' opacity='0.2' stroke-width='1'/%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23008000' opacity='0.2' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          >
            <div className="h-full flex flex-col justify-between p-6">
              <div className="text-5xl font-bold">Projects</div>
              <div className="flex justify-between items-end">
              <p className="text-xl text-gray-300">Tech stack & expertise</p>

                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;