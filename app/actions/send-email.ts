"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(5, "Message is too short"),
})

type FormData = z.infer<typeof formSchema>

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // In a preview environment, we'll simulate success
    // In production, you would use nodemailer or another email service

    console.log("Email would be sent with the following data:", {
      to: "okevictor14@gmail.com",
      from: validatedData.email,
      subject: validatedData.subject || "New contact form submission",
      name: validatedData.name,
      message: validatedData.message,
    })

    // For preview/development, we'll just return success
    // In production, this would actually send the email
    return { success: true, message: "Email simulation successful" }

    /* 
    // PRODUCTION CODE (uncomment when deploying to production)
    // This code would be used in a real production environment
    
    import nodemailer from "nodemailer"
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "okevictor14@gmail.com",
      replyTo: validatedData.email,
      subject: `Portfolio Contact: ${validatedData.subject || "New message"}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject || "N/A"}

Message:
${validatedData.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${validatedData.name}</p>
  <p><strong>Email:</strong> ${validatedData.email}</p>
  <p><strong>Subject:</strong> ${validatedData.subject || "N/A"}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #8b5cf6; border-radius: 4px;">
    <p><strong>Message:</strong></p>
    <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
  </div>
</div>
      `,
    }

    await transporter.sendMail(mailOptions)
    */
  } catch (error) {
    console.error("Error processing form:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => ({ path: e.path.join("."), message: e.message })),
      }
    }

    return {
      success: false,
      message: `Failed to process form: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}
