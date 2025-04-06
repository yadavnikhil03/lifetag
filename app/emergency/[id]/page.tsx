"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, Phone, MapPin, Hospital, AlertTriangle, Lock } from "lucide-react"

export default function EmergencyInfoPage({ params }) {
  const { id } = params
  const [accessLevel, setAccessLevel] = useState("public")
  const [showPinModal, setShowPinModal] = useState(false)

  // In a real app, you would fetch the user's data based on the ID
  const userData = {
    id: id,
    name: "John Doe",
    age: 42,
    gender: "Male",
    bloodType: "O Positive",
    criticalInfo: "Severe peanut allergy, requires EpiPen",
    emergencyContacts: [
      { name: "Jane Doe", relationship: "Spouse", phone: "(555) 123-4567" },
      { name: "Dr. Smith", relationship: "Primary Physician", phone: "(555) 987-6543" },
    ],
    medicalConditions: ["Type 2 Diabetes", "Hypertension"],
    medications: ["Lisinopril 10mg", "Metformin 500mg"],
    allergies: ["Peanuts", "Penicillin"],
    medicalNotes: "Patient has a history of mild asthma. Carries an inhaler.",
  }

  const handleMedicalAccess = () => {
    setShowPinModal(true)
  }

  const verifyPin = (pin) => {
    // In a real app, you would verify the PIN
    if (pin === "1234") {
      setAccessLevel("medical")
      setShowPinModal(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-rose-500 text-white">
        <div className="flex items-center justify-center">
          <QrCode className="h-6 w-6" />
          <span className="ml-2 text-xl font-bold">LifeTag</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm font-medium">EMERGENCY INFORMATION</span>
        </div>
      </header>
      <main className="flex-1 py-6 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <Card className="border-rose-200 shadow-md">
            <CardHeader className="bg-rose-50">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl">{userData.name}</CardTitle>
                  <CardDescription>ID: LT-{userData.id}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  {accessLevel === "public" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleMedicalAccess}
                      className="flex items-center gap-1"
                    >
                      <Lock className="h-4 w-4" />
                      Medical Professional Access
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Basic Information</h3>
                    <ul className="mt-2 space-y-1">
                      <li className="flex">
                        <span className="font-medium w-24">Age:</span>
                        <span>{userData.age}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24">Gender:</span>
                        <span>{userData.gender}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24">Blood Type:</span>
                        <span>{userData.bloodType}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Emergency Contacts</h3>
                    <ul className="mt-2 space-y-2">
                      {userData.emergencyContacts.map((contact, index) => (
                        <li key={index}>
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="font-medium">{contact.name}</span>
                              <span className="text-sm text-gray-500 ml-2">({contact.relationship})</span>
                            </div>
                            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-rose-500" asChild>
                              <a href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}>
                                <Phone className="h-4 w-4" />
                                <span>{contact.phone}</span>
                              </a>
                            </Button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-red-800">Critical Medical Alert</h3>
                    <p className="text-red-700">{userData.criticalInfo}</p>
                  </div>
                </div>

                {accessLevel === "medical" && (
                  <div className="space-y-6">
                    <div className="border-t pt-4">
                      <Tabs defaultValue="conditions">
                        <TabsList className="grid grid-cols-3 w-full">
                          <TabsTrigger value="conditions">Conditions</TabsTrigger>
                          <TabsTrigger value="medications">Medications</TabsTrigger>
                          <TabsTrigger value="allergies">Allergies</TabsTrigger>
                        </TabsList>
                        <TabsContent value="conditions" className="space-y-4 pt-4">
                          <h3 className="font-medium">Medical Conditions</h3>
                          <ul className="space-y-2">
                            {userData.medicalConditions.map((condition, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                                <span>{condition}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="medications" className="space-y-4 pt-4">
                          <h3 className="font-medium">Current Medications</h3>
                          <ul className="space-y-2">
                            {userData.medications.map((medication, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                <span>{medication}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="allergies" className="space-y-4 pt-4">
                          <h3 className="font-medium">Allergies</h3>
                          <ul className="space-y-2">
                            {userData.allergies.map((allergy, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                <span>{allergy}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-medium">Additional Medical Notes</h3>
                      <p className="mt-2 text-gray-700">{userData.medicalNotes}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Nearby Medical Facilities</h3>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Show on Map
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-3">
                      <div className="flex items-start gap-3">
                        <Hospital className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">City General Hospital</h4>
                          <p className="text-sm text-gray-500">0.8 miles away</p>
                          <p className="text-sm">123 Main St, Anytown</p>
                          <Button variant="link" size="sm" className="p-0 h-auto text-rose-500" asChild>
                            <a href="tel:5551234567">Call: (555) 123-4567</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="flex items-start gap-3">
                        <Hospital className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Urgent Care Center</h4>
                          <p className="text-sm text-gray-500">1.2 miles away</p>
                          <p className="text-sm">456 Oak St, Anytown</p>
                          <Button variant="link" size="sm" className="p-0 h-auto text-rose-500" asChild>
                            <a href="tel:5559876543">Call: (555) 987-6543</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {showPinModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Medical Professional Access</CardTitle>
                  <CardDescription>Enter the PIN to access full medical information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="grid grid-cols-4 gap-2">
                        <input
                          type="password"
                          maxLength={1}
                          className="w-12 h-12 text-center text-2xl border rounded-md"
                        />
                        <input
                          type="password"
                          maxLength={1}
                          className="w-12 h-12 text-center text-2xl border rounded-md"
                        />
                        <input
                          type="password"
                          maxLength={1}
                          className="w-12 h-12 text-center text-2xl border rounded-md"
                        />
                        <input
                          type="password"
                          maxLength={1}
                          className="w-12 h-12 text-center text-2xl border rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setShowPinModal(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => verifyPin("1234")} className="bg-rose-500 hover:bg-rose-600">
                        Verify
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <footer className="py-4 px-4 md:px-6 border-t text-center text-sm text-gray-500">
        <p>This is emergency information provided by LifeTag. For medical emergencies, call 911.</p>
      </footer>
    </div>
  )
}

