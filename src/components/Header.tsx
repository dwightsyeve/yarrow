import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Shield } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Apply Now", href: "/apply-now" },
    { name: "About", href: "/about" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-16 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 group">
              <div className="relative">
                {/* Premium multi-layered logo container */}
                <div className="relative w-11 h-11 md:w-9 md:h-9">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  
                  {/* Main background with luxury gradient */}
                  <div className="relative w-full h-full bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-xl shadow-2xl border border-white/20">
                    {/* Inner luxury accent */}
                    <div className="absolute inset-0.5 bg-gradient-to-tr from-white/10 via-emerald-300/20 to-cyan-300/10 rounded-lg"></div>
                    
                    {/* Premium center design */}
                    <div className="absolute inset-1.5 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 rounded-lg flex items-center justify-center">
                      {/* Dual icon design */}
                      <div className="relative">
                        <Shield className="w-4 h-4 md:w-3 md:h-3 text-emerald-400 absolute -translate-x-0.5 -translate-y-0.5" strokeWidth={2} />
                        <Zap className="w-4 h-4 md:w-3 md:h-3 text-cyan-400 translate-x-0.5 translate-y-0.5" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* Luxury corner accents */}
                    <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-br from-cyan-300 to-teal-400 rounded-bl-lg rounded-tr-xl opacity-80"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-tr from-emerald-300 to-green-400 rounded-tr-lg rounded-bl-xl opacity-80"></div>
                  </div>
                  
                  {/* Floating premium indicators */}
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse border border-white/50 shadow-lg"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full animate-pulse delay-500 border border-white/30 shadow-md"></div>
                </div>
                
                {/* Premium animated accents */}
                <div className="absolute inset-0 rounded-xl border border-emerald-400/20 animate-pulse"></div>
                <div className="absolute inset-0 rounded-xl border border-cyan-400/10 animate-ping opacity-50"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xl md:text-xl font-black bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent tracking-tight group-hover:from-emerald-700 group-hover:via-teal-700 group-hover:to-cyan-800 transition-all duration-300">
                  Yarrow
                </span>
                <span className="text-xs bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold -mt-1 hidden sm:block tracking-widest opacity-90">
                  FINANCIAL
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Fancy Text Elements */}
          <div className="flex md:hidden items-center space-x-4 flex-1 justify-center px-4">
            <div className="flex items-center space-x-2 text-xs">
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-600 font-semibold mt-0.5 tracking-wider">LIVE</span>
              </div>
              <span className="text-muted-foreground/60 font-light">•</span>
              <div className="text-muted-foreground font-medium">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Trusted Network
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 text-xs">
              <div className="flex space-x-0.5">
                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-orange-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-1 h-1 bg-red-400 rounded-full animate-bounce delay-200"></div>
              </div>
              <span className="text-muted-foreground/70 font-medium">
                24/7
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            
            <Button size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6 text-foreground" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
               
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;