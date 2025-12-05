import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Metric {
  label: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  metrics: Metric[];
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative overflow-hidden aspect-video">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight className="size-5 text-slate-900" />
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="mb-3">
            <Badge variant="secondary" className="mb-2">
              {project.category}
            </Badge>
            <h3 className="mb-1">{project.title}</h3>
            <p className="text-slate-500">{project.client}</p>
          </div>

          <p className="text-slate-600 mb-6">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-100">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-purple-600 mb-1">{metric.value}</div>
                <div className="text-slate-500">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
