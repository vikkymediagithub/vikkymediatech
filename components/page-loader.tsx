"use client"

import { motion } from "framer-motion"

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative">
        <motion.div
          className="w-20 h-20 border-4 border-purple-300 border-t-purple-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-pink-300 border-t-pink-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-4 border-purple-300 border-b-purple-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-4 border-pink-300 border-b-pink-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
}
