"use client"

import { GrainGradient } from "@paper-design/shaders-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function GradientBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === "dark"

  return (
    <div className="absolute inset-0 -z-10">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack={isDark ? "hsl(220, 30%, 5%)" : "hsl(0, 0%, 100%)"}
        softness={0.76}
        intensity={0.45}
        noise={0.1}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={1.5}
        colors={
          isDark
            ? ["hsl(250, 90%, 30%)", "hsl(280, 85%, 35%)", "hsl(220, 95%, 25%)"]
            : ["hsl(193, 85%, 66%)", "hsl(270, 90%, 70%)", "hsl(195, 100%, 50%)"]
        }
      />
    </div>
  )
}
