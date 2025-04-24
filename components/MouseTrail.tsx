"use client"
import React, { useEffect, useState } from "react"

export default function MouseTrail() {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPositions(prev => [...prev.slice(-10), { x: e.clientX, y: e.clientY }])
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <>
      {positions.map((pos, index) => (
        <div
          key={index}
          className="fixed w-2 h-2 rounded-full bg-white opacity-50 pointer-events-none"
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
            zIndex: 50,
          }}
        />
      ))}
    </>
  )
}
