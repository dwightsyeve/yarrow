import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Target, Award, CheckCircle, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "We prioritize the security of your personal information and only work with licensed, regulated financial service providers."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Our success is measured by your success. We're committed to finding the right financial solution for your unique situation."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Transparency",
      description: "No hidden fees, no surprises. Our referral service is completely free, and we're upfront about how we operate."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in partner selection and customer service to ensure the best possible experience."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Customers Served" },
    { number: "200+", label: "Licensed Partners" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Former banking executive with 15+ years in financial services"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Tech veteran specializing in secure financial platforms"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Partnerships",
      description: "Expert in financial regulation and partner compliance"
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
                About Yarrow
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're on a mission to democratize access to financial services by connecting borrowers 
                with the right lenders and financial service providers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2024, Yarrow emerged from a simple observation: finding the right financial 
                  partner shouldn't be a maze of confusion and endless applications. Too many people were 
                  struggling to navigate the complex landscape of lenders and financial services.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We built Yarrow to be the bridge between borrowers and trusted financial service providers. 
                  Our platform uses advanced matching algorithms to connect you with licensed partners who 
                  are most likely to approve your application and offer competitive terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we're proud to have helped thousands of individuals and businesses find the 
                  financial solutions they need to achieve their goals.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mx-auto mb-4">
                        {value.icon}
                      </div>
                      <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Leadership Team
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 mb-20">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                Why Choose Yarrow?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Licensed Partners Only</h4>
                      <p className="text-sm text-muted-foreground">Every partner in our network is licensed and regulated</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Free Service</h4>
                      <p className="text-sm text-muted-foreground">No fees, no hidden costs - our service is completely free</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Fast Matching</h4>
                      <p className="text-sm text-muted-foreground">Get matched with suitable lenders in minutes</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Secure & Confidential</h4>
                      <p className="text-sm text-muted-foreground">Bank-level security protects your personal information</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Expert Support</h4>
                      <p className="text-sm text-muted-foreground">Our team is here to help throughout the process</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Multiple Options</h4>
                      <p className="text-sm text-muted-foreground">Access to hundreds of lenders and service providers</p>
                    </div>
                  </div>
                </div>
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

export default About;