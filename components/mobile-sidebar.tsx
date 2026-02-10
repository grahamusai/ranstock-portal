"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, LayoutDashboard, HeartPulse, CalendarDays, BookOpen, BarChart3, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Wellness Check-In", href: "/check-in", icon: HeartPulse },
  { label: "Workshops & Events", href: "/workshops", icon: CalendarDays },
  { label: "Resources", href: "/resources", icon: BookOpen },
  { label: "Reports & Insights", href: "/reports", icon: BarChart3 },
]

interface MobileSidebarProps {
  open: boolean
  onClose: () => void
}

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  const pathname = usePathname()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-foreground/30 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close menu"
      />
      <div className="fixed inset-y-0 left-0 w-72 bg-sidebar text-sidebar-foreground shadow-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sidebar-primary">
              <Leaf className="w-4 h-4 text-sidebar-primary-foreground" />
            </div>
            <span className="text-base font-semibold">Wellspring</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-sidebar-foreground" aria-label="Close menu">
            <X className="w-5 h-5" />
          </Button>
        </div>
        <nav className="px-3 py-4" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1" role="list">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <item.icon className="w-[18px] h-[18px] shrink-0" />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
