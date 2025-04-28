"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

interface SkillBarProps {
  name: string
  percentage: number
  color: "green" | "cyan" | "purple" | "teal"
}

export default function SkillBar({ name, percentage, color }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true)
    }
  }, [isInView])

  const getColorClass = () => {
    switch (color) {
      case "green":
        return "from-green-500 to-green-400"
      case "cyan":
        return "from-cyan-500 to-cyan-400"
      case "purple":
        return "from-purple-500 to-purple-400"
      case "teal":
        return "from-teal-500 to-teal-400"
      default:
        return "from-primary to-primary/80"
    }
  }

  const getTextColorClass = () => {
    switch (color) {
      case "green":
        return "text-green-400"
      case "cyan":
        return "text-cyan-400"
      case "purple":
        return "text-purple-400"
      case "teal":
        return "text-teal-400"
      default:
        return "text-primary"
    }
  }

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className={`font-medium ${getTextColorClass()}`}>{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2.5 w-full bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          className={`h-full bg-gradient-to-r ${getColorClass()} relative`}
          initial={{ width: 0 }}
          animate={{ width: hasAnimated ? `${percentage}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  )
}
