"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { QrCode, Download, Printer, Phone, Loader2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "@/hooks/use-toast"

export function QrCodeGenerator() {
  const [qrType, setQrType] = useState("standard")
  const [accessLevel, setAccessLevel] = useState("public")
  const [outputFormat, setOutputFormat] = useState("print")
  const [isGenerating, setIsGenerating] = useState(false)
  const [qrGenerated, setQrGenerated] = useState(false)
  const qrRef = useRef(null)

  const handleGenerateQrCode = async () => {
    setIsGenerating(true)

    try {
      // Simulate API call to generate QR code
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setQrGenerated(true)
      toast({
        title: "QR Code Generated",
        description: "Your QR code has been generated successfully.",
      })
    } catch (error) {
      console.error("Error generating QR code:", error)
      toast({
        title: "Error generating QR code",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    toast({
      title: "QR Code Downloaded",
      description: "Your QR code has been downloaded successfully.",
    })
  }

  const handlePrint = () => {
    toast({
      title: "Preparing Print",
      description: "Your QR code is being prepared for printing.",
    })
  }

  const handleLockScreen = () => {
    toast({
      title: "Lock Screen Version Ready",
      description: "Your lock screen version is ready to download.",
    })
  }

  useEffect(() => {
    // Reset QR code when type or access level changes
    if (qrGenerated) {
      setQrGenerated(false)
    }
  }, [qrType, accessLevel, outputFormat])

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">QR Code Generator</h3>
        <p className="text-gray-500">
          Customize your LifeTag QR code and choose how your information will be displayed when scanned.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Label>QR Code Type</Label>
              <RadioGroup defaultValue="standard" value={qrType} onValueChange={setQrType}>
                {[
                  { value: "standard", label: "Standard QR Code" },
                  { value: "colored", label: "Colored QR Code" },
                  { value: "logo", label: "QR Code with Logo" },
                ].map((option, index) => (
                  <motion.div
                    key={option.value}
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="font-normal cursor-pointer">
                      {option.label}
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Label>Access Level</Label>
              <RadioGroup defaultValue="public" value={accessLevel} onValueChange={setAccessLevel}>
                {[
                  { value: "public", label: "Public (Basic info only)" },
                  { value: "limited", label: "Limited (Basic info + allergies)" },
                  { value: "medical", label: "Medical Professional (Full access)" },
                ].map((option) => (
                  <motion.div
                    key={option.value}
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="font-normal cursor-pointer">
                      {option.label}
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Label>Output Format</Label>
              <Tabs defaultValue="print" value={outputFormat} onValueChange={setOutputFormat}>
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="print">Print</TabsTrigger>
                  <TabsTrigger value="digital">Digital</TabsTrigger>
                  <TabsTrigger value="lockscreen">Lock Screen</TabsTrigger>
                </TabsList>
                <TabsContent value="print" className="space-y-2 pt-2">
                  <p className="text-sm text-gray-500">Optimized for printing on tags, cards, or stickers.</p>
                </TabsContent>
                <TabsContent value="digital" className="space-y-2 pt-2">
                  <p className="text-sm text-gray-500">Digital format for sharing electronically.</p>
                </TabsContent>
                <TabsContent value="lockscreen" className="space-y-2 pt-2">
                  <p className="text-sm text-gray-500">Formatted for your phone's lock screen.</p>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.div
              className="bg-gray-100 p-8 rounded-lg relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              ref={qrRef}
            >
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-48 w-48"
                  >
                    <Loader2 className="h-12 w-12 animate-spin text-rose-500" />
                    <p className="mt-2 text-sm text-gray-500">Generating...</p>
                  </motion.div>
                ) : qrGenerated ? (
                  <motion.div
                    key="qrcode"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <QrCode className={`h-48 w-48 ${qrType === "colored" ? "text-rose-500" : "text-black"}`} />
                    {qrType === "logo" && (
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <QrCode className="h-8 w-8 text-rose-500" />
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-48 w-48 border-2 border-dashed border-gray-300 rounded-lg"
                  >
                    <QrCode className="h-12 w-12 text-gray-300" />
                    <p className="mt-2 text-sm text-gray-500">QR code preview</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className="flex gap-2">
              {qrGenerated ? (
                <>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="flex items-center gap-1 transition-all duration-300 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200"
                      onClick={handleDownload}
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="flex items-center gap-1 transition-all duration-300 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200"
                      onClick={handlePrint}
                    >
                      <Printer className="h-4 w-4" />
                      Print
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="flex items-center gap-1 transition-all duration-300 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200"
                      onClick={handleLockScreen}
                    >
                      <Phone className="h-4 w-4" />
                      Lock Screen
                    </Button>
                  </motion.div>
                </>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                  <Button
                    className="w-full bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:shadow-md"
                    onClick={handleGenerateQrCode}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <QrCode className="mr-2 h-4 w-4" />
                        Generate QR Code
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <h3 className="text-lg font-medium">QR Code Security</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="enablePassword" className="cursor-pointer">
                Enable password protection for sensitive information
              </Label>
              <p className="text-sm text-gray-500">
                When enabled, medical professionals will need to enter a PIN to access your full medical information.
              </p>
            </div>
            <motion.div
              className="h-6 w-12 rounded-full bg-gray-200 flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                toast({
                  title: "Setting Updated",
                  description: "Password protection has been enabled.",
                })
              }}
            >
              <motion.div
                className="h-5 w-5 bg-white rounded-full m-0.5"
                initial={{ x: 0 }}
                whileHover={{ x: 24 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="enableExpiry" className="cursor-pointer">
                Enable QR code expiration
              </Label>
              <p className="text-sm text-gray-500">
                When enabled, your QR code will expire after a set period and will need to be regenerated.
              </p>
            </div>
            <motion.div
              className="h-6 w-12 rounded-full bg-gray-200 flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                toast({
                  title: "Setting Updated",
                  description: "QR code expiration has been enabled.",
                })
              }}
            >
              <motion.div
                className="h-5 w-5 bg-white rounded-full m-0.5"
                initial={{ x: 0 }}
                whileHover={{ x: 24 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-end gap-2">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="transition-all duration-300">
            Cancel
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:shadow-md"
            onClick={() => {
              if (!qrGenerated) {
                handleGenerateQrCode()
              } else {
                toast({
                  title: "QR Code Saved",
                  description: "Your QR code settings have been saved.",
                })
              }
            }}
          >
            {qrGenerated ? "Save Settings" : "Generate QR Code"}
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

