"use client"

import { useRef, useEffect, forwardRef, useImperativeHandle } from "react"
import { cn } from "@/lib/utils"

interface WavesProps {
  /**
   * Color of the wave lines
   */
  lineColor?: string
  /**
   * Background color of the container
   */
  backgroundColor?: string
  waveSpeedX?: number
  waveSpeedY?: number
  waveAmpX?: number
  waveAmpY?: number
  xGap?: number
  yGap?: number
  friction?: number
  tension?: number
  maxCursorMove?: number
  className?: string
  scrollY?: number
}

interface WavesRef {
  updateMouse: (x: number, y: number) => void
}

class Grad {
  x: number
  y: number
  z: number
  
  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
  dot2(x: number, y: number): number {
    return this.x * x + this.y * y
  }
}

class Noise {
  grad3: Grad[]
  p: number[]
  perm: number[]
  gradP: Grad[]
  
  constructor(seed = 0) {
    this.grad3 = [
      new Grad(1, 1, 0),
      new Grad(-1, 1, 0),
      new Grad(1, -1, 0),
      new Grad(-1, -1, 0),
      new Grad(1, 0, 1),
      new Grad(-1, 0, 1),
      new Grad(1, 0, -1),
      new Grad(-1, 0, -1),
      new Grad(0, 1, 1),
      new Grad(0, -1, 1),
      new Grad(0, 1, -1),
      new Grad(0, -1, -1),
    ]
    this.p = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
      140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
      120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177,
      33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
      71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211,
      133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
      63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
      135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
      226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206,
      59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248,
      152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22,
      39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218,
      246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
      81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
      184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
      222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
    ]
    this.perm = new Array(512)
    this.gradP = new Array(512)
    this.seed(seed)
  }
  seed(seed: number) {
    if (seed > 0 && seed < 1) seed *= 65536
    seed = Math.floor(seed)
    if (seed < 256) seed |= seed << 8
    for (let i = 0; i < 256; i++) {
      const v = i & 1 ? this.p[i] ^ (seed & 255) : this.p[i] ^ ((seed >> 8) & 255)
      this.perm[i] = this.perm[i + 256] = v
      this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12]
    }
  }
  fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }
  lerp(a: number, b: number, t: number): number {
    return (1 - t) * a + t * b
  }
  perlin2(x: number, y: number): number {
    let X = Math.floor(x),
      Y = Math.floor(y)
    x -= X
    y -= Y
    X &= 255
    Y &= 255
    const n00 = this.gradP[X + this.perm[Y]].dot2(x, y)
    const n01 = this.gradP[X + this.perm[Y + 1]].dot2(x, y - 1)
    const n10 = this.gradP[X + 1 + this.perm[Y]].dot2(x - 1, y)
    const n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(x - 1, y - 1)
    const u = this.fade(x)
    return this.lerp(
      this.lerp(n00, n10, u),
      this.lerp(n01, n11, u),
      this.fade(y),
    )
  }
}

interface WavePoint {
  x: number
  y: number
  wave: { x: number; y: number }
  cursor: { x: number; y: number; vx: number; vy: number }
  ripple: { intensity: number; phase: number }
  parallax: { x: number; y: number; depth: number }
}

interface Ripple {
  x: number
  y: number
  radius: number
  intensity: number
  startTime: number
  duration: number
}

export const Waves = forwardRef<WavesRef, WavesProps>(({
  lineColor = "hsl(var(--foreground))",
  backgroundColor = "transparent",
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  friction = 0.925,
  tension = 0.005,
  maxCursorMove = 100,
  className,
  scrollY = 0,
}, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const boundingRef = useRef({ width: 0, height: 0, left: 0, top: 0 })
  const noiseRef = useRef(new Noise(Math.random()))
  const linesRef = useRef<Array<WavePoint[]>>([])
  const ripplesRef = useRef<Ripple[]>([])
  const animationIdRef = useRef<number | null>(null)
  
  // Helper function to safely convert colors
  const safeColorWithOpacity = (baseColor: string, opacity: number) => {
    // Handle HSL format
    if (baseColor.startsWith('hsl')) {
      // Check if it's already hsla
      if (baseColor.startsWith('hsla')) {
        // Replace the existing alpha
        return baseColor.replace(/,\s*[\d.]+\)$/, `, ${opacity})`)
      }
      // Convert hsl to hsla
      return baseColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity})`)
    }
    // Handle RGB format
    if (baseColor.startsWith('rgb')) {
      // Check if it's already rgba
      if (baseColor.startsWith('rgba')) {
        // Replace the existing alpha
        return baseColor.replace(/,\s*[\d.]+\)$/, `, ${opacity})`)
      }
      // Convert rgb to rgba
      return baseColor.replace('rgb(', 'rgba(').replace(')', `, ${opacity})`)
    }
    // Handle hex format
    if (baseColor.startsWith('#')) {
      const r = parseInt(baseColor.slice(1, 3), 16)
      const g = parseInt(baseColor.slice(3, 5), 16)
      const b = parseInt(baseColor.slice(5, 7), 16)
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }
    // Fallback
    return `rgba(0, 0, 0, ${opacity})`
  }
  
  // Store parameters in refs to avoid useEffect dependency issues
  const paramsRef = useRef({
    lineColor,
    backgroundColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    xGap,
    yGap,
    friction,
    tension,
    maxCursorMove,
  })
  
  // Update params ref when props change
  paramsRef.current = {
    lineColor,
    backgroundColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    xGap,
    yGap,
    friction,
    tension,
    maxCursorMove,
  }
  
  const mouseRef = useRef({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
    lastRippleTime: 0,
  })

  // Expose updateMouse method to parent
  useImperativeHandle(ref, () => ({
    updateMouse: (x: number, y: number) => {
      const mouse = mouseRef.current
      const b = boundingRef.current
      
      // x and y are now page coordinates (pageX/pageY)
      // We need to subtract document scroll position from boundingRect
      mouse.x = x - b.left
      mouse.y = y - (b.top + window.scrollY)
      
      if (!mouse.set) {
        mouse.sx = mouse.x
        mouse.sy = mouse.y
        mouse.lx = mouse.x
        mouse.ly = mouse.y
        mouse.set = true
      }
    }
  }), [scrollY])

  // We still need to track scrollY changes to update position calculations
  useEffect(() => {
    prevScrollYRef.current = scrollY
  }, [scrollY])
  
  // Reference to track previous scroll position
  const prevScrollYRef = useRef(scrollY)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    ctxRef.current = ctx

    function setSize() {
      if (!canvas || !container) return
      boundingRef.current = container.getBoundingClientRect()
      canvas.width = boundingRef.current.width
      canvas.height = boundingRef.current.height
    }

    function setLines() {
      const { width, height } = boundingRef.current
      const { xGap, yGap } = paramsRef.current
      linesRef.current = []
      const oWidth = width + 200,
        oHeight = height + 30
      const totalLines = Math.ceil(oWidth / xGap)
      const totalPoints = Math.ceil(oHeight / yGap)
      const xStart = (width - xGap * totalLines) / 2
      const yStart = (height - yGap * totalPoints) / 2
      for (let i = 0; i <= totalLines; i++) {
        const pts: WavePoint[] = []
        for (let j = 0; j <= totalPoints; j++) {
          pts.push({
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
            ripple: { intensity: 0, phase: 0 },
            parallax: { x: 0, y: 0, depth: Math.random() * 0.5 + 0.5 },
          })
        }
        linesRef.current.push(pts)
      }
    }

    function createRipple(x: number, y: number, intensity: number = 1) {
      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        intensity,
        startTime: Date.now(),
        duration: 2000, // 2 seconds
      })
      
      // Limit number of ripples for performance
      if (ripplesRef.current.length > 5) {
        ripplesRef.current.shift()
      }
    }

    function updateRipples() {
      const currentTime = Date.now()
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        const elapsed = currentTime - ripple.startTime
        if (elapsed > ripple.duration) return false
        
        const progress = elapsed / ripple.duration
        ripple.radius = progress * 300 // Max ripple radius
        ripple.intensity = (1 - progress) * ripple.intensity
        return true
      })
    }

    function movePoints(time: number) {
      const lines = linesRef.current
      const mouse = mouseRef.current
      const noise = noiseRef.current
      const { waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove } = paramsRef.current
      
      lines.forEach((pts) => {
        pts.forEach((p: WavePoint) => {
          // Enhanced multi-octave noise for more organic movement
          const baseMove = noise.perlin2(
            (p.x + time * waveSpeedX) * 0.002,
            (p.y + time * waveSpeedY) * 0.0015,
          )
          const detailMove = noise.perlin2(
            (p.x + time * waveSpeedX * 2) * 0.005,
            (p.y + time * waveSpeedY * 2) * 0.004,
          ) * 0.3
          const fineMove = noise.perlin2(
            (p.x + time * waveSpeedX * 4) * 0.01,
            (p.y + time * waveSpeedY * 4) * 0.008,
          ) * 0.1
          
          const combinedMove = (baseMove + detailMove + fineMove) * 8
          
          // Enhanced wave motion with multiple harmonics
          p.wave.x = Math.cos(combinedMove) * waveAmpX + Math.sin(combinedMove * 1.5) * waveAmpX * 0.3
          p.wave.y = Math.sin(combinedMove) * waveAmpY + Math.cos(combinedMove * 1.2) * waveAmpY * 0.2

          // Enhanced parallax effect
          const parallaxFactor = p.parallax.depth
          p.parallax.x = (mouse.sx - boundingRef.current.width / 2) * parallaxFactor * 0.02
          p.parallax.y = (mouse.sy - boundingRef.current.height / 2) * parallaxFactor * 0.015

          // Enhanced cursor interaction with smoother falloff - decreased radius and smoother effect
          const dx = p.x - mouse.sx,
            dy = p.y - mouse.sy
          const dist = Math.hypot(dx, dy)
          const influenceRadius = Math.max(80, mouse.vs * 0.2) // Reduced from 100 to 80
          
          if (dist < influenceRadius) {
            const s = 1 - (dist / influenceRadius)
            const smoothFalloff = s * s * (3 - 2 * s) // Simplified back to smooth step for gentler effect
            const directionForce = Math.cos(dist * 0.01) * smoothFalloff * 0.7 // Added 0.7 multiplier to reduce effect strength
            const velocityMultiplier = Math.min(mouse.vs * 0.001, 0.5) // Reduced from 0.0015 to 0.001 and from 1 to 0.5
            
            p.cursor.vx += Math.cos(mouse.a) * directionForce * influenceRadius * velocityMultiplier
            p.cursor.vy += Math.sin(mouse.a) * directionForce * influenceRadius * velocityMultiplier
          }

          // Ripple effects
          p.ripple.intensity = 0
          ripplesRef.current.forEach(ripple => {
            const rippleDist = Math.hypot(p.x - ripple.x, p.y - ripple.y)
            if (rippleDist < ripple.radius + 50) {
              const rippleEffect = Math.sin((rippleDist - ripple.radius) * 0.1) * ripple.intensity
              p.ripple.intensity += rippleEffect * 0.5
            }
          })

          // Enhanced physics with improved spring system
          const enhancedTension = tension * (1 + Math.abs(p.cursor.x + p.cursor.y) * 0.001)
          p.cursor.vx += (0 - p.cursor.x) * enhancedTension
          p.cursor.vy += (0 - p.cursor.y) * enhancedTension
          p.cursor.vx *= friction
          p.cursor.vy *= friction
          p.cursor.x += p.cursor.vx * 2.5
          p.cursor.y += p.cursor.vy * 2.5

          // Apply ripple effects to cursor movement
          p.cursor.x += p.ripple.intensity * 10
          p.cursor.y += p.ripple.intensity * 8

          p.cursor.x = Math.min(
            maxCursorMove * 1.2,
            Math.max(-maxCursorMove * 1.2, p.cursor.x),
          )
          p.cursor.y = Math.min(
            maxCursorMove * 1.2,
            Math.max(-maxCursorMove * 1.2, p.cursor.y),
          )
        })
      })
    }

    function moved(point: WavePoint, withCursor = true, withParallax = true) {
      let x = point.x + point.wave.x
      let y = point.y + point.wave.y
      
      if (withCursor) {
        x += point.cursor.x
        y += point.cursor.y
      }
      
      if (withParallax) {
        x += point.parallax.x
        y += point.parallax.y
      }
      
      return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 }
    }

    function drawLines() {
      const { width, height } = boundingRef.current
      const { lineColor } = paramsRef.current
      const ctx = ctxRef.current
      if (!ctx) return
      
      ctx.clearRect(0, 0, width, height)
      
      // Draw main wave lines with enhanced rendering
      ctx.beginPath()
      ctx.strokeStyle = lineColor
      ctx.lineWidth = 0.9
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      
      linesRef.current.forEach((points) => {
        if (points.length < 2) return
        
        const movedPoints = points.map(p => moved(p, true, true))
        
        // Start the path
        ctx.moveTo(movedPoints[0].x, movedPoints[0].y)
        
        if (movedPoints.length === 2) {
          ctx.lineTo(movedPoints[1].x, movedPoints[1].y)
        } else {
          // Enhanced smooth curves with better control points
          for (let i = 1; i < movedPoints.length - 1; i++) {
            const current = movedPoints[i]
            const next = movedPoints[i + 1]
            const prev = movedPoints[i - 1]
            
            // Calculate smooth control points
            const controlX = current.x + (next.x - prev.x) * 0.1
            const controlY = current.y + (next.y - prev.y) * 0.1
            
            ctx.quadraticCurveTo(controlX, controlY, (current.x + next.x) / 2, (current.y + next.y) / 2)
          }
          
          // Final point
          const lastPoint = movedPoints[movedPoints.length - 1]
          ctx.lineTo(lastPoint.x, lastPoint.y)
        }
      })
      
      ctx.stroke()
      
      // Draw subtle glow effect around cursor - decreased radius
      const mouse = mouseRef.current
      if (mouse.set && mouse.vs > 5) {
        const gradient = ctx.createRadialGradient(
          mouse.sx, mouse.sy, 0,
          mouse.sx, mouse.sy, 0 // Further reduced from 35 to 20 for an even smaller glow radius
        )
        gradient.addColorStop(0, safeColorWithOpacity(lineColor, 0.03)) // Reduced opacity from 0.05 to 0.03
        gradient.addColorStop(1, safeColorWithOpacity(lineColor, 0))
        
        ctx.fillStyle = gradient
        ctx.fillRect(mouse.sx - 15, mouse.sy - 15, 0, 0) // Reduced to make the effect smaller
      }
      
      // Draw ripple effects with reduced intensity
      ripplesRef.current.forEach(ripple => {
        if (ripple.intensity > 0.1) {
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
          ctx.strokeStyle = safeColorWithOpacity(lineColor, ripple.intensity * 0.2) // Reduced from 0.3 to 0.2
          ctx.lineWidth = 1.5 // Reduced from 2 to 1.5
          ctx.stroke()
        }
      })
    }

    function tick(t: number) {
      const mouse = mouseRef.current
      const currentTime = Date.now()

      // Enhanced mouse smoothing with adaptive responsiveness - make it more responsive
      const smoothingFactor = 0.1 + (mouse.vs * 0.0008) // Increased from 0.06 to 0.1 for less delay
      mouse.sx += (mouse.x - mouse.sx) * smoothingFactor
      mouse.sy += (mouse.y - mouse.sy) * smoothingFactor

      const dx = mouse.x - mouse.lx,
        dy = mouse.y - mouse.ly
      const d = Math.hypot(dx, dy)
      mouse.v = d
      mouse.vs += (d - mouse.vs) * 0.15 // Increased from 0.12 to 0.15 for quicker velocity response
      mouse.vs = Math.min(80, mouse.vs)
      mouse.lx = mouse.x
      mouse.ly = mouse.y
      mouse.a = Math.atan2(dy, dx)

      // Create ripples on significant mouse movement - less frequent and less intense
      if (mouse.vs > 20 && currentTime - mouse.lastRippleTime > 300) { // Increased threshold and time between ripples
        createRipple(mouse.sx, mouse.sy, mouse.vs * 0.015) // Reduced intensity from 0.02 to 0.015
        mouse.lastRippleTime = currentTime
      }

      if (container) {
        container.style.setProperty("--x", `${mouse.sx}px`)
        container.style.setProperty("--y", `${mouse.sy}px`)
        container.style.setProperty("--velocity", `${mouse.vs}`)
      }

      updateRipples()
      movePoints(t)
      drawLines()
      
      // Store animation ID for cleanup
      animationIdRef.current = requestAnimationFrame(tick)
    }

    function onResize() {
      setSize()
      setLines()
    }

    setSize()
    setLines()
    
    // Start the animation loop
    animationIdRef.current = requestAnimationFrame(tick)
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      // Clean up animation frame
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, []) // Empty dependency array to prevent restarts

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor,
        pointerEvents: 'none', // Ensure no pointer events on the container
        zIndex: -10, // Very low z-index to stay behind all content
      }}
      className={cn(
        "absolute top-0 left-0 w-full h-full overflow-hidden",
        className,
      )}
      onMouseMove={(e) => {
        const mouse = mouseRef.current
        const b = boundingRef.current
        
        // Convert clientX/Y to be consistent with our page coordinate system
        mouse.x = e.clientX - b.left
        mouse.y = e.clientY - b.top
        
        if (!mouse.set) {
          mouse.sx = mouse.x
          mouse.sy = mouse.y
          mouse.lx = mouse.x
          mouse.ly = mouse.y
          mouse.set = true
        }
      }}
    >
      {/* Enhanced cursor indicator with dynamic sizing - smaller size */}
      <div
        className={cn(
          "absolute top-0 left-0 rounded-full pointer-events-none",
          "bg-foreground/10 transition-all duration-100 ease-out",
        )}
        style={{
          width: `calc(2px + var(--velocity, 0) * 0.01px)`,
          height: `calc(2px + var(--velocity, 0) * 0.01px)`,
          transform: "translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)",
          willChange: "transform, width, height",
          boxShadow: `0 0 calc(2px + var(--velocity, 0) * 0.03px) rgba(var(--foreground), 0.05)`, // Further reduced shadow
          zIndex: -5, // Lower z-index to ensure it stays behind content
        }}
      />
      
      {/* Subtle ambient glow effect - smaller size */}
      <div
        className="absolute top-0 left-0 rounded-full pointer-events-none opacity-100"
        style={{
          width: "0px",
          height: "0px", 
          background: `radial-gradient(circle, ${safeColorWithOpacity(lineColor, 0.01)} 0%, transparent 70%)`, // Reduced opacity further
          transform: "translate3d(calc(var(--x) - 4px), calc(var(--y) - 4px), 0)",
          willChange: "transform",
          zIndex: -5, // Same lower z-index
        }}
      />
      
      <canvas ref={canvasRef} className="block w-full h-full" style={{ zIndex: -15 }} />
    </div>
  )
})

Waves.displayName = "Waves" 