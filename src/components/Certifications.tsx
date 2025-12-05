import { motion } from "motion/react";
import { Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const certifications = [
  {
    name: "Google Ads Certification",
    issuer: "Google",
    date: "2024",
    badge: "Professional",
  },
  {
    name: "Meta Blueprint Certification",
    issuer: "Meta",
    date: "2024",
    badge: "Advanced",
  },
  {
    name: "HubSpot Content Marketing",
    issuer: "HubSpot Academy",
    date: "2023",
    badge: "Certified",
  },
  {
    name: "Google Analytics 4 Certified",
    issuer: "Google",
    date: "2023",
    badge: "Professional",
  },
  {
    name: "Hootsuite Social Marketing",
    issuer: "Hootsuite",
    date: "2023",
    badge: "Certified",
  },
  {
    name: "Digital Marketing Strategy",
    issuer: "Cornell University",
    date: "2022",
    badge: "Executive",
  },
];

const skills = [
  "Social Media Marketing",
  "Content Strategy",
  "SEO/SEM",
  "Google Ads",
  "Meta Ads",
  "Email Marketing",
  "Marketing Automation",
  "Analytics & Reporting",
  "Influencer Marketing",
  "Campaign Management",
  "A/B Testing",
  "CRM Management",
  "Copywriting",
  "Brand Strategy",
  "Performance Marketing",
  "Video Marketing",
];

export function Certifications() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="mb-4">Certifications & Credentials</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Continuously learning and staying updated with the latest digital marketing 
              platforms and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Award className="size-6 text-purple-600" />
                      </div>
                      <Badge variant="secondary">{cert.badge}</Badge>
                    </div>
                    <h3 className="mb-2">{cert.name}</h3>
                    <div className="text-slate-600 mb-1">{cert.issuer}</div>
                    <div className="text-slate-500">{cert.date}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="mb-4">Core Skills & Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive skill set covering all aspects of modern digital marketing.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-full hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="size-4 text-purple-600" />
                <span className="text-slate-700">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
