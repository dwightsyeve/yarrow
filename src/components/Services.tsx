import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Building2, PiggyBank, TrendingUp, Shield, Users } from "lucide-react";

// Use remote background image for better performance
const featuresBg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&auto=format,compress&q=80";

const Services = () => {

  const services = [
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Personal Loans",
      description: "Connect with lenders offering personal loans up to $50,000. Quick applications and competitive rates.",
      features: ["Up to $50,000", "Fast approval process", "Multiple lender options", "Bad credit OK"],
      cta: "Apply for Personal Loan"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Business Loans",
      description: "Find business financing including specialty lending for cannabis and other regulated industries.",
      features: ["Business expansion", "Equipment financing", "Working capital", "Cannabis industry specialists"],
      cta: "Apply for Business Loan"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Debt Consolidation",
      description: "Simplify your finances by consolidating multiple debts into one manageable payment.",
      features: ["Lower monthly payments", "Simplified finances", "Potential interest savings", "Professional guidance"],
      cta: "Get Debt Help"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Credit Repair",
      description: "Improve your credit score with professional credit repair and counseling services.",
      features: ["Credit score improvement", "Dispute management", "Financial education", "Ongoing support"],
      cta: "Repair Credit"
    }
  ];

  const additionalServices = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Student Loan Assistance",
      description: "Get help with student loan consolidation, forgiveness programs, and payment plans."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Credit Counseling",
      description: "Connect with nonprofit credit counseling organizations for free financial guidance."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" role="region" aria-labelledby="services-heading">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${featuresBg})`
        }}
        aria-hidden="true"
      ></div>
      
      {/* Lighter Overlay for better background visibility */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content Layer */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Financial Services
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We connect you with the right financial partners for your specific needs. 
            All referrals are to licensed, vetted service providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/10 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/20 text-white rounded-lg mr-4 group-hover:bg-white group-hover:text-black transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-white/90">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-white/80">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-2 bg-white/20 text-white rounded-lg mr-4 mt-1">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;