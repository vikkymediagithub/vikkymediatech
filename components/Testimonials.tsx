'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Grace A.',
    role: 'Founder, FaithTech',
    quote:
      'Victor completely transformed our website. Our conversions have doubled since launch. His attention to detail and design is unmatched!',
  },
  {
    name: 'Daniel M.',
    role: 'Creative Director, DevGenius',
    quote:
      'Working with Victor was a dream. From branding to the actual code — he brought our vision to life.',
  },
  {
    name: 'Sandra I.',
    role: 'CEO, BoldBrands',
    quote:
      'I’ve worked with a lot of developers, but Victor stands out. Creative, strategic, and a true partner to our growth.',
  },
]

export default function Testimonials() {
  return (
    <section className="px-4 py-20 bg-zinc-100 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💬 Client Results & Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-6 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">“{item.quote}”</p>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {item.name}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
 