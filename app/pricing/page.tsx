"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { QrCode, ArrowRight, Check, X } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [billingCycle, setBillingCycle] = useState("monthly")
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const plans = [
    {
      name: "Basic",
      description: "Essential features for individuals",
      price: billingCycle === "monthly" ? "$4.99" : "$49.99",
      period: billingCycle === "monthly" ? "month" : "year",
      savings: billingCycle === "yearly" ? "Save $9.89" : null,
      features: [
        "1 QR code",
        "Basic medical information",
        "Emergency contacts",
        "Print & digital formats",
        "Basic privacy controls",
      ],
      notIncluded: ["Family accounts", "Custom QR designs", "Emergency notifications", "Medical professional access"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      description: "Complete protection for individuals",
      price: billingCycle === "monthly" ? "$9.99" : "$99.99",
      period: billingCycle === "monthly" ? "month" : "year",
      savings: billingCycle === "yearly" ? "Save $19.89" : null,
      features: [
        "3 QR codes",
        "Comprehensive medical profile",
        "Emergency contacts",
        "Print, digital & physical formats",
        "Advanced privacy controls",
        "Custom QR designs",
        "Emergency notifications",
        "Medical professional access",
      ],
      notIncluded: ["Family accounts"],
      cta: "Get Premium",
      popular: true,
    },
    {
      name: "Family",
      description: "Protection for the whole family",
      price: billingCycle === "monthly" ? "$19.99" : "$199.99",
      period: billingCycle === "monthly" ? "month" : "year",
      savings: billingCycle === "yearly" ? "Save $39.89" : null,
      features: [
        "Up to 6 family members",
        "Unlimited QR codes",
        "Comprehensive medical profiles",
        "Emergency contacts",
        "All available formats",
        "Advanced privacy controls",
        "Custom QR designs",
        "Emergency notifications",
        "Medical professional access",
        "Family dashboard",
      ],
      notIncluded: [],
      cta: "Get Family Plan",
      popular: false,
    },
  ]

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
              <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500 mb-4">Pricing</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Choose the plan that's right for you and your loved ones.
              </p>

              <motion.div
                className="bg-gray-100 p-1 rounded-full mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center">
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      billingCycle === "monthly"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setBillingCycle("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      billingCycle === "yearly"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setBillingCycle("yearly")}
                  >
                    Yearly <span className="text-rose-500 font-medium">Save 20%</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-rose-50 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-rose-50 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </motion.section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex"
                >
                  <Card className={`flex flex-col w-full ${plan.popular ? "border-rose-200 shadow-lg relative" : ""}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-0 right-0 flex justify-center">
                        <span className="bg-rose-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-500">/{plan.period}</span>
                        {plan.savings && <div className="mt-1 text-sm text-rose-500 font-medium">{plan.savings}</div>}
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-500">What's included:</h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 * i }}
                              viewport={{ once: true }}
                            >
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {plan.notIncluded.length > 0 && (
                          <>
                            <h4 className="text-sm font-medium text-gray-500 pt-2">Not included:</h4>
                            <ul className="space-y-2">
                              {plan.notIncluded.map((feature, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-start gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.1 * i }}
                                  viewport={{ once: true }}
                                >
                                  <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-500">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <motion.div className="w-full" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link href="/signup" className="w-full">
                          <Button className={`w-full ${plan.popular ? "bg-rose-500 hover:bg-rose-600" : ""}`}>
                            {plan.cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
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
              <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                Find answers to common questions about LifeTag and our pricing plans.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  question: "Can I change plans later?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle.",
                },
                {
                  question: "Is there a free trial?",
                  answer:
                    "We offer a 14-day free trial for all our plans. No credit card required to start your trial.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and Apple Pay.",
                },
                {
                  question: "Can I cancel my subscription?",
                  answer:
                    "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.",
                },
                {
                  question: "What happens to my data if I cancel?",
                  answer:
                    "Your data will be securely stored for 30 days after cancellation. You can reactivate your account during this period. After 30 days, your data will be permanently deleted.",
                },
                {
                  question: "Do you offer discounts for non-profits or healthcare organizations?",
                  answer:
                    "Yes, we offer special pricing for non-profits, healthcare organizations, and educational institutions. Please contact our sales team for more information.",
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
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
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="transition-all duration-300 hover:scale-105">
                    Contact Sales
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

