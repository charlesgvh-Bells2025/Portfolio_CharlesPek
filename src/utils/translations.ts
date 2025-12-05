export type Language = 'en' | 'zh' | 'ms' | 'es' | 'ja' | 'it';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      documents: 'Documents',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      greeting: 'Hi, I\'m',
      title: 'Digital Marketing Strategist',
      subtitle: 'Delivering Data-Driven Digital Marketing Strategies',
      description: 'I translate complex metrics into actionable growth strategies, specializing in holistic campaign management from SEO/SEM to social media and customer journey mapping.',
      cta: 'View My Work',
      downloadResume: 'Download Resume',
    },
    // Skills Section
    skills: {
      title: 'Digital Marketing Expertise',
      subtitle: 'Comprehensive skills across the digital marketing spectrum',
      seo: {
        title: 'SEO & SEM',
        desc: 'Search optimization and paid search strategies',
      },
      social: {
        title: 'Social Media Marketing',
        desc: 'Multi-platform engagement and growth',
      },
      content: {
        title: 'Content Strategy',
        desc: 'Data-driven content creation and distribution',
      },
      analytics: {
        title: 'Analytics & Insights',
        desc: 'Advanced tracking and performance analysis',
      },
      email: {
        title: 'Email Marketing',
        desc: 'Automated campaigns and segmentation',
      },
      ppc: {
        title: 'PPC Advertising',
        desc: 'ROI-focused paid advertising campaigns',
      },
      brand: {
        title: 'Brand Strategy',
        desc: 'Cohesive brand identity and positioning',
      },
      conversion: {
        title: 'Conversion Optimization',
        desc: 'CRO and customer journey mapping',
      },
    },
    // Projects Section
    projects: {
      title: 'Featured Projects',
      subtitle: 'Real results from data-driven campaigns',
      viewCase: 'View Case Study',
      metrics: 'Key Metrics',
      strategy: 'Strategy',
      results: 'Results',
      closeCase: 'Close Case Study',
    },
    // Documents Section
    documents: {
      title: 'Portfolio Documents',
      subtitle: 'Detailed case studies and campaign reports',
      download: 'Download PDF',
      pages: 'pages',
      doc1: {
        title: 'Q4 2024 SEO Campaign Report',
        type: 'Performance Report',
        date: 'November 2024',
        description: 'Comprehensive analysis of SEO campaign results including keyword rankings, organic traffic growth, and conversion metrics.',
        category: 'SEO',
      },
      doc2: {
        title: 'Social Media Content Strategy 2025',
        type: 'Strategy Document',
        date: 'January 2025',
        description: '12-month social media content calendar with platform-specific strategies, content pillars, and engagement tactics.',
        category: 'Social Media',
      },
      doc3: {
        title: 'Email Marketing Automation Workflow',
        type: 'Case Study',
        date: 'October 2024',
        description: 'Detailed breakdown of automated email sequences, segmentation strategy, and performance analytics for SaaS client.',
        category: 'Email Marketing',
      },
      doc4: {
        title: 'Competitive Market Analysis - Fintech',
        type: 'Research Report',
        date: 'September 2024',
        description: 'In-depth competitive landscape analysis with SWOT analysis, market positioning, and strategic recommendations.',
        category: 'Market Research',
      },
      doc5: {
        title: 'Brand Positioning & Visual Identity Guide',
        type: 'Brand Guidelines',
        date: 'August 2024',
        description: 'Complete brand identity system including positioning, messaging framework, and visual design specifications.',
        category: 'Branding',
      },
      doc6: {
        title: 'PPC Campaign Performance Dashboard',
        type: 'Analytics Report',
        date: 'December 2024',
        description: 'Interactive dashboard showcasing multi-platform PPC performance with advanced attribution modeling and ROAS analysis.',
        category: 'PPC',
      },
    },
    // Testimonials Section
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'Hear from marketing leaders and business owners who have experienced measurable growth through data-driven digital marketing strategies.',
      averageRating: 'Average Client Rating',
      basedOn: 'Based on 50+ completed projects',
      testimonial1: {
        name: 'Sarah Johnson',
        position: 'VP of Marketing',
        company: 'TechVision Inc.',
        content: 'The SEO strategy delivered exceeded all expectations. We saw a 425% increase in organic traffic and our revenue from organic channels tripled. The attention to detail and data-driven approach was exceptional.',
      },
      testimonial2: {
        name: 'Michael Chen',
        position: 'CEO',
        company: 'GreenLeaf Organics',
        content: 'Our social media presence was completely transformed. The content calendar and engagement strategy helped us grow from 5K to 125K followers in less than a year. Incredible results!',
      },
      testimonial3: {
        name: 'Emily Rodriguez',
        position: 'Director of Growth',
        company: 'CloudSync SaaS',
        content: 'The email automation workflows were a game-changer for our business. Our trial-to-paid conversion rate increased by 280% and we\'re now seeing consistent revenue growth month over month.',
      },
      testimonial4: {
        name: 'David Thompson',
        position: 'Marketing Manager',
        company: 'HealthFirst Medical',
        content: 'The Google Ads campaign optimization saved us over $200K in wasted ad spend while improving our ROAS to 4.8x. The strategic approach and continuous optimization delivered outstanding results.',
      },
      testimonial5: {
        name: 'Lisa Anderson',
        position: 'Founder',
        company: 'FinTech Solutions',
        content: 'The market research and competitive analysis provided invaluable insights that shaped our entire go-to-market strategy. We identified opportunities worth $10M+ in TAM that we weren\'t aware of.',
      },
      testimonial6: {
        name: 'James Park',
        position: 'Head of Digital',
        company: 'Enterprise Software Co.',
        content: 'The customer journey mapping revealed critical friction points we never knew existed. After implementing the recommended changes, our conversion rate increased by 165%. Exceptional analytical skills.',
      },
    },
    // Contact Section
    contact: {
      title: 'Let\'s Connect',
      subtitle: 'Ready to drive measurable growth for your business? Let\'s discuss how data-driven digital marketing can achieve your goals.',
      formTitle: 'Send a Message',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      company: 'Company Name',
      subject: 'Subject',
      message: 'Message',
      messagePlaceholder: 'Tell me about your digital marketing needs...',
      send: 'Send Message',
      getInTouch: 'Get in Touch',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      locationValue: 'Singapore',
      availability: 'Available for remote work',
      socialTitle: 'Connect on Social',
      currentlyAvailable: 'Currently Available',
      availabilityDesc: 'Open to new projects and employment opportunities. Typically respond within 24 hours.',
    },
  },
  zh: {
    // Navigation
    nav: {
      home: '首页',
      skills: '技能',
      projects: '项目',
      documents: '文档',
      testimonials: '推荐',
      contact: '联系',
    },
    // Hero Section
    hero: {
      greeting: '你好，我是',
      title: '数字营销策略师',
      subtitle: '提供数据驱动的数字营销策略',
      description: '我将复杂的指标转化为可操作的增长策略，专注于从SEO/SEM到社交媒体和客户旅程映射的整体营销活动管理。',
      cta: '查看我的作品',
      downloadResume: '下载简历',
    },
    // Skills Section
    skills: {
      title: '数字营销专业知识',
      subtitle: '全方位的数字营销技能',
      seo: {
        title: 'SEO与SEM',
        desc: '搜索优化和付费搜索策略',
      },
      social: {
        title: '社交媒体营销',
        desc: '多平台参与和增长',
      },
      content: {
        title: '内容策略',
        desc: '数据驱动的内容创作和分发',
      },
      analytics: {
        title: '分析与洞察',
        desc: '高级跟踪和性能分析',
      },
      email: {
        title: '电子邮件营销',
        desc: '自动化营销活动和细分',
      },
      ppc: {
        title: 'PPC广告',
        desc: '以ROI为重点的付费广告活动',
      },
      brand: {
        title: '品牌策略',
        desc: '统一的品牌形象和定位',
      },
      conversion: {
        title: '转化优化',
        desc: 'CRO和客户旅程映射',
      },
    },
    // Projects Section
    projects: {
      title: '精选项目',
      subtitle: '数据驱动营销活动的实际成果',
      viewCase: '查看案例研究',
      metrics: '关键指标',
      strategy: '策略',
      results: '结果',
      closeCase: '关闭案例研究',
    },
    // Documents Section
    documents: {
      title: '作品集文档',
      subtitle: '详细的案例研究和营销活动报告',
      download: '下载PDF',
      pages: '页',
      doc1: { title: '2024年第四季度SEO活动报告', type: '绩效报告', date: '2024年11月', description: '全面分析SEO活动结果，包括关键词排名、自然流量增长和转化指标。', category: 'SEO' },
      doc2: { title: '2025年社交媒体内容策略', type: '战略文件', date: '2025年1月', description: '12个月社交媒体内容日历，包含平台特定策略、内容支柱和参与策略。', category: '社交媒体' },
      doc3: { title: '电子邮件营销自动化工作流', type: '案例研究', date: '2024年10月', description: '详细分解自动化电子邮件序列、细分策略和SaaS客户的性能分析。', category: '电子邮件营销' },
      doc4: { title: '金融科技竞争市场分析', type: '研究报告', date: '2024年9月', description: '深入的竞争格局分析，包含SWOT分析、市场定位和战略建议。', category: '市场研究' },
      doc5: { title: '品牌定位与视觉识别指南', type: '品牌指南', date: '2024年8月', description: '完整的品牌识别系统，包括定位、信息框架和视觉设计规范。', category: '品牌' },
      doc6: { title: 'PPC活动绩效仪表板', type: '分析报告', date: '2024年12月', description: '展示多平台PPC性能的交互式仪表板，包含高级归因建模和ROAS分析。', category: 'PPC' },
    },
    // Testimonials Section
    testimonials: {
      title: '客户推荐',
      subtitle: '听取营销领导者和企业主的评价，他们通过数据驱动的数字营销策略实现了可衡量的增长。',
      averageRating: '平均客户评分',
      basedOn: '基于50多个完成的项目',
      testimonial1: { name: 'Sarah Johnson', position: '营销副总裁', company: 'TechVision Inc.', content: 'SEO策略的成效超出了所有预期。我们的自然流量增长了425%，来自自然渠道的收入翻了三倍。对细节的关注和数据驱动的方法非常出色。' },
      testimonial2: { name: 'Michael Chen', position: '首席执行官', company: 'GreenLeaf Organics', content: '我们的社交媒体影响力得到了彻底改造。内容日历和参与策略帮助我们在不到一年的时间内从5000名关注者增长到125000名。令人难以置信的结果！' },
      testimonial3: { name: 'Emily Rodriguez', position: '增长总监', company: 'CloudSync SaaS', content: '电子邮件自动化工作流程改变了我们的业务。试用转付费转化率提高了280%，我们现在每月都看到持续的收入增长。' },
      testimonial4: { name: 'David Thompson', position: '营销经理', company: 'HealthFirst Medical', content: 'Google Ads活动优化为我们节省了超过20万美元的广告支出浪费，同时将ROAS提高到4.8倍。战略方法和持续优化带来了出色的成果。' },
      testimonial5: { name: 'Lisa Anderson', position: '创始人', company: 'FinTech Solutions', content: '市场研究和竞争分析提供了宝贵的见解，塑造了我们整个上市策略。我们发现了价值超过1000万美元的TAM机会，这是我们之前不知道的。' },
      testimonial6: { name: 'James Park', position: '数字主管', company: 'Enterprise Software Co.', content: '客户旅程映射揭示了我们从未知道存在的关键摩擦点。实施推荐的更改后，我们的转化率提高了165%。杰出的分析能力。' },
    },
    // Contact Section
    contact: {
      title: '让我们联系',
      subtitle: '准备为您的业务带来可衡量的增长？让我们讨论数据驱动的数字营销如何实现您的目标。',
      formTitle: '发送消息',
      firstName: '名',
      lastName: '姓',
      email: '电子邮件地址',
      company: '公司名称',
      subject: '主题',
      message: '消息',
      messagePlaceholder: '告诉我您的数字营销需求...',
      send: '发送消息',
      getInTouch: '联系方式',
      emailLabel: '电子邮件',
      phoneLabel: '电话',
      locationLabel: '位置',
      locationValue: '新加坡',
      availability: '可远程工作',
      socialTitle: '社交媒体',
      currentlyAvailable: '目前可用',
      availabilityDesc: '接受新项目和就业机会。通常在24小时内回复。',
    },
  },
  ms: {
    // Navigation
    nav: {
      home: 'Utama',
      skills: 'Kemahiran',
      projects: 'Projek',
      documents: 'Dokumen',
      testimonials: 'Testimoni',
      contact: 'Hubungi',
    },
    // Hero Section
    hero: {
      greeting: 'Hai, saya',
      title: 'Ahli Strategi Pemasaran Digital',
      subtitle: 'Menyampaikan Strategi Pemasaran Digital Berdasarkan Data',
      description: 'Saya menterjemah metrik kompleks kepada strategi pertumbuhan yang boleh dilaksanakan, pakar dalam pengurusan kempen holistik dari SEO/SEM hingga media sosial dan pemetaan perjalanan pelanggan.',
      cta: 'Lihat Kerja Saya',
      downloadResume: 'Muat Turun Resume',
    },
    // Skills Section
    skills: {
      title: 'Kepakaran Pemasaran Digital',
      subtitle: 'Kemahiran komprehensif merentasi spektrum pemasaran digital',
      seo: {
        title: 'SEO & SEM',
        desc: 'Pengoptimuman carian dan strategi carian berbayar',
      },
      social: {
        title: 'Pemasaran Media Sosial',
        desc: 'Penglibatan dan pertumbuhan pelbagai platform',
      },
      content: {
        title: 'Strategi Kandungan',
        desc: 'Penciptaan dan pengedaran kandungan berdasarkan data',
      },
      analytics: {
        title: 'Analitik & Pandangan',
        desc: 'Penjejakan lanjutan dan analisis prestasi',
      },
      email: {
        title: 'Pemasaran E-mel',
        desc: 'Kempen automatik dan segmentasi',
      },
      ppc: {
        title: 'Pengiklanan PPC',
        desc: 'Kempen pengiklanan berbayar berfokus ROI',
      },
      brand: {
        title: 'Strategi Jenama',
        desc: 'Identiti jenama yang padu dan kedudukan',
      },
      conversion: {
        title: 'Pengoptimuman Penukaran',
        desc: 'CRO dan pemetaan perjalanan pelanggan',
      },
    },
    // Projects Section
    projects: {
      title: 'Projek Pilihan',
      subtitle: 'Hasil sebenar dari kempen berdasarkan data',
      viewCase: 'Lihat Kajian Kes',
      metrics: 'Metrik Utama',
      strategy: 'Strategi',
      results: 'Keputusan',
      closeCase: 'Tutup Kajian Kes',
    },
    // Documents Section
    documents: {
      title: 'Dokumen Portfolio',
      subtitle: 'Kajian kes terperinci dan laporan kempen',
      download: 'Muat Turun PDF',
      pages: 'halaman',
      doc1: { title: 'Laporan Kempen SEO Q4 2024', type: 'Laporan Prestasi', date: 'November 2024', description: 'Analisis menyeluruh keputusan kempen SEO termasuk kedudukan kata kunci, pertumbuhan trafik organik, dan metrik penukaran.', category: 'SEO' },
      doc2: { title: 'Strategi Kandungan Media Sosial 2025', type: 'Dokumen Strategi', date: 'Januari 2025', description: 'Kalendar kandungan media sosial 12 bulan dengan strategi khusus platform, tonggak kandungan, dan taktik penglibatan.', category: 'Media Sosial' },
      doc3: { title: 'Aliran Kerja Automasi Pemasaran E-mel', type: 'Kajian Kes', date: 'Oktober 2024', description: 'Pecahan terperinci urutan e-mel automatik, strategi segmentasi, dan analitik prestasi untuk pelanggan SaaS.', category: 'Pemasaran E-mel' },
      doc4: { title: 'Analisis Pasaran Kompetitif - Fintech', type: 'Laporan Penyelidikan', date: 'September 2024', description: 'Analisis landskap kompetitif mendalam dengan analisis SWOT, kedudukan pasaran, dan cadangan strategik.', category: 'Penyelidikan Pasaran' },
      doc5: { title: 'Panduan Kedudukan Jenama & Identiti Visual', type: 'Garis Panduan Jenama', date: 'Ogos 2024', description: 'Sistem identiti jenama lengkap termasuk kedudukan, rangka kerja mesej, dan spesifikasi reka bentuk visual.', category: 'Penjenamaan' },
      doc6: { title: 'Papan Pemuka Prestasi Kempen PPC', type: 'Laporan Analitik', date: 'Disember 2024', description: 'Papan pemuka interaktif mempamerkan prestasi PPC pelbagai platform dengan pemodelan atribusi lanjutan dan analisis ROAS.', category: 'PPC' },
    },
    // Testimonials Section
    testimonials: {
      title: 'Testimoni Pelanggan',
      subtitle: 'Dengar dari pemimpin pemasaran dan pemilik perniagaan yang telah mengalami pertumbuhan yang boleh diukur melalui strategi pemasaran digital berdasarkan data.',
      averageRating: 'Penilaian Pelanggan Purata',
      basedOn: 'Berdasarkan 50+ projek yang siap',
      testimonial1: { name: 'Sarah Johnson', position: 'Naib Presiden Pemasaran', company: 'TechVision Inc.', content: 'Strategi SEO yang disampaikan melebihi semua jangkaan. Kami melihat peningkatan 425% dalam trafik organik dan pendapatan kami dari saluran organik meningkat tiga kali ganda. Perhatian kepada perincian dan pendekatan berdasarkan data adalah luar biasa.' },
      testimonial2: { name: 'Michael Chen', position: 'Ketua Pegawai Eksekutif', company: 'GreenLeaf Organics', content: 'Kehadiran media sosial kami telah diubah sepenuhnya. Kalendar kandungan dan strategi penglibatan membantu kami berkembang dari 5K kepada 125K pengikut dalam masa kurang dari setahun. Hasil yang luar biasa!' },
      testimonial3: { name: 'Emily Rodriguez', position: 'Pengarah Pertumbuhan', company: 'CloudSync SaaS', content: 'Aliran kerja automasi e-mel adalah pengubah permainan untuk perniagaan kami. Kadar penukaran percubaan kepada berbayar kami meningkat sebanyak 280% dan kami kini melihat pertumbuhan pendapatan yang konsisten bulan ke bulan.' },
      testimonial4: { name: 'David Thompson', position: 'Pengurus Pemasaran', company: 'HealthFirst Medical', content: 'Pengoptimuman kempen Google Ads menjimatkan lebih $200K dalam perbelanjaan iklan yang terbuang sambil meningkatkan ROAS kami kepada 4.8x. Pendekatan strategik dan pengoptimuman berterusan memberikan hasil yang cemerlang.' },
      testimonial5: { name: 'Lisa Anderson', position: 'Pengasas', company: 'FinTech Solutions', content: 'Penyelidikan pasaran dan analisis kompetitif memberikan pandangan berharga yang membentuk keseluruhan strategi pergi ke pasaran kami. Kami mengenal pasti peluang bernilai $10M+ dalam TAM yang kami tidak sedar.' },
      testimonial6: { name: 'James Park', position: 'Ketua Digital', company: 'Enterprise Software Co.', content: 'Pemetaan perjalanan pelanggan mendedahkan titik geseran kritikal yang tidak pernah kami tahu wujud. Selepas melaksanakan perubahan yang disyorkan, kadar penukaran kami meningkat sebanyak 165%. Kemahiran analisis yang luar biasa.' },
    },
    // Contact Section
    contact: {
      title: 'Mari Berhubung',
      subtitle: 'Bersedia untuk memacu pertumbuhan yang boleh diukur untuk perniagaan anda? Mari kita bincangkan bagaimana pemasaran digital berdasarkan data boleh mencapai matlamat anda.',
      formTitle: 'Hantar Mesej',
      firstName: 'Nama Pertama',
      lastName: 'Nama Keluarga',
      email: 'Alamat E-mel',
      company: 'Nama Syarikat',
      subject: 'Subjek',
      message: 'Mesej',
      messagePlaceholder: 'Beritahu saya tentang keperluan pemasaran digital anda...',
      send: 'Hantar Mesej',
      getInTouch: 'Hubungi Kami',
      emailLabel: 'E-mel',
      phoneLabel: 'Telefon',
      locationLabel: 'Lokasi',
      locationValue: 'Singapura',
      availability: 'Tersedia untuk kerja jarak jauh',
      socialTitle: 'Hubungi di Media Sosial',
      currentlyAvailable: 'Kini Tersedia',
      availabilityDesc: 'Terbuka untuk projek baru dan peluang pekerjaan. Biasanya bertindak balas dalam masa 24 jam.',
    },
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      skills: 'Habilidades',
      projects: 'Proyectos',
      documents: 'Documentos',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    },
    // Hero Section
    hero: {
      greeting: 'Hola, soy',
      title: 'Estratega de Marketing Digital',
      subtitle: 'Entregando Estrategias de Marketing Digital Basadas en Datos',
      description: 'Traduzco métricas complejas en estrategias de crecimiento accionables, especializándome en gestión holística de campañas desde SEO/SEM hasta redes sociales y mapeo del viaje del cliente.',
      cta: 'Ver Mi Trabajo',
      downloadResume: 'Descargar Currículum',
    },
    // Skills Section
    skills: {
      title: 'Experiencia en Marketing Digital',
      subtitle: 'Habilidades integrales en todo el espectro del marketing digital',
      seo: {
        title: 'SEO y SEM',
        desc: 'Optimización de búsqueda y estrategias de búsqueda pagada',
      },
      social: {
        title: 'Marketing en Redes Sociales',
        desc: 'Participación y crecimiento multiplataforma',
      },
      content: {
        title: 'Estrategia de Contenido',
        desc: 'Creación y distribución de contenido basado en datos',
      },
      analytics: {
        title: 'Análisis e Insights',
        desc: 'Seguimiento avanzado y análisis de rendimiento',
      },
      email: {
        title: 'Email Marketing',
        desc: 'Campañas automatizadas y segmentación',
      },
      ppc: {
        title: 'Publicidad PPC',
        desc: 'Campañas de publicidad pagada enfocadas en ROI',
      },
      brand: {
        title: 'Estrategia de Marca',
        desc: 'Identidad de marca cohesiva y posicionamiento',
      },
      conversion: {
        title: 'Optimización de Conversión',
        desc: 'CRO y mapeo del viaje del cliente',
      },
    },
    // Projects Section
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Resultados reales de campañas basadas en datos',
      viewCase: 'Ver Caso de Estudio',
      metrics: 'Métricas Clave',
      strategy: 'Estrategia',
      results: 'Resultados',
      closeCase: 'Cerrar Caso de Estudio',
    },
    // Documents Section
    documents: {
      title: 'Documentos del Portfolio',
      subtitle: 'Casos de estudio detallados e informes de campañas',
      download: 'Descargar PDF',
      pages: 'páginas',
      doc1: { title: 'Informe de Campaña SEO Q4 2024', type: 'Informe de Rendimiento', date: 'Noviembre 2024', description: 'Análisis completo de resultados de campaña SEO incluyendo clasificaciones de palabras clave, crecimiento de tráfico orgánico y métricas de conversión.', category: 'SEO' },
      doc2: { title: 'Estrategia de Contenido de Redes Sociales 2025', type: 'Documento de Estrategia', date: 'Enero 2025', description: 'Calendario de contenido de redes sociales de 12 meses con estrategias específicas de plataforma, pilares de contenido y tácticas de participación.', category: 'Redes Sociales' },
      doc3: { title: 'Flujo de Trabajo de Automatización de Email Marketing', type: 'Caso de Estudio', date: 'Octubre 2024', description: 'Desglose detallado de secuencias de correo electrónico automatizadas, estrategia de segmentación y análisis de rendimiento para cliente SaaS.', category: 'Email Marketing' },
      doc4: { title: 'Análisis de Mercado Competitivo - Fintech', type: 'Informe de Investigación', date: 'Septiembre 2024', description: 'Análisis en profundidad del panorama competitivo con análisis SWOT, posicionamiento de mercado y recomendaciones estratégicas.', category: 'Investigación de Mercado' },
      doc5: { title: 'Guía de Posicionamiento de Marca e Identidad Visual', type: 'Guías de Marca', date: 'Agosto 2024', description: 'Sistema completo de identidad de marca incluyendo posicionamiento, marco de mensajes y especificaciones de diseño visual.', category: 'Branding' },
      doc6: { title: 'Panel de Rendimiento de Campaña PPC', type: 'Informe de Analítica', date: 'Diciembre 2024', description: 'Panel interactivo que muestra el rendimiento PPC multiplataforma con modelado de atribución avanzado y análisis ROAS.', category: 'PPC' },
    },
    // Testimonials Section
    testimonials: {
      title: 'Testimonios de Clientes',
      subtitle: 'Escuche a líderes de marketing y propietarios de negocios que han experimentado un crecimiento medible a través de estrategias de marketing digital basadas en datos.',
      averageRating: 'Calificación Promedio del Cliente',
      basedOn: 'Basado en más de 50 proyectos completados',
      testimonial1: { name: 'Sarah Johnson', position: 'VP de Marketing', company: 'TechVision Inc.', content: 'La estrategia SEO entregada superó todas las expectativas. Vimos un aumento del 425% en el tráfico orgánico y nuestros ingresos de canales orgánicos se triplicaron. La atención al detalle y el enfoque basado en datos fue excepcional.' },
      testimonial2: { name: 'Michael Chen', position: 'CEO', company: 'GreenLeaf Organics', content: 'Nuestra presencia en redes sociales fue completamente transformada. El calendario de contenido y la estrategia de participación nos ayudaron a crecer de 5K a 125K seguidores en menos de un año. ¡Resultados increíbles!' },
      testimonial3: { name: 'Emily Rodriguez', position: 'Directora de Crecimiento', company: 'CloudSync SaaS', content: 'Los flujos de trabajo de automatización de correo electrónico fueron un cambio de juego para nuestro negocio. Nuestra tasa de conversión de prueba a pago aumentó en un 280% y ahora vemos un crecimiento constante de ingresos mes a mes.' },
      testimonial4: { name: 'David Thompson', position: 'Gerente de Marketing', company: 'HealthFirst Medical', content: 'La optimización de la campaña de Google Ads nos ahorró más de $200K en gasto publicitario desperdiciado mientras mejoraba nuestro ROAS a 4.8x. El enfoque estratégico y la optimización continua entregaron resultados sobresalientes.' },
      testimonial5: { name: 'Lisa Anderson', position: 'Fundadora', company: 'FinTech Solutions', content: 'La investigación de mercado y el análisis competitivo proporcionaron información invaluable que dio forma a toda nuestra estrategia de salida al mercado. Identificamos oportunidades por valor de $10M+ en TAM que no conocíamos.' },
      testimonial6: { name: 'James Park', position: 'Jefe de Digital', company: 'Enterprise Software Co.', content: 'El mapeo del viaje del cliente reveló puntos de fricción críticos que nunca supimos que existían. Después de implementar los cambios recomendados, nuestra tasa de conversión aumentó en un 165%. Habilidades analíticas excepcionales.' },
    },
    // Contact Section
    contact: {
      title: 'Conectemos',
      subtitle: '¿Listo para impulsar un crecimiento medible para tu negocio? Hablemos sobre cómo el marketing digital basado en datos puede lograr tus objetivos.',
      formTitle: 'Enviar Mensaje',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      company: 'Nombre de la Empresa',
      subject: 'Asunto',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tus necesidades de marketing digital...',
      send: 'Enviar Mensaje',
      getInTouch: 'Ponte en Contacto',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      locationValue: 'Singapur',
      availability: 'Disponible para trabajo remoto',
      socialTitle: 'Conecta en Redes Sociales',
      currentlyAvailable: 'Actualmente Disponible',
      availabilityDesc: 'Abierto a nuevos proyectos y oportunidades de empleo. Normalmente respondo en 24 horas.',
    },
  },
  ja: {
    // Navigation
    nav: {
      home: 'ホーム',
      skills: 'スキル',
      projects: 'プロジェクト',
      documents: 'ドキュメント',
      testimonials: '推薦文',
      contact: 'お問い合わせ',
    },
    // Hero Section
    hero: {
      greeting: 'こんにちは、私は',
      title: 'デジタルマーケティングストラテジスト',
      subtitle: 'データ駆動型デジタルマーケティング戦略の提供',
      description: '複雑な指標を実行可能な成長戦略に変換し、SEO/SEMからソーシャルメディアやカスタマージャーニーマッピングまでの総合的なキャンペーン管理を専門としています。',
      cta: '私の仕事を見る',
      downloadResume: '履歴書をダウンロード',
    },
    // Skills Section
    skills: {
      title: 'デジタルマーケティングの専門知識',
      subtitle: 'デジタルマーケティング全般にわたる包括的なスキル',
      seo: {
        title: 'SEOとSEM',
        desc: '検索最適化と有料検索戦略',
      },
      social: {
        title: 'ソーシャルメディアマーケティング',
        desc: 'マルチプラットフォームのエンゲージメントと成長',
      },
      content: {
        title: 'コンテンツ戦略',
        desc: 'データ駆動型のコンテンツ作成と配信',
      },
      analytics: {
        title: '分析とインサイト',
        desc: '高度な追跡とパフォーマンス分析',
      },
      email: {
        title: 'メールマーケティング',
        desc: '自動化されたキャンペーンとセグメンテーション',
      },
      ppc: {
        title: 'PPC広告',
        desc: 'ROIに焦点を当てた有料広告キャンペーン',
      },
      brand: {
        title: 'ブランド戦略',
        desc: '統一されたブランドアイデンティティとポジショニング',
      },
      conversion: {
        title: 'コンバージョン最適化',
        desc: 'CROとカスタマージャーニーマッピング',
      },
    },
    // Projects Section
    projects: {
      title: '注目のプロジェクト',
      subtitle: 'データ駆動型キャンペーンからの実際の結果',
      viewCase: 'ケーススタディを見る',
      metrics: '主要指標',
      strategy: '戦略',
      results: '結果',
      closeCase: 'ケーススタディを閉じる',
    },
    // Documents Section
    documents: {
      title: 'ポートフォリオドキュメント',
      subtitle: '詳細なケーススタディとキャンペーンレポート',
      download: 'PDFをダウンロード',
      pages: 'ページ',
      doc1: { title: '2024年第4四半期SEOキャンペーンレポート', type: 'パフォーマンスレポート', date: '2024年11月', description: 'キーワードランキング、オーガニックトラフィックの成長、コンバージョン指標を含むSEOキャンペーン結果の包括的な分析。', category: 'SEO' },
      doc2: { title: '2025年ソーシャルメディアコンテンツ戦略', type: '戦略文書', date: '2025年1月', description: 'プラットフォーム固有の戦略、コンテンツの柱、エンゲージメント戦術を含む12ヶ月のソーシャルメディアコンテンツカレンダー。', category: 'ソーシャルメディア' },
      doc3: { title: 'メールマーケティング自動化ワークフロー', type: 'ケーススタディ', date: '2024年10月', description: '自動化されたメールシーケンス、セグメンテーション戦略、SaaSクライアント向けのパフォーマンス分析の詳細な内訳。', category: 'メールマーケティング' },
      doc4: { title: '競争市場分析 - フィンテック', type: '調査レポート', date: '2024年9月', description: 'SWOT分析、市場ポジショニング、戦略的推奨事項を含む競争環境の詳細な分析。', category: '市場調査' },
      doc5: { title: 'ブランドポジショニングとビジュアルアイデンティティガイド', type: 'ブランドガイドライン', date: '2024年8月', description: 'ポジショニング、メッセージングフレームワーク、ビジュアルデザイン仕様を含む完全なブランドアイデンティティシステム。', category: 'ブランディング' },
      doc6: { title: 'PPCキャンペーンパフォーマンスダッシュボード', type: 'アナリティクスレポート', date: '2024年12月', description: '高度なアトリビューションモデリングとROAS分析を備えたマルチプラットフォームPPCパフォーマンスを示すインタラクティブダッシュボード。', category: 'PPC' },
    },
    // Testimonials Section
    testimonials: {
      title: 'クライアントの声',
      subtitle: 'データ駆動型デジタルマーケティング戦略を通じて測定可能な成長を経験したマーケティングリーダーやビジネスオーナーから聞いてください。',
      averageRating: '平均顧客評価',
      basedOn: '50以上の完了したプロジェクトに基づく',
      testimonial1: { name: 'Sarah Johnson', position: 'マーケティング担当副社長', company: 'TechVision Inc.', content: '提供されたSEO戦略はすべての期待を超えました。オーガニックトラフィックが425%増加し、オーガニックチャネルからの収益は3倍になりました。細部への注意とデータ駆動型のアプローチは例外的でした。' },
      testimonial2: { name: 'Michael Chen', position: '最高経営責任者', company: 'GreenLeaf Organics', content: '私たちのソーシャルメディアプレゼンスは完全に変革されました。コンテンツカレンダーとエンゲージメント戦略により、1年足らずで5千人から12.5万人のフォロワーに成長しました。信じられない結果です！' },
      testimonial3: { name: 'Emily Rodriguez', position: '成長責任者', company: 'CloudSync SaaS', content: 'メール自動化ワークフローは私たちのビジネスにとってゲームチェンジャーでした。トライアルから有料への転換率が280%増加し、現在は毎月一貫した収益成長を見ています。' },
      testimonial4: { name: 'David Thompson', position: 'マーケティングマネージャー', company: 'HealthFirst Medical', content: 'Google Adsキャンペーンの最適化により、無駄な広告費を20万ドル以上削減しながら、ROASを4.8倍に改善しました。戦略的アプローチと継続的な最適化が優れた結果をもたらしました。' },
      testimonial5: { name: 'Lisa Anderson', position: '創設者', company: 'FinTech Solutions', content: '市場調査と競争分析は、私たちの市場参入戦略全体を形作る貴重な洞察を提供しました。私たちが気づいていなかったTAMで1000万ドル以上の価値がある機会を特定しました。' },
      testimonial6: { name: 'James Park', position: 'デジタル責任者', company: 'Enterprise Software Co.', content: 'カスタマージャーニーマッピングにより、存在すら知らなかった重要な摩擦点が明らかになりました。推奨される変更を実装した後、コンバージョン率が165%増加しました。優れた分析スキル。' },
    },
    // Contact Section
    contact: {
      title: 'つながりましょう',
      subtitle: 'ビジネスに測定可能な成長をもたらす準備はできていますか？データ駆動型デジタルマーケティングが目標を達成する方法について話し合いましょう。',
      formTitle: 'メッセージを送る',
      firstName: '名',
      lastName: '姓',
      email: 'メールアドレス',
      company: '会社名',
      subject: '件名',
      message: 'メッセージ',
      messagePlaceholder: 'デジタルマーケティングのニーズについて教えてください...',
      send: 'メッセージを送信',
      getInTouch: 'お問い合わせ',
      emailLabel: 'メール',
      phoneLabel: '電話',
      locationLabel: '場所',
      locationValue: 'シンガポール',
      availability: 'リモートワーク可能',
      socialTitle: 'ソーシャルメディアで接続',
      currentlyAvailable: '現在利用可能',
      availabilityDesc: '新しいプロジェクトと雇用機会を受け付けています。通常24時間以内に返信します。',
    },
  },
  it: {
    // Navigation
    nav: {
      home: 'Home',
      skills: 'Competenze',
      projects: 'Progetti',
      documents: 'Documenti',
      testimonials: 'Testimonianze',
      contact: 'Contatti',
    },
    // Hero Section
    hero: {
      greeting: 'Ciao, sono',
      title: 'Stratega di Marketing Digitale',
      subtitle: 'Fornendo Strategie di Marketing Digitale Basate sui Dati',
      description: 'Traduco metriche complesse in strategie di crescita attuabili, specializzandomi nella gestione olistica delle campagne da SEO/SEM ai social media e alla mappatura del percorso del cliente.',
      cta: 'Vedi il Mio Lavoro',
      downloadResume: 'Scarica CV',
    },
    // Skills Section
    skills: {
      title: 'Competenze nel Marketing Digitale',
      subtitle: 'Competenze complete in tutto lo spettro del marketing digitale',
      seo: {
        title: 'SEO e SEM',
        desc: 'Ottimizzazione della ricerca e strategie di ricerca a pagamento',
      },
      social: {
        title: 'Marketing sui Social Media',
        desc: 'Coinvolgimento e crescita multi-piattaforma',
      },
      content: {
        title: 'Strategia dei Contenuti',
        desc: 'Creazione e distribuzione di contenuti basati sui dati',
      },
      analytics: {
        title: 'Analisi e Approfondimenti',
        desc: 'Tracciamento avanzato e analisi delle prestazioni',
      },
      email: {
        title: 'Email Marketing',
        desc: 'Campagne automatizzate e segmentazione',
      },
      ppc: {
        title: 'Pubblicità PPC',
        desc: 'Campagne pubblicitarie a pagamento focalizzate sul ROI',
      },
      brand: {
        title: 'Strategia del Brand',
        desc: 'Identità del brand coesa e posizionamento',
      },
      conversion: {
        title: 'Ottimizzazione della Conversione',
        desc: 'CRO e mappatura del percorso del cliente',
      },
    },
    // Projects Section
    projects: {
      title: 'Progetti in Evidenza',
      subtitle: 'Risultati reali da campagne basate sui dati',
      viewCase: 'Vedi Case Study',
      metrics: 'Metriche Chiave',
      strategy: 'Strategia',
      results: 'Risultati',
      closeCase: 'Chiudi Case Study',
    },
    // Documents Section
    documents: {
      title: 'Documenti del Portfolio',
      subtitle: 'Case study dettagliati e report delle campagne',
      download: 'Scarica PDF',
      pages: 'pagine',
      doc1: { title: 'Rapporto Campagna SEO Q4 2024', type: 'Rapporto Prestazioni', date: 'Novembre 2024', description: 'Analisi completa dei risultati della campagna SEO inclusi classifiche delle parole chiave, crescita del traffico organico e metriche di conversione.', category: 'SEO' },
      doc2: { title: 'Strategia Contenuti Social Media 2025', type: 'Documento Strategico', date: 'Gennaio 2025', description: 'Calendario contenuti social media di 12 mesi con strategie specifiche per piattaforma, pilastri di contenuto e tattiche di coinvolgimento.', category: 'Social Media' },
      doc3: { title: 'Flusso di Lavoro Automazione Email Marketing', type: 'Case Study', date: 'Ottobre 2024', description: 'Scomposizione dettagliata di sequenze email automatizzate, strategia di segmentazione e analisi prestazioni per cliente SaaS.', category: 'Email Marketing' },
      doc4: { title: 'Analisi Mercato Competitivo - Fintech', type: 'Rapporto Ricerca', date: 'Settembre 2024', description: 'Analisi approfondita del panorama competitivo con analisi SWOT, posizionamento di mercato e raccomandazioni strategiche.', category: 'Ricerca di Mercato' },
      doc5: { title: 'Guida Posizionamento Brand e Identità Visiva', type: 'Linee Guida Brand', date: 'Agosto 2024', description: 'Sistema completo di identità del brand inclusi posizionamento, framework di messaggistica e specifiche di design visivo.', category: 'Branding' },
      doc6: { title: 'Dashboard Prestazioni Campagna PPC', type: 'Rapporto Analitico', date: 'Dicembre 2024', description: 'Dashboard interattivo che mostra le prestazioni PPC multi-piattaforma con modellazione avanzata dell\'attribuzione e analisi ROAS.', category: 'PPC' },
    },
    // Testimonials Section
    testimonials: {
      title: 'Testimonianze dei Clienti',
      subtitle: 'Ascolta da leader di marketing e proprietari di aziende che hanno sperimentato una crescita misurabile attraverso strategie di marketing digitale basate sui dati.',
      averageRating: 'Valutazione Media Cliente',
      basedOn: 'Basato su oltre 50 progetti completati',
      testimonial1: { name: 'Sarah Johnson', position: 'VP di Marketing', company: 'TechVision Inc.', content: 'La strategia SEO fornita ha superato tutte le aspettative. Abbiamo visto un aumento del 425% nel traffico organico e i nostri ricavi dai canali organici sono triplicati. L\'attenzione ai dettagli e l\'approccio basato sui dati è stato eccezionale.' },
      testimonial2: { name: 'Michael Chen', position: 'CEO', company: 'GreenLeaf Organics', content: 'La nostra presenza sui social media è stata completamente trasformata. Il calendario dei contenuti e la strategia di coinvolgimento ci hanno aiutato a crescere da 5K a 125K follower in meno di un anno. Risultati incredibili!' },
      testimonial3: { name: 'Emily Rodriguez', position: 'Direttrice della Crescita', company: 'CloudSync SaaS', content: 'I flussi di lavoro di automazione email sono stati un punto di svolta per il nostro business. Il nostro tasso di conversione da prova a pagamento è aumentato del 280% e ora stiamo vedendo una crescita costante dei ricavi mese su mese.' },
      testimonial4: { name: 'David Thompson', position: 'Manager di Marketing', company: 'HealthFirst Medical', content: 'L\'ottimizzazione della campagna Google Ads ci ha fatto risparmiare oltre $200K in spesa pubblicitaria sprecata migliorando il nostro ROAS a 4.8x. L\'approccio strategico e l\'ottimizzazione continua hanno fornito risultati eccezionali.' },
      testimonial5: { name: 'Lisa Anderson', position: 'Fondatrice', company: 'FinTech Solutions', content: 'La ricerca di mercato e l\'analisi competitiva hanno fornito intuizioni preziose che hanno plasmato l\'intera nostra strategia di go-to-market. Abbiamo identificato opportunità per oltre $10M+ in TAM di cui non eravamo a conoscenza.' },
      testimonial6: { name: 'James Park', position: 'Responsabile Digitale', company: 'Enterprise Software Co.', content: 'La mappatura del percorso del cliente ha rivelato punti di attrito critici che non sapevamo esistessero. Dopo aver implementato le modifiche consigliate, il nostro tasso di conversione è aumentato del 165%. Competenze analitiche eccezionali.' },
    },
    // Contact Section
    contact: {
      title: 'Connettiamoci',
      subtitle: 'Pronto a guidare una crescita misurabile per la tua attività? Parliamo di come il marketing digitale basato sui dati può raggiungere i tuoi obiettivi.',
      formTitle: 'Invia un Messaggio',
      firstName: 'Nome',
      lastName: 'Cognome',
      email: 'Indirizzo Email',
      company: 'Nome Azienda',
      subject: 'Oggetto',
      message: 'Messaggio',
      messagePlaceholder: 'Raccontami delle tue esigenze di marketing digitale...',
      send: 'Invia Messaggio',
      getInTouch: 'Mettiti in Contatto',
      emailLabel: 'Email',
      phoneLabel: 'Telefono',
      locationLabel: 'Posizione',
      locationValue: 'Singapore',
      availability: 'Disponibile per lavoro remoto',
      socialTitle: 'Connetti sui Social',
      currentlyAvailable: 'Attualmente Disponibile',
      availabilityDesc: 'Aperto a nuovi progetti e opportunità di lavoro. Di solito rispondo entro 24 ore.',
    },
  },
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  zh: '中文',
  ms: 'Bahasa Melayu',
  es: 'Español',
  ja: '日本語',
  it: 'Italiano',
};
