"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export function PrivacySettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Information Visibility</h3>
        <p className="text-gray-500">
          Control what information is visible to different types of users when they scan your QR code.
        </p>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-4">Public View (Anyone)</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="name-public">Name</Label>
                  <p className="text-sm text-gray-500">Your full name</p>
                </div>
                <Switch id="name-public" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emergency-contacts-public">Emergency Contacts</Label>
                  <p className="text-sm text-gray-500">Names and phone numbers</p>
                </div>
                <Switch id="emergency-contacts-public" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="blood-type-public">Blood Type</Label>
                  <p className="text-sm text-gray-500">Your blood type</p>
                </div>
                <Switch id="blood-type-public" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="allergies-public">Critical Allergies</Label>
                  <p className="text-sm text-gray-500">Life-threatening allergies only</p>
                </div>
                <Switch id="allergies-public" defaultChecked />
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-4">Medical Professional View</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="medical-conditions">Medical Conditions</Label>
                  <p className="text-sm text-gray-500">Your diagnosed conditions</p>
                </div>
                <Switch id="medical-conditions" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="medications">Medications</Label>
                  <p className="text-sm text-gray-500">Current medications and dosages</p>
                </div>
                <Switch id="medications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="all-allergies">All Allergies</Label>
                  <p className="text-sm text-gray-500">Complete list of allergies</p>
                </div>
                <Switch id="all-allergies" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="medical-notes">Medical Notes</Label>
                  <p className="text-sm text-gray-500">Additional medical information</p>
                </div>
                <Switch id="medical-notes" defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Access Control</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="require-pin">Require PIN for Medical View</Label>
              <p className="text-sm text-gray-500">Medical professionals must enter a PIN to access full information</p>
            </div>
            <Switch id="require-pin" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="log-access">Log Access Attempts</Label>
              <p className="text-sm text-gray-500">Keep a record of when your information is accessed</p>
            </div>
            <Switch id="log-access" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notify-access">Notify on Access</Label>
              <p className="text-sm text-gray-500">Send email notification when your information is accessed</p>
            </div>
            <Switch id="notify-access" />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Location Services</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="enable-location">Enable Location Services</Label>
              <p className="text-sm text-gray-500">Allow emergency responders to see your current location</p>
            </div>
            <Switch id="enable-location" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="nearby-hospitals">Show Nearby Hospitals</Label>
              <p className="text-sm text-gray-500">Display nearby medical facilities to responders</p>
            </div>
            <Switch id="nearby-hospitals" defaultChecked />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-rose-500 hover:bg-rose-600">Save Settings</Button>
      </div>
    </div>
  )
}

