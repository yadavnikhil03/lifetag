"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, LogOut, CreditCard, HelpCircle, Loader2, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    // Simulate loading user data
    const loadUserData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      } catch (error) {
        console.error("Error loading settings:", error)
        toast({
          title: "Error loading settings",
          description: "Please try refreshing the page.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadUserData()
  }, [])

  const handleSaveSettings = async () => {
    setIsSaving(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Settings saved",
        description: "Your settings have been updated successfully.",
      })
    } catch (error) {
      console.error("Error saving settings:", error)
      toast({
        title: "Error saving settings",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
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
              <p className="text-gray-500">Loading settings...</p>
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
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-gray-500">Manage your account settings and preferences</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="notifications">Notifications</TabsTrigger>
                      <TabsTrigger value="security">Security</TabsTrigger>
                      <TabsTrigger value="billing">Billing</TabsTrigger>
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
                      {activeTab === "account" && (
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Account Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" defaultValue="John Doe" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue="john.doe@example.com" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="username">Username</Label>
                              <Input id="username" defaultValue="johndoe" />
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Profile Preferences</h3>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="publicProfile">Public Profile</Label>
                                <Switch id="publicProfile" defaultChecked />
                              </div>
                              <p className="text-sm text-gray-500">
                                Allow others to see your public profile information
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="showEmail">Show Email</Label>
                                <Switch id="showEmail" />
                              </div>
                              <p className="text-sm text-gray-500">Display your email address on your public profile</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Language & Region</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="language">Language</Label>
                                <select
                                  id="language"
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  defaultValue="english"
                                >
                                  <option value="english">English</option>
                                  <option value="spanish">Spanish</option>
                                  <option value="french">French</option>
                                  <option value="german">German</option>
                                  <option value="chinese">Chinese</option>
                                </select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="timezone">Timezone</Label>
                                <select
                                  id="timezone"
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  defaultValue="pst"
                                >
                                  <option value="pst">Pacific Time (PST)</option>
                                  <option value="mst">Mountain Time (MST)</option>
                                  <option value="cst">Central Time (CST)</option>
                                  <option value="est">Eastern Time (EST)</option>
                                  <option value="utc">Universal Time (UTC)</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "notifications" && (
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Email Notifications</h3>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="emailUpdates">Product Updates</Label>
                                <Switch id="emailUpdates" defaultChecked />
                              </div>
                              <p className="text-sm text-gray-500">
                                Receive emails about new features and improvements
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="securityAlerts">Security Alerts</Label>
                                <Switch id="securityAlerts" defaultChecked />
                              </div>
                              <p className="text-sm text-gray-500">Get notified about important security updates</p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="accountActivity">Account Activity</Label>
                                <Switch id="accountActivity" defaultChecked />
                              </div>
                              <p className="text-sm text-gray-500">Receive notifications about your account activity</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Emergency Notifications</h3>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="qrCodeScans">QR Code Scans</Label>
                                <Switch id="qrCodeScans" defaultChecked />
                              </div>
                              <p className="text-sm text-gray-500">Get notified when your QR code is scanned</p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="emergencyContacts">Emergency Contact Notifications</Label>
                                <Switch id="emergencyContacts" defaultChecked />
                              </div>
                              <p className="text-sm text-gray-500">
                                Notify your emergency contacts when your QR code is scanned
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Marketing Preferences</h3>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="marketing">Marketing Emails</Label>
                                <Switch id="marketing" />
                              </div>
                              <p className="text-sm text-gray-500">Receive promotional emails and special offers</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "security" && (
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Password</h3>
                            <div className="space-y-2">
                              <Label htmlFor="currentPassword">Current Password</Label>
                              <Input id="currentPassword" type="password" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input id="newPassword" type="password" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <Input id="confirmPassword" type="password" />
                              </div>
                            </div>
                            <Button
                              className="bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:shadow-md"
                              onClick={() => {
                                toast({
                                  title: "Password updated",
                                  description: "Your password has been updated successfully.",
                                })
                              }}
                            >
                              Update Password
                            </Button>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="twoFactor">Enable Two-Factor Authentication</Label>
                                <Switch id="twoFactor" />
                              </div>
                              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                            </div>
                            <Button
                              variant="outline"
                              onClick={() => {
                                toast({
                                  title: "Two-factor authentication",
                                  description: "Setup wizard will guide you through the process.",
                                })
                              }}
                            >
                              Set Up Two-Factor Authentication
                            </Button>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Sessions</h3>
                            <div className="border rounded-lg p-4">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4 className="font-medium">Current Session</h4>
                                  <p className="text-sm text-gray-500">Chrome on Windows • IP: 192.168.1.1</p>
                                </div>
                                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</div>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              onClick={() => {
                                toast({
                                  title: "All sessions terminated",
                                  description: "You've been logged out from all other devices.",
                                })
                              }}
                            >
                              Log Out of All Other Sessions
                            </Button>
                          </div>
                        </div>
                      )}

                      {activeTab === "billing" && (
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Current Plan</h3>
                            <div className="bg-gray-50 rounded-lg p-4 border">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4 className="font-bold text-lg">Premium Plan</h4>
                                  <p className="text-sm text-gray-500">$9.99/month • Renews on May 15, 2025</p>
                                </div>
                                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</div>
                              </div>
                              <div className="mt-4 flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    toast({
                                      title: "Upgrade options",
                                      description: "Viewing available plan upgrades.",
                                    })
                                  }}
                                >
                                  Upgrade Plan
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => {
                                    toast({
                                      title: "Cancel subscription",
                                      description: "Please confirm your cancellation.",
                                    })
                                  }}
                                >
                                  Cancel Subscription
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Payment Method</h3>
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-4">
                                <div className="bg-gray-100 p-2 rounded">
                                  <CreditCard className="h-6 w-6 text-gray-500" />
                                </div>
                                <div>
                                  <h4 className="font-medium">Visa ending in 4242</h4>
                                  <p className="text-sm text-gray-500">Expires 12/2025</p>
                                </div>
                              </div>
                              <div className="mt-4 flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    toast({
                                      title: "Update payment method",
                                      description: "You can now update your payment details.",
                                    })
                                  }}
                                >
                                  Update
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    toast({
                                      title: "Add payment method",
                                      description: "You can now add a new payment method.",
                                    })
                                  }}
                                >
                                  Add New
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">Billing History</h3>
                            <div className="border rounded-lg">
                              <div className="grid grid-cols-4 gap-2 p-3 border-b bg-gray-50 font-medium text-sm">
                                <div>Date</div>
                                <div>Description</div>
                                <div>Amount</div>
                                <div className="text-right">Receipt</div>
                              </div>
                              <div className="p-3 border-b">
                                <div className="grid grid-cols-4 gap-2">
                                  <div className="text-sm">Apr 15, 2025</div>
                                  <div className="text-sm">Premium Plan - Monthly</div>
                                  <div className="text-sm">$9.99</div>
                                  <div className="text-right">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-7 text-rose-500"
                                      onClick={() => {
                                        toast({
                                          title: "Receipt downloaded",
                                          description: "Your receipt has been downloaded.",
                                        })
                                      }}
                                    >
                                      Download
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="p-3 border-b">
                                <div className="grid grid-cols-4 gap-2">
                                  <div className="text-sm">Mar 15, 2025</div>
                                  <div className="text-sm">Premium Plan - Monthly</div>
                                  <div className="text-sm">$9.99</div>
                                  <div className="text-right">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-7 text-rose-500"
                                      onClick={() => {
                                        toast({
                                          title: "Receipt downloaded",
                                          description: "Your receipt has been downloaded.",
                                        })
                                      }}
                                    >
                                      Download
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="p-3">
                                <div className="grid grid-cols-4 gap-2">
                                  <div className="text-sm">Feb 15, 2025</div>
                                  <div className="text-sm">Premium Plan - Monthly</div>
                                  <div className="text-sm">$9.99</div>
                                  <div className="text-right">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-7 text-rose-500"
                                      onClick={() => {
                                        toast({
                                          title: "Receipt downloaded",
                                          description: "Your receipt has been downloaded.",
                                        })
                                      }}
                                    >
                                      Download
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-end gap-2 mt-8">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" className="transition-all duration-300">
                        Cancel
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className="bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:shadow-md"
                        onClick={handleSaveSettings}
                        disabled={isSaving}
                      >
                        {isSaving ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          "Save Changes"
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Help & Support</CardTitle>
                  <CardDescription>Get help with your account and settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <div className="bg-rose-100 p-3 rounded-full">
                        <HelpCircle className="h-6 w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-bold">Help Center</h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Find answers to common questions in our help center.
                        </p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-rose-500"
                          onClick={() => {
                            toast({
                              title: "Help Center",
                              description: "Opening help center in a new tab.",
                            })
                          }}
                        >
                          Visit Help Center
                        </Button>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <div className="bg-rose-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-bold">Contact Support</h3>
                        <p className="text-sm text-gray-500 mb-2">Need more help? Our support team is here for you.</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-rose-500"
                          onClick={() => {
                            toast({
                              title: "Contact Support",
                              description: "Opening support contact form.",
                            })
                          }}
                        >
                          Contact Support
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  )
}

