"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { QrCode, ArrowRight, Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", formData)

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50 bg-white/80 backdrop-blur-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link className="flex items-center justify-center" href="/">
          <QrCode className="h-6 w-6 text-rose-500" />
          <span className="ml-2 text-xl font-bold">LifeTag</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition-all" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition-all" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition-all" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition-all" href="/contact">
            Contact
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="sm"
              className="bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </motion.header>

      <main className="flex-1">
        <motion.section
          className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
          style={{ opacity, scale }}
        >
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              className="flex flex-col items-center text-center space-y-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500 mb-4">Contact Us</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Get in Touch</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </motion.div>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-rose-50 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-rose-50 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </motion.section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Information</h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Reach out to us through any of these channels, and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      icon: <Mail className="h-6 w-6 text-rose-500" />,
                      title: "Email",
                      content: "support@lifetag.com",
                      link: "mailto:support@lifetag.com",
                    },
                    {
                      icon: <Phone className="h-6 w-6 text-rose-500" />,
                      title: "Phone",
                      content: "(555) 123-4567",
                      link: "tel:5551234567",
                    },
                    {
                      icon: <MapPin className="h-6 w-6 text-rose-500" />,
                      title: "Address",
                      content: "123 Innovation Way, Tech City, CA 94043",
                      link: "https://maps.google.com",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-rose-100 p-3 rounded-full">{item.icon}</div>
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <motion.a
                          href={item.link}
                          className="text-gray-500 hover:text-rose-500 transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {item.content}
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Office Hours</h3>
                  <p className="text-gray-500">
                    Monday - Friday: 9:00 AM - 6:00 PM (PST)
                    <br />
                    Saturday: 10:00 AM - 2:00 PM (PST)
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="transition-all duration-300 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="transition-all duration-300 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help you?"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="transition-all duration-300 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message..."
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="transition-all duration-300 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button
                          type="submit"
                          className="w-full bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:shadow-md"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center text-center space-y-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">Find quick answers to common questions.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  question: "How quickly will I receive a response?",
                  answer: "We aim to respond to all inquiries within 24 hours during business days.",
                },
                {
                  question: "Do you offer technical support?",
                  answer: "Yes, our technical support team is available Monday through Friday from 9 AM to 6 PM (PST).",
                },
                {
                  question: "Can I schedule a demo?",
                  answer: "You can request a demo through our contact form or by emailing sales@lifetag.com.",
                },
                {
                  question: "How do I report a bug or issue?",
                  answer:
                    "Please use our contact form and select 'Technical Issue' as the subject. Include as much detail as possible about the problem you're experiencing.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-500">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <motion.footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-xs text-gray-500">© 2025 LifeTag. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 transition-all" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 transition-all" href="/privacy">
            Privacy
          </Link>
        </nav>
      </motion.footer>
    </div>
  )
}

