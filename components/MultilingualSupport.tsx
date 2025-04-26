'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

export default function MultilingualSupport() {
  return (
    <section className="relative py-20 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-purple-100 dark:bg-purple-800">
            <Globe className="h-8 w-8 text-purple-600 dark:text-purple-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
            Multilingual <span className="text-purple-600 dark:text-purple-400">Support</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            Speak the language of your audience! Our platform supports multiple languages to ensure your message connects with everyone, everywhere.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition">
              Explore Languages
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
      />
    </section>
  )
}
