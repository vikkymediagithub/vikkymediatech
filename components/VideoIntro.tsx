'use client'

import { motion } from 'framer-motion'

export default function VideoIntro() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎥 Meet Me in 60 Seconds
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Get to know who I am, what I do, and how I help businesses grow.
      </motion.p>

      <motion.video
        className="rounded-2xl shadow-lg w-full max-w-3xl mx-auto"
        controls
        poster="/images/video-thumbnail.jpg" // Replace with your thumbnail
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <source src="/videos/intro-video.mp4" type="video/mp4" /> {/* Replace with your video path */}
        Your browser does not support the video tag.
      </motion.video>
    </section>
  )
}
