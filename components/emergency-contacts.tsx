"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Plus, Trash2 } from "lucide-react"

export function EmergencyContacts() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Jane Doe", relationship: "Spouse", phone: "(555) 123-4567", email: "jane.doe@example.com" },
    {
      id: 2,
      name: "Dr. Smith",
      relationship: "Primary Physician",
      phone: "(555) 987-6543",
      email: "dr.smith@example.com",
    },
  ])

  const [newContact, setNewContact] = useState({
    name: "",
    relationship: "",
    phone: "",
    email: "",
  })

  const [showAddForm, setShowAddForm] = useState(false)

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      setContacts([...contacts, { id: Date.now(), ...newContact }])
      setNewContact({ name: "", relationship: "", phone: "", email: "" })
      setShowAddForm(false)
    }
  }

  const handleRemoveContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewContact((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Emergency Contacts</h3>
          {!showAddForm && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-1"
            >
              <Plus className="h-4 w-4" />
              Add Contact
            </Button>
          )}
        </div>

        {contacts.length === 0 ? (
          <div className="text-center py-6 text-gray-500">No emergency contacts added yet. Add your first contact.</div>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{contact.name}</h4>
                    <p className="text-sm text-gray-500">{contact.relationship}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveContact(contact.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <Separator className="my-2" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Phone: </span>
                    <span>{contact.phone}</span>
                  </div>
                  <div>
                    <span className="font-medium">Email: </span>
                    <span>{contact.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showAddForm && (
          <div className="border rounded-lg p-4 space-y-4">
            <h4 className="font-medium">Add New Contact</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={newContact.name}
                  onChange={handleChange}
                  placeholder="Contact name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="relationship">Relationship</Label>
                <Input
                  id="relationship"
                  name="relationship"
                  value={newContact.relationship}
                  onChange={handleChange}
                  placeholder="e.g. Spouse, Doctor, Friend"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={newContact.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={newContact.email}
                  onChange={handleChange}
                  placeholder="contact@example.com"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddContact} className="bg-rose-500 hover:bg-rose-600">
                Add Contact
              </Button>
            </div>
          </div>
        )}
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Auto-Call Settings</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="enableAutoCall"
              className="h-4 w-4 rounded border-gray-300 text-rose-500 focus:ring-rose-500"
            />
            <Label htmlFor="enableAutoCall" className="font-normal">
              Enable auto-call for emergency contacts
            </Label>
          </div>
          <p className="text-sm text-gray-500">
            When enabled, emergency responders can trigger automatic calls to your emergency contacts with a single tap.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="callOrder">Call Order</Label>
          <select
            id="callOrder"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue="sequential"
          >
            <option value="sequential">Sequential (one after another)</option>
            <option value="simultaneous">Simultaneous (all at once)</option>
            <option value="primary-only">Primary contact only</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-rose-500 hover:bg-rose-600">Save Changes</Button>
      </div>
    </div>
  )
}

