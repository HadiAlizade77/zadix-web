import { Locale } from './i18n';

export interface Translations {
  // Navigation
  'nav.home': string;
  'nav.solutions': string;
  'nav.industries': string;
  'nav.pricing': string;
  'nav.process': string;
  'nav.caseStudies': string;
  'nav.blog': string;
  'nav.about': string;
  'nav.security': string;
  'nav.contact': string;
  
  // CTAs
  'cta.bookDemo': string;
  'cta.watchVideo': string;
  'cta.getStarted': string;
  'cta.learnMore': string;
  'cta.viewPricing': string;
  'cta.contactUs': string;
  
  // Home Page
  'home.hero.title': string;
  'home.hero.subtitle': string;
  'home.metrics.1': string;
  'home.metrics.2': string;
  'home.metrics.3': string;
  'home.metrics.4': string;
  'home.guarantee': string;
  'home.security': string;
  
  // Form Fields
  'form.name': string;
  'form.email': string;
  'form.company': string;
  'form.role': string;
  'form.phone': string;
  'form.industry': string;
  'form.systems': string;
  'form.sensitivity': string;
  'form.volume': string;
  'form.deadline': string;
  'form.budget': string;
  'form.files': string;
  'form.consent': string;
  'form.submit': string;
  'form.message': string;
  
  // Common
  'common.readMore': string;
  'common.viewAll': string;
  'common.comingSoon': string;
  'common.loading': string;
  'common.error': string;
  'common.success': string;
}

export const translations: Record<Locale, Translations> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.industries': 'Industries',
    'nav.pricing': 'Pricing',
    'nav.process': 'Process',
    'nav.caseStudies': 'Case Studies',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.security': 'Security',
    'nav.contact': 'Contact',
    
    // CTAs
    'cta.bookDemo': 'Book a 20-min Demo',
    'cta.watchVideo': 'Watch 2-min Overview',
    'cta.getStarted': 'Get Started',
    'cta.learnMore': 'Learn More',
    'cta.viewPricing': 'View Pricing',
    'cta.contactUs': 'Contact Us',
    
    // Home Page
    'home.hero.title': 'Automate your operations with AI—fast.',
    'home.hero.subtitle': 'We build production-ready automations that cut manual work 50–80% and speed up response times to under a minute.',
    'home.metrics.1': '50–80% less manual work',
    'home.metrics.2': 'Replies in under 1 minute',
    'home.metrics.3': 'Go live in 7–14 days',
    'home.metrics.4': '30-day value guarantee',
    'home.guarantee': 'If you don\'t see measurable time saved in 30 days, we keep working until you do.',
    'home.security': 'SOC-aligned controls by default: audit trails, RBAC, encryption, and full observability of decisions.',
    
    // Form Fields
    'form.name': 'Name',
    'form.email': 'Work Email',
    'form.company': 'Company',
    'form.role': 'Role',
    'form.phone': 'Phone / WhatsApp',
    'form.industry': 'Industry',
    'form.systems': 'Systems in use (CRM/ERP/Helpdesk/DB)',
    'form.sensitivity': 'Contains PII/PHI?',
    'form.volume': 'Daily/weekly volume',
    'form.deadline': 'Target deadline',
    'form.budget': 'Budget',
    'form.files': 'Upload sample docs/emails',
    'form.consent': 'I agree to the Privacy Policy and DPA',
    'form.submit': 'Send & Pick a Demo Slot',
    'form.message': 'Message',
    
    // Common
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    'common.comingSoon': 'Coming Soon',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  
  // Arabic translations (stubs - to be translated)
  ar: {
    'nav.home': 'الرئيسية',
    'nav.solutions': 'الحلول',
    'nav.industries': 'الصناعات',
    'nav.pricing': 'الأسعار',
    'nav.process': 'العملية',
    'nav.caseStudies': 'دراسات الحالة',
    'nav.blog': 'المدونة',
    'nav.about': 'حولنا',
    'nav.security': 'الأمان',
    'nav.contact': 'اتصل بنا',
    'cta.bookDemo': 'احجز عرضاً توضيحياً',
    'cta.watchVideo': 'شاهد الفيديو',
    'cta.getStarted': 'ابدأ',
    'cta.learnMore': 'اعرف المزيد',
    'cta.viewPricing': 'عرض الأسعار',
    'cta.contactUs': 'اتصل بنا',
    'home.hero.title': 'أتمت عملياتك بالذكاء الاصطناعي—بسرعة.',
    'home.hero.subtitle': 'نحن نبني أتمتة جاهزة للإنتاج تقلل العمل اليدوي بنسبة 50-80% وتسرع أوقات الاستجابة إلى أقل من دقيقة.',
    'home.metrics.1': '50-80% أقل عمل يدوي',
    'home.metrics.2': 'ردود في أقل من دقيقة',
    'home.metrics.3': 'انطلق في 7-14 يوماً',
    'home.metrics.4': 'ضمان القيمة لمدة 30 يوماً',
    'home.guarantee': 'إذا لم تر وقتاً محفوظاً قابلاً للقياس في 30 يوماً، فسنستمر في العمل حتى تحصل عليه.',
    'home.security': 'ضوابط متوافقة مع SOC افتراضياً: مسارات التدقيق، RBAC، التشفير، والمراقبة الكاملة للقرارات.',
    'form.name': 'الاسم',
    'form.email': 'البريد الإلكتروني للعمل',
    'form.company': 'الشركة',
    'form.role': 'الدور',
    'form.phone': 'الهاتف / واتساب',
    'form.industry': 'الصناعة',
    'form.systems': 'الأنظمة المستخدمة',
    'form.sensitivity': 'يحتوي على معلومات شخصية؟',
    'form.volume': 'الحجم اليومي/الأسبوعي',
    'form.deadline': 'الموعد المستهدف',
    'form.budget': 'الميزانية',
    'form.files': 'رفع المستندات النموذجية',
    'form.consent': 'أوافق على سياسة الخصوصية و DPA',
    'form.submit': 'إرسال واختيار موعد العرض',
    'form.message': 'الرسالة',
    'common.readMore': 'اقرأ المزيد',
    'common.viewAll': 'عرض الكل',
    'common.comingSoon': 'قريباً',
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
  },
  
  // Turkish translations (stubs - to be translated)
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.solutions': 'Çözümler',
    'nav.industries': 'Sektörler',
    'nav.pricing': 'Fiyatlandırma',
    'nav.process': 'Süreç',
    'nav.caseStudies': 'Vaka Çalışmaları',
    'nav.blog': 'Blog',
    'nav.about': 'Hakkımızda',
    'nav.security': 'Güvenlik',
    'nav.contact': 'İletişim',
    'cta.bookDemo': '20 Dakikalık Demo Rezervasyonu',
    'cta.watchVideo': '2 Dakikalık Genel Bakış İzle',
    'cta.getStarted': 'Başla',
    'cta.learnMore': 'Daha Fazla Bilgi',
    'cta.viewPricing': 'Fiyatları Görüntüle',
    'cta.contactUs': 'Bize Ulaşın',
    'home.hero.title': 'Operasyonlarınızı AI ile otomatikleştirin—hızlıca.',
    'home.hero.subtitle': 'Manuel işi %50-80 azaltan ve yanıt sürelerini bir dakikanın altına indiren üretime hazır otomasyonlar inşa ediyoruz.',
    'home.metrics.1': '%50-80 daha az manuel iş',
    'home.metrics.2': '1 dakikanın altında yanıtlar',
    'home.metrics.3': '7-14 günde canlıya geç',
    'home.metrics.4': '30 günlük değer garantisi',
    'home.guarantee': '30 gün içinde ölçülebilir zaman tasarrufu görmezseniz, görene kadar çalışmaya devam ederiz.',
    'home.security': 'Varsayılan olarak SOC uyumlu kontroller: denetim izleri, RBAC, şifreleme ve kararların tam gözlemlenebilirliği.',
    'form.name': 'Ad',
    'form.email': 'İş E-postası',
    'form.company': 'Şirket',
    'form.role': 'Rol',
    'form.phone': 'Telefon / WhatsApp',
    'form.industry': 'Sektör',
    'form.systems': 'Kullanılan sistemler',
    'form.sensitivity': 'Kişisel bilgi içeriyor mu?',
    'form.volume': 'Günlük/haftalık hacim',
    'form.deadline': 'Hedef tarih',
    'form.budget': 'Bütçe',
    'form.files': 'Örnek belgeleri yükle',
    'form.consent': 'Gizlilik Politikası ve DPA\'yı kabul ediyorum',
    'form.submit': 'Gönder ve Demo Slotu Seç',
    'form.message': 'Mesaj',
    'common.readMore': 'Devamını Oku',
    'common.viewAll': 'Tümünü Görüntüle',
    'common.comingSoon': 'Yakında',
    'common.loading': 'Yükleniyor...',
    'common.error': 'Hata',
    'common.success': 'Başarılı',
  },
  
  // Russian translations (stubs - to be translated)
  ru: {
    'nav.home': 'Главная',
    'nav.solutions': 'Решения',
    'nav.industries': 'Отрасли',
    'nav.pricing': 'Цены',
    'nav.process': 'Процесс',
    'nav.caseStudies': 'Кейсы',
    'nav.blog': 'Блог',
    'nav.about': 'О нас',
    'nav.security': 'Безопасность',
    'nav.contact': 'Контакты',
    'cta.bookDemo': 'Забронировать 20-минутную демо',
    'cta.watchVideo': 'Посмотреть 2-минутный обзор',
    'cta.getStarted': 'Начать',
    'cta.learnMore': 'Узнать больше',
    'cta.viewPricing': 'Посмотреть цены',
    'cta.contactUs': 'Связаться с нами',
    'home.hero.title': 'Автоматизируйте операции с ИИ—быстро.',
    'home.hero.subtitle': 'Мы создаем готовые к производству автоматизации, которые сокращают ручную работу на 50-80% и ускоряют время отклика до менее чем минуты.',
    'home.metrics.1': 'На 50-80% меньше ручной работы',
    'home.metrics.2': 'Ответы менее чем за минуту',
    'home.metrics.3': 'Запуск за 7-14 дней',
    'home.metrics.4': '30-дневная гарантия ценности',
    'home.guarantee': 'Если вы не увидите измеримой экономии времени за 30 дней, мы продолжим работать, пока не увидите.',
    'home.security': 'SOC-совместимые контроли по умолчанию: аудиторские следы, RBAC, шифрование и полная наблюдаемость решений.',
    'form.name': 'Имя',
    'form.email': 'Рабочий Email',
    'form.company': 'Компания',
    'form.role': 'Роль',
    'form.phone': 'Телефон / WhatsApp',
    'form.industry': 'Отрасль',
    'form.systems': 'Используемые системы',
    'form.sensitivity': 'Содержит персональные данные?',
    'form.volume': 'Ежедневный/еженедельный объем',
    'form.deadline': 'Целевая дата',
    'form.budget': 'Бюджет',
    'form.files': 'Загрузить образцы документов',
    'form.consent': 'Я согласен с Политикой конфиденциальности и DPA',
    'form.submit': 'Отправить и выбрать слот для демо',
    'form.message': 'Сообщение',
    'common.readMore': 'Читать далее',
    'common.viewAll': 'Посмотреть все',
    'common.comingSoon': 'Скоро',
    'common.loading': 'Загрузка...',
    'common.error': 'Ошибка',
    'common.success': 'Успех',
  },
};

export function getTranslation(locale: Locale, key: keyof Translations): string {
  return translations[locale][key] || translations.en[key];
}