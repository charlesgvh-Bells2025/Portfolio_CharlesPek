import { useState } from "react";
import { motion } from "motion/react";
import { Download, Menu, X, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.documents, href: "#documents" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1aalaHC6sPfQvI9eck8_IvgYRc9zZy8RDvvhg0KEFIoA/edit?usp=sharing', '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#0f3460] to-[#e94560] rounded-lg flex items-center justify-center">
              <Briefcase className="size-5 text-white" />
            </div>
            <div>
              <div className="bg-gradient-to-r from-[#0f3460] to-[#e94560] bg-clip-text text-transparent">
                Charles Pek Wee Keat
              </div>
              <div className="text-slate-500">Digital Marketing Specialist</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-[#e94560] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e94560] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <LanguageSwitcher />
            <Button 
              onClick={handleResumeClick}
              className="bg-[#e94560] hover:bg-[#e94560]/90 text-white"
            >
              <Download className="mr-2 size-4" />
              {t.hero.downloadResume}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="size-6 text-[#0f3460]" />
            ) : (
              <Menu className="size-6 text-[#0f3460]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden pt-4 pb-2 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-[#e94560] transition-colors py-2 px-4 rounded-lg hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4">
              <LanguageSwitcher />
            </div>
            <Button 
              onClick={handleResumeClick}
              className="w-full bg-[#e94560] hover:bg-[#e94560]/90 text-white"
            >
              <Download className="mr-2 size-4" />
              {t.hero.downloadResume}
            </Button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}