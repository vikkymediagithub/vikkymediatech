"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Github, Linkedin, Facebook } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

const skills = [
  { name: "React", color: "#61DAFB" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Next.js", color: "#000000" },
  { name: "Node.js", color: "#339933" },
  { name: "Git", color: "#F05032" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Redux", color: "#764ABC" },
  { name: "GraphQL", color: "#E10098" },
]

export default function MassiveHero() {
  const { theme, setTheme } = useTheme()
  const containerRef = useRef(null)

  // Fix: useMotionValue and spring for cursor
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 1000, damping: 50 })
  const springY = useSpring(y, { stiffness: 1000, damping: 50 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 2)
      y.set(e.clientY - 2)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black from-white via-gray-100 to-white transition-all"
    >
      {/* Custom Mouse Cursor */}
      <motion.div
        className="fixed z-50 pointer-events-none w-4 h-4 bg-black dark:bg-white rounded-full"
        style={{ x: springX, y: springY }}
      />

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 dark:bg-purple-700 opacity-20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-400 dark:bg-pink-600 opacity-20 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 relative"
      >
        <span className="text-sm uppercase text-pink-500 font-semibold tracking-widest">
          Welcome to My Universe
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white mt-4">
          Hi, 👋 I'm Victor Joseph
        </h1>
        <p className="max-w-xl text-md md:text-lg text-gray-700 dark:text-gray-300 mt-6">
          A creative frontend developer blending technology and design to bring powerful digital experiences to life.
        </p>

        {/* Profile Image + Orbiting Skills */}
        <div className="relative flex justify-center items-center mt-10 w-full h-[300px] md:h-[350px]">
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/30 shadow-xl z-10">
            <Image
              src="/profile.jpeg"
              alt="Victor Joseph"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Orbiting Skills */}
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI
            const radius = 160
            const x = radius * Math.cos(angle)
            const y = radius * Math.sin(angle)
            return (
              <motion.div
                key={index}
                className="absolute text-xs md:text-sm px-3 py-1 rounded-full font-semibold shadow-md whitespace-nowrap"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  backgroundColor: skill.color,
                  color: skill.color === "#F7DF1E" ? "#000" : "#fff",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {skill.name}
              </motion.div>
            )
          })}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 text-black dark:text-white text-opacity-80">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:scale-110 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:scale-110 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
