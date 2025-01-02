import { ArrowUpRight } from 'lucide-react'
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-600">A collection of my work and experiments</p>
      </div>

      {/* Featured Project */}
      <div className="grid gap-6 mb-6">
        <Link 
          href="/projects/featured"
          className="group relative block rounded-3xl bg-red-500 text-white p-8 md:p-12 overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">PHOTOBOARD</h2>
                <p className="text-xl text-red-100 max-w-xl">
                  A personal mood board application for storing and organizing creative inspiration
                </p>
              </div>
              <ArrowUpRight className="w-8 h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="flex gap-3">
              <span className="px-4 py-1 bg-white/20 rounded-full text-sm">React</span>
              <span className="px-4 py-1 bg-white/20 rounded-full text-sm">Next.js</span>
              <span className="px-4 py-1 bg-white/20 rounded-full text-sm">MongoDB</span>
            </div>
          </div>
          <div 
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"
          />
        </Link>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-12 gap-6">
        <Link 
          href="/projects/compound"
          className="col-span-12 md:col-span-8 group relative block rounded-3xl bg-[#111] text-white p-8 overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(circle at 10px 10px, rgba(255,255,255,0.05) 2px, transparent 0)',
            backgroundSize: '20px 20px'
          }}
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-3">COMPOUND</h2>
              <p className="text-gray-400 max-w-xl">
                A habit tracker with github-like commit graph visualization
              </p>
            </div>
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Vue.js</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">D3.js</span>
          </div>
        </Link>

        <Link 
          href="/projects/weather"
          className="col-span-12 md:col-span-4 group relative block rounded-3xl bg-green-600 text-white p-8"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 0 10 L 40 10 M 10 0 L 10 40 M 0 20 L 40 20 M 20 0 L 20 40 M 0 30 L 40 30 M 30 0 L 30 40' fill='none' stroke='%23fff' opacity='0.1' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-3">Weather App</h2>
              <p className="text-green-100">Real-time weather with beautiful visualizations</p>
            </div>
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>

        <Link 
          href="/projects/tasks"
          className="col-span-6 md:col-span-6 group relative block rounded-3xl bg-yellow-400 p-8"
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-3">Task Manager</h2>
              <p className="text-yellow-900">Simple and efficient task management</p>
            </div>
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>

        <Link 
          href="/projects/dashboard"
          className="col-span-6 md:col-span-6 group relative block rounded-3xl bg-purple-500 text-white p-8"
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-3">Analytics Dashboard</h2>
              <p className="text-purple-100">Complete analytics solution</p>
            </div>
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>
      </div>
    </div>
  )
}

