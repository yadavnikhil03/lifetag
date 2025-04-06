"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, Users, LogOut, BarChart3, Bell, Search } from "lucide-react"

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for users
  const users = [
    {
      id: "12345678",
      name: "John Doe",
      email: "john.doe@example.com",
      status: "active",
      tags: 2,
      lastActive: "2 hours ago",
    },
    {
      id: "23456789",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "active",
      tags: 1,
      lastActive: "1 day ago",
    },
    {
      id: "34567890",
      name: "Robert Johnson",
      email: "robert.j@example.com",
      status: "inactive",
      tags: 3,
      lastActive: "5 days ago",
    },
    {
      id: "45678901",
      name: "Emily Davis",
      email: "emily.d@example.com",
      status: "active",
      tags: 2,
      lastActive: "3 hours ago",
    },
    {
      id: "56789012",
      name: "Michael Wilson",
      email: "michael.w@example.com",
      status: "pending",
      tags: 0,
      lastActive: "Never",
    },
  ]

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.includes(searchQuery),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <QrCode className="h-6 w-6 text-rose-500" />
          <span className="ml-2 text-xl font-bold">LifeTag Admin</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin">Dashboard</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin/users">Users</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin/settings">Settings</Link>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </nav>
      </header>
      <main className="flex-1 py-6 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-gray-500">Manage users, view statistics, and configure system settings</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Bell className="h-4 w-4" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
              </Button>
              <Button className="bg-rose-500 hover:bg-rose-600">
                <Users className="mr-2 h-4 w-4" />
                Add New User
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,245</div>
                <p className="text-xs text-gray-500">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active QR Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2,876</div>
                <p className="text-xs text-gray-500">+24% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Emergency Scans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">187</div>
                <p className="text-xs text-gray-500">+5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>Monitor system performance and user activity</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="users">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="users">Users</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="users" className="space-y-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        placeholder="Search users..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Button variant="outline">Filter</Button>
                  </div>

                  <div className="border rounded-lg">
                    <div className="grid grid-cols-6 gap-2 p-3 border-b bg-gray-50 font-medium text-sm">
                      <div className="col-span-2">User</div>
                      <div>Status</div>
                      <div>Tags</div>
                      <div>Last Active</div>
                      <div className="text-right">Actions</div>
                    </div>
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user, index) => (
                        <div
                          key={user.id}
                          className={`grid grid-cols-6 gap-2 p-3 ${index !== filteredUsers.length - 1 ? "border-b" : ""}`}
                        >
                          <div className="col-span-2">
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                          <div>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                user.status === "active"
                                  ? "bg-green-100 text-green-800"
                                  : user.status === "inactive"
                                    ? "bg-gray-100 text-gray-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {user.status}
                            </span>
                          </div>
                          <div>{user.tags}</div>
                          <div>{user.lastActive}</div>
                          <div className="text-right">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center text-gray-500">No users found matching your search criteria</div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Showing {filteredUsers.length} of {users.length} users
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="activity" className="pt-4">
                  <div className="space-y-4">
                    <div className="border rounded-lg divide-y">
                      <div className="p-3 flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                        <div>
                          <p>
                            <span className="font-medium">John Doe</span> updated their medical information
                          </p>
                          <p className="text-sm text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="p-3 flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                        <div>
                          <p>
                            <span className="font-medium">Emily Davis</span> generated a new QR code
                          </p>
                          <p className="text-sm text-gray-500">3 hours ago</p>
                        </div>
                      </div>
                      <div className="p-3 flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-red-500 mt-2"></div>
                        <div>
                          <p>
                            <span className="font-medium">Robert Johnson</span> had their QR code scanned in an
                            emergency
                          </p>
                          <p className="text-sm text-gray-500">Yesterday at 4:32 PM</p>
                        </div>
                      </div>
                      <div className="p-3 flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-purple-500 mt-2"></div>
                        <div>
                          <p>
                            <span className="font-medium">Jane Smith</span> updated their privacy settings
                          </p>
                          <p className="text-sm text-gray-500">Yesterday at 2:15 PM</p>
                        </div>
                      </div>
                      <div className="p-3 flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                        <div>
                          <p>
                            <span className="font-medium">Michael Wilson</span> created an account
                          </p>
                          <p className="text-sm text-gray-500">2 days ago</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Load More Activity
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="reports" className="pt-4">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Usage Statistics</h3>
                      <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                        <BarChart3 className="h-8 w-8 text-gray-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Top User Locations</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>United States</span>
                            <span className="font-medium">42%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Canada</span>
                            <span className="font-medium">18%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>United Kingdom</span>
                            <span className="font-medium">15%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Australia</span>
                            <span className="font-medium">8%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Germany</span>
                            <span className="font-medium">6%</span>
                          </li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">User Demographics</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Senior Citizens</span>
                            <span className="font-medium">35%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Adults</span>
                            <span className="font-medium">45%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Children</span>
                            <span className="font-medium">15%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Not Specified</span>
                            <span className="font-medium">5%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Generate Full Report
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure global system settings and defaults</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="defaultPrivacy">Default Privacy Level</Label>
                    <select
                      id="defaultPrivacy"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue="limited"
                    >
                      <option value="public">Public (Basic info only)</option>
                      <option value="limited">Limited (Basic info + allergies)</option>
                      <option value="medical">Medical Professional (Full access)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="qrCodeExpiry">QR Code Expiry</Label>
                    <select
                      id="qrCodeExpiry"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue="never"
                    >
                      <option value="30days">30 Days</option>
                      <option value="90days">90 Days</option>
                      <option value="1year">1 Year</option>
                      <option value="never">Never</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="requirePin">Require PIN for Medical Access</Label>
                    <Switch id="requirePin" defaultChecked />
                  </div>
                  <p className="text-sm text-gray-500">
                    When enabled, medical professionals must enter a PIN to access full medical information
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="logAccess">Log All Access Attempts</Label>
                    <Switch id="logAccess" defaultChecked />
                  </div>
                  <p className="text-sm text-gray-500">
                    When enabled, all QR code scans and information access attempts will be logged
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enableLocation">Enable Location Services</Label>
                    <Switch id="enableLocation" defaultChecked />
                  </div>
                  <p className="text-sm text-gray-500">
                    When enabled, emergency responders can see nearby medical facilities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="py-6 px-4 md:px-6 border-t">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <QrCode className="h-5 w-5 text-rose-500" />
            <span className="text-sm font-medium">LifeTag Admin Dashboard</span>
          </div>
          <p className="text-sm text-gray-500">© 2025 LifeTag. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm text-gray-500 hover:underline" href="/terms">
              Terms
            </Link>
            <Link className="text-sm text-gray-500 hover:underline" href="/privacy">
              Privacy
            </Link>
            <Link className="text-sm text-gray-500 hover:underline" href="/help">
              Help
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function Label({ htmlFor, children, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className || ""}`}
    >
      {children}
    </label>
  )
}

function Switch({ id, defaultChecked }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        className="h-4 w-8 rounded-full bg-gray-200 transition-colors checked:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        style={{ appearance: "none" }}
      />
    </div>
  )
}

