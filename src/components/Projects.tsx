import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Social Media Brand Revival",
    client: "EcoLife Organics",
    category: "Social Media Marketing",
    description: "Transformed a struggling organic food brand into a social media powerhouse with engaging content strategy and influencer partnerships.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjMwNTQwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Follower Growth", value: "+340%" },
      { label: "Engagement Rate", value: "8.5%" },
      { label: "Reach Increase", value: "+500K" },
    ],
    tags: ["Instagram", "TikTok", "Content Creation"],
  },
  {
    id: 2,
    title: "Email Campaign Optimization",
    client: "TechStart SaaS",
    category: "Email Marketing",
    description: "Redesigned email marketing strategy with personalized automation flows, resulting in significant improvements in open rates and conversions.",
    image: "https://images.unsplash.com/photo-1683117927786-f146451082fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGNhbXBhaWduJTIwZGVzaWdufGVufDF8fHx8MTc2MzA4NTIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Open Rate", value: "45%" },
      { label: "Click-through", value: "12.3%" },
      { label: "Conversions", value: "+280%" },
    ],
    tags: ["Email Automation", "A/B Testing", "CRM"],
  },
  {
    id: 3,
    title: "Content Strategy Overhaul",
    client: "Urban Fitness Co.",
    category: "Content Marketing",
    description: "Developed comprehensive content strategy across blog, video, and social platforms to establish thought leadership in the fitness industry.",
    image: "https://images.unsplash.com/photo-1676287571982-611b20c9752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYyOTg2MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Organic Traffic", value: "+425%" },
      { label: "Time on Site", value: "4.2 min" },
      { label: "Blog Subscribers", value: "+15K" },
    ],
    tags: ["SEO", "Video Marketing", "Blogging"],
  },
  {
    id: 4,
    title: "Performance Analytics Dashboard",
    client: "Fashion Forward",
    category: "Analytics & Reporting",
    description: "Implemented comprehensive analytics framework to track multi-channel campaign performance and optimize marketing spend in real-time.",
    image: "https://images.unsplash.com/photo-1642480532034-362360552ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjMwODUyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Cost Savings", value: "$125K" },
      { label: "ROAS", value: "4.8x" },
      { label: "Data Accuracy", value: "99.2%" },
    ],
    tags: ["Google Analytics", "Data Visualization", "KPI Tracking"],
  },
  {
    id: 5,
    title: "Paid Advertising Scale-Up",
    client: "HomeStyle Decor",
    category: "Paid Advertising",
    description: "Scaled paid advertising campaigns across Google Ads and Meta platforms with data-driven optimization and creative testing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzYzMDgyMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Ad Spend ROI", value: "380%" },
      { label: "CPA Reduction", value: "-45%" },
      { label: "Revenue Growth", value: "+$2.1M" },
    ],
    tags: ["Google Ads", "Meta Ads", "Retargeting"],
  },
  {
    id: 6,
    title: "Influencer Partnership Campaign",
    client: "BeautyBloom Cosmetics",
    category: "Influencer Marketing",
    description: "Orchestrated influencer marketing campaign with 25+ creators, generating viral content and driving unprecedented brand awareness.",
    image: "https://images.unsplash.com/photo-1646446852987-9286f631b2b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwbWFya2V0aW5nfGVufDF8fHx8MTc2MzAzNjQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Impressions", value: "12M+" },
      { label: "Engagement", value: "450K" },
      { label: "Sales Attributed", value: "$850K" },
    ],
    tags: ["Influencer Outreach", "Campaign Management", "UGC"],
  },
];

export function Projects() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A showcase of successful digital marketing campaigns that delivered measurable results 
            and exceeded client expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
