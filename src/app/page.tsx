import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const services = [
    {
      id: "identity",
      title: "Identity Documents",
      description: "Apply for National ID, Passport, Driver's License",
      icon: "🆔",
      count: "3 Services",
      href: "/services/identity"
    },
    {
      id: "civil",
      title: "Civil Documents",
      description: "Birth Certificate, Marriage Certificate, Death Certificate",
      icon: "📋",
      count: "5 Services",
      href: "/services/civil"
    },
    {
      id: "business",
      title: "Business Documents",
      description: "Business Registration, Tax ID, Import/Export License",
      icon: "🏢",
      count: "4 Services",
      href: "/services/business"
    },
    {
      id: "education",
      title: "Educational Documents",
      description: "Diploma Verification, Transcript Requests",
      icon: "🎓",
      count: "2 Services",
      href: "/services/education"
    }
  ];

  const features = [
    {
      title: "24/7 Online Access",
      description: "Apply for documents anytime, anywhere with our digital platform",
      icon: "🌐"
    },
    {
      title: "Real-time Tracking",
      description: "Track your application status and get updates instantly",
      icon: "📊"
    },
    {
      title: "Secure & Fast",
      description: "End-to-end encryption ensures your data is safe and secure",
      icon: "🔒"
    },
    {
      title: "Multi-language Support",
      description: "Available in multiple languages for better accessibility",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
                🚀 New Digital Platform Available
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Digital Service Center
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Apply for government documents and services online. Fast, secure, and available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/register">
                  <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-8 py-3">
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3">
                    Browse Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Available Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our comprehensive range of digital government services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link key={service.id} href={service.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer border-2 hover:border-blue-200">
                    <CardHeader className="text-center pb-2">
                      <div className="text-4xl mb-2">{service.icon}</div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {service.title}
                      </CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {service.count}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-sm text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Digital Platform?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the future of government services with our modern digital platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of citizens who have simplified their document applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8 py-3">
                  Create Account
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Need Help?
              </h2>
              <p className="text-lg text-gray-600">
                Our support team is here to assist you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-2">Monday - Friday, 8AM - 6PM</p>
                <p className="font-semibold text-blue-600">1-800-DIGITAL</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-2">Available 24/7</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Start Chat
                </Button>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-2">Response within 24 hours</p>
                <p className="font-semibold text-blue-600">support@digitalcenter.gov</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}