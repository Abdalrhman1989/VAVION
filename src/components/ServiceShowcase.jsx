import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ServiceShowcase = () => {
    const { language } = useTheme();
    const isRTL = language === 'ar';

    const items = [
        {
            title: language === 'ar' ? 'التأسيس' : 'Our Foundation',
            description: language === 'ar'
                ? 'تأسست فافيون كريتيف عام 2020 في السوق ك مؤسسة تهدف الى تكوين شراكات كبرى أو مؤسسات أو حتى أفراد وأسر منتجة حيث يعتبر الهدف الاسمي للمؤسسة وموظفيها مع تقديم النصيحة والخيار المناسب له كل ذلك بأفضل الأسعار و أحسن جودة متاحة في كل المنتجات حيث تقدم فافيون كريتيف جميع حلول الطباعة والتسويق , وخيارات متنوعة في الدعاية والإعلان بأشكالها المتنوعة.'
                : 'Founded in 2020, Vavion Creative aims to build major partnerships and serve individuals and productive families. Our goal is to provide the best advice and suitable options at the best prices and highest quality. We offer comprehensive printing and marketing solutions.',
            image: '/assets/showcase/foundation.png',
            bg: 'var(--bg-card)'
        },
        {
            title: language === 'ar' ? 'الطباعة الاوفسيت' : 'Offset Printing',
            description: language === 'ar'
                ? 'وهي تنفيذ المطبوعات الورقية تكون بمكائن طباعة اختصاصية للكميات الكبيرة والتجارية كورق خطابات الشركات وهويتها البصرية والعلب والمجلات والبرشورات الاعلانية والاستكرات التجارية للمصانع وغيرها.'
                : 'Execution of paper publications using specialized printing machines for large commercial quantities, such as corporate letterheads, visual identities, boxes, magazines, advertising brochures, and commercial stickers for factories.',
            image: '/assets/showcase/offset.png',
            bg: 'var(--bg-secondary)'
        },
        {
            title: language === 'ar' ? 'طباعة الشاشة الحريرية ( سلك سكرين )' : 'Silk Screen Printing',
            description: language === 'ar'
                ? 'وهي طباعة فنية على أيدي حرفيين مهرة تنفذ على الهدايا الاعلانية المتنوعة وتكون على شكل طباعة لون أو لونين أو عدة ألوان.'
                : 'Artistic printing by skilled craftsmen executed on various advertising gifts, available in single, dual, or multi-color printing.',
            image: '/assets/showcase/silkscreen.png',
            bg: 'var(--bg-card)'
        },
        {
            title: language === 'ar' ? 'الطباعة الحرارية' : 'Thermal Printing',
            description: language === 'ar'
                ? 'وتكون باستخدام ورق حراري خاص ناقل للحبر حيث تنتقل الطباعة من الورق الناقل الى المادة المطبوعة باستخدام المكابس الحراري المختصة على حسب نوع المادة المطبوعة كالتي شيرت والكابات والكاسات والاقلام.'
                : 'Using special thermal paper to transfer ink to the material using specialized heat presses, suitable for T-shirts, caps, mugs, and pens.',
            image: '/assets/showcase/thermal.png',
            bg: 'var(--bg-secondary)'
        },
        {
            title: language === 'ar' ? 'طباعة وتركيب استكرات السيارات' : 'Car Sticker Printing & Installation',
            description: language === 'ar'
                ? 'حيث نقوم بتركيب الهوية الاعلانية للشركات على سيارات النقل والتوزيع مما يساهم بنشر رسالة العميل الاعلانية للجمهور بشكل فعال . يتم التنفيذ بأعلى المعايير والمواد ذات الجودة العالية والتي تتحمل العوامل الجوية المختلفة'
                : 'We install corporate branding on transport and distribution vehicles, effectively spreading the client\'s advertising message. Executed with high standards and high-quality materials that withstand various weather conditions.',
            image: '/assets/showcase/outdoor.png',
            bg: 'var(--bg-card)'
        }
    ];

    return (
        <section id="showcase" className="section" style={{ padding: 0 }}>
            {items.map((item, index) => (
                <div key={index} style={{
                    padding: '6rem 0',
                    backgroundColor: item.bg,
                    borderTop: '1px solid var(--border-color)',
                    borderBottom: '1px solid var(--border-color)'
                }}>
                    <div className="container">
                        <div className="md:flex" style={{
                            gap: '4rem',
                            alignItems: 'center',
                            flexDirection: index % 2 === 0 ? (isRTL ? 'row' : 'row') : (isRTL ? 'row-reverse' : 'row-reverse')
                        }}>
                            {/* Text Side */}
                            <div style={{ flex: 1, marginBottom: '2rem' }}>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.5rem 1.5rem',
                                    background: 'rgba(233, 92, 39, 0.1)',
                                    borderRadius: '50px',
                                    color: 'var(--color-primary)',
                                    fontWeight: 'bold',
                                    marginBottom: '1.5rem'
                                }}>
                                    0{index + 1}
                                </div>
                                <h2 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '900',
                                    marginBottom: '1.5rem',
                                    color: 'var(--text-main)'
                                }}>
                                    {item.title}
                                </h2>
                                <p style={{
                                    fontSize: '1.1rem',
                                    lineHeight: '2',
                                    color: 'var(--text-muted)'
                                }}>
                                    {item.description}
                                </p>
                            </div>

                            {/* Image Side */}
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                <div className="glass-card" style={{
                                    padding: '1rem',
                                    borderRadius: '24px',
                                    transform: index % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)',
                                    transition: 'transform 0.3s ease'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = index % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)'}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            borderRadius: '16px',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ServiceShowcase;
