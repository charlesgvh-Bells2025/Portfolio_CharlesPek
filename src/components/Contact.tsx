import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useLanguage } from "../contexts/LanguageContext";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    color: "hover:bg-[#0077b5]",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "#",
    color: "hover:bg-[#1da1f2]",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "#",
    color: "hover:bg-[#e4405f]",
  },
  {
    icon: Mail,
    label: "Email",
    href: "#",
    color: "hover:bg-[#ea4335]",
  },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0f3460]">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
              <h3 className="mb-6 text-[#0f3460]">
                {t.contact.formTitle}
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">
                      {t.contact.firstName}
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="mt-2 border-slate-300 focus:border-[#e94560]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">
                      {t.contact.lastName}
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="mt-2 border-slate-300 focus:border-[#e94560]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">
                    {t.contact.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="charlespekpv@gmail.com"
                    className="mt-2 border-slate-300 focus:border-[#e94560]"
                  />
                </div>

                <div>
                  <Label htmlFor="company">
                    {t.contact.company}
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="mt-2 border-slate-300 focus:border-[#e94560]"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">
                    {t.contact.subject}
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    className="mt-2 border-slate-300 focus:border-[#e94560]"
                  />
                </div>

                <div>
                  <Label htmlFor="message">
                    {t.contact.message}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={t.contact.messagePlaceholder}
                    rows={5}
                    className="mt-2 border-slate-300 focus:border-[#e94560]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#e94560] hover:bg-[#e94560]/90 text-white"
                  size="lg"
                >
                  <Send className="mr-2 size-5" />
                  {t.contact.send}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="bg-gradient-to-br from-[#0f3460] to-[#16213e] rounded-2xl p-8 text-white">
              <h3 className="mb-6">{t.contact.getInTouch}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e94560] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="size-6 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-300 mb-1">
                      {t.contact.emailLabel}
                    </div>
                    <div>charlespekpv@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e94560] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="size-6 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-300 mb-1">
                      {t.contact.phoneLabel}
                    </div>
                    <div>+65 83869592 / 89567270</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e94560] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-6 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-300 mb-1">
                      {t.contact.locationLabel}
                    </div>
                    <div>{t.contact.locationValue}</div>
                    <div className="text-slate-400">
                      {t.contact.availability}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
              <h3 className="mb-6 text-[#0f3460]">
                {t.contact.socialTitle}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:text-white transition-all duration-300 border-2 border-transparent hover:border-current ${social.color} group`}
                    >
                      <Icon className="size-5" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-[#e94560]/10 to-[#533483]/10 border-2 border-[#e94560]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[#0f3460]">
                  {t.contact.currentlyAvailable}
                </span>
              </div>
              <p className="text-slate-600">
                {t.contact.availabilityDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}