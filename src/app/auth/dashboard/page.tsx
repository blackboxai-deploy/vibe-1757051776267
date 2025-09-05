"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function DashboardPage() {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    initials: "JD",
    memberSince: "January 2024"
  });

  const applications = [
    {
      id: "APP001",
      service: "National ID Card",
      status: "In Review",
      progress: 75,
      submittedDate: "2024-01-15",
      estimatedCompletion: "2024-01-22",
      fee: "$25.00",
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      id: "APP002",
      service: "Birth Certificate",
      status: "Completed",
      progress: 100,
      submittedDate: "2024-01-10",
      completedDate: "2024-01-12",
      fee: "$15.00",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: "APP003",
      service: "Business Registration",
      status: "Payment Pending",
      progress: 25,
      submittedDate: "2024-01-20",
      estimatedCompletion: "2024-02-03",
      fee: "$75.00",
      statusColor: "bg-red-100 text-red-800"
    }
  ];

  const quickActions = [
    {
      title: "Apply for Passport",
      description: "Start your passport application",
      icon: "🛂",
      href: "/services/identity",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      title: "Track Application",
      description: "Check your application status",
      icon: "📊",
      href: "/apply/status",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      title: "Upload Documents",
      description: "Add supporting documents",
      icon: "📎",
      href: "/documents/upload",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    },
    {
      title: "Payment History",
      description: "View your transaction history",
      icon: "💳",
      href: "/payments/history",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
    }
  ];

  const notifications = [
    {
      id: 1,
      title: "National ID Application Update",
      message: "Your application is currently under review",
      time: "2 hours ago",
      type: "info"
    },
    {
      id: 2,
      title: "Birth Certificate Ready",
      message: "Your birth certificate is ready for download",
      time: "1 day ago",
      type: "success"
    },
    {
      id: 3,
      title: "Payment Required",
      message: "Complete payment for your business registration",
      time: "3 days ago",
      type: "warning"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return "✅";
      case "In Review": return "🔍";
      case "Payment Pending": return "💳";
      case "Processing": return "⚙️";
      default: return "📄";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12 bg-blue-600">
                  <AvatarFallback className="text-white font-semibold">
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Welcome back, {user.name}
                  </h1>
                  <p className="text-gray-600">
                    Member since {user.memberSince}
                  </p>
                </div>
              </div>
              <Button asChild>
                <Link href="/services">
                  Apply for New Service
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Applications</p>
                    <p className="text-3xl font-bold text-gray-900">3</p>
                  </div>
                  <div className="text-3xl">📋</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-3xl font-bold text-green-600">1</p>
                  </div>
                  <div className="text-3xl">✅</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">In Progress</p>
                    <p className="text-3xl font-bold text-yellow-600">1</p>
                  </div>
                  <div className="text-3xl">🔍</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Payment</p>
                    <p className="text-3xl font-bold text-red-600">1</p>
                  </div>
                  <div className="text-3xl">💳</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="applications" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="applications">My Applications</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="applications">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Applications List */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Applications</h2>
                  {applications.map((app) => (
                    <Card key={app.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {app.service}
                            </h3>
                            <p className="text-sm text-gray-600">ID: {app.id}</p>
                          </div>
                          <Badge className={app.statusColor}>
                            {getStatusIcon(app.status)} {app.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">{app.progress}%</span>
                          </div>
                          <Progress value={app.progress} className="h-2" />
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">Submitted:</span>
                              <p className="font-medium">{app.submittedDate}</p>
                            </div>
                            <div>
                              <span className="text-gray-600">
                                {app.status === "Completed" ? "Completed:" : "Expected:"}
                              </span>
                              <p className="font-medium">
                                {app.completedDate || app.estimatedCompletion}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center pt-2 border-t">
                            <span className="font-semibold text-gray-900">Fee: {app.fee}</span>
                            <div className="space-x-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              {app.status === "Completed" && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  Download
                                </Button>
                              )}
                              {app.status === "Payment Pending" && (
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                  Pay Now
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Actions */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
                  <div className="grid gap-4">
                    {quickActions.map((action, index) => (
                      <Link key={index} href={action.href}>
                        <Card className={`${action.color} cursor-pointer transition-all duration-200 hover:shadow-md`}>
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-4">
                              <div className="text-2xl">{action.icon}</div>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {action.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {action.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                  <CardDescription>
                    Stay updated with your application status and important updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl">
                          {notification.type === "success" ? "✅" : 
                           notification.type === "warning" ? "⚠️" : "ℹ️"}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                          <p className="text-gray-600 text-sm">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <CardTitle>My Documents</CardTitle>
                  <CardDescription>
                    Download and manage your completed documents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📁</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No Documents Yet
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Your completed documents will appear here for download
                    </p>
                    <Button asChild>
                      <Link href="/services">
                        Start New Application
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Manage your account information and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Information</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-600">Name:</span> {user.name}</p>
                        <p><span className="text-gray-600">Email:</span> {user.email}</p>
                        <p><span className="text-gray-600">Member Since:</span> {user.memberSince}</p>
                      </div>
                      <Button variant="outline" className="mt-4">
                        Edit Profile
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Security</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          🔒 Change Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          📱 Two-Factor Authentication
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          🔑 Login Activity
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}