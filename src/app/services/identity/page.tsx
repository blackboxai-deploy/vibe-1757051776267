import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function IdentityServicesPage() {
  const services = [
    {
      id: "national-id",
      title: "National ID Card",
      description: "Official government identification card for all citizens",
      fee: "$25.00",
      processingTime: "5-7 business days",
      validity: "10 years",
      requiredDocuments: [
        "Birth Certificate (original or certified copy)",
        "Proof of Address (utility bill, bank statement)",
        "Social Security Card",
        "Current passport-size photo (2x2 inches)"
      ],
      eligibility: [
        "U.S. citizen or eligible non-citizen",
        "18 years of age or older",
        "Valid Social Security Number",
        "Proof of identity and residency"
      ],
      features: [
        "Enhanced security features",
        "RFID technology enabled",
        "Accepted nationwide",
        "TSA compliant for domestic flights"
      ]
    },
    {
      id: "passport",
      title: "U.S. Passport",
      description: "Official travel document for international travel",
      fee: "$120.00",
      processingTime: "10-14 business days",
      validity: "10 years (adults)",
      requiredDocuments: [
        "Completed DS-11 Application Form",
        "Proof of U.S. Citizenship (birth certificate)",
        "Valid photo identification",
        "Passport photo (2x2 inches)",
        "Payment for fees"
      ],
      eligibility: [
        "U.S. citizen by birth or naturalization",
        "Valid government-issued photo ID",
        "Proof of citizenship",
        "No outstanding passport restrictions"
      ],
      features: [
        "Valid for international travel",
        "Accepted worldwide",
        "Enhanced security features",
        "Emergency assistance abroad"
      ]
    },
    {
      id: "drivers-license",
      title: "Driver's License",
      description: "Official license to operate motor vehicles",
      fee: "$45.00",
      processingTime: "3-5 business days",
      validity: "8 years",
      requiredDocuments: [
        "Completed DL-14 Application Form",
        "Proof of Identity (birth certificate, passport)",
        "Social Security Number verification",
        "Proof of residency (2 documents)",
        "Vision screening certificate"
      ],
      eligibility: [
        "At least 18 years of age",
        "Pass written and road tests",
        "Meet vision requirements",
        "Provide required documentation"
      ],
      features: [
        "REAL ID compliant",
        "Enhanced security features",
        "Digital signature technology",
        "Renewable online"
      ]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Choose Service",
      description: "Select the identity document you need to apply for"
    },
    {
      step: 2,
      title: "Check Eligibility",
      description: "Review requirements and ensure you meet all criteria"
    },
    {
      step: 3,
      title: "Gather Documents",
      description: "Collect all required supporting documents and photos"
    },
    {
      step: 4,
      title: "Complete Application",
      description: "Fill out the online application form with accurate information"
    },
    {
      step: 5,
      title: "Submit & Pay",
      description: "Review your application and pay the required fees"
    },
    {
      step: 6,
      title: "Track Progress",
      description: "Monitor your application status and receive updates"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🆔</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Identity Documents
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apply for essential identification documents including National ID, Passport, 
              and Driver's License through our secure digital platform.
            </p>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <AlertDescription className="text-blue-800">
              <strong>📋 Important:</strong> All applications require original or certified copies of supporting documents. 
              Processing times may vary during peak periods. For expedited service, additional fees apply.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="services" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="services">Available Services</TabsTrigger>
              <TabsTrigger value="process">Application Process</TabsTrigger>
              <TabsTrigger value="faq">FAQ & Support</TabsTrigger>
            </TabsList>

            <TabsContent value="services">
              <div className="grid gap-8">
                {services.map((service) => (
                  <Card key={service.id} className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl text-gray-900 mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-lg text-gray-700">
                            {service.description}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="text-lg px-3 py-1 mb-2">
                            {service.fee}
                          </Badge>
                          <p className="text-sm text-gray-600">
                            {service.processingTime}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Required Documents */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Required Documents</h4>
                          <ul className="space-y-2">
                            {service.requiredDocuments.map((doc, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <span className="text-blue-600 mt-1">•</span>
                                <span className="text-gray-600">{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Eligibility */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Eligibility Requirements</h4>
                          <ul className="space-y-2">
                            {service.eligibility.map((req, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <span className="text-green-600 mt-1">✓</span>
                                <span className="text-gray-600">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <span className="text-purple-600 mt-1">★</span>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Validity:</strong> {service.validity}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Processing Time:</strong> {service.processingTime}
                          </p>
                        </div>
                        <div className="space-x-3">
                          <Button variant="outline">
                            Learn More
                          </Button>
                          <Link href={`/apply/${service.id}`}>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              Apply Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="process">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Application Process</CardTitle>
                  <CardDescription>
                    Follow these simple steps to complete your identity document application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {applicationProcess.map((item) => (
                      <div key={item.step} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      🕐 Processing Times
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-blue-800">Standard Processing:</strong>
                        <p className="text-blue-700">5-14 business days</p>
                      </div>
                      <div>
                        <strong className="text-blue-800">Expedited Service:</strong>
                        <p className="text-blue-700">2-5 business days (+$50)</p>
                      </div>
                      <div>
                        <strong className="text-blue-800">Rush Service:</strong>
                        <p className="text-blue-700">24-48 hours (+$150)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        What documents do I need for a National ID?
                      </h4>
                      <p className="text-gray-600">
                        You need proof of identity (birth certificate), Social Security card, 
                        two proofs of residency, and a current passport-style photo.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        How long does passport processing take?
                      </h4>
                      <p className="text-gray-600">
                        Standard passport processing takes 10-14 business days. Expedited 
                        service is available for additional fees.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Can I track my application online?
                      </h4>
                      <p className="text-gray-600">
                        Yes! You can track your application status 24/7 through your 
                        dashboard or our tracking portal.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">📞 Phone Support</h4>
                        <p className="text-gray-600 mb-2">Monday - Friday, 8AM - 6PM</p>
                        <p className="font-semibold text-blue-600">1-800-ID-HELP</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">📧 Email Support</h4>
                        <p className="text-gray-600 mb-2">Response within 24 hours</p>
                        <p className="font-semibold text-blue-600">identity@digitalcenter.gov</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}