import React from "react"
import { motion } from "framer-motion"

export default function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
      style={{ backgroundSize: "200% auto" }}
    >
      {children}
    </motion.h1>
  )
}
