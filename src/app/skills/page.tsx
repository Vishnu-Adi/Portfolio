

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Skills & Expertise</h1>
        <p className="text-xl text-gray-600">My technical toolkit and areas of expertise</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Languages Section */}
        <div className="col-span-12 md:col-span-6 space-y-6">
          <div className="rounded-3xl bg-red-500 text-white p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Languages</h2>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "Python", "C", "C++", "HTML", "CSS", "TypeScript", "Dart"].map((lang) => (
                  <span 
                    key={lang}
                    className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div 
              className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"
            />
          </div>

          <div className="rounded-3xl bg-[#111] text-white p-8 relative overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(circle at 10px 10px, rgba(255,255,255,0.05) 2px, transparent 0)',
              backgroundSize: '20px 20px'
            }}
          >
            <h2 className="text-3xl font-bold mb-6">Frameworks</h2>
            <div className="flex flex-wrap gap-3">
              {["React", "React Native", "Flutter", "Django", "Flask", "Tailwind CSS"].map((framework) => (
                <span 
                  key={framework}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Databases Section */}
        <div className="col-span-12 md:col-span-6 space-y-6">
          <div className="rounded-3xl bg-green-600 text-white p-8 relative overflow-hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 0 10 L 40 10 M 10 0 L 10 40 M 0 20 L 40 20 M 20 0 L 20 40 M 0 30 L 40 30 M 30 0 L 30 40' fill='none' stroke='%23fff' opacity='0.1' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
            }}
          >
            <h2 className="text-3xl font-bold mb-6">Tools</h2>
            <div className="flex flex-wrap gap-3">
              {["Git", "GitHub", "VSCode", "Postman", "Power BI", "Power Automate"].map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-purple-500 text-white p-8">
            <h2 className="text-3xl font-bold mb-6">Databases</h2>
            <div className="flex flex-wrap gap-3">
              {["MongoDB", "MySQL", "PostgreSQL"].map((db) => (
                <span 
                  key={db}
                  className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium"
                >
                  {db}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-yellow-400 p-8">
            <h2 className="text-3xl font-bold mb-6">Others</h2>
            <div className="flex flex-wrap gap-3">
              {["RESTful APIs", "Responsive Design", "UI/UX Principles", "System Design"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-black/10 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

