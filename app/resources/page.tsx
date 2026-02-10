"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Video,
  FileText,
  Headphones,
  Clock,
  CheckCircle2,
  Play,
} from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Stress", "Burnout", "Mindfulness", "Productivity"]

const resources = [
  {
    id: 1,
    title: "Understanding Workplace Stress",
    description:
      "A comprehensive video guide on identifying stress triggers and building healthy coping mechanisms.",
    type: "video" as const,
    category: "Stress",
    duration: "18 min",
    progress: 100,
  },
  {
    id: 2,
    title: "The Burnout Recovery Playbook",
    description:
      "Practical PDF workbook with exercises and worksheets for recovering from burnout and preventing recurrence.",
    type: "pdf" as const,
    category: "Burnout",
    duration: "25 min read",
    progress: 60,
  },
  {
    id: 3,
    title: "Guided Breathing Exercises",
    description:
      "A series of calming audio sessions for deep breathing, progressive muscle relaxation, and body scanning.",
    type: "audio" as const,
    category: "Mindfulness",
    duration: "12 min",
    progress: 0,
  },
  {
    id: 4,
    title: "Productivity Without Hustle Culture",
    description:
      "Video session on sustainable productivity practices that prioritize well-being over overwork.",
    type: "video" as const,
    category: "Productivity",
    duration: "22 min",
    progress: 35,
  },
  {
    id: 5,
    title: "Managing Anxiety at Work",
    description:
      "Learn evidence-based techniques for managing anxiety in professional settings, including CBT-based approaches.",
    type: "pdf" as const,
    category: "Stress",
    duration: "15 min read",
    progress: 0,
  },
  {
    id: 6,
    title: "Evening Wind-Down Meditation",
    description:
      "A soothing guided meditation designed to help you transition from work mode to rest mode each evening.",
    type: "audio" as const,
    category: "Mindfulness",
    duration: "10 min",
    progress: 100,
  },
  {
    id: 7,
    title: "Setting Healthy Boundaries",
    description:
      "Video workshop on communicating boundaries effectively with managers and colleagues without guilt.",
    type: "video" as const,
    category: "Burnout",
    duration: "20 min",
    progress: 0,
  },
  {
    id: 8,
    title: "Focus & Deep Work Strategies",
    description:
      "A practical guide to eliminating distractions, batching tasks, and entering flow states more frequently.",
    type: "pdf" as const,
    category: "Productivity",
    duration: "18 min read",
    progress: 80,
  },
]

const typeIcons = {
  video: Video,
  pdf: FileText,
  audio: Headphones,
}

const typeLabels = {
  video: "Video",
  pdf: "PDF",
  audio: "Audio",
}

const typeColors = {
  video: "bg-accent/10 text-accent",
  pdf: "bg-warning/10 text-warning-foreground",
  audio: "bg-primary/10 text-primary",
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredResources =
    activeCategory === "All"
      ? resources
      : resources.filter((r) => r.category === activeCategory)

  const completedCount = resources.filter((r) => r.progress === 100).length

  return (
    <AppShell>
      <div className="flex flex-col gap-6 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-foreground text-balance">
              Resources Library
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Videos, guides, and audio sessions to support your well-being.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>
              {completedCount}/{resources.length} completed
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "text-xs",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((resource) => {
            const TypeIcon = typeIcons[resource.type]
            const isCompleted = resource.progress === 100

            return (
              <Card key={resource.id} className="border border-border flex flex-col">
                <CardContent className="p-5 flex flex-col flex-1 gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-lg",
                          typeColors[resource.type]
                        )}
                      >
                        <TypeIcon className="w-4 h-4" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {typeLabels[resource.type]}
                      </Badge>
                    </div>
                    {isCompleted && (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground leading-snug">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                      {resource.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {resource.duration}
                  </div>

                  {resource.progress > 0 && resource.progress < 100 && (
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-muted-foreground">
                          Progress
                        </span>
                        <span className="text-[11px] font-medium text-foreground">
                          {resource.progress}%
                        </span>
                      </div>
                      <Progress value={resource.progress} className="h-1.5" />
                    </div>
                  )}

                  <Button
                    variant={isCompleted ? "outline" : "default"}
                    size="sm"
                    className={cn(
                      "w-full mt-auto text-xs",
                      isCompleted
                        ? "bg-transparent text-muted-foreground"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    {isCompleted ? (
                      "Review Again"
                    ) : resource.progress > 0 ? (
                      <>
                        <Play className="w-3.5 h-3.5 mr-1" />
                        Continue
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 mr-1" />
                        Start
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </AppShell>
  )
}
