"use client"

import { useTheme } from "next-themes"
import { Waves } from "./waves-background"

export function WaveBackgroundWrapper() {
  const { theme } = useTheme()
  
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Waves
        lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.15)"}
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={20}
        waveAmpY={10}
        friction={0.99}
        tension={0.005}
        maxCursorMove={0}
        xGap={22}
        yGap={48}
      />
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gp-light/30" />
      
      {/* Static floating elements */}
      <div 
        className="absolute w-24 h-24 rounded-full bg-gp-accent/5 blur-xl"
        style={{ top: '15%', left: '20%' }}
      />
      
      <div 
        className="absolute w-32 h-32 rounded-full bg-gp-accent/5 blur-xl"
        style={{ bottom: '25%', right: '15%' }}
      />
    </div>
  )
} 