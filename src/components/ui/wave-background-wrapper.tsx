"use client"

import { useTheme } from "next-themes"
import { Waves } from "./waves-background"
import { useRef, useEffect, useState } from "react"

interface WavesRef {
  updateMouse: (x: number, y: number) => void
}

export function WaveBackgroundWrapper() {
  const { theme } = useTheme()
  const waveRef = useRef<WavesRef>(null)
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (waveRef.current && waveRef.current.updateMouse) {
        // Use pageY which already accounts for scrolling
        waveRef.current.updateMouse(e.pageX, e.pageY)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (waveRef.current && waveRef.current.updateMouse && e.touches[0]) {
        // Use pageY which already accounts for scrolling
        waveRef.current.updateMouse(e.touches[0].pageX, e.touches[0].pageY)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Initial scroll position
    setScrollY(window.scrollY)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])
  
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <Waves
        ref={waveRef}
        lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.18)" : "rgba(0, 0, 0, 0.15)"}
        backgroundColor="transparent"
        waveSpeedX={0.018}
        waveSpeedY={0.01}
        waveAmpX={28}
        waveAmpY={18}
        friction={0.92}
        tension={0.012}
        maxCursorMove={120}
        xGap={38}
        yGap={70}
        scrollY={scrollY}
        className="pointer-events-none"
      />
      
      {/* Enhanced overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gp-light/15 pointer-events-none" style={{ zIndex: -15 }} />
      
      {/* Dynamic floating elements that respond to cursor */}
      <div 
        className="absolute w-32 h-32 rounded-full bg-gp-accent/8 blur-2xl transition-all duration-1000 ease-out pointer-events-none"
        style={{ 
          top: `calc(12% + ${scrollY * 0.05}px)`, 
          left: '18%',
          transform: 'translate(calc(var(--x, 0px) * -0.02), calc(var(--y, 0px) * -0.015))',
          willChange: 'transform',
          zIndex: -15
        }}
      />
      
      <div 
        className="absolute w-40 h-40 rounded-full bg-gp-accent/6 blur-3xl transition-all duration-1200 ease-out pointer-events-none"
        style={{ 
          bottom: `calc(20% + ${scrollY * 0.03}px)`, 
          right: '12%',
          transform: 'translate(calc(var(--x, 0px) * 0.015), calc(var(--y, 0px) * 0.02))',
          willChange: 'transform',
          zIndex: -15
        }}
      />
      
      <div 
        className="absolute w-24 h-24 rounded-full bg-gp-accent/10 blur-xl transition-all duration-800 ease-out pointer-events-none"
        style={{ 
          top: `calc(60% + ${scrollY * 0.08}px)`, 
          left: '70%',
          transform: 'translate(calc(var(--x, 0px) * -0.025), calc(var(--y, 0px) * 0.018))',
          willChange: 'transform',
          zIndex: -15
        }}
      />
    </div>
  )
} 