"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import PageLoader from "@/components/page-loader"
import Hero from "@/components/hero"
import About from "@/components/about"
import VideoIntro from '@/components/VideoIntro'
import Services from "@/components/services"
import Projects from "@/components/projects"
import Freebie from '../components/Freebie'
import Testimonials from '@/components/Testimonials'
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackgroundStars from "@/components/BackgroundStars"
import MouseTrail from "@/components/MouseTrail"
import PageTransition from "@/components/PageTransition"
import BehindTheBuild from '@/components/BehindTheBuild'
import FloatingChatButton from "@/components/FloatingChatButton"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) return null

  return (
    <main className="min-h-screen bg-background transition-colors duration-300 relative overflow-hidden">
      <BackgroundStars />
      <MouseTrail />

      <AnimatePresence mode="wait">
        {loading ? (
          <PageLoader key="loader" />
        ) : (
          <PageTransition>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <VideoIntro />
            <Projects />
            <Freebie
              consultationText="Book a free consultation with us to get personalized insights into your business needs and how we can help you grow your online presence."
              checklistLink="/downloads/startup-checklist.pdf"
              checklistText="A comprehensive checklist for startups needing a website. Download it now to make sure your website covers all the essentials!"
              guideLink="/downloads/brand-design-guide.pdf"
              guideText="A 1-page guide with tips on how to leverage your brand design for maximum impact. Perfect for entrepreneurs and small businesses."
            />
            <Testimonials />
            <BehindTheBuild />
            <Skills />
            <FloatingChatButton />
            <Contact />
            <Footer />
          </PageTransition>
        )}
      </AnimatePresence>
    </main>
  )
}