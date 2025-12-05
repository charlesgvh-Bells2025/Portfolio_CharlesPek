import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
// import chefVisionImage from "figma:asset/3c9e7cf3dde8b9de7b00f87e1d9f0b992e10f0a9.png";

const projects = [
  {
    id: 1,
    title: "Chef Vision",
    category: "Website Development & SEO",
    description: "Complete digital presence for culinary professionals, featuring responsive design, content optimization, and local SEO strategy.",
    website: "www.chefvision.biz",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZ3xlbnwxfHx8fDE3NjM1MjYxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    skills: ["SEO", "Web Development", "Content Strategy"],
    metrics: {
      traffic: "Website launched",
      visibility: "Enhanced online presence",
      engagement: "Professional branding",
    },
    caseStudy: "Developed a comprehensive digital platform for Chef Vision, focusing on creating an intuitive user experience for culinary professionals. Implemented SEO best practices, optimized site structure for search engines, and created engaging content that showcases culinary expertise and services.",
  },
  {
    id: 2,
    title: "Le Petit Paris",
    category: "E-commerce & Digital Marketing",
    description: "E-commerce platform and digital marketing strategy for authentic French products, combining elegant design with conversion optimization.",
    website: "www.lepetitparis.shop",
    image: "https://images.unsplash.com/photo-1577056923041-6f8628ea2302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBiaXN0cm8lMjBwYXJpcyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYzNTI2MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["E-commerce", "Campaign Planning", "Social Media Marketing"],
    metrics: {
      platform: "Full e-commerce setup",
      optimization: "Conversion-focused design",
      branding: "Authentic French aesthetic",
    },
    caseStudy: "Created a sophisticated e-commerce experience for Le Petit Paris, capturing the essence of French culture while optimizing for online sales. Implemented secure payment systems, product showcase strategies, and integrated marketing campaigns to drive traffic and conversions.",
  },
  {
    id: 3,
    title: "Cruising Chefs (Coming Soon)",
    category: "Pre-Launch Marketing",
    description: "Pre-launch strategy and website development for innovative cruise culinary service, building anticipation and email list growth.",
    website: "www.cruisingchefs.com.sg",
    image: "https://images.unsplash.com/photo-1514814309075-1f08d9a71f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwZGluaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc2MzUyNjE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Pre-Launch Strategy", "Email Marketing", "Content Creation"],
    metrics: {
      status: "Coming Soon",
      strategy: "Launch campaign ready",
      anticipation: "Building waitlist",
    },
    caseStudy: "Developing comprehensive pre-launch marketing strategy for Cruising Chefs, creating compelling 'Coming Soon' experience to capture early interest. Building email list infrastructure, planning content calendar for launch, and establishing brand presence before official unveiling.",
  },
  {
    id: 4,
    title: "ANA Airline Mobile App Marketing",
    category: "App Marketing & Optimization",
    description: "Content creation and optimization marketing strategy for Nippon Airway's mobile application, enhancing user engagement and app store visibility.",
    client: "Nippon Airway Pte Ltd",
    date: "September 2025",
    image: "https://images.unsplash.com/photo-1758351119639-00cf56ad7774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJsaW5lJTIwbW9iaWxlJTIwYXBwJTIwYXZpYXRpb258ZW58MXx8fHwxNjM1MjYxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["App Store Optimization", "Content Marketing", "Mobile Strategy"],
    metrics: {
      optimization: "ASO implementation",
      content: "Multi-channel campaigns",
      engagement: "Enhanced user acquisition",
    },
    caseStudy: "Led content and optimization marketing initiatives for ANA Airline's mobile app, focusing on app store optimization (ASO), creating compelling app descriptions, visual assets, and user engagement campaigns. Developed content strategy to highlight app features and drive downloads.",
  },
  {
    id: 5,
    title: "Formaldehyde Solutions by Aura Homes",
    category: "Complete Marketing Strategy",
    description: "End-to-end marketing strategy planning and execution for innovative formaldehyde solution products, from market research to campaign implementation.",
    client: "Aura Homes Pte Ltd",
    date: "August 2025",
    image: "https://images.unsplash.com/photo-1760155089939-1c9d2a45c0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBzb2x1dGlvbnN8ZW58MXx8fHwxNjM1MjYxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Market Research", "Campaign Planning", "Strategy Execution"],
    metrics: {
      strategy: "360° marketing plan",
      execution: "Multi-channel campaigns",
      positioning: "Brand differentiation",
    },
    caseStudy: "Developed comprehensive marketing strategy for Aura Homes' formaldehyde solutions, including market analysis, competitor research, target audience identification, brand positioning, and multi-channel campaign execution. Created integrated marketing plan covering digital, content, and traditional marketing channels.",
  },
  {
    id: 6,
    title: "JOY Mango Strategy Marketing",
    category: "Customer Journey & Strategy",
    description: "Strategic marketing initiative including customer buy journey mapping, KPI planning, and comprehensive content calendar for product launch.",
    client: "JOY Mango",
    date: "July 2025 (OCT Launch)",
    image: "https://images.unsplash.com/photo-1762255523716-9a9e48673c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGZydWl0JTIwdHJvcGljYWwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjM1MjYxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Journey Mapping", "KPI Strategy", "Content Calendar"],
    metrics: {
      journey: "Complete buy journey mapped",
      kpis: "Strategic KPIs defined",
      calendar: "Content calendar created",
    },
    caseStudy: "Executed strategic marketing planning for JOY Mango, mapping complete customer buy journey from awareness to purchase. Established key performance indicators aligned with business goals, developed comprehensive content calendar mapping out campaigns, posts, and touchpoints across multiple channels.",
  },
  {
    id: 7,
    title: "Aura Home Solutions",
    category: "Digital Marketing & Social Media",
    description: "Complete digital marketing and social media content creation strategy, establishing brand presence and engaging target audience.",
    client: "Aura Home Solutions Pte Ltd",
    date: "September 2025",
    image: "https://images.unsplash.com/photo-1760155089939-1c9d2a45c0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBzb2x1dGlvbnN8ZW58MXx8fHwxNjM1MjYxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Social Media Calendar", "Content Creation", "Digital Marketing"],
    metrics: {
      content: "Multi-platform content",
      engagement: "Social media growth",
      presence: "Digital brand building",
    },
    caseStudy: "Implemented full-scale digital marketing and social media content creation for Aura Home Solutions, developing engaging content across platforms, establishing brand voice, creating visual assets, and managing social media calendar to drive engagement and brand awareness in the home solutions market.",
  },
  {
    id: 8,
    title: "Double Zipblinds",
    category: "Strategic Marketing & Analysis",
    description: "Content creation, customer buy journey mapping, SWOT analysis, and AIDA awareness framework implementation for window treatment specialist.",
    client: "Double Zipblinds Pte Ltd",
    image: "https://images.unsplash.com/photo-1609534117141-ff9f20450902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBibGluZHMlMjBpbnRlcmlvciUyMGhvbWV8ZW58MXx8fHwxNzYzNTI2MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Journey Mapping", "SWOT Analysis", "AIDA Framework"],
    metrics: {
      journey: "Customer journey mapped",
      analysis: "SWOT completed",
      awareness: "AIDA strategy implemented",
    },
    caseStudy: "Conducted comprehensive marketing analysis and strategy for Double Zipblinds, including detailed customer buy journey mapping, SWOT analysis identifying strengths, weaknesses, opportunities, and threats, and implementing AIDA (Attention, Interest, Desire, Action) framework for marketing campaigns and content creation.",
  },
];

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { t } = useLanguage();

  return (
    <section id="projects" className="px-6 py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0f3460]">{t.projects.title}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-[#e94560] transition-all duration-300 hover:shadow-2xl h-full">
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#e94560] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="size-5 text-white" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white text-[#0f3460]">
                    {project.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-[#0f3460]">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-[#0f3460]/10 to-[#e94560]/10 text-[#0f3460] rounded-full border border-[#0f3460]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <button className="text-[#e94560] group-hover:underline flex items-center gap-2">
                      {t.projects.viewCase}
                      <ExternalLink className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div>
              <div className="relative aspect-video mb-6 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <Badge className="mb-4 bg-[#e94560] text-white">
                {selectedProject.category}
              </Badge>

              <h2 className="mb-4 text-[#0f3460]">{selectedProject.title}</h2>
              <p className="text-slate-600 mb-6">{selectedProject.description}</p>

              <div className="grid sm:grid-cols-3 gap-4 mb-6 p-6 bg-gradient-to-br from-[#0f3460]/5 to-[#e94560]/5 rounded-xl">
                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-[#e94560] mb-1">{value}</div>
                    <div className="text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <h3 className="mb-3 text-[#0f3460]">Case Study Details</h3>
              <p className="text-slate-600 mb-6">{selectedProject.caseStudy}</p>

              <h3 className="mb-3 text-[#0f3460]">Skills Applied</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-[#0f3460] to-[#16213e] text-white rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}