import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"
import Link from 'next/link'
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-gray-50 dark:bg-gray-900")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="h-16">
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#545885] dark:bg-[#2d2d36] shadow-lg bg-opacity-90 rounded-full px-6 py-2 z-50">
              <div className="flex items-center space-x-6">
                <Link 
                  href="/" 
                  className="text-xl font-bold text-white hover:opacity-75 transition-colors relative group"
                >
                  <span className="relative z-10">Portfolio</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                <ul className="flex items-center space-x-8">
                  {[
                    ['About', '/about'],
                    ['Projects', '/projects'],
                    ['Skills', '/skills']
                  ].map(([title, url]) => (
                    <li key={url}>
                      <Link
                        href={url}
                        className="relative text-white hover:opacity-75 transition-colors py-2 group"
                      >
                        <span className="relative z-10">{title}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <ThemeToggle />
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <main className="h-[calc(100vh-4rem)]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}