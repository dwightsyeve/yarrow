import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";

const ApplyNow = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Apply for Financial Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete our secure application to get matched with the right financial partner for your needs. 
                The process is quick, free, and completely confidential.
              </p>
            </div>
            <ApplicationForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyNow;