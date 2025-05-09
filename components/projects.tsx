"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring product filtering, cart functionality, and payment integration.",
      image: "/project-2.png",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "Supabase"],
      liveUrl: "https://nova-ecommerce-store.vercel.app/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A creative portfolio website for a photographer with image galleries, animations, and contact form.",
      image: "/project-1.png",
      tags: ["React", "Framer Motion", "GSAP", "Netlify"],
      liveUrl: "https://vikkymediatech.vercel.app/#home",
      githubUrl: "https://github.com/vikkymediagithub/vikkymediatech.git",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, user authentication, and team workspaces.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                <div className="overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted text-foreground/70 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
