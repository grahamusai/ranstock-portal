"use client";

import { usePathname } from "next/navigation";
import { Bell, Search, Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pageTitles: Record<string, string> = {
  "/": "HR Dashboard",
  "/check-in": "Wellness Check-In",
  "/workshops": "Workshops & Events",
  "/resources": "Resources Library",
  "/reports": "Reports & Insights",
};

interface AppHeaderProps {
  onMenuToggle?: () => void;
}

export function AppHeader({ onMenuToggle }: AppHeaderProps) {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  return (
    <header className="flex items-center justify-between px-4 lg:px-8 h-16 border-b border-border bg-card">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-foreground"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center justify-center w-7 h-7 rounded-md bg-primary">
            <Leaf className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground">
            Wellspring
          </span>
        </div>
        <h2 className="hidden lg:block text-lg font-semibold text-foreground">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
          aria-label="Search"
        >
          <Search className="w-[18px] h-[18px]" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-muted-foreground hover:text-foreground"
          aria-label="Notifications - 3 unread"
        >
          <Bell className="w-[18px] h-[18px]" />
          <Badge className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 text-[10px] bg-accent text-accent-foreground border-2 border-card">
            3
          </Badge>
        </Button>
        <div className="hidden sm:flex items-center gap-2 ml-2 pl-3 border-l border-border">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            SC
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground leading-none">
              Graham Usai
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Software Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
