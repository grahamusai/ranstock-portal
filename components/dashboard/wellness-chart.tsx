"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const data = [
  { month: "Jul", wellness: 6.8, participation: 62, burnout: 18 },
  { month: "Aug", wellness: 6.9, participation: 65, burnout: 17 },
  { month: "Sep", wellness: 7.1, participation: 68, burnout: 16 },
  { month: "Oct", wellness: 7.0, participation: 71, burnout: 15 },
  { month: "Nov", wellness: 7.2, participation: 73, burnout: 14 },
  { month: "Dec", wellness: 7.3, participation: 75, burnout: 13 },
  { month: "Jan", wellness: 7.4, participation: 78, burnout: 12 },
]

export function WellnessChart() {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-foreground">
          Wellness Trends
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          6-month overview of key wellness metrics
        </p>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                className="stroke-border"
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  fontSize: "13px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
              />
              <Line
                type="monotone"
                dataKey="wellness"
                name="Wellness Score"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2.5}
                dot={{ r: 3.5 }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="participation"
                name="Participation %"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2.5}
                dot={{ r: 3.5 }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="burnout"
                name="Burnout Risk %"
                stroke="hsl(var(--chart-5))"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
