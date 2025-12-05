import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl transform rotate-3" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMwNTI4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional portrait"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">About Me</h2>
            <p className="text-slate-600 mb-6">
              I'm a results-driven digital marketing strategist with over 7 years of experience 
              helping brands amplify their online presence and drive measurable growth. My 
              expertise spans across social media marketing, content strategy, paid advertising, 
              and performance analytics.
            </p>
            <p className="text-slate-600 mb-8">
              I believe in the power of data-driven storytelling and creative campaigns that 
              not only capture attention but convert audiences into loyal customers. My approach 
              combines strategic thinking with hands-on execution to deliver campaigns that 
              exceed expectations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="size-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-slate-900">Senior Digital Marketing Manager</div>
                  <div className="text-slate-500">Currently at TechVision Inc.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="size-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-slate-900">MBA in Marketing</div>
                  <div className="text-slate-500">Stanford University</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="size-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-slate-900">San Francisco, CA</div>
                  <div className="text-slate-500">Open to remote opportunities</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="size-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-slate-900">7+ Years Experience</div>
                  <div className="text-slate-500">Digital Marketing & Strategy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
