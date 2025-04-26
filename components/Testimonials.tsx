'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sparkles, MoonIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Samuel Okwuosa',
    role: 'Frontend Developer',
    company: 'Creativize Tech',
    image: '/client1.jpg',
    review: "Samuel is hands-down one of the best frontend developers I've worked with. His expertise made our site not only look great but perform flawlessly across devices.",
    stars: 5,
  },
  {
    name: 'Linda Ruiz',
    role: 'Co-Founder',
    company: 'PixelSpark Creative Studio',
    image: '/client2.jpg',
    review: "Emmanuel is incredibly talented. He consistently delivers pixel-perfect designs and smooth user experiences. I appreciate his eye for innovation.",
    stars: 5,
  },
  {
    name: 'Michael Ade',
    role: 'CTO',
    company: 'NextGen Solutions',
    image: '/client3.jpg',
    review: "Victor brought our tech dreams to life with so much excellence. I was amazed at the details, performance, and design quality he delivered.",
    stars: 5,
  },
  {
    name: 'Sarah Bassey',
    role: 'Founder',
    company: 'DesignHut',
    image: '/client4.jpg',
    review: "Working with Victor was a dream! He understood our brand perfectly and delivered beyond expectations.",
    stars: 5,
  },
]

export default function Testimonials() {
  const { theme, setTheme } = useTheme()

  return (
    <section className={`relative py-20 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'} text-white overflow-hidden`}>
      {/* Blurred colorful background */}
      <div className="absolute inset-0">
        {/* Animated moving blobs */}
        <motion.div
          className={`absolute top-1/3 left-1/4 w-[400px] h-[400px] ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'} rounded-full blur-3xl opacity-30`}
          animate={{
            x: ['0%', '50%', '0%', '-50%', '0%'], // Moves horizontally
            y: ['0%', '50%', '0%', '-50%', '0%'], // Moves vertically
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          }}
        />
        <motion.div
          className={`absolute top-2/4 right-1/4 w-[300px] h-[300px] ${theme === 'dark' ? 'bg-pink-500' : 'bg-pink-300'} rounded-full blur-3xl opacity-30`}
          animate={{
            x: ['0%', '-50%', '0%', '50%', '0%'], // Moves horizontally in opposite direction
            y: ['0%', '-50%', '0%', '50%', '0%'], // Moves vertically in opposite direction
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative w-full px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 text-black dark:text-white">
          What My <span className="text-purple-500">Clients</span> Say
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            }}
          >
            {[...testimonials, ...testimonials].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.05 }}
                className="min-w-[400px] max-w-[400px] bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-zinc-700 shadow-2xl flex-shrink-0 cursor-pointer"
                animate={{
                  y: [0, -10, 0, 10, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center mb-6 space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-400">
                      {item.role} @ <span className="text-purple-500">{item.company}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-base">{item.review}</p>
                <div className="flex">
                  {Array.from({ length: item.stars }).map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
