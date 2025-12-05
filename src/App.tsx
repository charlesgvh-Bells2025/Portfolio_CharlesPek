import { Hero } from "./components/Hero";
import { DigitalMarketingSkills } from "./components/DigitalMarketingSkills";
import { ProjectGallery } from "./components/ProjectGallery";
import { PortfolioDocuments } from "./components/PortfolioDocuments";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <DigitalMarketingSkills />
        <ProjectGallery />
        <PortfolioDocuments />
        <Testimonials />
        <Contact />
      </div>
    </LanguageProvider>
  );
}