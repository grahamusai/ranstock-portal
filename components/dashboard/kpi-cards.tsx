"use client"

import { Users, Activity, AlertTriangle, CalendarDays } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const kpis = [
  {
    label: "Employee Participation",
    value: "78%",
    change: "+4.2%",
    trend: "up" as const,
    icon: Users,
    description: "vs. last quarter",
  },
  {
    label: "Avg. Wellness Score",
    value: "7.4",
    change: "+0.6",
    trend: "up" as const,
    icon: Activity,
    description: "out of 10",
  },
  {
    label: "Burnout Risk",
    value: "12%",
    change: "-3.1%",
    trend: "down" as const,
    icon: AlertTriangle,
    description: "flagged employees",
  },
  {
    label: "Upcoming Workshops",
    value: "6",
    change: "This month",
    trend: "neutral" as const,
    icon: CalendarDays,
    description: "sessions scheduled",
  },
]

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <Card key={kpi.label} className="border border-border">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">
                  {kpi.label}
                </p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {kpi.value}
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span
                    className={
                      kpi.trend === "up"
                        ? "text-xs font-medium text-success"
                        : kpi.trend === "down"
                          ? "text-xs font-medium text-success"
                          : "text-xs font-medium text-muted-foreground"
                    }
                  >
                    {kpi.change}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {kpi.description}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <kpi.icon className="w-5 h-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
