import Link from "next/link"
import { cn } from "@/lib/utils"

interface CardProps {
  title?: string
  subtitle?: string
  className?: string
  href: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

export function Card({  className, href, children, style }: CardProps) {
  const isExternal = href.startsWith('http')
  const LinkComponent = isExternal ? 'a' : Link
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <LinkComponent 
      href={href}
      className={cn(
        "group relative block p-8 transition-all duration-300 ease-in-out",
        "bg-[#F7F2F2]",
        "border-2 border-[#08090A]/10",
        "hover:border-[#f93957]",
        "rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
        "transform hover:scale-[1.02]",
        className
      )}
      style={style}
      {...linkProps}
    >
      {children}
    </LinkComponent>
  )
}

