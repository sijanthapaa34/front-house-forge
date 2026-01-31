import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import CaseStudyPreview from "@/components/sections/CaseStudyPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <CaseStudyPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
