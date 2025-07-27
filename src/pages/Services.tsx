import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Building2, PiggyBank, TrendingUp, Shield, Users, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Personal Loans",
      description: "Get matched with lenders offering personal loans up to $50,000 with competitive rates and flexible terms.",
      features: [
        "Loan amounts up to $50,000",
        "Fast approval process (24-48 hours)",
        "Multiple lender options",
        "Bad credit accepted",
        "No collateral required",
        "Fixed or variable rates"
      ]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Business Loans",
      description: "Access business financing including specialty lending for cannabis and other regulated industries.",
      features: [
        "Business expansion capital",
        "Equipment financing",
        "Working capital solutions",
        "Cannabis industry specialists",
        "SBA loan programs",
        "Merchant cash advances"
      ]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Debt Consolidation",
      description: "Simplify your finances by consolidating multiple debts into one manageable monthly payment.",
      features: [
        "Lower monthly payments",
        "Simplified debt management",
        "Potential interest savings",
        "Professional guidance",
        "Credit counseling included",
        "Debt settlement options"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Credit Repair",
      description: "Improve your credit score with professional credit repair and financial counseling services.",
      features: [
        "Credit score improvement",
        "Dispute management",
        "Financial education",
        "Ongoing support",
        "Credit monitoring",
        "Personalized action plans"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Student Loan Assistance",
      description: "Get help with student loan consolidation, forgiveness programs, and payment plans.",
      features: [
        "Loan consolidation",
        "Forgiveness programs",
        "Income-driven repayment",
        "Deferment options",
        "Default rehabilitation",
        "Payment plan optimization"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Credit Counseling",
      description: "Connect with nonprofit credit counseling organizations for free financial guidance and planning.",
      features: [
        "Free consultations",
        "Budget planning",
        "Debt management plans",
        "Financial education",
        "Homebuyer counseling",
        "Bankruptcy alternatives"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Financial Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Yarrow connects you with the right financial partners for your specific needs. 
                All referrals are to licensed, vetted service providers committed to helping you achieve your financial goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant="default">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-muted/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why Choose Yarrow?
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Licensed Partners</h3>
                    <p className="text-sm text-muted-foreground">All our partners are licensed and regulated financial service providers.</p>
                  </div>
                  <div>
                    <CheckCircle className="w-8 h-8 text-success mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Free Service</h3>
                    <p className="text-sm text-muted-foreground">Our referral service is completely free with no hidden fees.</p>
                  </div>
                  <div>
                    <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Expert Matching</h3>
                    <p className="text-sm text-muted-foreground">We match you with the right provider based on your specific needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;