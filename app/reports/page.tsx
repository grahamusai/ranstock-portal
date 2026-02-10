"use client"

import { AppShell } from "@/components/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Download,
  Shield,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const beforeAfterData = [
  { metric: "Wellness Score", before: 5.8, after: 7.4 },
  { metric: "Participation", before: 45, after: 78 },
  { metric: "Satisfaction", before: 6.2, after: 7.8 },
  { metric: "Energy Level", before: 5.5, after: 7.1 },
]

const departmentData = [
  { department: "Engineering", wellness: 7.6, participation: 82 },
  { department: "Marketing", wellness: 7.2, participation: 75 },
  { department: "Sales", wellness: 6.8, participation: 68 },
  { department: "Operations", wellness: 7.4, participation: 80 },
  { department: "HR", wellness: 8.1, participation: 92 },
  { department: "Finance", wellness: 7.0, participation: 71 },
]

const comparisonMetrics = [
  {
    label: "Average Wellness Score",
    before: "5.8",
    after: "7.4",
    change: "+27.6%",
    trend: "up" as const,
  },
  {
    label: "Employee Participation",
    before: "45%",
    after: "78%",
    change: "+73.3%",
    trend: "up" as const,
  },
  {
    label: "Burnout Risk Rate",
    before: "28%",
    after: "12%",
    change: "-57.1%",
    trend: "down" as const,
  },
  {
    label: "Avg. Sick Days / Quarter",
    before: "4.2",
    after: "2.8",
    change: "-33.3%",
    trend: "down" as const,
  },
]

export default function ReportsPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6 max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-foreground text-balance">
                Reports & Insights
              </h1>
              <Badge variant="secondary" className="text-xs">
                HR Only
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Aggregate wellness data and program effectiveness metrics.
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </div>

        <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
          <Shield className="w-4 h-4 text-primary shrink-0" />
          <p className="text-xs text-muted-foreground">
            All data is <strong className="text-foreground">anonymized and aggregated</strong>. Individual
            employee responses are never identifiable in reports. Minimum group
            size of 5 is enforced.
          </p>
        </div>

        {/* Before vs After Comparison Cards */}
        <div>
          <h2 className="text-base font-semibold text-foreground mb-3">
            Program Impact: Before vs. After
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {comparisonMetrics.map((metric) => (
              <Card key={metric.label} className="border border-border">
                <CardContent className="p-5">
                  <p className="text-xs font-medium text-muted-foreground mb-3">
                    {metric.label}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground mb-0.5">
                        Before
                      </span>
                      <span className="text-lg font-bold text-muted-foreground/70">
                        {metric.before}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground mb-0.5">
                        After
                      </span>
                      <span className="text-lg font-bold text-foreground">
                        {metric.after}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    {metric.trend === "up" ? (
                      <TrendingUp className="w-3.5 h-3.5 text-success" />
                    ) : (
                      <TrendingDown className="w-3.5 h-3.5 text-success" />
                    )}
                    <span className="text-xs font-medium text-success">
                      {metric.change}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      improvement
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Before/After Bar Chart */}
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold text-foreground">
                Before vs. After Comparison
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Key metrics before and after the wellness program launch
              </p>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={beforeAfterData}
                    margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-border"
                    />
                    <XAxis
                      dataKey="metric"
                      tick={{ fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 12 }}
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
                      wrapperStyle={{
                        fontSize: "12px",
                        paddingTop: "8px",
                      }}
                    />
                    <Bar
                      dataKey="before"
                      name="Before"
                      fill="hsl(var(--muted-foreground))"
                      radius={[4, 4, 0, 0]}
                      barSize={28}
                      opacity={0.5}
                    />
                    <Bar
                      dataKey="after"
                      name="After"
                      fill="hsl(var(--chart-1))"
                      radius={[4, 4, 0, 0]}
                      barSize={28}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Department Breakdown */}
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold text-foreground">
                Department Breakdown
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Wellness scores and participation rates by department
              </p>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={departmentData}
                    margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-border"
                    />
                    <XAxis
                      dataKey="department"
                      tick={{ fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 12 }}
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
                      wrapperStyle={{
                        fontSize: "12px",
                        paddingTop: "8px",
                      }}
                    />
                    <Bar
                      dataKey="wellness"
                      name="Wellness Score"
                      fill="hsl(var(--chart-1))"
                      radius={[4, 4, 0, 0]}
                      barSize={24}
                    />
                    <Bar
                      dataKey="participation"
                      name="Participation %"
                      fill="hsl(var(--chart-2))"
                      radius={[4, 4, 0, 0]}
                      barSize={24}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insights */}
        <Card className="border border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-foreground">
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  Highest Performing
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The HR department leads with a 8.1 wellness score and 92%
                  participation rate. Their regular team wellness activities
                  correlate strongly with these results.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-warning/5 border border-warning/10">
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  Needs Attention
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sales department shows the lowest wellness score at 6.8 and
                  68% participation. Consider scheduling targeted workshops
                  during their quieter periods.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  Trending Upward
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Overall burnout risk has decreased 57% since program launch.
                  Stress management workshops have the highest satisfaction
                  ratings among all sessions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}
