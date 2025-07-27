import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

// Remote CDN images for better performance
const REMOTE_SLIDES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format,compress&q=80",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&auto=format,compress&q=80",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&auto=format,compress&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&auto=format,compress&q=80",
  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop&auto=format,compress&q=80",
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=500&fit=crop&auto=format,compress&q=80",
  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop&auto=format,compress&q=80",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&auto=format,compress&q=80",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&auto=format,compress&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format,compress&q=80"
];

const Hero = () => {
  const slides = REMOTE_SLIDES;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds with smooth transitions
  useEffect(() => {
    if (!api) return;

    const autoSlide = setInterval(() => {
      api.scrollNext();
    }, 7000); // Slightly slower for better effect

    return () => clearInterval(autoSlide);
  }, [api]);

  // Track current slide for enhanced effects
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api?.off("select", onSelect);
    };
  }, [api]);

  // Navigation functions
  const scrollToGetStarted = () => {
    const formSection = document.getElementById('application-form') || document.querySelector('[data-section="application-form"]') || document.querySelector('.application-form') || document.querySelector('form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAboutUs = () => {
    const aboutSection = document.getElementById('about-us') || document.querySelector('[data-section="about"]') || document.querySelector('.about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-background py-12 lg:py-28 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-bounce delay-300"></div>
      </div>
      
      {/* Digital noise overlay */}
      <div className="absolute inset-0 opacity-5 animate-digital-noise" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
           }}>
      </div>
      
      {/* Glitch scan lines */}
      <div className="absolute inset-0 opacity-10 animate-glitch-scan pointer-events-none"
           style={{
             background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.1) 2px, rgba(0,255,255,0.1) 4px)',
           }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center items-center min-h-[60vh]">
          {/* Unified Carousel for all screen sizes */}
          <div className="w-full">
            <Carousel 
              setApi={setApi}
              className="w-full max-w-2xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="transition-all duration-700 ease-in-out">
                {slides.map((slide, index) => (
                  <CarouselItem key={index} className="transform transition-all duration-700">
                    <div className={`relative aspect-[16/10] lg:aspect-[16/10] rounded-lg overflow-hidden shadow-2xl border-2 border-white/20 transform transition-all duration-700 ${
                      current === index ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
                    } ${current === index && Math.random() < 0.1 ? 'animate-glitch' : ''}`}>
                      <img 
                        src={slide} 
                        alt={`Financial partner ${index + 1}`}
                        className={`object-cover w-full h-full transition-all duration-1000 ${
                          current === index ? 'scale-105' : 'scale-100'
                        }`}
                        loading="lazy"
                        decoding="async"
                        fetchPriority={index === 0 ? "high" : "low"}
                      />
                      
                      {/* Glitch overlay effect */}
                      {current === index && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-magenta-500/5 animate-glitch-scan"></div>
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/3 to-transparent animate-digital-noise"></div>
                        </>
                      )}
                      
                      {/* Dynamic overlay based on current slide */}
                      <div className={`absolute inset-0 transition-all duration-700 ${
                        current === index ? 'bg-black/40' : 'bg-black/60'
                      }`}></div>
                      
                      {/* Hero Content Overlay with enhanced animations */}
                      <div className={`absolute inset-0 flex flex-col justify-center items-center text-center p-4 lg:p-8 transform transition-all duration-700 ${
                        current === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'
                      }`}>
                        <div className={`inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium mb-4 lg:mb-6 transform transition-all duration-500 delay-200 ${
                          current === index ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-70 scale-95'
                        }`}>
                          <span className={`w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full mr-2 transition-all duration-300 ${
                            current === index ? 'animate-pulse' : ''
                          }`}></span>
                          Trusted Financial Referral Network
                        </div>
                        
                        <h1 className={`text-2xl lg:text-3xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight transform transition-all duration-700 delay-300 ${
                          current === index ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-3 opacity-80 scale-98'
                        } ${current === index && Math.random() < 0.05 ? 'animate-glitch-text' : ''}`}>
                          Connect with the Right 
                          <span className={`text-green-400 transition-all duration-500 ${
                            current === index ? 'drop-shadow-lg' : 'drop-shadow-sm'
                          }`}> Financial Partner</span>
                        </h1>
                        
                        <p className={`text-sm lg:text-lg text-white/90 mb-6 lg:mb-8 max-w-xl leading-relaxed transform transition-all duration-700 delay-400 ${
                          current === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'
                        }`}>
                          Yarrow connects borrowers with trusted lenders, debt relief services, and credit counseling organizations. 
                          Find the financial solution that fits your needs.
                        </p>
                        
                        <div className={`flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 transform transition-all duration-700 delay-500 ${
                          current === index ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-80 scale-95'
                        }`}>
                          <Button 
                            size="lg" 
                            onClick={scrollToGetStarted}
                            className={`text-sm lg:text-lg px-6 lg:px-8 py-2.5 lg:py-3 bg-green-600 hover:bg-green-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}>
                            Get Started Today
                          </Button>
                          <Button 
                            variant="outline" 
                            size="lg" 
                            onClick={scrollToAboutUs}
                            className={`text-sm lg:text-lg px-6 lg:px-8 py-2.5 lg:py-3 border-white text-white hover:bg-white hover:text-black transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}>
                            Learn More
                          </Button>
                        </div>
                        
                        <div className={`flex flex-wrap justify-center items-center gap-4 lg:gap-6 text-xs lg:text-sm text-white/80 transform transition-all duration-700 delay-600 ${
                          current === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-60'
                        }`}>
                          <div className="flex items-center transform transition-all duration-300 hover:scale-110 relative">
                            <span className={`w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full mr-2 animate-pulse ${
                              current === index && Math.random() < 0.02 ? 'shadow-lg shadow-cyan-400/50' : ''
                            }`}></span>
                            <span className={current === index && Math.random() < 0.02 ? 'animate-glitch-text' : ''}>
                              Licensed Partners
                            </span>
                          </div>
                          <div className="flex items-center transform transition-all duration-300 hover:scale-110 relative">
                            <span className={`w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full mr-2 animate-pulse delay-100 ${
                              current === index && Math.random() < 0.02 ? 'shadow-lg shadow-magenta-400/50' : ''
                            }`}></span>
                            <span className={current === index && Math.random() < 0.02 ? 'animate-glitch-text' : ''}>
                              Secure & Confidential
                            </span>
                          </div>
                          <div className="flex items-center transform transition-all duration-300 hover:scale-110 relative">
                            <span className={`w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full mr-2 animate-pulse delay-200 ${
                              current === index && Math.random() < 0.02 ? 'shadow-lg shadow-yellow-400/50' : ''
                            }`}></span>
                            <span className={current === index && Math.random() < 0.02 ? 'animate-glitch-text' : ''}>
                              Free Service
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Slide indicator dots with glitch effect */}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        {slides.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 relative ${
                              current === dotIndex ? 'bg-green-400 scale-125' : 'bg-white/40'
                            } ${current === dotIndex && Math.random() < 0.05 ? 'animate-glitch' : ''}`}
                          >
                            {current === dotIndex && (
                              <div className="absolute inset-0 bg-cyan-400/50 rounded-full animate-ping"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Random glitch artifacts */}
                      {current === index && Math.random() < 0.1 && (
                        <div className="absolute top-2 left-2 w-1 h-8 bg-cyan-400/30 animate-digital-noise"></div>
                      )}
                      {current === index && Math.random() < 0.1 && (
                        <div className="absolute bottom-2 right-2 w-8 h-1 bg-magenta-400/30 animate-digital-noise"></div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={`bg-white/90 hover:bg-white text-black border-white/20 shadow-lg -left-8 lg:-left-12 transform transition-all duration-300 hover:scale-110 relative overflow-hidden ${
                Math.random() < 0.02 ? 'animate-glitch' : ''
              }`}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent animate-glitch-scan"></div>
              </CarouselPrevious>
              <CarouselNext className={`bg-white/90 hover:bg-white text-black border-white/20 shadow-lg -right-8 lg:-right-12 transform transition-all duration-300 hover:scale-110 relative overflow-hidden ${
                Math.random() < 0.02 ? 'animate-glitch' : ''
              }`}>
                <div className="absolute inset-0 bg-gradient-to-l from-magenta-400/10 to-transparent animate-glitch-scan"></div>
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;