import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const translations = {
    en: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        process: 'Process',
        portfolio: 'Portfolio',
        contact: 'Contact',
        getStarted: 'Get Started',
        slogan: 'We Design Intelligence & Build Creativity',
        subSlogan: 'Elevate your brand with our premium creative services from Riyadh to the world.',
        ourServices: 'Our Services',
        servicesDesc: 'Comprehensive creative and digital solutions.',
        visualIdentity: 'Visual Identity',
        visualIdentityDesc: 'Logo design, branding guidelines, and visual systems.',
        printing: 'Printing Services',
        printingDesc: 'Offset, Digital, Silk Screen, Heat Transfer, & UV Printing.',
        signage: 'Signage & Advertising',
        signageDesc: '3D Letters (Zinc, Steel, Neon), Indoor & Outdoor Signs, Car Stickers.',
        marketing: 'Marketing & Displays',
        marketingDesc: 'Roll-ups, Banners, Flags, & Laser Engraving.',
        digital: 'Digital & Creative',
        digitalDesc: 'Web/App Development, Branding & SEO.',
        gifts: 'Promotional Gifts',
        giftsDesc: 'Customized merchandise and corporate gifts.',
        webApp: 'Web & App Development',
        webAppDesc: 'Smart websites and mobile applications built with modern tech.',
        production: 'Media Production',
        productionDesc: 'Professional photography and video production.',
        quickLinks: 'Quick Links',
        contactUs: 'Contact Us',
        rights: 'All rights reserved.',
        whoWeAre: 'Who We Are',
        aboutText: 'Founded in 2020, Vavion Creative strives to be a pioneer in graphic and creative services. We provide advanced, high-quality, and modern solutions that exceed expectations.',
        mission: 'Our Mission',
        missionText: 'To provide the best advice and most suitable choices for our clients, adhering to quality, commitment, and professional ethics.',
        vision: 'Our Vision',
        visionText: 'To be the leading creative hub in Saudi Arabia, fostering a culture of excellence and innovation.',
        goals: 'Our Goals',
        goalsText: 'Building long-term partnerships, achieving highest quality standards, and continuous innovation in digital solutions.',
        values: 'Our Values',
        valuesText: 'Integrity, Creativity, Excellence, and Client-Centricity.',
        whyUs: 'Why Choose Vavion?',
        whyUsText: 'We combine creativity with strategy to deliver measurable results.',
        processTitle: 'Our Process',
        partners: 'Partners',
        inSuccess: 'in Success',
        clients: 'Our Clients',
        testimonials: 'Testimonials',
        ctaTitle: 'Ready to Start Your Project?',
        ctaButton: 'Let\'s Talk',
        discovery: 'Discovery',
        discoveryDesc: 'We start by understanding your brand, goals, and target audience.',
        strategy: 'Strategy',
        strategyDesc: 'We develop a comprehensive roadmap tailored to your specific needs.',
        execution: 'Execution',
        executionDesc: 'Our creative team brings the vision to life with precision and flair.',
        delivery: 'Delivery',
        deliveryDesc: 'We deliver the final assets and ensure everything runs smoothly.',
        jeddahMadinah: 'Jeddah & Madinah, Saudi Arabia'
    },
    ar: {
        home: 'الرئيسية',
        services: 'خدماتنا',
        about: 'من نحن',
        process: 'عملية العمل',
        portfolio: 'أعمالنا',
        contact: 'تواصل معنا',
        getStarted: 'ابدأ الآن',
        slogan: 'نبتكر الذكاء ونبني الإبداع',
        subSlogan: 'ارتقِ بعلامتك التجارية مع خدماتنا الإبداعية المتميزة من الرياض إلى العالم.',
        ourServices: 'خدماتنا',
        servicesDesc: 'حلول إبداعية ورقمية شاملة.',
        visualIdentity: 'الهوية البصرية',
        visualIdentityDesc: 'تصميم الشعارات وأنظمة العلامات التجارية.',
        printing: 'خدمات الطباعة',
        printingDesc: 'طباعة أوفست، رقمية، سلك سكرين، حرارية، وطباعة UV.',
        signage: 'اللوحات والإعلانات',
        signageDesc: 'حروف بارزة (زنك، ستيل، نيون)، لوحات داخلية وخارجية، استيكر سيارات.',
        marketing: 'التسويق والعرض',
        marketingDesc: 'رول أب، بانر، أعلام، وحفر ليزر.',
        digital: 'الحلول الرقمية والإبداعية',
        digitalDesc: 'تطوير مواقع وتطبيقات، هويات بصرية، وتحسين محركات البحث.',
        gifts: 'هدايا دعائية',
        giftsDesc: 'منتجات مخصصة وهدايا للشركات.',
        webApp: 'تطوير الويب والتطبيقات',
        webAppDesc: 'مواقع ذكية وتطبيقات جوال مبنية بأحدث التقنيات.',
        production: 'الإنتاج الإعلامي',
        productionDesc: 'تصوير احترافي وإنتاج فيديو.',
        quickLinks: 'روابط سريعة',
        contactUs: 'تواصل معنا',
        rights: 'جميع الحقوق محفوظة.',
        whoWeAre: 'من نحن',
        aboutText: 'تأسست فافيون الإبداعية عام 2020، ونسعى لأن نكون رواداً في الخدمات الطباعية والإبداعية بتقديم حلول متطورة وعصرية تفوق التوقعات.',
        mission: 'مهمتنا',
        missionText: 'تقديم أفضل الاستشارات والخيارات لعملائنا، مع الالتزام بالجودة والأخلاقيات المهنية والابتكار المستمر.',
        vision: 'رؤيتنا',
        visionText: 'أن نكون الوجهة الإبداعية الأولى في المملكة، مع تعزيز ثقافة التميز والابتكار.',
        goals: 'أهدافنا',
        goalsText: 'بناء شراكات طويلة الأمد، تحقيق أعلى معايير الجودة، والابتكار المستمر في الحلول الرقمية.',
        values: 'قيمنا',
        valuesText: 'النزاهة، الإبداع، التميز، والتركيز على العميل.',
        whyUs: 'لماذا تختار فافيون؟',
        whyUsText: 'نجمع بين الإبداع والاستراتيجية لتقديم نتائج ملموسة.',
        processTitle: 'كيف نعمل',
        partners: 'شركاء',
        inSuccess: 'النجاح',
        clients: 'عملاؤنا',
        testimonials: 'آراء العملاء',
        ctaTitle: 'جاهز لبدء مشروعك؟',
        ctaButton: 'تحدث معنا',
        discovery: 'الاكتشاف',
        discoveryDesc: 'نبدأ بفهم علامتك التجارية وأهدافك وجمهورك المستهدف.',
        strategy: 'الاستراتيجية',
        strategyDesc: 'نقوم بتطوير خارطة طريق شاملة مصممة خصيصاً لاحتياجاتك.',
        execution: 'التنفيذ',
        executionDesc: 'فريقنا الإبداعي يحول الرؤية إلى واقع بدقة وإتقان.',
        delivery: 'التسليم',
        deliveryDesc: 'نسلمك الأصول النهائية ونضمن سير العمل بسلاسة.',
        jeddahMadinah: 'جدة والمدينة المنورة، المملكة العربية السعودية'
    }
};

export const ThemeProvider = ({ children }) => {
    // Default to Dark Mode and Arabic
    const [theme, setTheme] = useState('dark');
    const [language, setLanguage] = useState('ar');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.setAttribute('lang', language);
        document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }, [language]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <ThemeContext.Provider value={{ theme, language, toggleTheme, toggleLanguage, t }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
