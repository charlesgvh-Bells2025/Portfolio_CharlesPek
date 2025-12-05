import { motion } from "motion/react";
import { ArrowRight, BarChart3, Target } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import profileImage from "../assets/843dddd3347296fcf707560a573a18ee87641bd3.png";

export function Hero() {
  const { t } = useLanguage();

  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1aalaHC6sPfQvI9eck8_IvgYRc9zZy8RDvvhg0KEFIoA/edit?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#0f3460] via-[#16213e] to-[#0f3460] px-6 py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e94560] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#533483] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#e94560]/20 border border-[#e94560]/30 rounded-full mb-6"
            >
              <Target className="size-4 text-[#e94560]" />
              <span className="text-white">Data-Driven Marketing Specialist</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-2 text-white"
            >
              {t.hero.greeting} Charles Pek Wee Keat
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mb-6 text-white"
            >
              {t.hero.subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-300 mb-8 max-w-xl"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-10"
            >
              <h3 className="text-white mb-4">My Expertise:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Deep market insights & research",
                  "Customer journey mapping",
                  "Campaign budgeting & tracking",
                  "Competitor benchmarking",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e94560] rounded-full" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-[#e94560] hover:bg-[#e94560]/90 text-white group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={handleResumeClick}
              >
                {t.hero.downloadResume}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20"
            >
              <div>
                <div className="text-white mb-1">250%</div>
                <div className="text-slate-400">Avg ROI Increase</div>
              </div>
              <div>
                <div className="text-white mb-1">50+</div>
                <div className="text-slate-400">Campaigns</div>
              </div>
              <div>
                <div className="text-white mb-1">7+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#e94560] to-[#533483] rounded-2xl opacity-20 blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#e94560] to-[#533483] rounded-2xl transform rotate-3" />
              
              {/* Image */}
              <ImageWithFallback
                src={profileImage}
                alt="Professional portrait"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e94560] to-[#533483] rounded-lg flex items-center justify-center">
                    <BarChart3 className="size-6 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-900">Clear ROI</div>
                    <div className="text-slate-500">Measurable Results</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}