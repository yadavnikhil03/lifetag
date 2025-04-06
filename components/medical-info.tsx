"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Plus, X } from "lucide-react"

export function MedicalInfo() {
  const [allergies, setAllergies] = useState(["Peanuts", "Penicillin"])
  const [medications, setMedications] = useState(["Lisinopril 10mg", "Metformin 500mg"])
  const [conditions, setConditions] = useState(["Type 2 Diabetes", "Hypertension"])

  const [newAllergy, setNewAllergy] = useState("")
  const [newMedication, setNewMedication] = useState("")
  const [newCondition, setNewCondition] = useState("")

  const addAllergy = () => {
    if (newAllergy.trim()) {
      setAllergies([...allergies, newAllergy.trim()])
      setNewAllergy("")
    }
  }

  const removeAllergy = (index) => {
    setAllergies(allergies.filter((_, i) => i !== index))
  }

  const addMedication = () => {
    if (newMedication.trim()) {
      setMedications([...medications, newMedication.trim()])
      setNewMedication("")
    }
  }

  const removeMedication = (index) => {
    setMedications(medications.filter((_, i) => i !== index))
  }

  const addCondition = () => {
    if (newCondition.trim()) {
      setConditions([...conditions, newCondition.trim()])
      setNewCondition("")
    }
  }

  const removeCondition = (index) => {
    setConditions(conditions.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Blood Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bloodType">Blood Type</Label>
            <select
              id="bloodType"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue="o-positive"
            >
              <option value="a-positive">A+</option>
              <option value="a-negative">A-</option>
              <option value="b-positive">B+</option>
              <option value="b-negative">B-</option>
              <option value="ab-positive">AB+</option>
              <option value="ab-negative">AB-</option>
              <option value="o-positive">O+</option>
              <option value="o-negative">O-</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="rhFactor">Rh Factor</Label>
            <select
              id="rhFactor"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue="positive"
            >
              <option value="positive">Positive</option>
              <option value="negative">Negative</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Allergies</h3>
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {allergies.map((allergy, index) => (
              <div key={index} className="flex items-center bg-rose-100 text-rose-800 rounded-full px-3 py-1">
                <span>{allergy}</span>
                <button onClick={() => removeAllergy(index)} className="ml-2 text-rose-800 hover:text-rose-900">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add allergy"
              value={newAllergy}
              onChange={(e) => setNewAllergy(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addAllergy()}
            />
            <Button variant="outline" size="icon" onClick={addAllergy}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Medications</h3>
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {medications.map((medication, index) => (
              <div key={index} className="flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1">
                <span>{medication}</span>
                <button onClick={() => removeMedication(index)} className="ml-2 text-blue-800 hover:text-blue-900">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add medication"
              value={newMedication}
              onChange={(e) => setNewMedication(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addMedication()}
            />
            <Button variant="outline" size="icon" onClick={addMedication}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Medical Conditions</h3>
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1">
                <span>{condition}</span>
                <button onClick={() => removeCondition(index)} className="ml-2 text-green-800 hover:text-green-900">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add medical condition"
              value={newCondition}
              onChange={(e) => setNewCondition(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addCondition()}
            />
            <Button variant="outline" size="icon" onClick={addCondition}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Additional Medical Information</h3>
        </div>
        <div className="space-y-2">
          <Label htmlFor="medicalNotes">Medical Notes</Label>
          <Textarea
            id="medicalNotes"
            placeholder="Add any additional medical information that may be important in an emergency"
            rows={4}
            defaultValue="Patient has a history of mild asthma. Carries an inhaler."
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-rose-500 hover:bg-rose-600">Save Changes</Button>
      </div>
    </div>
  )
}

