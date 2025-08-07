import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    loanAmount: "",
    creditScore: "",
    purpose: "",
    timeInBusiness: "",
    additionalInfo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.loanType) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, phone, and loan type are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Use Supabase Edge Function
      const response = await fetch('https://bccyzexrlqorhvwoenjm.supabase.co/functions/v1/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Application Submitted Successfully!",
          description: "We'll connect you with suitable partners within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          loanType: "",
          loanAmount: "",
          creditScore: "",
          purpose: "",
          timeInBusiness: "",
          additionalInfo: ""
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="application-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete our quick form and we'll connect you with the right financial partners.
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Loan Application</CardTitle>
              <CardDescription>
                Your information is secure and will only be shared with relevant, licensed partners.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="loanType">Loan Type *</Label>
                    <Select value={formData.loanType} onValueChange={(value) => handleInputChange("loanType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal Loan</SelectItem>
                        <SelectItem value="business">Business Loan</SelectItem>
                        <SelectItem value="debt-consolidation">Debt Consolidation</SelectItem>
                        <SelectItem value="credit-repair">Credit Repair</SelectItem>
                        <SelectItem value="student-loan">Student Loan Assistance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="loanAmount">Requested Amount</Label>
                    <Select value={formData.loanAmount} onValueChange={(value) => handleInputChange("loanAmount", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select amount range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="creditScore">Credit Score Range</Label>
                    <Select value={formData.creditScore} onValueChange={(value) => handleInputChange("creditScore", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select credit range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="poor">Poor (300-579)</SelectItem>
                        <SelectItem value="fair">Fair (580-669)</SelectItem>
                        <SelectItem value="good">Good (670-739)</SelectItem>
                        <SelectItem value="very-good">Very Good (740-799)</SelectItem>
                        <SelectItem value="excellent">Excellent (800+)</SelectItem>
                        <SelectItem value="unknown">Don't Know</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {formData.loanType === "business" && (
                  <div>
                    <Label htmlFor="timeInBusiness">Time in Business</Label>
                    <Select value={formData.timeInBusiness} onValueChange={(value) => handleInputChange("timeInBusiness", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="How long have you been in business?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup (Less than 1 year)</SelectItem>
                        <SelectItem value="1-2years">1-2 years</SelectItem>
                        <SelectItem value="2-5years">2-5 years</SelectItem>
                        <SelectItem value="5plus">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div>
                  <Label htmlFor="purpose">Purpose of Loan</Label>
                  <Input
                    id="purpose"
                    value={formData.purpose}
                    onChange={(e) => handleInputChange("purpose", e.target.value)}
                    placeholder="e.g., debt consolidation, business expansion, equipment purchase"
                  />
                </div>

                <div>
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                    placeholder="Any additional details that might help us connect you with the right partner..."
                    rows={3}
                  />
                </div>

                <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                  <p className="mb-2">
                    <strong>Privacy Notice:</strong> Your information will only be shared with licensed financial service providers 
                    that match your criteria. We do not sell your information to third parties.
                  </p>
                  <p>
                    By submitting this form, you consent to be contacted by our partner network regarding your loan request.
                  </p>
                </div>

                <Button type="submit" className="w-full text-lg py-3" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
