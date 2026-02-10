"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, Monitor, MapPin } from "lucide-react"

const events = [
  {
    title: "Mindful Leadership Workshop",
    date: "Feb 14, 2026",
    time: "10:00 AM",
    facilitator: "Dr. Emma Reyes",
    format: "In-person",
    attendees: 24,
    maxAttendees: 30,
  },
  {
    title: "Stress Management Techniques",
    date: "Feb 18, 2026",
    time: "2:00 PM",
    facilitator: "Mark Sullivan",
    format: "Online",
    attendees: 45,
    maxAttendees: 50,
  },
  {
    title: "Team Resilience Building",
    date: "Feb 21, 2026",
    time: "11:00 AM",
    facilitator: "Lisa Nakamura",
    format: "In-person",
    attendees: 12,
    maxAttendees: 20,
  },
  {
    title: "Work-Life Balance Seminar",
    date: "Feb 25, 2026",
    time: "3:00 PM",
    facilitator: "Dr. James Park",
    format: "Online",
    attendees: 38,
    maxAttendees: 60,
  },
]

export function UpcomingEvents() {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-foreground">
          Upcoming Events
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Next scheduled workshops and sessions
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col gap-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex items-start gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                <CalendarDays className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {event.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {event.facilitator}
                </p>
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CalendarDays className="w-3 h-3" />
                    {event.date} at {event.time}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" />
                    {event.attendees}/{event.maxAttendees}
                  </span>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="shrink-0 text-xs gap-1"
              >
                {event.format === "Online" ? (
                  <Monitor className="w-3 h-3" />
                ) : (
                  <MapPin className="w-3 h-3" />
                )}
                {event.format}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
