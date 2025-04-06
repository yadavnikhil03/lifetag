"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { QrCode, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function PrivacyPage() {
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
          className="relative w-full py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
          style={{ opacity, scale }}
        >
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">Last updated: April 1, 2025</p>
            </motion.div>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-rose-50 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-rose-50 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </motion.section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl">
            <motion.div
              className="prose prose-gray max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2>1. Introduction</h2>
              <p>
                At LifeTag, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you use our website, products, and services ("Services"). Please
                read this Privacy Policy carefully. By using our Services, you consent to the practices described in
                this policy.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our Services:</p>
              <h3>Personal Information</h3>
              <p>
                This includes information that can be used to identify you, such as your name, email address, postal
                address, phone number, and date of birth.
              </p>
              <h3>Medical Information</h3>
              <p>
                This includes health-related information that you choose to provide, such as medical conditions,
                allergies, medications, blood type, and emergency contact information.
              </p>
              <h3>Usage Information</h3>
              <p>
                This includes information about how you use our Services, such as the pages you visit, the time and
                duration of your visits, and the actions you take while using our Services.
              </p>
              <h3>Device Information</h3>
              <p>
                This includes information about the device you use to access our Services, such as your device type,
                operating system, browser type, and IP address.
              </p>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing, maintaining, and improving our Services</li>
                <li>Processing transactions and sending related information</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Sending you technical notices, updates, security alerts, and support messages</li>
                <li>Monitoring and analyzing trends, usage, and activities in connection with our Services</li>
                <li>Detecting, preventing, and addressing technical issues</li>
                <li>Protecting the safety and security of our users and Services</li>
              </ul>

              <h2>4. How We Share Your Information</h2>
              <p>We may share your information in the following circumstances:</p>
              <h3>With Your Consent</h3>
              <p>
                We may share your information when you give us permission to do so, such as when you choose to make
                certain information available through your QR code.
              </p>
              <h3>With Service Providers</h3>
              <p>
                We may share your information with third-party vendors, consultants, and other service providers who
                need access to your information to perform services on our behalf.
              </p>
              <h3>For Legal Reasons</h3>
              <p>
                We may share your information if we believe disclosure is necessary or appropriate to comply with laws,
                regulations, legal processes, or governmental requests.
              </p>
              <h3>In Connection with a Business Transaction</h3>
              <p>
                We may share your information in connection with a merger, sale of company assets, financing, or
                acquisition of all or a portion of our business to another company.
              </p>

              <h2>5. Your Choices</h2>
              <p>You have several choices regarding the information you provide to us:</p>
              <h3>Account Information</h3>
              <p>
                You can update your account information at any time by logging into your account and accessing your
                profile settings.
              </p>
              <h3>Privacy Settings</h3>
              <p>
                You can control what information is visible to others through your privacy settings. You can choose to
                make certain information available only to medical professionals or keep it completely private.
              </p>
              <h3>Marketing Communications</h3>
              <p>
                You can opt out of receiving marketing communications from us by following the unsubscribe instructions
                included in these communications.
              </p>
              <h3>Cookies</h3>
              <p>
                Most web browsers are set to accept cookies by default. You can usually choose to set your browser to
                remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could
                affect the availability and functionality of our Services.
              </p>

              <h2>6. Data Security</h2>
              <p>
                We take reasonable measures to help protect your personal information from loss, theft, misuse,
                unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over
                the Internet or method of electronic storage is 100% secure. Therefore, while we strive to use
                commercially acceptable means to protect your personal information, we cannot guarantee its absolute
                security.
              </p>

              <h2>7. Children's Privacy</h2>
              <p>
                Our Services are not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and you believe your child has
                provided us with personal information, please contact us. If we become aware that we have collected
                personal information from a child under 13 without verification of parental consent, we will take steps
                to remove that information from our servers.
              </p>

              <h2>8. International Data Transfers</h2>
              <p>
                Your information may be transferred to, and maintained on, computers located outside of your state,
                province, country, or other governmental jurisdiction where the data protection laws may differ from
                those in your jurisdiction. If you are located outside the United States and choose to provide
                information to us, please note that we transfer the information to the United States and process it
                there.
              </p>

              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy. You
                are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2>10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@lifetag.com.</p>
            </motion.div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Privacy Matters to Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  If you have questions about our privacy practices, we're here to help
                </p>
              </div>
              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link href="/contact">
                  <Button className="bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:scale-105 hover:shadow-md group">
                    Contact Our Privacy Team
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

