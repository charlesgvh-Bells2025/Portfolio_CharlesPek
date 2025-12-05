import { motion } from "motion/react";
import { Quote, Star, Building2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    { key: 'testimonial1', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop", initials: "SJ", rating: 5 },
    { key: 'testimonial2', avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop", initials: "MC", rating: 5 },
    { key: 'testimonial3', avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop", initials: "ER", rating: 5 },
    { key: 'testimonial4', avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop", initials: "DT", rating: 5 },
    { key: 'testimonial5', avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop", initials: "LA", rating: 5 },
    { key: 'testimonial6', avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop", initials: "JP", rating: 5 },
  ];

  return (
    <section id="testimonials" className="px-6 py-24 bg-gradient-to-br from-[#0f3460] to-[#16213e]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">{t.testimonials.title}</h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const testimonialData = t.testimonials[testimonial.key as keyof typeof t.testimonials] as any;
            return (
              <motion.div
                key={testimonial.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full bg-white/95 backdrop-blur border-2 border-white/20 hover:border-[#e94560] transition-all duration-300 hover:shadow-2xl">
                  <CardContent className="p-6">
                    {/* Quote Icon and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="size-10 text-[#e94560] opacity-50" />
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-slate-600 mb-6 italic">
                      "{testimonialData.content}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonialData.name} />
                        <AvatarFallback className="bg-gradient-to-br from-[#0f3460] to-[#e94560] text-white">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-[#0f3460]">{testimonialData.name}</div>
                        <div className="text-slate-600">{testimonialData.position}</div>
                        <div className="flex items-center gap-1 text-slate-500">
                          <Building2 className="size-3" />
                          <span>{testimonialData.company}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-white/10 backdrop-blur border border-white/20 rounded-2xl">
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <span className="text-white">4.9/5.0 {t.testimonials.averageRating}</span>
            </div>
            <div className="text-slate-300">{t.testimonials.basedOn}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}