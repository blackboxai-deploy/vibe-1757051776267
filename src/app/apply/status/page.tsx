"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function ApplicationStatusPage() {
  const [applicationId, setApplicationId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [applicationData, setApplicationData] = useState<any>(null);
  const [error, setError] = useState("");

  // Mock application data for demo
  const mockApplications: { [key: string]: any } = {
    "APP001": {
      id: "APP001",
      service: "National ID Card",
      status: "In Review",
      progress: 75,
      submittedDate: "2024-01-15",
      lastUpdated: "2024-01-20",
      estimatedCompletion: "2024-01-22",
      applicantName: "John Doe",
      fee: "$25.00",
      paymentStatus: "Paid",
      statusHistory: [
        { date: "2024-01-15", status: "Application Submitted", description: "Your application has been received and is being processed." },
        { date: "2024-01-16", status: "Documents Verified", description: "All required documents have been verified and approved." },
        { date: "2024-01-18", status: "In Review", description: "Your application is currently under review by our processing team." },
        { date: "2024-01-20", status: "Quality Check", description: "Final quality check in progress." }
      ],
      nextSteps: [
        "Quality assurance review in progress",
        "Document production will begin once approved",
        "You will receive an email notification when ready"
      ],
      supportDocuments: [
        { name: "Birth Certificate", status: "Verified", uploadDate: "2024-01-15" },
        { name: "Proof of Address", status: "Verified", uploadDate: "2024-01-15" },
        { name: "Passport Photo", status: "Verified", uploadDate: "2024-01-15" }
      ]
    },
    "APP002": {
      id: "APP002",
      service: "Birth Certificate",
      status: "Completed",
      progress: 100,
      submittedDate: "2024-01-10",
      lastUpdated: "2024-01-12",
      completedDate: "2024-01-12",
      applicantName: "John Doe",
      fee: "$15.00",
      paymentStatus: "Paid",
      statusHistory: [
        { date: "2024-01-10", status: "Application Submitted", description: "Your application has been received." },
        { date: "2024-01-11", status: "Processing", description: "Application is being processed." },
        { date: "2024-01-12", status: "Completed", description: "Your birth certificate is ready for download." }
      ],
      nextSteps: [
        "Document is ready for download",
        "Physical copy will be mailed within 3-5 business days"
      ],
      supportDocuments: [
        { name: "ID Verification", status: "Verified", uploadDate: "2024-01-10" },
        { name: "Application Form", status: "Verified", uploadDate: "2024-01-10" }
      ]
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setApplicationData(null);

    // Basic validation
    if (!applicationId || !email) {
      setError("Please enter both Application ID and email address");
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const app = mockApplications[applicationId.toUpperCase()];
      if (app) {
        setApplicationData(app);
      } else {
        setError("Application not found. Please check your Application ID and try again.");
      }
      setLoading(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Review": return "bg-yellow-100 text-yellow-800";
      case "Processing": return "bg-blue-100 text-blue-800";
      case "Payment Pending": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return "✅";
      case "In Review": return "🔍";
      case "Processing": return "⚙️";
      case "Payment Pending": return "💳";
      default: return "📄";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📊</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Track Your Application
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your application details below to check the current status and progress
            </p>
          </div>

          {/* Search Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Application Lookup</CardTitle>
              <CardDescription>
                Enter your Application ID and registered email address to track your application
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert className="mb-6 border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="applicationId">Application ID</Label>
                    <Input
                      id="applicationId"
                      placeholder="APP001"
                      value={applicationId}
                      onChange={(e) => setApplicationId(e.target.value)}
                      className="uppercase"
                    />
                    <p className="text-xs text-gray-500">
                      Format: APP + numbers (e.g., APP001, APP123)
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Searching..." : "Track Application"}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">🔍 Demo Instructions</h4>
                <p className="text-blue-700 text-sm">
                  Try these sample applications: <strong>APP001</strong> or <strong>APP002</strong> 
                  with any email address to see the tracking interface.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Application Status Display */}
          {applicationData && (
            <div className="space-y-6">
              {/* Status Overview */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">
                        {applicationData.service}
                      </CardTitle>
                      <CardDescription>
                        Application ID: {applicationData.id} • Submitted: {applicationData.submittedDate}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(applicationData.status)}>
                      {getStatusIcon(applicationData.status)} {applicationData.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{applicationData.progress}%</span>
                      </div>
                      <Progress value={applicationData.progress} className="h-3" />
                    </div>

                    {/* Key Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Applicant</h4>
                        <p className="text-gray-600">{applicationData.applicantName}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Payment Status</h4>
                        <Badge className={applicationData.paymentStatus === "Paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                          {applicationData.paymentStatus} ({applicationData.fee})
                        </Badge>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {applicationData.status === "Completed" ? "Completed" : "Expected Completion"}
                        </h4>
                        <p className="text-gray-600">
                          {applicationData.completedDate || applicationData.estimatedCompletion}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {applicationData.status === "Completed" && (
                        <Button className="bg-green-600 hover:bg-green-700">
                          📄 Download Document
                        </Button>
                      )}
                      {applicationData.status === "Payment Pending" && (
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          💳 Complete Payment
                        </Button>
                      )}
                      <Button variant="outline">
                        📧 Email Status Update
                      </Button>
                      <Button variant="outline">
                        🖨️ Print Status Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Status History */}
              <Card>
                <CardHeader>
                  <CardTitle>Status History</CardTitle>
                  <CardDescription>
                    Track the progress of your application through each processing stage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicationData.statusHistory.map((item: any, index: number) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-semibold text-gray-900">
                              {item.status}
                            </h4>
                            <span className="text-sm text-gray-500">
                              {item.date}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {applicationData.nextSteps.map((step: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Supporting Documents */}
              <Card>
                <CardHeader>
                  <CardTitle>Supporting Documents</CardTitle>
                  <CardDescription>
                    Status of documents submitted with your application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {applicationData.supportDocuments.map((doc: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{doc.name}</h4>
                          <p className="text-sm text-gray-600">Uploaded: {doc.uploadDate}</p>
                        </div>
                        <Badge className={doc.status === "Verified" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                          ✓ {doc.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Help Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Need Assistance?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📞 Phone Support</h4>
                  <p className="text-gray-600 mb-1">Monday - Friday, 8AM - 6PM</p>
                  <p className="font-semibold text-blue-600">1-800-TRACK-APP</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📧 Email Support</h4>
                  <p className="text-gray-600 mb-1">Response within 24 hours</p>
                  <p className="font-semibold text-blue-600">status@digitalcenter.gov</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}