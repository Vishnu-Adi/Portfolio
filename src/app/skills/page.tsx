"use client"

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

export default function SkillsPage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, { threshold: 0.1 })

    cards.forEach(card => observer.observe(card))
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-12"
      >
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#f93957] to-[#ff9f0c] bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
        <p className="text-xl text-gray-600">Crafting digital experiences with modern technologies</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-12 gap-6"
      >
        {/* Languages - Large Card */}
        <motion.div 
          variants={item}
          className="skill-card col-span-12 md:col-span-8 rounded-2xl bg-[#08090A] p-8 transform transition-all duration-500 hover:scale-[1.02] relative group overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8">Languages</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                
                { name: "C", color: "#F7DF1E" },
                { name: "C++", color: "#F7DF1E" },
                { name: "Java", color: "#00599C" },
                { name: "Python", color: "#3776AB" },
                { name: "JavaScript", color: "#3776AB" },
                { name: "TypeScript", color: "#007ACC" },
                { name: "Dart", color: "#0175C2" },
                { name: "HTML/CSS", color: "#E34F26" }
              ].map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-white/90">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#f93957]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Frameworks - Abstract Card */}
        <motion.div 
          variants={item}
          className="skill-card col-span-12 md:col-span-4 rounded-2xl bg-[#f93957] p-8 transform transition-all duration-500 hover:scale-[1.02] relative group overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8">Frameworks</h2>
            <div className="space-y-3">
              {["React", "Next.js", "Flutter", "Django"].map((framework) => (
                <div
                  key={framework}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group"
                >
                  <span className="text-white">{framework}</span>
                  <ArrowUpRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        </motion.div>

        {/* Tools - Floating Card */}
        <motion.div 
          variants={item}
          className="skill-card col-span-12 md:col-span-6 rounded-2xl bg-green-600 p-8 transform transition-all duration-500 hover:scale-[1.02] relative group"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8">Tools</h2>
            <div className="flex flex-wrap gap-3">
              {["Git", "VSCode", "Postman", "Power BI"].map((tool, i) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-white/20 rounded-full text-white text-xl font-medium hover:bg-white/30 transition-colors cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Databases - Interactive Card */}
        <motion.div 
          variants={item}
          className="skill-card col-span-12 md:col-span-6 rounded-2xl bg-purple-600 p-8 transform transition-all duration-500 hover:scale-[1.02] relative group overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8">Databases</h2>
            <div className="grid grid-cols-2 gap-4">
              {["MongoDB", "MySQL", "PostgreSQL"].map((db, i) => (
                <div
                  key={db}
                  className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all cursor-default group"
                  style={{ gridColumn: i === 2 ? "span 2" : "span 1" }}
                >
                  <span className="text-white">{db}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        </motion.div>

        {/* Others - Minimal Card */}
        <motion.div 
          variants={item}
          className="skill-card col-span-12 rounded-2xl bg-gradient-to-r from-[#08090A] to-[#f93957] p-8 transform transition-all duration-500 hover:scale-[1.02] relative group"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8">Other Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "RESTful APIs",
                "System Design",
                "UI/UX Design",
                "AWS",
                "PowerBI",
                "Agile",
                "Testing",
                "Quality Assurance"
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all cursor-default text-center"
                >
                  <span className="text-white text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
