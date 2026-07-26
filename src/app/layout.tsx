import type { Metadata } from "next"
import "./globals.css"
import Link from 'next/link'
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { CustomCursor } from "@/components/custom-cursor"

export const metadata: Metadata = {
  title: "Vishnu | Portfolio",
  description: "Creative Developer & Software Engineer",
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="relative text-sm font-mono uppercase tracking-widest hover:text-red-500 transition-colors group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full" />
  </Link>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-red-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Top Navigation Bar */}
          <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black dark:border-white bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-black tracking-tighter hover:text-red-500 transition-colors"
              >
                VISHNU<span className="text-red-500">.</span>
              </Link>

              <nav className="hidden md:flex items-center gap-12">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/skills">Skills</NavLink>
              </nav>

              <div className="flex items-center gap-6">
                <ThemeToggle />
                {/* Mobile Menu Button could go here */}
              </div>
            </div>
          </header>

          <main className="pt-20 min-h-screen relative">
            {/* Grid Background Effect */}
            <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none" 
                 style={{ 
                   backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
                 }} 
            />
            {children}
          </main>
          
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}
