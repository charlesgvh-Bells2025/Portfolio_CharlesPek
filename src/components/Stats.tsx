import { motion } from "motion/react";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "250%",
    label: "Avg. ROI Increase",
  },
  {
    icon: Users,
    value: "2M+",
    label: "Audience Reached",
  },
  {
    icon: Award,
    value: "50+",
    label: "Campaigns Launched",
  },
  {
    icon: Target,
    value: "95%",
    label: "Client Satisfaction",
  },
];

export function Stats() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                  <Icon className="size-6 text-purple-600" />
                </div>
                <div className="text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
