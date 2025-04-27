"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Twitter, Instagram, ArrowRight, Mail, Heart, Code, Coffee } from "lucide-react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

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

    // Handle scroll to top
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
      });
    };

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden pt-20 pb-10 bg-gradient-to-br from-background via-background to-background/95"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

      {/* Diagonal divider */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-40 bg-muted/30 -skew-y-3 transform origin-top-right"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4 pt-10 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left column - Logo and info */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-6">
          <div className="flex items-center h-[110px] w-[110px]">
           <img src="/vikkymediatech-logo.png" alt="Logo" />
         </div>


            <p className="text-foreground/70 max-w-md">
              Creating digital experiences that blend creativity with technical excellence. Let's build something
              amazing together.
            </p>

            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Middle column - Navigation */}
          <motion.div variants={itemVariants} className="md:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="grid gap-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/70 hover:text-foreground transition-colors flex items-center group"
                >
                  <span className="w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Right column - Newsletter */}
          <motion.div variants={itemVariants} className="md:col-span-5 space-y-6">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-foreground/70">
              Subscribe to my newsletter for the latest updates on projects and tech insights.
            </p>

            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background/50 border-border/50" />
              <Button className="shrink-0">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>

            {/* 3D-like cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                whileHover={{
                  y: -5,
                  rotateY: 10,
                  rotateX: 10,
                  scale: 1.05,
                }}
                className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 shadow-sm transform perspective-1000"
              >
                <div className="flex flex-col items-center text-center">
                  <Code className="h-8 w-8 text-purple-500 mb-2" />
                  <h4 className="font-medium">Open Source</h4>
                  <p className="text-xs text-foreground/70">Contributing to the community</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  rotateY: -10,
                  rotateX: 10,
                  scale: 1.05,
                }}
                className="p-4 rounded-lg bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 shadow-sm transform perspective-1000"
              >
                <div className="flex flex-col items-center text-center">
                  <Coffee className="h-8 w-8 text-pink-500 mb-2" />
                  <h4 className="font-medium">Let's Connect</h4>
                  <p className="text-xs text-foreground/70">Always open to chat</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Interactive wave divider */}
        <div className="relative h-24 mt-16 mb-8">
          <svg
            className="absolute w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              initial={{
                d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
              }}
              animate={{
                d: [
                  "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                  "M321.39,86.44c58-10.79,114.16-40.13,172-51.86,82.39-16.72,168.19-17.73,250.45,9.61C823.78,61,906.67,92,985.66,102.83c70.05,8.48,146.53,16.09,214.34-7V0H0V57.35A600.21,600.21,0,0,0,321.39,86.44Z",
                  "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 10,
                ease: "easeInOut",
              }}
              fill="rgba(139, 92, 246, 0.1)"
            />
          </svg>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/30 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p variants={itemVariants} className="text-sm text-foreground/60 flex items-center">
            <span>© {new Date().getFullYear()} Vikkymediatech. Made with</span>
            <Heart className="h-4 w-4 mx-1 text-pink-500 inline" />
            <span>and Next.js</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Cookies
            </Link>
          </motion.div>
        </div>

        {/* Floating action button */}
        <motion.div
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
            onClick={handleScrollToTop}
          >
            <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
          </motion.a>
        </motion.div>

      </motion.div>
    </footer>
  )
}
