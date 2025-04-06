"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, ArrowLeft, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "@/hooks/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    const newErrors = {}
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.password) newErrors.password = "Password is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // If validation passes, proceed with login
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would call an API here
      console.log("Login form submitted:", formData)

      toast({
        title: "Login successful!",
        description: "Welcome back to LifeTag.",
      })

      // Redirect to dashboard after successful login
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      className="flex min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center border-b"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link className="flex items-center justify-center" href="/">
          <QrCode className="h-6 w-6 text-rose-500" />
          <span className="ml-2 text-xl font-bold">LifeTag</span>
        </Link>
      </motion.header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">Log in to your account</CardTitle>
              <CardDescription>Enter your credentials to access your LifeTag dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.email && (
                    <motion.p
                      className="text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.password && (
                    <motion.p
                      className="text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <motion.input
                      whileTap={{ scale: 0.9 }}
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 rounded border-gray-300 text-rose-500 focus:ring-rose-500"
                    />
                    <Label htmlFor="remember" className="text-sm font-normal">
                      Remember me
                    </Label>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/forgot-password" className="text-sm text-rose-500 hover:underline transition-all">
                      Forgot password?
                    </Link>
                  </motion.div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:shadow-md"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Log In"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-2">
              <div className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link href="/signup" className="text-rose-500 hover:underline transition-all">
                  Sign up
                </Link>
              </div>
              <Link href="/" className="text-sm text-gray-500 flex items-center hover:underline group transition-all">
                <ArrowLeft className="mr-1 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to home
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
    </motion.div>
  )
}

