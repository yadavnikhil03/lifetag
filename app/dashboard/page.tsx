"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, LogOut, Download, Printer, Phone, Tag, Loader2 } from "lucide-react"
import { UserProfile } from "@/components/user-profile"
import { QrCodeGenerator } from "@/components/qr-code-generator"
import { EmergencyContacts } from "@/components/emergency-contacts"
import { MedicalInfo } from "@/components/medical-info"
import { PrivacySettings } from "@/components/privacy-settings"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Simulate loading user data
    const loadUserData = async () => {
      try {
        // In a real app, you would fetch user data from an API
        await new Promise((resolve) => setTimeout(resolve, 1200))

        setUserData({
          name: "John Doe",
          id: "12345678",
          bloodType: "O Positive",
          age: 42,
          gender: "Male",
          criticalInfo: "Severe peanut allergy, requires EpiPen",
          emergencyContacts: [
            { id: 1, name: "Jane Doe", relationship: "Spouse", phone: "(555) 123-4567", email: "jane.doe@example.com" },
            {
              id: 2,
              name: "Dr. Smith",
              relationship: "Primary Physician",
              phone: "(555) 987-6543",
              email: "dr.smith@example.com",
            },
          ],
        })
      } catch (error) {
        console.error("Error loading user data:", error)
        toast({
          title: "Error loading data",
          description: "Please try refreshing the page.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadUserData()
  }, [])

  const handleGenerateQrCode = () => {
    toast({
      title: "Generating QR Code",
      description: "Your new QR code is being generated.",
    })
    setActiveTab("qrcode")
  }

  const handleDownloadQrCode = () => {
    toast({
      title: "QR Code Downloaded",
      description: "Your QR code has been downloaded successfully.",
    })
  }

  const handlePrintTag = () => {
    toast({
      title: "Preparing Print",
      description: "Your tag is being prepared for printing.",
    })
  }

  const handleLockScreenVersion = () => {
    toast({
      title: "Lock Screen Version Ready",
      description: "Your lock screen version is ready to download.",
    })
  }

  const handleOrderTags = () => {
    toast({
      title: "Redirecting to Order Page",
      description: "You'll be redirected to our tag ordering page.",
    })
  }

  return (
    <motion.div
      className="flex min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50 bg-white/80 backdrop-blur-sm"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link className="flex items-center justify-center" href="/">
          <QrCode className="h-6 w-6 text-rose-500" />
          <span className="ml-2 text-xl font-bold">LifeTag</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/settings">Settings</Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 group"
            onClick={() => {
              toast({
                title: "Logged out",
                description: "You have been logged out successfully.",
              })
            }}
          >
            <LogOut className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span>Logout</span>
          </Button>
        </nav>
      </motion.header>
      <main className="flex-1 py-6 px-4 md:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex items-center justify-center h-[80vh]">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-rose-500" />
              <p className="text-gray-500">Loading your dashboard...</p>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-6xl space-y-6">
            <motion.div
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-gray-500">Manage your emergency information and QR codes</p>
              </div>
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:shadow-md group"
                    onClick={handleGenerateQrCode}
                  >
                    <QrCode className="mr-2 h-4 w-4" />
                    Generate New QR Code
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="col-span-1 h-full">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Manage your LifeTag</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        icon: <Download className="mr-2 h-4 w-4" />,
                        text: "Download QR Code",
                        action: handleDownloadQrCode,
                      },
                      { icon: <Printer className="mr-2 h-4 w-4" />, text: "Print Tag", action: handlePrintTag },
                      {
                        icon: <Phone className="mr-2 h-4 w-4" />,
                        text: "Lock Screen Version",
                        action: handleLockScreenVersion,
                      },
                      { icon: <Tag className="mr-2 h-4 w-4" />, text: "Order Physical Tags", action: handleOrderTags },
                    ].map((action, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="outline"
                          className="w-full justify-start transition-all duration-300 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 group"
                          onClick={action.action}
                        >
                          <motion.span
                            className="inline-flex items-center"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {action.icon}
                            {action.text}
                          </motion.span>
                        </Button>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-1 md:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="grid grid-cols-5 w-full">
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="medical">Medical</TabsTrigger>
                        <TabsTrigger value="contacts">Contacts</TabsTrigger>
                        <TabsTrigger value="qrcode">QR Code</TabsTrigger>
                        <TabsTrigger value="privacy">Privacy</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </CardHeader>
                  <CardContent>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {activeTab === "profile" && <UserProfile />}
                        {activeTab === "medical" && <MedicalInfo />}
                        {activeTab === "contacts" && <EmergencyContacts />}
                        {activeTab === "qrcode" && <QrCodeGenerator />}
                        {activeTab === "privacy" && <PrivacySettings />}
                      </motion.div>
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Your LifeTag Preview</CardTitle>
                  <CardDescription>This is how your emergency information will appear when scanned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-6 space-y-4">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <div className="bg-rose-100 p-4 rounded-lg">
                          <QrCode className="h-32 w-32 text-rose-500" />
                        </div>
                      </motion.div>
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="text-xl font-bold">{userData.name}</h3>
                          <p className="text-gray-500">ID: LT-{userData.id}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-900">Basic Information</h4>
                            <ul className="mt-2 space-y-1 text-sm">
                              <li className="flex">
                                <span className="font-medium w-24">Blood Type:</span>
                                <span>{userData.bloodType}</span>
                              </li>
                              <li className="flex">
                                <span className="font-medium w-24">Age:</span>
                                <span>{userData.age}</span>
                              </li>
                              <li className="flex">
                                <span className="font-medium w-24">Gender:</span>
                                <span>{userData.gender}</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Emergency Contacts</h4>
                            <ul className="mt-2 space-y-1 text-sm">
                              {userData.emergencyContacts.map((contact, index) => (
                                <li key={index}>
                                  {contact.name}: {contact.phone}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Medical Alert</h4>
                          <p className="mt-1 text-sm text-red-500">{userData.criticalInfo}</p>
                        </div>
                        <div className="pt-2">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="transition-all duration-300 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200"
                            >
                              View Full Medical Information
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}
      </main>
    </motion.div>
  )
}

