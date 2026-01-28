import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
    Printer, PenTool, Image, Truck, Layout,
    Monitor, Grid, Flag, ShoppingBag, Box, Smartphone
} from 'lucide-react';

const ServiceCatalog = () => {
    const { language } = useTheme();
    const isRTL = language === 'ar';

    const catalogItems = [
        {
            id: 'web-dev',
            icon: Monitor,
            title: language === 'ar' ? 'تطوير المواقع الإلكترونية' : 'Web Development',
            description: language === 'ar'
                ? 'تصميم وتطوير مواقع إلكترونية احترافية، متاجر إلكترونية، وانظمة إدارة محتوى مخصصة تناسب احتياجات نشاطك التجاري.'
                : 'Design and development of professional websites, e-commerce stores, and custom content management systems tailored to your business needs.',
            color: '#3b82f6'
        },
        {
            id: 'mobile-app',
            icon: Smartphone,
            title: language === 'ar' ? 'تطوير تطبيقات الجوال' : 'Mobile App Development',
            description: language === 'ar'
                ? 'برمجة تطبيقات جوال (iOS & Android) بأحدث التقنيات مع تركيز على تجربة المستخدم وسهولة الاستخدام.'
                : 'Developing mobile applications (iOS & Android) using the latest technologies with a focus on user experience and ease of use.',
            color: '#8b5cf6'
        },
        {
            id: 'offset',
            icon: Printer,
            title: language === 'ar' ? 'الطباعة الاوفسيت' : 'Offset Printing',
            description: language === 'ar'
                ? 'وهي تنفيذ المطبوعات الورقية تكون بمكائن طباعة اختصاصية للكميات الكبيرة والتجارية كورق خطابات الشركات وهويتها البصرية والعلب والمجلات والبرشورات الاعلانية والاستكرات التجارية للمصانع وغيرها.'
                : 'Execution of paper publications using specialized printing machines for large commercial quantities, such as corporate letterheads, visual identities, boxes, magazines, advertising brochures, and commercial stickers for factories.',
            color: '#E95C27'
        },
        {
            id: 'computer',
            icon: Box,
            title: language === 'ar' ? 'فواتير الكومبيوتر' : 'Computer Invoices',
            description: language === 'ar'
                ? 'وهي الفواتير المتصلة والمخصصة للطابعات النقطية إيبسون وتكون بخيارات متعددة بالطباعة ( لون – لونين – 4 لون ) ومقاسات مختلفة.'
                : 'Continuous invoices dedicated for Epson dot matrix printers, available in multiple printing options (1 color, 2 colors, 4 colors) and various sizes.',
            color: '#1e293b'
        },
        {
            id: 'silkscreen',
            icon: Image,
            title: language === 'ar' ? 'طباعة الشاشة الحريرية' : 'Silk Screen Printing',
            description: language === 'ar'
                ? 'وهي طباعة فنية على أيدي حرفيين مهرة تنفذ على الهدايا الاعلانية المتنوعة وتكون على شكل طباعة لون أو لونين أو عدة ألوان.'
                : 'Artistic printing by skilled craftsmen executed on various advertising gifts, available in single, dual, or multi-color printing.',
            color: '#E95C27'
        },
        {
            id: 'thermal',
            icon: Printer,
            title: language === 'ar' ? 'الطباعة الحرارية' : 'Thermal Printing',
            description: language === 'ar'
                ? 'وتكون باستخدام ورق حراري خاص ناقل للحبر حيث تنتقل الطباعة من الورق الناقل الى المادة المطبوعة باستخدام المكابس الحراري المختصة على حسب نوع المادة المطبوعة كالتي شيرت والكابات والكاسات والاقلام.'
                : 'Using special thermal paper to transfer ink to the material using specialized heat presses, suitable for T-shirts, caps, mugs, and pens.',
            color: '#1e293b'
        },
        {
            id: 'outdoor',
            icon: Truck,
            title: language === 'ar' ? 'استكرات السيارات' : 'Vehicle Branding',
            description: language === 'ar'
                ? 'حيث نقوم بتركيب الهوية الاعلانية للشركات على سيارات النقل والتوزيع مما يساهم بنشر رسالة العميل الاعلانية للجمهور بشكل فعال . يتم التنفيذ بأعلى المعايير والمواد ذات الجودة العالية والتي تتحمل العوامل الجوية المختلفة'
                : 'We install corporate branding on transport and distribution vehicles, effectively spreading the client\'s advertising message using high-quality materials resistant to weather conditions.',
            color: '#E95C27'
        },
        {
            id: 'signage',
            icon: Grid,
            title: language === 'ar' ? 'اللوحات الخارجية' : 'Outdoor Signage',
            description: language === 'ar'
                ? 'نقدم خيارات متنوعة: 1- زنكور مع بلاستيك مضاء 2- استانلس استيل ذهبي/فضي 3- استانلس استيل بإضاءة خلفية 4- حروف بلاستيك كاملة.'
                : 'We offer various options: 1. Zincor with illuminated plastic 2. Gold/Silver Stainless Steel 3. Backlit Stainless Steel 4. Full plastic letters.',
            color: '#1e293b'
        },
        {
            id: 'indoor',
            icon: Layout,
            title: language === 'ar' ? 'اللوحات الداخلية' : 'Indoor Signage',
            description: language === 'ar'
                ? 'لوحات مكاتب للتعريف أو إرشادية داخل المصانع والشركات. مصنوعة من الأكريليك، الفوركس، الكوركيد أو الألمنيوم الذهبي والفضي.'
                : 'Office identification or directional signs inside factories/companies. Made of Acrylic, Forex, Corrugated board, or Gold/Silver Aluminum.',
            color: '#E95C27'
        },
        {
            id: 'displays',
            icon: Monitor,
            title: language === 'ar' ? 'طاولات العرض' : 'Display Tables',
            description: language === 'ar'
                ? 'طاولات عرض بأشكال مختلفة تستخدم في المولات أو المتاجر لعرض المنتجات بطريقة احترافية وجذابة.'
                : 'Display tables in various shapes used in malls or stores to showcase products professionally and attractively.',
            color: '#1e293b'
        },
        {
            id: 'identity',
            icon: PenTool,
            title: language === 'ar' ? 'الهوية البصرية' : 'Visual Identity',
            description: language === 'ar'
                ? 'تصميم الهويات البصرية والشعارات التجارية بأفكار متميزة وإبداعية على يد نخبة من المصممين المبدعين.'
                : 'Designing visual identities and commercial logos with distinct and creative ideas by elite designers.',
            color: '#E95C27'
        },
        {
            id: 'flags',
            icon: Flag,
            title: language === 'ar' ? 'الأعلام' : 'Flags',
            description: language === 'ar'
                ? 'الأعلام الإعلانية التي تستخدم امام بوابات المعارض والشركات والمحلات التجارية لجذب الانتباه.'
                : 'Advertising flags used in front of exhibitions, companies, and retail stores to attract attention.',
            color: '#1e293b'
        }
    ];

    return (
        <section id="services" className="section" style={{ position: 'relative' }}>
            {/* Background curved shape mimicking images */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                background: 'rgba(233, 92, 39, 0.03)',
                borderRadius: isRTL ? '0 300px 300px 0' : '300px 0 0 300px',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem', color: 'var(--text-main)' }}>
                        {language === 'ar' ? 'خدماتنا المميزة' : 'Our Specialized Services'}
                    </h2>
                    <div style={{ width: '80px', height: '6px', background: 'var(--color-primary)', margin: '0 auto', borderRadius: '3px' }}></div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {catalogItems.map((item, index) => (
                        <div key={item.id} style={{
                            position: 'relative',
                            padding: '2rem',
                            borderRadius: '30px 0 30px 0', // Asymmetric radius for organic feel
                            backgroundColor: 'var(--bg-card)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            border: '1px solid var(--border-color)',
                            transition: 'all 0.3s ease',
                            borderRight: isRTL ? `5px solid ${item.color}` : '1px solid var(--border-color)',
                            borderLeft: isRTL ? '1px solid var(--border-color)' : `5px solid ${item.color}`
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                            }}
                        >
                            {/* Circular Icon Holder */}
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                boxShadow: `0 10px 20px ${item.color}40`,
                                position: 'relative'
                            }}>
                                <item.icon size={36} color="#fff" />

                                {/* Decor Circle */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    right: '-5px',
                                    width: '100%',
                                    height: '100%',
                                    border: `2px solid ${item.color}`,
                                    borderRadius: '50%',
                                    opacity: 0.3
                                }} />
                            </div>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-main)' }}>
                                {item.title}
                            </h3>

                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>
                                {item.description}
                            </p>

                            {/* Organic dots pattern */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                [isRTL ? 'left' : 'right']: '20px',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '4px'
                            }}>
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} style={{
                                        width: '4px',
                                        height: '4px',
                                        backgroundColor: item.color,
                                        borderRadius: '50%',
                                        opacity: 0.3
                                    }} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCatalog;
