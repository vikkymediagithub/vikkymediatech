// pages/blog/contact-form-validation.tsx

import { motion } from 'framer-motion'

export default function ContactFormValidation() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How I Built My Contact Form with Validation
      </motion.h1>

      <motion.div
        className="prose lg:prose-xl mx-auto text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p>This is a detailed post about how I created a contact form using React, Formik, and Yup for client-side validation...</p>
        <p>Here’s a step-by-step guide:</p>
        <ul>
          <li>Step 1: Setting up Formik...</li>
          <li>Step 2: Adding Validation with Yup...</li>
          <li>Step 3: Styling with Tailwind CSS...</li>
        </ul>
      </motion.div>
    </div>
  )
}
