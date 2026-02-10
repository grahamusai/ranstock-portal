"use client"

import { AppShell } from "@/components/app-shell"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { WellnessChart } from "@/components/dashboard/wellness-chart"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6 max-w-7xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground text-balance">
            Welcome back, Sarah
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {"Here's an overview of your organization's wellness metrics."}
          </p>
        </div>

        <KpiCards />

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          <div className="xl:col-span-3">
            <WellnessChart />
          </div>
          <div className="xl:col-span-2">
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </AppShell>
  )
}
