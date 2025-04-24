"use client"
import React, { useEffect } from "react"

export default function BackgroundStars() {
  useEffect(() => {
    const stars = Array.from({ length: 60 }, (_, i) => {
      const el = document.createElement("div")
      el.className = "star"
      el.style.left = `${Math.random() * 100}vw`
      el.style.top = `${Math.random() * 100}vh`
      el.style.animationDuration = `${3 + Math.random() * 5}s`
      document.body.appendChild(el)
      return el
    })
    return () => stars.forEach(star => star.remove())
  }, [])

  return null
}
