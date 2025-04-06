"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { QrCode, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function TermsPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
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
                Welcome to LifeTag. These Terms of Service ("Terms") govern your use of our website, products, and
                services ("Services"). By using our Services, you agree to these Terms. If you do not agree to these
                Terms, please do not use our Services.
              </p>

              <h2>2. Use of Services</h2>
              <p>
                LifeTag provides a platform for users to create and manage QR codes containing emergency medical
                information. You are responsible for maintaining the confidentiality of your account information and for
                all activities that occur under your account.
              </p>
              <p>
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not
                to use our Services:
              </p>
              <ul>
                <li>
                  In any way that violates any applicable federal, state, local, or international law or regulation
                </li>
                <li>
                  To impersonate or attempt to impersonate LifeTag, a LifeTag employee, another user, or any other
                  person or entity
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services
                </li>
              </ul>

              <h2>3. User Content</h2>
              <p>
                Our Services allow you to store, share, and manage your personal medical information. You retain all
                rights to your content, but you grant LifeTag a worldwide, non-exclusive, royalty-free license to use,
                reproduce, modify, and display your content solely for the purpose of providing the Services to you.
              </p>
              <p>
                You are solely responsible for the accuracy and completeness of the information you provide. LifeTag
                does not verify the accuracy of user-provided information and disclaims any liability arising from
                inaccurate or incomplete information.
              </p>

              <h2>4. Privacy</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy describes how we collect, use, and share your
                personal information. By using our Services, you agree to our Privacy Policy.
              </p>

              <h2>5. Subscription and Billing</h2>
              <p>
                Some of our Services require payment of fees. You agree to pay all fees associated with your
                subscription plan. Fees are non-refundable except as required by law or as explicitly stated in these
                Terms.
              </p>
              <p>
                Subscriptions automatically renew unless canceled before the renewal date. You can cancel your
                subscription at any time through your account settings.
              </p>

              <h2>6. Termination</h2>
              <p>
                We may terminate or suspend your account and access to our Services at our sole discretion, without
                notice, for conduct that we believe violates these Terms or is harmful to other users of our Services,
                us, or third parties, or for any other reason.
              </p>

              <h2>7. Disclaimer of Warranties</h2>
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED,
                OR THAT OUR SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL
                COMPONENTS.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                IN NO EVENT WILL LIFETAG, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS,
                OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
                CONNECTION WITH YOUR USE, OR INABILITY TO USE, OUR SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
                INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>

              <h2>9. Changes to Terms</h2>
              <p>
                We may revise these Terms at any time by updating this page. Your continued use of our Services after
                any changes to these Terms constitutes your acceptance of the new Terms.
              </p>

              <h2>10. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at legal@lifetag.com.</p>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Have Questions About Our Terms?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our support team is here to help you understand our policies
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
                    Contact Support
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

