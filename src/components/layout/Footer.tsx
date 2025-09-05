import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  const serviceLinks = [
    { name: "Identity Documents", href: "/services/identity" },
    { name: "Civil Documents", href: "/services/civil" },
    { name: "Business Documents", href: "/services/business" },
    { name: "Educational Documents", href: "/services/education" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Track Application", href: "/apply/status" },
    { name: "FAQ", href: "/faq" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Security", href: "/security" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg">
                D
              </div>
              <span className="text-xl font-bold text-white">Digital Center</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modernizing government services through digital innovation. 
              Fast, secure, and accessible document processing for all citizens.
            </p>
            <div className="flex space-x-4">
              <div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                <span className="text-sm">f</span>
              </div>
              <div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                <span className="text-sm">t</span>
              </div>
              <div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates on new services and features.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {legalLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="text-center lg:text-right space-y-1">
              <p className="text-gray-400 text-sm">
                Emergency Support: <span className="text-white font-medium">1-800-DIGITAL</span>
              </p>
              <p className="text-gray-400 text-sm">
                Email: <span className="text-white font-medium">support@digitalcenter.gov</span>
              </p>
            </div>
          </div>

          <Separator className="bg-gray-700 my-6" />

          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Digital Service Center. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🔒 SSL Secured</span>
              <span>•</span>
              <span>🇺🇸 Government Official</span>
              <span>•</span>
              <span>✓ WCAG Accessible</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;