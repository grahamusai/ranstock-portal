"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  HeartPulse,
  CalendarDays,
  BookOpen,
  BarChart3,
  Leaf,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Wellness Check-In",
    href: "/dashboard/check-in",
    icon: HeartPulse,
  },
  {
    label: "Workshops & Events",
    href: "/dashboard/workshops",
    icon: CalendarDays,
  },
  {
    label: "Resources",
    href: "/dashboard/resources",
    icon: BookOpen,
  },
  {
    label: "Reports & Insights",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="flex items-center gap-2.5 px-6 py-5 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sidebar-primary">
          <Leaf className="w-5 h-5 text-sidebar-primary-foreground" />
        </div>
        <div>
          <h1 className="text-base font-semibold text-sidebar-foreground tracking-tight">
            Ranstock
          </h1>
          <p className="text-xs text-sidebar-foreground/60">
            Wellness Platform
          </p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4" aria-label="Main navigation">
        <ul className="flex flex-col gap-1" role="list">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <item.icon className="w-[18px] h-[18px] shrink-0" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-4 py-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sidebar-primary text-sidebar-primary-foreground text-xs font-semibold">
            SC
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              Graham Usai
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              HR Manager
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
