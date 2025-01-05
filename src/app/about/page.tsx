"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6 text-[#f93957]">{title}</h2>
      {children}
    </motion.div>
  )
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updatePosition)

    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  )
}

export default function NowPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-12 now-page"
    >
      <CustomCursor />
      
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl font-bold mb-8 text-[#f93957] "
      >
        Now
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-xl mb-12 text-[#2C3E50] leading-relaxed"
      >
        Hello! I'm Vishnu Adithya, currently in my third year (pre-final year) at VIT Vellore, pursuing a degree in Computer Science and Engineering. Here's what I'm up to these days:
      </motion.p>

      <Section title="Academics and Learning">
        <ul className="list-none pl-6 space-y-4 text-[#2C3E50]">
          <li className="flex items-start">
            <span className="text-[#f93957] mr-2">▹</span>
            Deeply exploring concepts in Artificial Intelligence, Machine Learning, and Deep Learning, with a focus on solving real-world problems.
          </li>
          <li className="flex items-start">
            <span className="text-[#f93957] mr-2">▹</span>
            Actively working on improving my understanding of Data Structures and Algorithms, and honing my problem-solving skills in programming.
          </li>
          <li className="flex items-start">
            <span className="text-[#f93957] mr-2">▹</span>
            Actively learning new programming languages and tools to enhance my technical skillset.
          </li>
        </ul>
      </Section>

      <Section title="Projects and Development">
        <ul className="list-none pl-6 space-y-4 text-[#2C3E50]">
          <li className="flex items-start">
            <span className="text-[#f93957] mr-2">▹</span>
            Currently developing a music-based social networking app using React Native. The app incorporates AI/ML concepts to provide personalized user experiences and unique social interactions.
          </li>
          <li className="flex items-start">
            <span className="text-[#f93957] mr-2">▹</span>
            Passionate about web development, where I love to build applications that combine functionality with clean design using frameworks like React and Flask.
          </li>
          <li className="flex items-start">
            <span className="text-[#f93957] mr-2">▹</span>
            Recently, I've been working on a Machine Learning/Deep Learning project, aiming to explore Generative Adversarial Networks (GANs) and Natural Language Processing (NLP) for innovative use cases.
          </li>
        </ul>
      </Section>

      <Section title="Internship Experiences">
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">SRM Technologies Private Limited</h3>
            <p className="text-[#2C3E50]">
              Worked on backend development using Python Flask, contributing to website development for a client. Additionally, I used Power BI and Power Automate to analyze data and create dashboards for professional meetings.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Nereus Technologies Private Limited</h3>
            <p className="text-[#2C3E50]">
              Built the company website using React, Tailwind CSS, and TypeScript. Also contributed to a React Native mobile app for iOS/Android by developing the frontend and integrating Google Firebase for seamless data management across platforms.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Hobbies and Interests">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ">
            <p className="text-[#2C3E50]">
              I enjoy programming as a whole, from solving algorithmic challenges to building practical, impactful solutions.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 " style={{animationDelay: '0.1s'}}>
            <p className="text-[#2C3E50]">
              Experimenting with new technologies and tools, like configuring Neovim for an optimized coding experience and customizing my mechanical keyboard.
            </p>
          </div>
          <div className="bg-white rounded-lg mb-14 p-4 shadow-md hover:shadow-lg transition-shadow duration-300  md:col-span-2" style={{animationDelay: '0.2s'}}>
            <p className="text-[#2C3E50]">
              Outside of tech, I occasionally dabble in languages (like French) and behavioral sciences, blending diverse perspectives into my work.
            </p>
          </div>
        </div>
      </Section>
    </motion.div>
  )
}
