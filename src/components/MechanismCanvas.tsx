import { useEffect, useRef } from "react"

const TAU = Math.PI * 2

const colors = {
  ink: "#1a1a1a",
  muted: "#6b6f73",
  brand: "#9a7b4f",
  brandLight: "#c4a574",
  aegean: "#1e4d5c",
  copper: "#b87333",
  patina: "#5a7a6a",
  ion: "#3157d5",
  parchment: "#f3efe8",
}

type Point = {
  x: number
  y: number
}

type GearOptions = {
  x: number
  y: number
  radius: number
  teeth: number
  rotation: number
  stroke: string
  fill?: string
}

function polar(radius: number, angle: number): Point {
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  }
}

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const corner = Math.min(radius, width / 2, height / 2)

  ctx.beginPath()
  ctx.moveTo(x + corner, y)
  ctx.lineTo(x + width - corner, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + corner)
  ctx.lineTo(x + width, y + height - corner)
  ctx.quadraticCurveTo(x + width, y + height, x + width - corner, y + height)
  ctx.lineTo(x + corner, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - corner)
  ctx.lineTo(x, y + corner)
  ctx.quadraticCurveTo(x, y, x + corner, y)
  ctx.closePath()
}

function drawFineGrain(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.save()
  ctx.globalAlpha = 0.16

  for (let i = 0; i < 80; i += 1) {
    const x = ((i * 67) % width) + 0.5
    const y = ((i * 41) % height) + 0.5
    const size = 0.6 + ((i * 13) % 4) * 0.15

    ctx.beginPath()
    ctx.arc(x, y, size, 0, TAU)
    ctx.fillStyle = i % 3 === 0 ? "rgba(154,123,79,0.16)" : "rgba(30,77,92,0.10)"
    ctx.fill()
  }

  ctx.restore()
}

function drawScaleTicks(ctx: CanvasRenderingContext2D, radius: number) {
  for (let i = 0; i < 96; i += 1) {
    const angle = (i / 96) * TAU - Math.PI / 2
    const major = i % 8 === 0
    const medium = i % 4 === 0
    const inner = radius - (major ? 16 : medium ? 11 : 7)
    const outer = radius
    const start = polar(inner, angle)
    const end = polar(outer, angle)

    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.strokeStyle = major ? "rgba(154,123,79,0.32)" : "rgba(26,26,26,0.10)"
    ctx.lineWidth = major ? 1.2 : 0.75
    ctx.stroke()
  }
}

function drawArc(
  ctx: CanvasRenderingContext2D,
  radius: number,
  start: number,
  length: number,
  color: string,
  width: number,
) {
  ctx.beginPath()
  ctx.arc(0, 0, radius, start, start + length)
  ctx.strokeStyle = color
  ctx.lineWidth = width
  ctx.lineCap = "round"
  ctx.stroke()
}

function drawSignalDot(
  ctx: CanvasRenderingContext2D,
  radius: number,
  angle: number,
  color: string,
) {
  const dot = polar(radius, angle)

  ctx.beginPath()
  ctx.arc(dot.x, dot.y, 3.4, 0, TAU)
  ctx.fillStyle = "#ffffff"
  ctx.fill()

  ctx.beginPath()
  ctx.arc(dot.x, dot.y, 2.2, 0, TAU)
  ctx.fillStyle = color
  ctx.fill()
}

function drawNodeLabel(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  side: "left" | "right",
  color: string,
) {
  ctx.save()
  ctx.font = "600 10.5px Inter, sans-serif"
  const width = Math.ceil(ctx.measureText(text).width) + 18
  const height = 22
  const labelX = side === "right" ? x + 17 : x - width - 17
  const labelY = y - height / 2

  roundedRect(ctx, labelX, labelY, width, height, 11)
  ctx.fillStyle = "rgba(255,255,255,0.74)"
  ctx.fill()
  ctx.strokeStyle = `${color}30`
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(side === "right" ? x + 7 : x - 7, y)
  ctx.lineTo(side === "right" ? labelX : labelX + width, y)
  ctx.strokeStyle = `${color}55`
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.fillStyle = "rgba(26,26,26,0.68)"
  ctx.textAlign = "left"
  ctx.textBaseline = "middle"
  ctx.fillText(text, labelX + 9, y + 0.5)
  ctx.restore()
}

function drawGear(ctx: CanvasRenderingContext2D, options: GearOptions) {
  const { x, y, radius, teeth, rotation, stroke, fill = "rgba(255,255,255,0.22)" } = options

  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)

  const plate = ctx.createRadialGradient(0, 0, radius * 0.14, 0, 0, radius)
  plate.addColorStop(0, fill)
  plate.addColorStop(0.72, "rgba(255,255,255,0.08)")
  plate.addColorStop(1, "rgba(255,255,255,0)")

  ctx.beginPath()
  for (let i = 0; i < teeth * 2; i += 1) {
    const angle = (i / (teeth * 2)) * TAU
    const toothRadius = i % 2 === 0 ? radius : radius * 0.88
    const point = polar(toothRadius, angle)

    if (i === 0) ctx.moveTo(point.x, point.y)
    else ctx.lineTo(point.x, point.y)
  }

  ctx.closePath()
  ctx.fillStyle = plate
  ctx.fill()
  ctx.strokeStyle = stroke
  ctx.lineWidth = Math.max(1.1, radius * 0.026)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(0, 0, radius * 0.64, 0, TAU)
  ctx.strokeStyle = `${stroke}74`
  ctx.lineWidth = 1.1
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(0, 0, radius * 0.38, 0, TAU)
  ctx.strokeStyle = `${stroke}42`
  ctx.lineWidth = 0.9
  ctx.stroke()

  for (let i = 0; i < 8; i += 1) {
    const angle = (i / 8) * TAU
    const start = polar(radius * 0.22, angle)
    const end = polar(radius * 0.58, angle)

    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.strokeStyle = `${stroke}58`
    ctx.lineWidth = 1
    ctx.stroke()
  }

  ctx.beginPath()
  ctx.arc(0, 0, radius * 0.16, 0, TAU)
  ctx.fillStyle = stroke
  ctx.fill()

  ctx.restore()
}

export function MechanismCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    let animationFrame = 0
    let start = performance.now()

    const render = (time: number) => {
      const rect = canvas.getBoundingClientRect()
      const ratio = window.devicePixelRatio || 1
      const width = Math.max(1, rect.width)
      const height = Math.max(1, rect.height)

      if (canvas.width !== width * ratio || canvas.height !== height * ratio) {
        canvas.width = width * ratio
        canvas.height = height * ratio
      }

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      ctx.clearRect(0, 0, width, height)

      const elapsed = media.matches ? 8 : (time - start) / 1000
      const centerX = width * 0.5
      const centerY = height * 0.5
      const scale = Math.min(width, height)
      const ringMax = Math.min(scale * 0.4, width * 0.43, 190)

      const atmosphere = ctx.createRadialGradient(
        centerX,
        centerY,
        ringMax * 0.15,
        centerX,
        centerY,
        ringMax * 1.45,
      )
      atmosphere.addColorStop(0, "rgba(196,165,116,0.20)")
      atmosphere.addColorStop(0.48, "rgba(232,240,242,0.30)")
      atmosphere.addColorStop(0.78, "rgba(255,255,255,0.08)")
      atmosphere.addColorStop(1, "rgba(255,255,255,0)")
      ctx.fillStyle = atmosphere
      ctx.fillRect(0, 0, width, height)

      drawFineGrain(ctx, width, height)

      ctx.save()
      ctx.translate(centerX, centerY)

      ctx.beginPath()
      ctx.ellipse(0, 0, ringMax * 1.08, ringMax * 1.08, 0, 0, TAU)
      ctx.strokeStyle = "rgba(154,123,79,0.16)"
      ctx.lineWidth = 1.2
      ctx.stroke()

      ctx.beginPath()
      ctx.ellipse(0, 0, ringMax * 0.94, ringMax * 0.94, 0, 0, TAU)
      ctx.strokeStyle = "rgba(30,77,92,0.14)"
      ctx.lineWidth = 1
      ctx.stroke()

      for (let i = 0; i < 6; i += 1) {
        const radius = ringMax * (0.26 + i * 0.105)

        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, TAU)
        ctx.strokeStyle = i % 2 === 0 ? "rgba(154,123,79,0.20)" : "rgba(30,77,92,0.15)"
        ctx.lineWidth = i === 0 ? 1.25 : 0.95
        ctx.stroke()
      }

      drawScaleTicks(ctx, ringMax * 0.84)

      for (let i = 0; i < 24; i += 1) {
        const angle = (i / 24) * TAU
        const inner = ringMax * 0.2
        const outer = i % 3 === 0 ? ringMax * 0.78 : ringMax * 0.62
        const startPoint = polar(inner, angle)
        const endPoint = polar(outer, angle)

        ctx.beginPath()
        ctx.moveTo(startPoint.x, startPoint.y)
        ctx.lineTo(endPoint.x, endPoint.y)
        ctx.strokeStyle = i % 3 === 0 ? "rgba(154,123,79,0.16)" : "rgba(26,26,26,0.055)"
        ctx.lineWidth = i % 3 === 0 ? 1 : 0.7
        ctx.stroke()
      }

      const arcs = [
        { radius: 0.79, start: -1.25, length: 1.18, color: colors.copper, width: 4.4, speed: 0.055 },
        { radius: 0.66, start: 0.22, length: 1.06, color: colors.patina, width: 3.8, speed: -0.048 },
        { radius: 0.54, start: 1.68, length: 1.04, color: colors.aegean, width: 3.6, speed: 0.06 },
        { radius: 0.43, start: 2.88, length: 0.92, color: colors.brand, width: 3.2, speed: -0.038 },
      ]

      arcs.forEach((arc, index) => {
        const startAngle = arc.start + elapsed * arc.speed
        const arcRadius = ringMax * arc.radius

        drawArc(ctx, arcRadius, startAngle, arc.length, `${arc.color}e6`, arc.width)
        drawSignalDot(
          ctx,
          arcRadius,
          startAngle + arc.length * (0.38 + (index % 2) * 0.2),
          index === 0 ? colors.ion : arc.color,
        )
      })

      const sweep = -Math.PI / 2 + elapsed * 0.18
      const sweepEnd = polar(ringMax * 0.73, sweep)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(sweepEnd.x, sweepEnd.y)
      ctx.strokeStyle = "rgba(154,123,79,0.20)"
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(sweepEnd.x, sweepEnd.y, 3.6, 0, TAU)
      ctx.fillStyle = colors.brand
      ctx.fill()

      const nodes = [
        { angle: -1.52, radius: 0.68, color: colors.brand, label: "Mechanism" },
        { angle: -0.34, radius: 0.78, color: colors.aegean, label: "Cosmos" },
        { angle: 0.64, radius: 0.66, color: colors.patina, label: "Orrery" },
        { angle: 1.5, radius: 0.78, color: colors.copper, label: "Astra" },
        { angle: 2.5, radius: 0.7, color: colors.brand, label: "Helios" },
        { angle: 3.36, radius: 0.8, color: colors.aegean, label: "Olympia" },
      ]

      nodes.forEach((node, index) => {
        const drift = Math.sin(elapsed * 0.28 + index * 0.75) * 0.01
        const location = polar(ringMax * node.radius, node.angle + drift)
        const side = location.x > 0 ? "right" : "left"

        ctx.beginPath()
        ctx.arc(location.x, location.y, 11.5, 0, TAU)
        ctx.fillStyle = "rgba(255,255,255,0.60)"
        ctx.fill()
        ctx.strokeStyle = `${node.color}30`
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(location.x, location.y, 5.1, 0, TAU)
        ctx.fillStyle = node.color
        ctx.fill()

        drawNodeLabel(ctx, node.label, location.x, location.y, side, node.color)
      })

      const bridgePairs = [
        [polar(ringMax * 0.18, -0.08), polar(ringMax * 0.47, -0.33)],
        [polar(ringMax * 0.2, 2.28), polar(ringMax * 0.48, 2.45)],
        [polar(ringMax * 0.18, 1.38), polar(ringMax * 0.44, 1.18)],
      ]

      bridgePairs.forEach(([startPoint, endPoint], index) => {
        ctx.beginPath()
        ctx.moveTo(startPoint.x, startPoint.y)
        ctx.lineTo(endPoint.x, endPoint.y)
        ctx.strokeStyle = index === 0 ? "rgba(49,87,213,0.18)" : "rgba(154,123,79,0.18)"
        ctx.lineWidth = 2
        ctx.lineCap = "round"
        ctx.stroke()
      })

      ctx.restore()

      drawGear(ctx, {
        x: centerX,
        y: centerY,
        radius: ringMax * 0.22,
        teeth: 28,
        rotation: elapsed * 0.075,
        stroke: colors.brand,
        fill: "rgba(196,165,116,0.14)",
      })
      drawGear(ctx, {
        x: centerX - ringMax * 0.32,
        y: centerY + ringMax * 0.25,
        radius: ringMax * 0.14,
        teeth: 18,
        rotation: -elapsed * 0.12,
        stroke: colors.aegean,
        fill: "rgba(30,77,92,0.08)",
      })
      drawGear(ctx, {
        x: centerX + ringMax * 0.35,
        y: centerY - ringMax * 0.2,
        radius: ringMax * 0.13,
        teeth: 17,
        rotation: -elapsed * 0.105,
        stroke: colors.patina,
        fill: "rgba(90,122,106,0.08)",
      })

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.font = "700 9.5px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "rgba(154,123,79,0.70)"
      ctx.fillText("CALIBRATED COMPANY MECHANISM", 0, ringMax * 1.04)
      ctx.restore()

      animationFrame = requestAnimationFrame(render)
    }

    if (media.matches) {
      start = performance.now()
      render(start)
      cancelAnimationFrame(animationFrame)
    } else {
      animationFrame = requestAnimationFrame(render)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-label="Algorithmic Antikythera-inspired mechanism representing the ANTIKRA group"
    />
  )
}
