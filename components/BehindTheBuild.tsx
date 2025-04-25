'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Palette, BookOpen } from 'lucide-react'

const posts = [
  {
    title: 'How I Built My Contact Form with Validation',
    description: 'Step-by-step breakdown of building a sleek, user-friendly contact form using Formik and Yup.',
    icon: <FileText className="w-6 h-6 text-indigo-500" />,
    href: '#',
  },
  {
    title: 'My Design Process for a Client’s Brand',
    description: 'From concept to delivery — how I approach branding with design systems and strategy.',
    icon: <Palette className="w-6 h-6 text-pink-500" />,
    href: '#',
  },
  {
    title: 'Lessons from Coding as a Christian Developer',
    description: 'How my faith shapes my work ethic, focus, and creative process as a dev.',
    icon: <BookOpen className="w-6 h-6 text-yellow-500" />,
    href: '#',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.1)',
  },
}

export default function BehindTheBuild() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#f9fafb] to-[#eef1f6] dark:from-[#0f172a] dark:to-[#1e293b]">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🛠️ Behind the Build
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-4">
                {post.icon}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {post.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {post.description}
              </p>
              <Link
                href={post.href}
                className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                Read case study →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
