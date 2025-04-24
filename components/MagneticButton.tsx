"use client"
import React, { useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export default function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return
    const deltaX = e.clientX - (bounds.left + bounds.width / 2)
    const deltaY = e.clientY - (bounds.top + bounds.height / 2)
    x.set(deltaX * 0.3)
    y.set(deltaY * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="px-6 py-3 bg-black text-white rounded-full font-bold shadow-lg"
    >
      {children}
    </motion.button>
  )
}
