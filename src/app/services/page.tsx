import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  const services = [
    {
      id: "identity",
      title: "Identity Documents",
      description: "Essential identification documents for citizens",
      icon: "🆔",
      color: "bg-blue-50 border-blue-200",
      documents: [
        { name: "National ID Card", fee: "$25", processingTime: "5-7 days" },
        { name: "Passport", fee: "$120", processingTime: "10-14 days" },
        { name: "Driver's License", fee: "$45", processingTime: "3-5 days" }
      ],
      href: "/services/identity"
    },
    {
      id: "civil",
      title: "Civil Documents",
      description: "Vital records and civil status documentation",
      icon: "📋",
      color: "bg-green-50 border-green-200",
      documents: [
        { name: "Birth Certificate", fee: "$15", processingTime: "2-3 days" },
        { name: "Marriage Certificate", fee: "$20", processingTime: "3-5 days" },
        { name: "Death Certificate", fee: "$15", processingTime: "2-3 days" },
        { name: "Divorce Decree", fee: "$25", processingTime: "5-7 days" },
        { name: "Name Change Certificate", fee: "$30", processingTime: "7-10 days" }
      ],
      href: "/services/civil"
    },
    {
      id: "business",
      title: "Business Documents",
      description: "Commercial and business registration services",
      icon: "🏢",
      color: "bg-purple-50 border-purple-200",
      documents: [
        { name: "Business Registration", fee: "$75", processingTime: "5-7 days" },
        { name: "Tax ID Certificate", fee: "$35", processingTime: "3-5 days" },
        { name: "Import License", fee: "$200", processingTime: "14-21 days" },
        { name: "Export License", fee: "$180", processingTime: "14-21 days" }
      ],
      href: "/services/business"
    },
    {
      id: "education",
      title: "Educational Documents",
      description: "Academic verification and educational records",
      icon: "🎓",
      color: "bg-orange-50 border-orange-200",
      documents: [
        { name: "Diploma Verification", fee: "$40", processingTime: "7-10 days" },
        { name: "Transcript Request", fee: "$25", processingTime: "5-7 days" }
      ],
      href: "/services/education"
    }
  ];

  const features = [
    "🔒 Secure online application process",
    "📱 Mobile-friendly interface",
    "📊 Real-time status tracking",
    "💳 Multiple payment options",
    "📧 Email notifications",
    "📞 24/7 customer support"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Government Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Apply for essential government documents and services online. 
              Fast, secure, and available 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service) => (
              <Card key={service.id} className={`${service.color} hover:shadow-lg transition-all duration-200`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.documents.map((doc, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border">
                        <div>
                          <h4 className="font-medium text-gray-900">{doc.name}</h4>
                          <p className="text-sm text-gray-600">Processing: {doc.processingTime}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{doc.fee}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href={service.href}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Apply for {service.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Track Application
              </h3>
              <p className="text-gray-600 mb-4">
                Check the status of your submitted applications
              </p>
              <Link href="/apply/status">
                <Button variant="outline" className="w-full">
                  Track Status
                </Button>
              </Link>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get Support
              </h3>
              <p className="text-gray-600 mb-4">
                Need help? Contact our customer support team
              </p>
              <Link href="/support">
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </Link>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Help Center
              </h3>
              <p className="text-gray-600 mb-4">
                Find answers to frequently asked questions
              </p>
              <Link href="/help">
                <Button variant="outline" className="w-full">
                  Browse FAQ
                </Button>
              </Link>
            </Card>
          </div>

          {/* Process Steps */}
          <Card className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600">
                Simple steps to get your documents processed
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Service</h3>
                <p className="text-gray-600 text-sm">
                  Select the document or service you need from our catalog
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fill Application</h3>
                <p className="text-gray-600 text-sm">
                  Complete the online form and upload required documents
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Make Payment</h3>
                <p className="text-gray-600 text-sm">
                  Pay the processing fee using secure online payment
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive Document</h3>
                <p className="text-gray-600 text-sm">
                  Download your processed document or receive it by mail
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}