import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search, Users, CheckCircle, Clock, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <FileText className="w-8 h-8" />,
      title: "Submit Your Application",
      description: "Fill out our simple online form with your financial needs and basic information. Takes less than 5 minutes to complete.",
      details: [
        "Secure online application",
        "Basic personal information",
        "Financial requirements",
        "No credit check to apply"
      ]
    },
    {
      step: "02",
      icon: <Search className="w-8 h-8" />,
      title: "We Find Matches",
      description: "Our algorithm analyzes your profile and matches you with the most suitable licensed lenders and financial service providers.",
      details: [
        "Automated matching system",
        "Licensed providers only",
        "Multiple options provided",
        "Real-time availability check"
      ]
    },
    {
      step: "03",
      icon: <Users className="w-8 h-8" />,
      title: "Connect with Partners",
      description: "We connect you directly with our verified partners who will work with you to finalize your financial solution.",
      details: [
        "Direct partner contact",
        "Personalized service",
        "Professional guidance",
        "Ongoing support"
      ]
    },
    {
      step: "04",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Get Your Solution",
      description: "Complete the process with your chosen partner and receive your loan or financial service quickly and securely.",
      details: [
        "Fast approval process",
        "Secure transactions",
        "Flexible terms",
        "Continued support"
      ]
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Process",
      description: "Get matched with lenders in minutes, not days"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Confidential",
      description: "Your information is protected with bank-level security"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Licensed Partners",
      description: "All partners are licensed and regulated financial providers"
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
                How Yarrow Works
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Getting connected with the right financial partner is simple and straightforward. 
                Here's how our process works to get you the financial solution you need.
              </p>
            </div>

            <div className="grid gap-8 mb-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-1">
                          <div className="flex items-center mb-4">
                            <div className="text-4xl font-bold text-primary/20 mr-4">
                              {step.step}
                            </div>
                            <div className="p-3 bg-primary/10 text-primary rounded-lg">
                              {step.icon}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        <div className="lg:col-span-2">
                          <div className="grid md:grid-cols-2 gap-4">
                            {step.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-6">
                      <div className="w-px h-8 bg-border"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-muted/30 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                Why Our Process Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have found their perfect financial solution through Yarrow.
              </p>
              <Button size="lg" className="text-lg px-8 py-4">
                Start Your Application
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;