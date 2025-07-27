// Feature highlights with remote images - 4x4 grid (16 images)
const FEATURE_IMAGES = [
  {
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Licensed Partners",
    description: "Trusted & Verified"
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Secure & Confidential",
    description: "Protected Data"
  },
  {
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Free Service",
    description: "No Hidden Costs"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Quick Process",
    description: "Fast Results"
  },
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Personal Loans",
    description: "Competitive Rates"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Business Funding",
    description: "Growth Capital"
  },
  {
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Debt Relief",
    description: "Financial Freedom"
  },
  {
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Credit Repair",
    description: "Improve Score"
  },
  {
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Mortgage Loans",
    description: "Home Financing"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Auto Loans",
    description: "Vehicle Finance"
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Student Loans",
    description: "Education Funding"
  },
  {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Credit Cards",
    description: "Best Offers"
  },
  {
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Investment",
    description: "Portfolio Growth"
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Insurance",
    description: "Protection Plans"
  },
  {
    image: "https://images.unsplash.com/photo-1554224154-26032fbc4d72?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Tax Services",
    description: "Expert Help"
  },
  {
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop&auto=format,compress&q=80",
    title: "Financial Planning",
    description: "Future Security"
  }
];

const FeatureHighlights = () => {
  // Split images into 4 columns
  const columns = [
    FEATURE_IMAGES.filter((_, index) => index % 4 === 0), // Column 1
    FEATURE_IMAGES.filter((_, index) => index % 4 === 1), // Column 2
    FEATURE_IMAGES.filter((_, index) => index % 4 === 2), // Column 3
    FEATURE_IMAGES.filter((_, index) => index % 4 === 3), // Column 4
  ];

  return (
    <section className="py-2 lg:py-4 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Vertical Marquee - Alternating directions */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-lg">
          {/* Top fade border - smaller and animated */}
          <div className="absolute top-0 left-0 right-0 h-8 md:h-10 lg:h-12 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none animate-fade-border"></div>
          
          {/* Bottom fade border - smaller and animated */}
          <div className="absolute bottom-0 left-0 right-0 h-8 md:h-10 lg:h-12 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none animate-fade-border"></div>
          
          {/* Side fade borders - smaller and subtle */}
          <div className="absolute top-0 bottom-0 left-0 w-4 md:w-6 lg:w-8 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-4 md:w-6 lg:w-8 bg-gradient-to-l from-background/80 via-background/40 to-transparent z-10 pointer-events-none"></div>
          
          <div className="grid grid-cols-4 gap-1 md:gap-2 lg:gap-3 max-w-6xl mx-auto h-full">
            {columns.map((columnImages, columnIndex) => (
              <div key={columnIndex} className="relative overflow-hidden">
                {/* First set of images */}
                <div className={`absolute top-0 left-0 right-0 ${
                  columnIndex < 2 ? 'animate-marquee-up' : 'animate-marquee-down'
                }`}>
                  {columnImages.map((feature, imageIndex) => (
                    <div key={imageIndex} className="group mb-1 md:mb-2 lg:mb-3">
                      <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                        {/* Enhanced gradient overlay with glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Content overlay with better styling */}
                        <div className="absolute bottom-0 left-0 right-0 p-1 md:p-2 lg:p-3 backdrop-blur-sm">
                          <h3 className="text-white font-bold text-[8px] md:text-xs lg:text-sm mb-0.5 drop-shadow-lg">
                            {feature.title}
                          </h3>
                          <p className="text-white/90 text-[6px] md:text-[10px] lg:text-xs leading-tight drop-shadow-md">
                            {feature.description}
                          </p>
                        </div>
                        
                        {/* Subtle glow border on hover */}
                        <div className="absolute inset-0 rounded-lg ring-1 ring-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className={`absolute top-0 left-0 right-0 ${
                  columnIndex < 2 ? 'animate-marquee-up-delayed' : 'animate-marquee-down-delayed'
                }`}>
                  {columnImages.map((feature, imageIndex) => (
                    <div key={`duplicate-${imageIndex}`} className="group mb-1 md:mb-2 lg:mb-3">
                      <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                        {/* Enhanced gradient overlay with glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Content overlay with better styling */}
                        <div className="absolute bottom-0 left-0 right-0 p-1 md:p-2 lg:p-3 backdrop-blur-sm">
                          <h3 className="text-white font-bold text-[8px] md:text-xs lg:text-sm mb-0.5 drop-shadow-lg">
                            {feature.title}
                          </h3>
                          <p className="text-white/90 text-[6px] md:text-[10px] lg:text-xs leading-tight drop-shadow-md">
                            {feature.description}
                          </p>
                        </div>
                        
                        {/* Subtle glow border on hover */}
                        <div className="absolute inset-0 rounded-lg ring-1 ring-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
