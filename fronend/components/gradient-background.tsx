"use client"

import { GrainGradient } from "@paper-design/shaders-react"

export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="w-full h-full bg-black" />
    </div>
  )
}
