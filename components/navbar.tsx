"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Menu, X, Sparkles, MoonIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 backdrop-blur-lg"
      style={{ position: "fixed" }}
    >
      <div className="relative flex items-center justify-between rounded-b-xl bg-background/70 backdrop-blur-2xl shadow-md border-b border-purple-700/40 px-6 py-4 md:max-w-5xl md:mx-auto">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="/" className="flex items-center space-x-2">
            <Image
              src="/vikkymediatech-logo.png"
              alt="Vikkymediatech Logo"
              width={60}
              height={60}
              className="w-14 h-14 object-contain"
            />
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center space-x-6"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-medium relative transition-all duration-300 group text-foreground"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <motion.div variants={itemVariants} className="p-1 rounded-full border border-purple-700/40 bg-black/20 backdrop-blur">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-purple-700" />
                )}
              </Button>
            </motion.div>
          )}
        </motion.nav>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sparkles className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-purple-700" />
              )}
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="origin-top md:hidden bg-background/80 backdrop-blur-xl border-t border-purple-600/30 mt-2 shadow-lg overflow-hidden rounded-b-xl"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground text-lg font-medium border-b border-purple-500/20 pb-2 hover:text-purple-500 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
