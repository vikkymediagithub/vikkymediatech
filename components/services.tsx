"use client"

import { motion } from "framer-motion"
import { Code, PenTool, Rocket } from "lucide-react"
import Link from "next/link"

export default function OurServices() {
  const services = [
    {
      title: "Web Development",
      icon: <Code className="w-8 h-8" />,
      description: "We craft fast, modern, and responsive websites that elevate your digital presence.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "UI/UX Design",
      icon: <PenTool className="w-8 h-8" />,
      description: "We design clean and user-centric interfaces that your users will love and remember.",
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Brand Strategy",
      icon: <Rocket className="w-8 h-8" />,
      description: "We help you stand out by creating memorable brand experiences that convert.",
      color: "from-yellow-400 to-orange-500",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 bg-background text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Our Services</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
          Explore how we combine creativity and technology to deliver unique solutions tailored to your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 text-white bg-gradient-to-br ${service.color} shadow-lg hover:scale-105 transition-transform`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm opacity-90">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link href="#contact">
            <button className="bg-foreground text-background px-6 py-3 rounded-full font-medium shadow-lg hover:bg-primary transition duration-300">
              Let’s Talk More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
