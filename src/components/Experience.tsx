import { motion } from "motion/react";
import { Building2, TrendingUp, Users2, Award } from "lucide-react";

const experiences = [
  {
    company: "TechVision Inc.",
    position: "Senior Digital Marketing Manager",
    period: "2022 - Present",
    location: "San Francisco, CA",
    icon: Building2,
    achievements: [
      "Led a team of 8 marketing professionals across content, social media, and paid advertising",
      "Increased overall marketing ROI by 340% through data-driven campaign optimization",
      "Launched 3 major product campaigns generating $5M+ in revenue",
      "Implemented marketing automation workflows reducing campaign deployment time by 60%",
    ],
  },
  {
    company: "Digital Growth Agency",
    position: "Digital Marketing Strategist",
    period: "2019 - 2022",
    location: "Remote",
    icon: TrendingUp,
    achievements: [
      "Managed digital marketing strategies for 15+ B2B and B2C clients",
      "Achieved average client retention rate of 95% through consistent results delivery",
      "Grew social media following by 500K+ across multiple client accounts",
      "Developed comprehensive SEO strategies that improved organic traffic by 280%",
    ],
  },
  {
    company: "BrandBoost Marketing",
    position: "Social Media Manager",
    period: "2017 - 2019",
    location: "New York, NY",
    icon: Users2,
    achievements: [
      "Created and executed social media strategies for Fortune 500 clients",
      "Generated 12M+ impressions monthly across Instagram, Facebook, and Twitter",
      "Developed influencer partnership programs with 100+ creators",
      "Won 'Best Social Media Campaign' award at Digital Marketing Excellence Awards 2019",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Professional Experience</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A track record of driving growth and delivering results across diverse industries 
            and marketing channels.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="md:ml-20">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                      {/* Icon on timeline */}
                      <div className="absolute left-0 top-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hidden md:flex">
                        <Icon className="size-8 text-white" />
                      </div>

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="mb-1">{exp.position}</h3>
                          <div className="text-purple-600 mb-2">{exp.company}</div>
                          <div className="flex items-center gap-4 text-slate-500">
                            <span>{exp.period}</span>
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
