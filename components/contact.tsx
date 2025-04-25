"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from "@/app/actions/send-email"

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const { toast } = useToast()

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus("idle")

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Client-side validation
    if (!name || !email || !message) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    try {
      // In preview mode, we'll use the server action which simulates email sending
      // In production, this would actually send the email
      const result = await sendEmail({
        name,
        email,
        subject,
        message,
      })

      if (result.success) {
        setFormStatus("success")
        toast({
          title: "Message received!",
          description: "Thank you for your message. I'll get back to you soon.",
        })

        // Reset form
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        setFormStatus("error")
        toast({
          title: "Something went wrong",
          description: result.message || "Your message couldn't be sent. Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setFormStatus("error")
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleMailtoFallback(e: React.MouseEvent) {
    e.preventDefault()

    const nameInput = document.getElementById("name") as HTMLInputElement
    const emailInput = document.getElementById("email") as HTMLInputElement
    const subjectInput = document.getElementById("subject") as HTMLInputElement
    const messageInput = document.getElementById("message") as HTMLTextAreaElement

    const subject = subjectInput?.value ? encodeURIComponent(subjectInput.value) : "Portfolio Contact"
    const body = encodeURIComponent(
      `Name: ${nameInput?.value || "Not provided"}\n` +
        `Email: ${emailInput?.value || "Not provided"}\n\n` +
        `${messageInput?.value || "No message provided"}`,
    )

    window.location.href = `mailto:okevictor14@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" ref={ref} className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-foreground/70">
              Feel free to reach out if you have any questions or want to discuss a potential project. I'm always open
              to new opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-foreground/70">okevictor14@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-foreground/70">+234 903 598 6632</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">Oyo State, Ibadan</p>
                </div>
              </div>
            </div>

            {/* Preview mode notice */}
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
              <h4 className="font-medium text-amber-800 dark:text-amber-400 mb-2">Preview Mode Notice</h4>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                This is running in a preview environment where email sending is simulated. In production, emails will be
                sent to okevictor14@gmail.com.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/50 shadow-sm relative overflow-hidden"
            >
              {/* Success overlay */}
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-10"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                  <p className="text-center text-muted-foreground mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button variant="outline" onClick={() => setFormStatus("idle")}>
                    Send Another Message
                  </Button>
                </motion.div>
              )}

              {/* Error overlay */}
              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-10"
                >
                  <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Something went wrong</h3>
                  <p className="text-center text-muted-foreground mb-6">
                    Your message couldn't be sent. Please try again or contact me directly via email.
                  </p>
                  <Button variant="outline" onClick={() => setFormStatus("idle")}>
                    Try Again
                  </Button>
                </motion.div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="bg-background/50"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="bg-background/50"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="bg-background/50"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  className="bg-background/50"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              <div className="relative mt-6 pt-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-card px-2 text-xs text-muted-foreground">OR</span>
                </div>
              </div>

              <Button type="button" variant="outline" className="w-full mt-4" onClick={handleMailtoFallback}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Email Client
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
