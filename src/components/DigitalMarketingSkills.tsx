import { motion } from "motion/react";
import { 
  Search, 
  TrendingUp, 
  Users, 
  Calendar, 
  Mail, 
  BarChart3,
  Target,
  Compass
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const skills = [
  {
    name: "SEO",
    fullName: "Search Engine Optimization",
    icon: Search,
    description: "Organic visibility & ranking strategies",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "SEM",
    fullName: "Search Engine Marketing",
    icon: TrendingUp,
    description: "Paid search campaigns & bidding",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Market Research",
    fullName: "Market Research Landscape Analysis",
    icon: Compass,
    description: "Industry trends & competitive insights",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Journey Mapping",
    fullName: "Customer Buy Journey Mapping",
    icon: Target,
    description: "Conversion optimization pathways",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Social Media",
    fullName: "Social Media Calendar Planning",
    icon: Users,
    description: "Content scheduling & engagement",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Campaign Planning",
    fullName: "Campaign Calendar & Budget Planning",
    icon: Calendar,
    description: "Strategic resource allocation",
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Email Marketing",
    fullName: "Email Marketing Automation",
    icon: Mail,
    description: "Automated nurture sequences",
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Competitor Analysis",
    fullName: "Competitor Analysis",
    icon: BarChart3,
    description: "Benchmarking & strategy adaptation",
    color: "from-amber-500 to-orange-500",
  },
];

export function DigitalMarketingSkills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0f3460]">{t.skills.title}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="h-full bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-[#e94560] transition-all duration-300 hover:shadow-xl">
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="size-8 text-white" />
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#e94560] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-[#0f3460]">{skill.name}</h3>
                  <p className="text-slate-500 mb-3">{skill.fullName}</p>
                  <p className="text-slate-400">{skill.description}</p>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e94560] to-[#533483] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0f3460] to-[#16213e] text-white rounded-full">
            <span>✓ Proven track record of using analytics to drive real business results</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}