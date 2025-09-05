"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serviceCategories = [
    {
      title: "Identity Documents",
      href: "/services/identity",
      description: "National ID, Passport, Driver's License"
    },
    {
      title: "Civil Documents", 
      href: "/services/civil",
      description: "Birth Certificate, Marriage Certificate"
    },
    {
      title: "Business Documents",
      href: "/services/business", 
      description: "Business Registration, Tax ID"
    },
    {
      title: "Educational Documents",
      href: "/services/education",
      description: "Diploma Verification, Transcripts"
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg">
            D
          </div>
          <span className="text-xl font-bold text-gray-900">Digital Center</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                  {serviceCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none mb-1">
                        {category.title}
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug">
                        {category.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/apply/status" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Track Application
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/support" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Support
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth/login">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <div className="flex flex-col space-y-1">
                <div className="h-0.5 w-5 bg-gray-600"></div>
                <div className="h-0.5 w-5 bg-gray-600"></div>
                <div className="h-0.5 w-5 bg-gray-600"></div>
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-6">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-lg mb-3">Services</h3>
                {serviceCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block py-2 px-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-medium">{category.title}</div>
                    <div className="text-sm text-gray-600">{category.description}</div>
                  </Link>
                ))}
              </div>
              
              <div className="space-y-2">
                <Link
                  href="/apply/status"
                  className="block py-2 px-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Track Application
                </Link>
                <Link
                  href="/support"
                  className="block py-2 px-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Support
                </Link>
              </div>

              <div className="border-t pt-4 space-y-2">
                <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;