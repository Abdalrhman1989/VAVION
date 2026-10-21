import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
    Printer, PenTool, Image, Truck, Layout,
    Monitor, Grid, Flag, Box, Smartphone,
    Sparkles, Stamp, Gift, Frame
} from 'lucide-react';

const ServiceCatalog = () => {
    const { language } = useTheme();
    const isRTL = language === 'ar';

    const catalogItems = [
        {
            id: 'web-dev',
            icon: Monitor,
            title: language === 'ar' ? 'تطوير المواقع والمنصات الرقمية' : 'Web & Platform Engineering',
            description: language === 'ar'
                ? 'تصميم وتطوير مواقع إلكترونية احترافية، متاجر إلكترونية، وأنظمة إدارة محتوى مخصصة بأعلى معايير الأداء بالتعاون مع ServixerSpace.'
                : 'Design and development of high-performance websites, e-commerce platforms, and custom digital portals powered by ServixerSpace.',
            color: '#3b82f6'
        },
        {
            id: 'mobile-app',
            icon: Smartphone,
            title: language === 'ar' ? 'تطوير تطبيقات الجوال' : 'Mobile App Development',
            description: language === 'ar'
                ? 'برمجة تطبيقات جوال (iOS & Android) بأحدث التقنيات مع تركيز فائق على تجربة المستخدم وسرعة الأداء.'
                : 'Developing native and cross-platform mobile applications (iOS & Android) focused on seamless user experience and scalability.',
            color: '#8b5cf6'
        },
        {
            id: 'identity',
            icon: PenTool,
            title: language === 'ar' ? 'تصميم الهوية البصرية والمطبوعات' : 'Visual Identity & Brand Systems',
            description: language === 'ar'
                ? 'تصميم الهويات البصرية الكاملة والشعارات التجارية والأكياس الورقية الفاخرة (250–350 جرام) بأفكار إبداعية متكاملة.'
                : 'Designing complete visual identities, commercial logos, brand books, and luxury custom paper bags (A2–A6, 250–350 gsm).',
            color: '#E95C27'
        },
        {
            id: 'offset',
            icon: Printer,
            title: language === 'ar' ? 'الطباعة الأوفسيت التجارية' : 'Commercial Offset Printing',
            description: language === 'ar'
                ? 'تنفيذ المطبوعات الورقية بمكائن طباعة اختصاصية للكميات الكبيرة كورق خطابات الشركات، العلب، المجلات، البروشورات، واستكرات المصانع.'
                : 'High-volume commercial paper printing including corporate letterheads, packaging boxes, magazines, brochures, and factory labels.',
            color: '#f59e0b'
        },
        {
            id: 'digital-print',
            icon: Sparkles,
            title: language === 'ar' ? 'الطباعة الرقمية السريعة (الديجيتال)' : 'High-Speed Digital Printing',
            description: language === 'ar'
                ? 'حلول طباعة رقمية فورية وعالية الدقة للكميات المحدودة والمواعيد العاجلة مع ثبات ألوان استثنائي وجودة فائقة.'
                : 'Same-day, high-resolution digital printing tailored for urgent deadlines, short runs, and executive presentations.',
            color: '#10b981'
        },
        {
            id: 'computer',
            icon: Box,
            title: language === 'ar' ? 'فواتير الكومبيوتر المتصلة' : 'Continuous Computer Invoices',
            description: language === 'ar'
                ? 'الفواتير المتصلة والمخصصة للطابعات النقطية (Epson) بخيارات متعددة بالطباعة (لون، لونين، 4 ألوان) ومقاسات متنوعة.'
                : 'Continuous carbonless forms dedicated for Epson dot-matrix printers, available in 1, 2, or 4 colors across multiple sizes.',
            color: '#06b6d4'
        },
        {
            id: 'silkscreen',
            icon: Image,
            title: language === 'ar' ? 'طباعة الشاشة الحريرية (سلك سكرين)' : 'Silk Screen Printing',
            description: language === 'ar'
                ? 'طباعة فنية متقنة على أيدي حرفيين مهرة تنفذ على الهدايا الإعلانية والأكياس والمنسوجات بلون أو عدة ألوان.'
                : 'Artisanal single and multi-color screen printing executed by master craftsmen on promotional gifts, bags, and textiles.',
            color: '#E95C27'
        },
        {
            id: 'thermal',
            icon: Printer,
            title: language === 'ar' ? 'الطباعة الحرارية والبطاقات التعريفية' : 'Thermal Printing, Lanyards & ID Badges',
            description: language === 'ar'
                ? 'طباعة حرارية بالمكابس المتخصصة على التيشيرتات، الكابات، الأكواب، والأقلام، بالإضافة إلى شرائط التعليق (البرشات) وبطاقات الموظفين والمعارض.'
                : 'Specialized heat-press transfer on T-shirts, polo shirts, caps, mugs, and pens, plus custom branded lanyards and employee/event ID badges.',
            color: '#ec4899'
        },
        {
            id: 'uv-gifts',
            icon: Gift,
            title: language === 'ar' ? 'طباعة UV والهدايا الدعائية' : 'Direct UV Printing & Corporate Gifts',
            description: language === 'ar'
                ? 'الطباعة المباشرة بالأشعة فوق البنفسجية (UV) على الأكريليك، الخشب، البامبو، الجلد، المعدن، الزجاج، السيراميك، الفلاشات، والدروع التذكارية.'
                : 'Direct UV printing on acrylic, wood, bamboo, leather, stone, metal, glass, ceramics, powerbanks, USBs, awards, and VIP gift sets.',
            color: '#8b5cf6'
        },
        {
            id: 'outdoor',
            icon: Truck,
            title: language === 'ar' ? 'طباعة وتركيب استكرات السيارات' : 'Vehicle & Fleet Branding',
            description: language === 'ar'
                ? 'تركيب الهوية الإعلانية للشركات على سيارات وأساطيل النقل والتوزيع بأعلى المعايير والمواد المقاومة للعوامل الجوية.'
                : 'Full and partial commercial vehicle and fleet wrapping using weather-resistant vinyl films engineered for the Saudi climate.',
            color: '#E95C27'
        },
        {
            id: 'signage',
            icon: Grid,
            title: language === 'ar' ? 'اللوحات الخارجية والحروف البارزة (3D)' : 'Outdoor Signage & 3D Letters',
            description: language === 'ar'
                ? '9 خيارات احترافية: زنكور مع أكريليك مضاء، ستانلس ستيل ذهبي/فضي (إضاءة أمامية أو خلفية)، أكريليك مضاء بالكامل، ماجيك، ونيون.'
                : '9 architectural options: Zincor + lit acrylic, Gold/Silver Stainless Steel (front-lit or backlit), full-lit acrylic, magic acrylic, and neon.',
            color: '#3b82f6'
        },
        {
            id: 'indoor',
            icon: Layout,
            title: language === 'ar' ? 'اللوحات الداخلية والإرشادية' : 'Indoor Wayfinding & Office Signage',
            description: language === 'ar'
                ? 'لوحات مكاتب تعريفية وإرشادية داخل المصانع والشركات والمستشفيات مصنوعة من الأكريليك، الفوركس، أو الألمنيوم الذهبي والفضي.'
                : 'Executive office nameplates and indoor directional signage crafted from Acrylic, Forex, Corrugated board, or brushed Gold/Silver Aluminum.',
            color: '#10b981'
        },
        {
            id: 'canvas',
            icon: Frame,
            title: language === 'ar' ? 'لوحات الكانفز الفنية' : 'Fine-Art Canvas Printing',
            description: language === 'ar'
                ? 'طباعة لوحات الكانفز الفاخرة بدقة عالية مع الشد على الإطارات الخشبية المخفية والتركيب للمكاتب والفنادق والمعارض.'
                : 'Museum-grade canvas printing stretched on solid wooden frames with professional installation for offices, hotels, and galleries.',
            color: '#f59e0b'
        },
        {
            id: 'displays',
            icon: Monitor,
            title: language === 'ar' ? 'الرول آب والبوب آب وطاولات العرض' : 'Roll-ups, Pop-ups & Display Tables',
            description: language === 'ar'
                ? 'رول آب (85×200 إلى 200×200 سم)، بوب آب معارض (منحني ومستقيم)، وطاولات عرض وتذوق احترافية للمولات والمتاجر.'
                : 'Exhibition Roll-ups (85×200 to 200×200 cm), curved/straight Pop-up backdrops, and branded retail display & tasting counters.',
            color: '#06b6d4'
        },
        {
            id: 'stamps-laser',
            icon: Stamp,
            title: language === 'ar' ? 'الأختام التجارية وحفر الليزر' : 'Commercial Stamps & Laser Engraving',
            description: language === 'ar'
                ? 'تنفيذ الأختام التجارية الأوتوماتيكية والإلكترونية، وأعمال الحفر بالليزر بدقة متناهية على الخشب والجلد والأكريليك والهدايا.'
                : 'Precision automatic and electronic corporate stamps, paired with fine laser engraving on wood, leather, acrylic, and executive plaques.',
            color: '#ec4899'
        },
        {
            id: 'flags',
            icon: Flag,
            title: language === 'ar' ? 'طباعة الأعلام الإعلانية' : 'Advertising & Feather Flags',
            description: language === 'ar'
                ? 'أعلام الريشة والدمعة وأعلام السواري والمكاتب التي تستخدم أمام بوابات المعارض والشركات والمحلات التجارية لجذب الانتباه.'
                : 'Feather, teardrop, pole, and desk flags with heavy-duty bases designed for exhibition entrances, showrooms, and corporate headquarters.',
            color: '#E95C27'
        }
    ];

    return (
        <section id="services" className="section" style={{ position: 'relative' }}>
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '45%',
                height: '100%',
                background: 'rgba(233, 92, 39, 0.03)',
                borderRadius: isRTL ? '0 300px 300px 0' : '300px 0 0 300px',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
                    <h2 style={{ fontSize: '2.15rem', fontWeight: '800', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                        {language === 'ar' ? 'خدماتنا المتكاملة (16 قسماً تخصصياً)' : 'Our 16 Specialized Service Divisions'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto 1rem', fontSize: '0.98rem' }}>
                        {language === 'ar'
                            ? 'منظومة متكاملة من خدمات الطباعة الحديثة، اللوحات الإعلانية، الهوية البصرية، والحلول الرقمية في جدة والمدينة المنورة.'
                            : 'Full-spectrum printing, architectural signage, brand identity, and custom software solutions in Jeddah & Al-Madinah Al-Munawwarah.'}
                    </p>
                    <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto', borderRadius: '2px' }}></div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(265px, 1fr))',
                    gap: '1.35rem'
                }}>
                    {catalogItems.map((item) => (
                        <div key={item.id} style={{
                            position: 'relative',
                            padding: '1.5rem',
                            borderRadius: '20px 4px 20px 4px',
                            backgroundColor: 'var(--bg-card)',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                            border: '1px solid var(--border-color)',
                            transition: 'all 0.25s ease',
                            borderRight: isRTL ? `4px solid ${item.color}` : '1px solid var(--border-color)',
                            borderLeft: isRTL ? '1px solid var(--border-color)' : `4px solid ${item.color}`
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.18)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
                            }}
                        >
                            <div style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '14px',
                                backgroundColor: `${item.color}18`,
                                border: `1px solid ${item.color}40`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1rem',
                            }}>
                                <item.icon size={24} color={item.color} />
                            </div>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.55rem', color: 'var(--text-main)' }}>
                                {item.title}
                            </h3>

                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCatalog;
