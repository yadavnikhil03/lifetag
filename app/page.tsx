"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, QrCode, Heart, Lock } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const phoneRef = useRef(null)
  const featuresRef = useRef(null)
  const benefitsRef = useRef(null)
  const privacyRef = useRef(null)

  const { scrollYProgress: featuresScrollProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  })

  const { scrollYProgress: benefitsScrollProgress } = useScroll({
    target: benefitsRef,
    offset: ["start end", "end start"],
  })

  const { scrollYProgress: privacyScrollProgress } = useScroll({
    target: privacyRef,
    offset: ["start end", "end start"],
  })

  const phoneRotation = useTransform(featuresScrollProgress, [0, 0.5], [0, 5])
  const phoneScale = useTransform(featuresScrollProgress, [0, 0.3], [1, 1.05])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Emergency Information, Always Accessible
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  LifeTag generates QR codes with your vital emergency information. First responders can scan your tag
                  to instantly access life-saving details when every second counts.
                </p>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                >
                  <Link href="/signup">
                    <Button className="bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:scale-105 hover:shadow-md group">
                      Create Your LifeTag
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/how-it-works">
                    <Button variant="outline" className="transition-all duration-300 hover:scale-105">
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                ref={phoneRef}
                style={{
                  rotate: phoneRotation,
                  scale: phoneScale,
                }}
              >
                <div className="relative w-[300px] h-[600px] border-8 border-black rounded-[40px] overflow-hidden shadow-xl bg-black">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>

                  <div className="absolute inset-0 bg-gradient-to-b from-rose-100 to-rose-200 flex flex-col items-center justify-center p-6">
                    <AnimatePresence>
                      {isLoaded && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 1,
                          }}
                          className="relative"
                        >
                          <QrCode className="w-48 h-48 text-rose-500 mb-6" />
                          <motion.div
                            className="absolute inset-0"
                            animate={{
                              boxShadow: [
                                "0px 0px 0px rgba(244, 63, 94, 0)",
                                "0px 0px 20px rgba(244, 63, 94, 0.5)",
                                "0px 0px 0px rgba(244, 63, 94, 0)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <motion.div
                      className="text-center bg-white rounded-lg p-4 w-full shadow-md"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <h3 className="font-bold text-lg">Emergency Info</h3>
                      <p className="text-sm text-gray-600 mt-2">Scan this QR code for vital medical information</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section ref={featuresRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How LifeTag Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A simple solution that could save your life in an emergency situation
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-rose-500" />,
                  title: "Create Your Profile",
                  description:
                    "Enter your vital medical information, emergency contacts, and customize privacy settings.",
                },
                {
                  icon: <QrCode className="h-8 w-8 text-rose-500" />,
                  title: "Generate Your QR Code",
                  description:
                    "We create a unique QR code that links to your emergency information with customizable access levels.",
                },
                {
                  icon: <Heart className="h-8 w-8 text-rose-500" />,
                  title: "Stay Protected",
                  description:
                    "Print your QR code, set it as your lock screen, or order physical tags to keep with you at all times.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section ref={benefitsRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Who Benefits from LifeTag
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  LifeTag is designed for anyone who wants to ensure their critical information is available in an
                  emergency
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              {[
                {
                  image: "/placeholder.svg?height=100&width=100",
                  title: "Senior Citizens",
                  description: "Quick access to medical conditions, medications, and emergency contacts.",
                },
                {
                  image: "/placeholder.svg?height=100&width=100",
                  title: "Children",
                  description: "Parents can ensure kids have emergency contact information always available.",
                },
                {
                  image: "/placeholder.svg?height=100&width=100",
                  title: "Solo Travelers",
                  description: "Essential information available even when traveling in foreign countries.",
                },
                {
                  image: "/placeholder.svg?height=100&width=100",
                  title: "Chronic Conditions",
                  description: "Critical medical information instantly available to first responders.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.img
                    src={benefit.image}
                    alt={`${benefit.title} icon`}
                    className="rounded-full"
                    height="100"
                    width="100"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-sm text-gray-500">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section ref={privacyRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Privacy & Security
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Data, Your Control</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We take your privacy seriously. With LifeTag, you control exactly what information is visible and to
                  whom.
                </p>
                <ul className="grid gap-2">
                  {[
                    "Role-based access control for your information",
                    "Public vs. medical professional views",
                    "End-to-end encryption for sensitive data",
                    "No data sharing with third parties",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <Lock className="h-4 w-4 text-rose-500" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  className="relative w-full max-w-[400px] overflow-hidden rounded-xl border bg-white shadow-lg"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-rose-500" />
                        <h3 className="font-bold">Privacy Settings</h3>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Basic Information",
                          description: "Name, emergency contacts, blood type",
                          enabled: true,
                        },
                        {
                          name: "Medical Conditions",
                          description: "Visible only to medical professionals",
                          enabled: false,
                        },
                        { name: "Medications", description: "Visible only to medical professionals", enabled: false },
                        { name: "Location Tracking", description: "Disabled by default", enabled: false },
                      ].map((setting, index) => (
                        <motion.div
                          key={index}
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.15 * index }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{setting.name}</span>
                            <motion.div
                              className={cn(
                                "h-6 w-12 rounded-full cursor-pointer",
                                setting.enabled ? "bg-rose-500" : "bg-gray-200",
                              )}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div
                                className="h-5 w-5 bg-white rounded-full m-0.5"
                                initial={false}
                                animate={{ x: setting.enabled ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              />
                            </motion.div>
                          </div>
                          <p className="text-xs text-gray-500">{setting.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Create Your LifeTag?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of people who trust LifeTag with their emergency information
                </p>
              </div>
              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link href="/signup">
                  <Button className="bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:scale-105 hover:shadow-md group">
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
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

