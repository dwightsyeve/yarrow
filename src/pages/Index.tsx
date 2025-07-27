import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import FeatureHighlights from "@/components/FeatureHighlights";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeatureHighlights />
        <div id="services">
          <Services />
        </div>
        <div id="application">
          <ApplicationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
