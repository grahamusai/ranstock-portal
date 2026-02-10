"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarDays,
  Clock,
  Users,
  Monitor,
  MapPin,
  CalendarPlus,
  CheckCircle2,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const workshops = [
  {
    id: 1,
    title: "Running Conference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquet, nisl nisl aliquet nisl, vel aliquet nisl nisl vel aliquet.",
    date: "23, Mar 2026",
    time: "10:00 AM - 12:00 PM",
    facilitator: "Dr.Tafadzwa Usai",
    format: "In-person" as const,
    location: "TBA",
    category: "Fitness",
    attendees: 24,
    maxAttendees: 30,
    status: "upcoming" as const,
  },
  {
    id: 2,
    title: "Hybrid Games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquet, nisl nisl aliquet nisl, vel aliquet nisl nisl vel aliquet.",
    date: "Feb 18, 2026",
    time: "2:00 PM - 3:30 PM",
    facilitator: "Tyler The Creator",
    format: "Online" as const,
    location: "Zoom",
    category: "Stress",
    attendees: 45,
    maxAttendees: 50,
    status: "upcoming" as const,
  },
  {
    id: 3,
    title: "Team Resilience Building",
    description:
      "Build psychological safety and resilience within your team. Learn how to support each other through challenges.",
    date: "Feb 21, 2026",
    time: "11:00 AM - 1:00 PM",
    facilitator: "Lisa Nakamura",
    format: "In-person" as const,
    location: "Wellness Center, Floor 2",
    category: "Productivity",
    attendees: 12,
    maxAttendees: 20,
    status: "upcoming" as const,
  },
  {
    id: 4,
    title: "Work-Life Balance Seminar",
    description:
      "Explore evidence-based strategies for setting boundaries, managing time, and sustaining energy across all areas of life.",
    date: "Feb 25, 2026",
    time: "3:00 PM - 4:30 PM",
    facilitator: "Dr. James Park",
    format: "Online" as const,
    location: "Microsoft Teams",
    category: "Burnout",
    attendees: 38,
    maxAttendees: 60,
    status: "upcoming" as const,
  },
  {
    id: 5,
    title: "Nutrition for Focus",
    description:
      "Discover how diet impacts your cognitive performance and learn simple meal planning strategies for sustained energy.",
    date: "Mar 3, 2026",
    time: "12:00 PM - 1:00 PM",
    facilitator: "Ana Gutierrez, RD",
    format: "Online" as const,
    location: "Zoom",
    category: "Productivity",
    attendees: 22,
    maxAttendees: 40,
    status: "upcoming" as const,
  },
  {
    id: 6,
    title: "Introduction to Meditation",
    description:
      "A beginner-friendly session covering basic meditation techniques. No prior experience needed.",
    date: "Jan 28, 2026",
    time: "10:00 AM - 11:00 AM",
    facilitator: "Dr. Emma Reyes",
    format: "In-person" as const,
    location: "Wellness Center, Floor 2",
    category: "Mindfulness",
    attendees: 30,
    maxAttendees: 30,
    status: "past" as const,
  },
];

const categoryColors: Record<string, string> = {
  Mindfulness: "bg-primary/10 text-primary",
  Stress: "bg-warning/10 text-warning-foreground",
  Productivity: "bg-accent/10 text-accent",
  Burnout: "bg-destructive/10 text-destructive",
};

export default function WorkshopsPage() {
  const [registered, setRegistered] = useState<number[]>([]);

  const upcomingWorkshops = workshops.filter((w) => w.status === "upcoming");
  const pastWorkshops = workshops.filter((w) => w.status === "past");

  const handleRegister = (id: number) => {
    setRegistered((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id],
    );
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-6 max-w-5xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground text-balance">
            Workshops & Events
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Browse and register for upcoming wellness sessions.
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList>
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingWorkshops.length})
            </TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingWorkshops.map((workshop) => {
                const isRegistered = registered.includes(workshop.id);
                const spotsLeft = workshop.maxAttendees - workshop.attendees;
                return (
                  <Card
                    key={workshop.id}
                    className="border border-border flex flex-col"
                  >
                    <CardContent className="p-5 flex flex-col flex-1 gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            <Badge
                              variant="secondary"
                              className={cn(
                                "text-xs",
                                categoryColors[workshop.category],
                              )}
                            >
                              {workshop.category}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="text-xs gap-1"
                            >
                              {workshop.format === "Online" ? (
                                <Monitor className="w-3 h-3" />
                              ) : (
                                <MapPin className="w-3 h-3" />
                              )}
                              {workshop.format}
                            </Badge>
                          </div>
                          <h3 className="text-sm font-semibold text-foreground leading-snug">
                            {workshop.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {workshop.description}
                      </p>

                      <div className="flex flex-col gap-1.5 mt-auto">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CalendarDays className="w-3.5 h-3.5 shrink-0" />
                          {workshop.date}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5 shrink-0" />
                          {workshop.time}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <User className="w-3.5 h-3.5 shrink-0" />
                          {workshop.facilitator}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Users className="w-3.5 h-3.5 shrink-0" />
                          {workshop.attendees}/{workshop.maxAttendees}{" "}
                          registered
                          {spotsLeft <= 5 && (
                            <span className="text-warning font-medium">
                              ({spotsLeft} spots left)
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          onClick={() => handleRegister(workshop.id)}
                          className={cn(
                            "flex-1 text-sm",
                            isRegistered
                              ? "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                              : "bg-primary text-primary-foreground hover:bg-primary/90",
                          )}
                          variant={isRegistered ? "outline" : "default"}
                          size="sm"
                        >
                          {isRegistered ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 mr-1.5" />
                              Registered
                            </>
                          ) : (
                            "Register"
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-foreground"
                          aria-label="Add to calendar"
                        >
                          <CalendarPlus className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pastWorkshops.map((workshop) => (
                <Card
                  key={workshop.id}
                  className="border border-border opacity-75"
                >
                  <CardContent className="p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        variant="secondary"
                        className={cn(
                          "text-xs",
                          categoryColors[workshop.category],
                        )}
                      >
                        {workshop.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Completed
                      </Badge>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {workshop.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {workshop.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {workshop.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {workshop.attendees} attended
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
}
