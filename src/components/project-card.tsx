import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  href: string
  className?: string
  tags?: string[]
  status?: 'live' | 'in-progress' | 'archived'
  children?: React.ReactNode
}

const statusStyles = {
  'live': 'bg-[#C8FA00] text-[#08090A]',
  'in-progress': 'bg-[#FDFACC] text-[#08090A]',
  'archived': 'bg-[#F7F2F2] text-[#08090A]'
}

export function ProjectCard({
  title,
  description,
  href,
  className,
  tags,
  status = 'live',
  children
}: ProjectCardProps) {
  const isExternal = href.startsWith('http')

  const Component = isExternal ? 'a' : Link
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <Component
      href={href}
      className={cn(
        "group relative block rounded-2xl p-6 transition-all duration-300",
        "bg-[#F7F2F2]",
        "border border-[#08090A]/20",
        "hover:border-[#f93957]",
        "transform hover:-translate-y-1",
        className
      )}
      {...linkProps}
    >
      <div className="relative h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#08090A] group-hover:text-[#f93957] transition-colors">
              {title}
            </h3>
            <p className="text-[#08090A]/70 text-sm mb-4">
              {description}
            </p>
          </div>
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-medium",
            statusStyles[status]
          )}>
            {status}
          </span>
        </div>

        {children}

        {tags && (
          <div className="mt-auto pt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-[#08090A]/20 text-[#08090A] rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <ArrowUpRight
          className="absolute bottom-4 right-4 w-6 h-6 text-[#08090A]/40 group-hover:text-[#f93957] transition-colors"
        />
      </div>
    </Component>
  )
}