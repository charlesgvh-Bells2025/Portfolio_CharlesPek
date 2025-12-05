import { motion } from "motion/react";
import { FileText, Download, Eye, FileBarChart, FileSpreadsheet, FileImage, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "../contexts/LanguageContext";

export function PortfolioDocuments() {
  const { t } = useLanguage();

  const documents = [
    {
      id: 1,
      titleKey: 'doc1',
      icon: FileBarChart,
      pages: 24,
      size: "2.4 MB",
    },
    {
      id: 2,
      titleKey: 'doc2',
      icon: Calendar,
      pages: 18,
      size: "1.8 MB",
    },
    {
      id: 3,
      titleKey: 'doc3',
      icon: FileText,
      pages: 16,
      size: "3.1 MB",
    },
    {
      id: 4,
      titleKey: 'doc4',
      icon: FileSpreadsheet,
      pages: 32,
      size: "4.2 MB",
    },
    {
      id: 5,
      titleKey: 'doc5',
      icon: FileImage,
      pages: 20,
      size: "5.6 MB",
    },
    {
      id: 6,
      titleKey: 'doc6',
      icon: FileSpreadsheet,
      pages: 14,
      size: "1.5 MB",
    },
  ];

  return (
    <section id="documents" className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0f3460]">{t.documents.title}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            {t.documents.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            const docData = t.documents[doc.titleKey as keyof typeof t.documents] as any;
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Card className="group h-full border-2 border-slate-200 hover:border-[#e94560] transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    {/* Icon and Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0f3460] to-[#16213e] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="size-7 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {docData.type}
                      </Badge>
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-[#0f3460] line-clamp-2">{docData.title}</h3>
                    
                    <div className="flex items-center gap-4 text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FileText className="size-3" />
                        {doc.pages}{t.documents.pages}
                      </span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>

                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {docData.description}
                    </p>

                    <Badge className="mb-4 bg-[#e94560]/10 text-[#e94560] hover:bg-[#e94560]/20">
                      {docData.category}
                    </Badge>

                    <div className="text-slate-400 mb-4">{docData.date}</div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-[#0f3460] text-[#0f3460] hover:bg-[#0f3460] hover:text-white"
                      >
                        <Eye className="size-4 mr-2" />
                        Preview
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-[#e94560] hover:bg-[#e94560]/90 text-white"
                      >
                        <Download className="size-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#0f3460]/5 to-[#e94560]/5 rounded-xl border border-[#0f3460]/20">
            <FileText className="size-5 text-[#0f3460]" />
            <p className="text-slate-600">
              All documents are anonymized to protect client confidentiality. 
              Full case studies available upon request for serious inquiries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}