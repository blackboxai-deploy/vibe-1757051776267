"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function NationalIDApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    gender: "",
    maritalStatus: "",
    socialSecurityNumber: "",
    
    // Contact Information
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    
    // Emergency Contact
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactPhone: "",
    
    // Additional Information
    height: "",
    weight: "",
    eyeColor: "",
    hairColor: "",
    
    // Application Options
    deliveryMethod: "",
    expeditedService: false,
    
    // Terms
    agreeTerms: false,
    certifyTruth: false
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ];

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: string} = {};
    
    switch (step) {
      case 1: // Personal Information
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
        if (!formData.gender) newErrors.gender = "Gender selection is required";
        if (!formData.socialSecurityNumber) newErrors.socialSecurityNumber = "SSN is required";
        break;
        
      case 2: // Contact Information
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.state) newErrors.state = "State is required";
        if (!formData.zipCode) newErrors.zipCode = "ZIP code is required";
        break;
        
      case 3: // Emergency Contact
        if (!formData.emergencyContactName) newErrors.emergencyContactName = "Emergency contact name is required";
        if (!formData.emergencyContactPhone) newErrors.emergencyContactPhone = "Emergency contact phone is required";
        break;
        
      case 4: // Physical Characteristics
        if (!formData.height) newErrors.height = "Height is required";
        if (!formData.weight) newErrors.weight = "Weight is required";
        if (!formData.eyeColor) newErrors.eyeColor = "Eye color is required";
        if (!formData.hairColor) newErrors.hairColor = "Hair color is required";
        break;
        
      case 5: // Review & Submit
        if (!formData.deliveryMethod) newErrors.deliveryMethod = "Delivery method is required";
        if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms";
        if (!formData.certifyTruth) newErrors.certifyTruth = "You must certify the information is true";
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate application ID
      const applicationId = "APP" + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      
      // Redirect to confirmation page
      alert(`Application submitted successfully! Your Application ID is: ${applicationId}`);
      window.location.href = "/auth/dashboard";
    } catch (error) {
      alert("Error submitting application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  value={formData.middleName}
                  onChange={(e) => handleInputChange("middleName", e.target.value)}
                  placeholder="Enter your middle name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                />
                {errors.dateOfBirth && <p className="text-red-600 text-sm">{errors.dateOfBirth}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="placeOfBirth">Place of Birth</Label>
                <Input
                  id="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
                  placeholder="City, State, Country"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <p className="text-red-600 text-sm">{errors.gender}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select onValueChange={(value) => handleInputChange("maritalStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="socialSecurityNumber">Social Security Number *</Label>
              <Input
                id="socialSecurityNumber"
                value={formData.socialSecurityNumber}
                onChange={(e) => handleInputChange("socialSecurityNumber", e.target.value)}
                placeholder="XXX-XX-XXXX"
                maxLength={11}
              />
              {errors.socialSecurityNumber && <p className="text-red-600 text-sm">{errors.socialSecurityNumber}</p>}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(123) 456-7890"
                />
                {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Street Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="123 Main Street"
              />
              {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="City"
                />
                {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select onValueChange={(value) => handleInputChange("state", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state.toLowerCase().replace(" ", "-")}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.state && <p className="text-red-600 text-sm">{errors.state}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  placeholder="12345"
                  maxLength={5}
                />
                {errors.zipCode && <p className="text-red-600 text-sm">{errors.zipCode}</p>}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Emergency Contact</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="emergencyContactName">Full Name *</Label>
                <Input
                  id="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                  placeholder="Emergency contact name"
                />
                {errors.emergencyContactName && <p className="text-red-600 text-sm">{errors.emergencyContactName}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="emergencyContactRelation">Relationship</Label>
                <Input
                  id="emergencyContactRelation"
                  value={formData.emergencyContactRelation}
                  onChange={(e) => handleInputChange("emergencyContactRelation", e.target.value)}
                  placeholder="e.g., Spouse, Parent, Sibling"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContactPhone">Phone Number *</Label>
              <Input
                id="emergencyContactPhone"
                type="tel"
                value={formData.emergencyContactPhone}
                onChange={(e) => handleInputChange("emergencyContactPhone", e.target.value)}
                placeholder="(123) 456-7890"
              />
              {errors.emergencyContactPhone && <p className="text-red-600 text-sm">{errors.emergencyContactPhone}</p>}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Physical Characteristics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Height *</Label>
                <Input
                  id="height"
                  value={formData.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  placeholder="e.g., 5'8&quot; or 173 cm"
                />
                {errors.height && <p className="text-red-600 text-sm">{errors.height}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="weight">Weight *</Label>
                <Input
                  id="weight"
                  value={formData.weight}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                  placeholder="e.g., 150 lbs or 68 kg"
                />
                {errors.weight && <p className="text-red-600 text-sm">{errors.weight}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="eyeColor">Eye Color *</Label>
                <Select onValueChange={(value) => handleInputChange("eyeColor", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select eye color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brown">Brown</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="hazel">Hazel</SelectItem>
                    <SelectItem value="gray">Gray</SelectItem>
                    <SelectItem value="amber">Amber</SelectItem>
                  </SelectContent>
                </Select>
                {errors.eyeColor && <p className="text-red-600 text-sm">{errors.eyeColor}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hairColor">Hair Color *</Label>
                <Select onValueChange={(value) => handleInputChange("hairColor", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select hair color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="brown">Brown</SelectItem>
                    <SelectItem value="blonde">Blonde</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="gray">Gray</SelectItem>
                    <SelectItem value="white">White</SelectItem>
                    <SelectItem value="bald">Bald</SelectItem>
                  </SelectContent>
                </Select>
                {errors.hairColor && <p className="text-red-600 text-sm">{errors.hairColor}</p>}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Review & Submit</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryMethod">Delivery Method *</Label>
                <Select onValueChange={(value) => handleInputChange("deliveryMethod", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select delivery method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Mail (Free)</SelectItem>
                    <SelectItem value="expedited">Expedited Mail (+$15)</SelectItem>
                    <SelectItem value="overnight">Overnight Delivery (+$35)</SelectItem>
                    <SelectItem value="pickup">In-Person Pickup</SelectItem>
                  </SelectContent>
                </Select>
                {errors.deliveryMethod && <p className="text-red-600 text-sm">{errors.deliveryMethod}</p>}
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="expeditedService"
                  checked={formData.expeditedService}
                  onCheckedChange={(checked) => handleInputChange("expeditedService", checked as boolean)}
                />
                <Label htmlFor="expeditedService" className="leading-relaxed">
                  Expedited Processing (+$50) - Receive your ID in 2-3 business days instead of 5-7 days
                </Label>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Application Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Name:</strong> {formData.firstName} {formData.middleName} {formData.lastName}</p>
                  <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                </div>
                <div>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} {formData.zipCode}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                />
                <Label htmlFor="agreeTerms" className="leading-relaxed">
                  I agree to the Terms of Service and Privacy Policy *
                </Label>
              </div>
              {errors.agreeTerms && <p className="text-red-600 text-sm">{errors.agreeTerms}</p>}

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="certifyTruth"
                  checked={formData.certifyTruth}
                  onCheckedChange={(checked) => handleInputChange("certifyTruth", checked as boolean)}
                />
                <Label htmlFor="certifyTruth" className="leading-relaxed">
                  I certify that all information provided is true and accurate to the best of my knowledge *
                </Label>
              </div>
              {errors.certifyTruth && <p className="text-red-600 text-sm">{errors.certifyTruth}</p>}
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">💰 Total Fees</h4>
              <div className="space-y-1 text-sm text-blue-800">
                <p>Base Application Fee: $25.00</p>
                {formData.expeditedService && <p>Expedited Processing: $50.00</p>}
                {formData.deliveryMethod === "expedited" && <p>Expedited Delivery: $15.00</p>}
                {formData.deliveryMethod === "overnight" && <p>Overnight Delivery: $35.00</p>}
                <hr className="border-blue-300 my-2" />
                <p className="font-semibold">
                  Total: $
                  {(25 + 
                    (formData.expeditedService ? 50 : 0) + 
                    (formData.deliveryMethod === "expedited" ? 15 : 0) + 
                    (formData.deliveryMethod === "overnight" ? 35 : 0)
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return "Personal Info";
      case 2: return "Contact Info";
      case 3: return "Emergency Contact";
      case 4: return "Physical Info";
      case 5: return "Review & Submit";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              National ID Card Application
            </h1>
            <p className="text-gray-600 mb-6">
              Complete your application in {totalSteps} simple steps
            </p>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center space-x-4 mb-8">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-200 text-gray-600"
                  }`}>
                    {step}
                  </div>
                  <span className="text-xs text-gray-600 mt-1">
                    {getStepTitle(step)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Step {currentStep}: {getStepTitle(currentStep)}</CardTitle>
              <CardDescription>
                Please provide accurate information. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderStepContent()}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 mt-8 border-t">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700">
                    Next Step
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit} 
                    disabled={isSubmitting}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Our support team is available to assist you with your application
                </p>
                <div className="flex justify-center space-x-6 text-sm">
                  <div>
                    <strong className="text-blue-600">📞 Phone:</strong> 1-800-ID-HELP
                  </div>
                  <div>
                    <strong className="text-blue-600">📧 Email:</strong> apply@digitalcenter.gov
                  </div>
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