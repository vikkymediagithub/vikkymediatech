"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey as a Developer</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden border border-border shadow-xl">
              <Image
                src="/img-1.jpeg"
                alt="Victor Joseph Portrait"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text */}
          <motion.div variants={itemVariants} className="space-y-6 text-[16px] md:text-[18px] leading-relaxed text-foreground/90">
            <h3 className="text-2xl font-bold">Passionate about creating meaningful digital experiences</h3>
            <p>
              I'm a creative developer with over 5 years of experience in building modern web applications. My journey
              began with a curiosity about how websites work, which led me to dive deep into the world of web
              development.
            </p>
            <p>
              I specialize in React.js, Next.js, and modern frontend technologies. My approach combines technical
              expertise with creative problem-solving to deliver solutions that not only work flawlessly but also
              provide exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold">Frontend Development</h4>
                <p className="text-sm text-foreground/70">React, Next.js, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-semibold">UI/UX Design</h4>
                <p className="text-sm text-foreground/70">Figma, Adobe XD, Prototyping</p>
              </div>
              <div>
                <h4 className="font-semibold">Backend Development</h4>
                <p className="text-sm text-foreground/70">Node.js, Express, MongoDB</p>
              </div>
              <div>
                <h4 className="font-semibold">DevOps</h4>
                <p className="text-sm text-foreground/70">CI/CD, Docker, Vercel</p>
              </div>
            </div>

            <a
            href="/CV.pdf"
            download
            className="mt-6 inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition"
          >
            <FileText className="mr-2 h-4 w-4" />
            Download Resume
          </a>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
