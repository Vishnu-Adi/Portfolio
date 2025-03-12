"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Calendar, Briefcase, GraduationCap, Code, Heart } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const Section = ({ 
  title, 
  icon, 
  children,
  index = 0,
  colorClass = "from-primary to-purple-500"
}: { 
  title: string, 
  icon: React.ReactNode, 
  children: React.ReactNode,
  index?: number,
  colorClass?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="mb-24 relative"
    >
      <div className="flex items-center mb-8">
        <div className={cn(
          "p-3 rounded-lg mr-4 bg-gradient-to-br", 
          colorClass
        )}>
          {icon}
        </div>
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
          colorClass
        )}>
          {title}
        </h2>
      </div>
      <div className="pl-6 border-l-2 border-gray-100">
        {children}
      </div>
    </motion.div>
  )
}

const HighlightCard = ({ 
  title, 
  description, 
  tags = [],
  index = 0,
  accent = false
}: { 
  title: string, 
  description: string, 
  tags?: string[],
  index?: number,
  accent?: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  return (
    <Card className={cn(
      "overflow-hidden mb-6 border-none shadow-lg transition-all duration-300 hover:shadow-xl",
      accent ? "bg-gradient-to-br from-primary/10 to-purple-500/10" : "bg-white"
    )}>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, i) => (
              <Badge 
                key={i} 
                variant="secondary" 
                className="bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={ref} className="relative min-h-screen bg-gray-50 py-32 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
        <div className="absolute -bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIG9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hello! I'm Vishnu Adithya, a Computer Science student at VIT Vellore, passionate about building innovative solutions and exploring cutting-edge technologies.
          </p>
        </motion.div>

        <Section 
          title="Current Work" 
          icon={<Briefcase className="w-6 h-6 text-white" />} 
          colorClass="from-primary to-purple-500"
        >
          <HighlightCard 
            title="BNY Mellon - Summer Internship 2025"
            description="Secured a summer internship at Bank of New York Mellon for the summer of 2025. I'll be working on enterprise-level financial technology solutions, contributing to the intersection of finance and technology."
            tags={["FinTech", "Enterprise Software", "Summer 2025"]}
            accent={true}
          />
          
          <HighlightCard 
            title="HPE CTY - 6 Month Project"
            description="Currently working on a 6-month project with Hewlett Packard Enterprise CTY. This project involves developing cutting-edge solutions that leverage cloud technology and enterprise software architecture."
            tags={["Cloud Technology", "Enterprise Solutions", "6-Month Project"]}
            accent={true}
          />
        </Section>

        <Section 
          title="Academics and Learning" 
          icon={<GraduationCap className="w-6 h-6 text-white" />}
          colorClass="from-blue-500 to-cyan-400"
          index={1}
        >
          <Card className="mb-6">
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Exploring Artificial Intelligence, Machine Learning, and Deep Learning, focusing on practical applications and real-world problem-solving.</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Continuously improving my understanding of Data Structures and Algorithms, participating in competitive programming to sharpen problem-solving skills.</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Expanding my technical skillset through new programming languages and development frameworks.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Section>

        <Section 
          title="Projects and Development" 
          icon={<Code className="w-6 h-6 text-white" />}
          colorClass="from-emerald-500 to-green-400"
          index={2}
        >
          <Card className="mb-6">
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Developing a music-based social networking app using React Native, incorporating AI/ML for personalized experiences and unique social interactions.</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Building web applications that combine functionality with clean design using modern frameworks like React, Next.js and backend technologies.</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>Exploring Generative Adversarial Networks (GANs) and Natural Language Processing (NLP) for innovative applications in machine learning.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Section>

        <Section 
          title="Past Experiences" 
          icon={<Calendar className="w-6 h-6 text-white" />}
          colorClass="from-amber-500 to-orange-500"
          index={3}
        >
          <div className="space-y-6">
            <HighlightCard 
              title="SRM Technologies Private Limited"
              description="Worked on backend development using Python Flask, contributing to website development for a client. Additionally, I used Power BI and Power Automate to analyze data and create dashboards for professional meetings."
              tags={["Python Flask", "Power BI", "Power Automate"]}
              index={0}
            />
            
            <HighlightCard 
              title="Nereus Technologies Private Limited"
              description="Built the company website using React, Tailwind CSS, and TypeScript. Also contributed to a React Native mobile app for iOS/Android by developing the frontend and integrating Google Firebase for seamless data management across platforms."
              tags={["React", "Tailwind CSS", "TypeScript", "React Native", "Firebase"]}
              index={1}
            />
          </div>
        </Section>

        <Section 
          title="Hobbies and Interests" 
          icon={<Heart className="w-6 h-6 text-white" />}
          colorClass="from-violet-500 to-purple-500"
          index={4}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card>
              <CardContent className="p-5">
                <p>I enjoy programming as a whole, from solving algorithmic challenges to building practical, impactful solutions.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-5">
                <p>Experimenting with new technologies and tools, like configuring Neovim for an optimized coding experience and customizing my mechanical keyboard.</p>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardContent className="p-5">
                <p>Outside of tech, I occasionally dabble in languages (like French) and behavioral sciences, blending diverse perspectives into my work.</p>
              </CardContent>
            </Card>
          </div>
        </Section>
      </div>
      
      {/* Scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}