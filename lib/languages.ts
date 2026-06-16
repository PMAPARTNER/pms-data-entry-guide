export type Language = 'tr' | 'en' | 'ar';

export const languages: Record<Language, { name: string; nativeName: string; flag: string }> = {
  tr: { name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  en: { name: 'English', nativeName: 'English', flag: '🇬🇧' },
  ar: { name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
};

export const defaultLanguage: Language = 'tr';

export const translations = {
  tr: {
    site: {
      title: 'PMS Veri Giriş Rehberi',
      description: 'Elektra, Sedna ve Veboni PMS sistemlerinde optimal veri giriş metodolojisi',
      tagline: 'Otel PMS Sistemlerinde Optimal Veri Giriş',
    },
    nav: {
      fundamentals: 'Temel Prensipler',
      commonMistakes: 'Yaygın Hatalar',
      pmsSpecific: 'PMS Rehberleri',
      caseStudies: 'Case Studies',
      workflows: 'İş Akışları',
      checklist: 'Kontrol Listesi',
      faq: 'Sık Sorulan Sorular',
    },
    home: {
      subtitle: 'Elektra, Sedna ve Veboni PMS sistemlerinde rezervasyon giriş hatalarını önlemek için kapsamlı rehber',
      features: 'Rehberler',
      stats: {
        errors: 'Doğrulanmış Hata Senaryosu',
        systems: 'PMS Sistemi',
        types: 'Hata Türü',
        cases: 'Case Study',
      },
    },
  },
  en: {
    site: {
      title: 'PMS Data Entry Guide',
      description: 'Optimal data entry methodology for Elektra, Sedna and Veboni PMS systems',
      tagline: 'Optimal Data Entry in Hotel PMS Systems',
    },
    nav: {
      fundamentals: 'Fundamentals',
      commonMistakes: 'Common Mistakes',
      pmsSpecific: 'PMS Guides',
      caseStudies: 'Case Studies',
      workflows: 'Workflows',
      checklist: 'Checklist',
      faq: 'FAQ',
    },
    home: {
      subtitle: 'Comprehensive guide to prevent reservation data entry errors in Elektra, Sedna and Veboni PMS systems',
      features: 'Guides',
      stats: {
        errors: 'Validated Error Scenarios',
        systems: 'PMS System',
        types: 'Error Types',
        cases: 'Case Study',
      },
    },
  },
  ar: {
    site: {
      title: 'دليل إدخال بيانات PMS',
      description: 'منهجية إدخال البيانات المثلى لأنظمة Elektra و Sedna و Veboni PMS',
      tagline: 'إدخال البيانات الأمثل في أنظمة PMS للفنادق',
    },
    nav: {
      fundamentals: 'المبادئ الأساسية',
      commonMistakes: 'الأخطاء الشائعة',
      pmsSpecific: 'أدلة PMS',
      caseStudies: 'دراسات الحالة',
      workflows: 'سير العمل',
      checklist: 'قائمة التحقق',
      faq: 'الأسئلة الشائعة',
    },
    home: {
      subtitle: 'دليل شامل لمنع أخطاء إدخال بيانات الحجز في أنظمة Elektra و Sedna و Veboni PMS',
      features: 'الأدلة',
      stats: {
        errors: 'سيناريوهات الخطأ المثبتة',
        systems: 'نظام PMS',
        types: 'أنواع الأخطاء',
        cases: 'دراسة حالة',
      },
    },
  },
};
