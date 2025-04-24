"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "Framer Motion", level: 85 },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 bg-muted/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants} custom={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-foreground/70">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-20">
          {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"].map(
            (tech) => (
              <motion.div
                key={tech}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-border/50 shadow-sm"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  {/* Placeholder for tech icons */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-foreground/70">{tech.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="font-medium text-center">{tech}</h3>
              </motion.div>
            ),
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
