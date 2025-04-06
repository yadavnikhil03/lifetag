"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { QrCode, ArrowRight, Shield, Lock, Smartphone, Bell, Users, Map, Settings, Heart } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
              <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500 mb-4">Features</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Everything You Need for Emergency Preparedness
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                LifeTag offers a comprehensive suite of features designed to keep your critical information accessible
                when it matters most.
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
            <motion.div
              className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Core Feature</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">QR Code Technology</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Our QR code technology is at the heart of LifeTag, providing instant access to your critical
                  information when scanned by first responders or medical professionals.
                </p>
                <ul className="space-y-2">
                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Shield className="h-5 w-5 text-rose-500" />
                    <span>Secure, encrypted QR codes</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Shield className="h-5 w-5 text-rose-500" />
                    <span>Multiple design options</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Shield className="h-5 w-5 text-rose-500" />
                    <span>Print, digital, and lock screen formats</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Shield className="h-5 w-5 text-rose-500" />
                    <span>No app required to scan</span>
                  </motion.li>
                </ul>
              </div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative mx-auto w-[300px] h-[600px] border-8 border-black rounded-[40px] overflow-hidden shadow-xl bg-black">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>

                  <div className="absolute inset-0 bg-gradient-to-b from-rose-100 to-rose-200 flex flex-col items-center justify-center p-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3,
                      }}
                      viewport={{ once: true }}
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
                    <motion.div
                      className="text-center bg-white rounded-lg p-4 w-full shadow-md"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="font-bold text-lg">Emergency Info</h3>
                      <p className="text-sm text-gray-600 mt-2">Scan this QR code for vital medical information</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                Discover the powerful features that make LifeTag the leading emergency information solution.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Lock className="h-10 w-10 text-rose-500" />,
                  title: "Privacy Controls",
                  description:
                    "Control exactly what information is visible and to whom with our granular privacy settings.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-rose-500" />,
                  title: "Mobile Optimization",
                  description: "Access your LifeTag dashboard from any device with our responsive web application.",
                },
                {
                  icon: <Bell className="h-10 w-10 text-rose-500" />,
                  title: "Emergency Notifications",
                  description: "Set up automatic notifications to emergency contacts when your QR code is scanned.",
                },
                {
                  icon: <Users className="h-10 w-10 text-rose-500" />,
                  title: "Family Accounts",
                  description: "Manage multiple profiles for your entire family under a single account.",
                },
                {
                  icon: <Map className="h-10 w-10 text-rose-500" />,
                  title: "Nearby Facilities",
                  description: "Show nearby medical facilities to emergency responders when your QR code is scanned.",
                },
                {
                  icon: <Settings className="h-10 w-10 text-rose-500" />,
                  title: "Customization",
                  description: "Customize your QR code appearance and the information displayed when scanned.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="p-3 bg-rose-50 rounded-full mb-4 inline-block">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-4 order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Medical Information
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive Health Profile</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Store all your critical medical information in one secure place, ensuring first responders have what
                  they need in an emergency.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Medical conditions",
                    "Medications & dosages",
                    "Allergies & reactions",
                    "Blood type",
                    "Emergency contacts",
                    "Insurance information",
                    "Primary physician",
                    "Medical notes",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <Heart className="h-5 w-5 text-rose-500 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-rose-500 text-white p-4">
                      <h3 className="text-xl font-bold">Medical Profile</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Personal Information</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Name:</span>
                            <span className="font-medium">John Doe</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Age:</span>
                            <span className="font-medium">42</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Blood Type:</span>
                            <span className="font-medium">O+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Weight:</span>
                            <span className="font-medium">180 lbs</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Medical Conditions</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full">
                            Type 2 Diabetes
                          </span>
                          <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full">Hypertension</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Allergies</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Peanuts</span>
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Penicillin</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Medications</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            Lisinopril 10mg
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            Metformin 500mg
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-rose-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Experience LifeTag?
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
                <Link href="/pricing">
                  <Button variant="outline" className="transition-all duration-300 hover:scale-105">
                    View Pricing
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

