"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const emojiScale = [
  { value: 1, emoji: "\u{1F629}", label: "Very Low" },
  { value: 2, emoji: "\u{1F61F}", label: "Low" },
  { value: 3, emoji: "\u{1F610}", label: "Neutral" },
  { value: 4, emoji: "\u{1F642}", label: "Good" },
  { value: 5, emoji: "\u{1F60A}", label: "Great" },
]

interface QuestionSliderProps {
  label: string
  description: string
  value: number
  onChange: (val: number) => void
}

function QuestionSlider({
  label,
  description,
  value,
  onChange,
}: QuestionSliderProps) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-lg bg-muted/40 border border-border">
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Slider
          value={[value]}
          onValueChange={(v) => onChange(v[0])}
          min={1}
          max={10}
          step={1}
          className="w-full"
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">1</span>
          <span className="text-sm font-semibold text-primary">{value}/10</span>
          <span className="text-xs text-muted-foreground">10</span>
        </div>
      </div>
    </div>
  )
}

interface EmojiQuestionProps {
  label: string
  description: string
  value: number
  onChange: (val: number) => void
}

function EmojiQuestion({
  label,
  description,
  value,
  onChange,
}: EmojiQuestionProps) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-lg bg-muted/40 border border-border">
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        {emojiScale.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-lg transition-all flex-1",
              value === item.value
                ? "bg-primary/10 ring-2 ring-primary"
                : "hover:bg-muted"
            )}
            aria-label={`${item.label} - ${item.value} out of 5`}
            aria-pressed={value === item.value}
          >
            <span className="text-2xl" role="img" aria-hidden="true">
              {item.emoji}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function CheckInPage() {
  const [stress, setStress] = useState(5)
  const [energy, setEnergy] = useState(5)
  const [focus, setFocus] = useState(5)
  const [satisfaction, setSatisfaction] = useState(3)
  const [notes, setNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <AppShell>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="max-w-md w-full border border-border text-center">
            <CardContent className="p-8 flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Thank you for checking in!
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your responses have been recorded anonymously. Regular check-ins
                help us create a better workplace for everyone.
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false)
                  setStress(5)
                  setEnergy(5)
                  setFocus(5)
                  setSatisfaction(3)
                  setNotes("")
                }}
                className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Submit Another
              </Button>
            </CardContent>
          </Card>
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground text-balance">
            How are you feeling today?
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Take a moment to reflect. Your honest answers help us build a
            healthier workplace.
          </p>
        </div>

        <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20">
          <Shield className="w-4 h-4 text-accent shrink-0" />
          <p className="text-xs text-muted-foreground">
            All responses are <strong className="text-foreground">completely anonymous</strong>. Individual
            answers are never shared with managers or leadership.
          </p>
        </div>

        <Card className="border border-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-semibold text-foreground">
              Wellness Survey
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 pt-0">
            <QuestionSlider
              label="Stress Level"
              description="How stressed are you feeling right now? (1 = very stressed, 10 = very calm)"
              value={stress}
              onChange={setStress}
            />
            <QuestionSlider
              label="Energy Level"
              description="How energized do you feel? (1 = exhausted, 10 = full of energy)"
              value={energy}
              onChange={setEnergy}
            />
            <QuestionSlider
              label="Focus & Clarity"
              description="How well can you concentrate on your tasks? (1 = very distracted, 10 = laser focused)"
              value={focus}
              onChange={setFocus}
            />
            <EmojiQuestion
              label="Job Satisfaction"
              description="Overall, how satisfied are you with your work right now?"
              value={satisfaction}
              onChange={setSatisfaction}
            />

            <div className="flex flex-col gap-2 p-5 rounded-lg bg-muted/40 border border-border">
              <label
                htmlFor="notes"
                className="text-sm font-medium text-foreground"
              >
                Anything else on your mind?{" "}
                <span className="text-muted-foreground font-normal">
                  (Optional)
                </span>
              </label>
              <Textarea
                id="notes"
                placeholder="Share any thoughts, suggestions, or things you'd like us to know..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="bg-card resize-none"
              />
            </div>

            <Button
              onClick={() => setSubmitted(true)}
              className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              Submit Check-In
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}
