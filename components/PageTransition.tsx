"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

export default function PageTransition({ children }: { children: ReactNode }) {
  const path = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
