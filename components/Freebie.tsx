'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function Freebie() {
  const { theme } = useTheme()  // Access the theme here

  return (
    <section
      className={`relative py-20 overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black' : 'bg-gradient-to-r from-purple-600 via-pink-700 to-red-600'} text-white`}
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-0 left-1/4 transform -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/40 rounded-full blur-3xl opacity-50 animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
      />
      <motion.div
        className="absolute top-1/4 left-1/2 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl opacity-40 animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 1.2, type: "spring" }}
      />
      <motion.div
        className="absolute top-2/3 right-0 w-[600px] h-[600px] bg-green-500/30 rounded-full blur-3xl opacity-60 animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, duration: 1.5, type: "spring" }}
      />
      
      <div className="relative w-full px-4 max-w-screen-lg mx-auto">
        {/* Animated Title */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold mb-12 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          🎁 Grab Your <span className="text-yellow-300">Exclusive Freebie!</span>
        </motion.h2>

        {/* Main Content Block with Fade and Slide */}
        <motion.div
          className={`relative p-10 rounded-xl shadow-xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {/* Content with Sliding Effect */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h3 className={`text-3xl font-semibold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              🚀 Get Your Startup Checklist Now
            </h3>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Start your entrepreneurial journey with our ultimate checklist. From creating a compelling brand to crafting your perfect website, this freebie is your ultimate guide.
            </p>
          </motion.div>

          {/* Call to Action Button with Hover Effect */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.a
              href="#"
              className="bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-yellow-600"
              whileHover={{ scale: 1.1, boxShadow: '0px 4px 15px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Download Now
            </motion.a>
          </motion.div>

          {/* Rotating and Pulsing Icon */}
          <motion.div
            className="absolute right-4 bottom-8 p-6 bg-yellow-400 text-white rounded-full shadow-2xl"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12l5 5m0 0l5-5m-5 5V3"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Scroll Prompt */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-200 text-sm"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
        </motion.div>
      </div>

      {/* Floating Blob with Complex Movement */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-blue-300/20 rounded-full blur-3xl opacity-50 animate-pulse"
        animate={{
          x: ["0%", "30%", "0%", "-30%", "0%"],
          y: ["0%", "-30%", "0%", "30%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "easeInOut",
        }}
      />
    </section>
  )
}
