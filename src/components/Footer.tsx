import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Shield, Award, Users } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Careers", href: "#" }
  ];

  const serviceLinks = [
    { name: "Personal Loans", href: "#" },
    { name: "Business Loans", href: "#" },
    { name: "Debt Consolidation", href: "#" },
    { name: "Credit Repair", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Compliance", href: "#" },
    { name: "Contact Us", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-success rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Y</span>
              </div>
              <span className="text-xl font-bold">Yarrow</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Connecting borrowers with trusted financial service providers. 
              We specialize in loan referrals, debt solutions, and credit counseling services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>3364917636</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>yarrowfinancial@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Licensed Nationwide</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-background/80 text-sm mb-4">
              Get financial tips and updates on new partner offerings.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="w-8 h-8 text-primary" />
              <h4 className="font-semibold">Secure & Compliant</h4>
              <p className="text-sm text-background/80">Bank-level security for all data</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="w-8 h-8 text-primary" />
              <h4 className="font-semibold">Licensed Partners</h4>
              <p className="text-sm text-background/80">All partners are verified and licensed</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="w-8 h-8 text-primary" />
              <h4 className="font-semibold">Trusted by Thousands</h4>
              <p className="text-sm text-background/80">Helping borrowers since 2023</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/80">
              © 2025 Yarrow Financial Solutions, Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-xs text-background/60 leading-relaxed">
            <p className="mb-2">
              <strong>Important Disclosure:</strong> Yarrow Financial Solutions is a lead generation and referral service. 
              We do not originate loans or provide financial services directly. All loan products and services are provided 
              by licensed third-party lenders and service providers.
            </p>
            <p>
              Rates, terms, and conditions vary by lender and are subject to credit approval. 
              Not all applicants will qualify for financing. This service is not available in all states.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
