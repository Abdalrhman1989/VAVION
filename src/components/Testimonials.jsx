import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const { language } = useTheme();

    const testimonials = [
        {
            name: language === 'ar' ? 'مجموعة كفاني القابضة' : 'Cafani Holding Group',
            role: language === 'ar' ? 'شريك استراتيجي — قطاع الأعمال والضيافة' : 'Strategic Partner — Corporate & Hospitality',
            initials: 'CG',
            text: language === 'ar'
                ? 'فافيون كريتيف شريك موثوق في تنفيذ كافة مطبوعاتنا ولوحاتنا الإعلانية وهويتنا البصرية بدقة عالية والتزام تام بالمواعيد.'
                : 'Vavion Creative is a trusted partner in executing all our commercial printing, signage, and visual identity with exceptional precision.',
            rating: 5
        },
        {
            name: language === 'ar' ? 'درر الإيمان رويال والرواسي الفندقية' : 'Dorrar Al Eiman Royal & Rawasi Suites',
            role: language === 'ar' ? 'القطاع الفندقي — المدينة المنورة' : 'Hospitality Sector — Al-Madinah Al-Munawwarah',
            initials: 'DR',
            text: language === 'ar'
                ? 'جودة استثنائية في اللوحات الداخلية والخارجية والمطبوعات الفندقية، وتعاون راقٍ يعكس احترافية الفريق.'
                : 'Outstanding quality across indoor/outdoor hotel signage and luxury printed collateral. Truly professional execution.',
            rating: 5
        },
        {
            name: language === 'ar' ? 'شركة الأوتاد الوطنية للإنشاءات' : 'National Autad Construction Co.',
            role: language === 'ar' ? 'قطاع المقاولات والمشاريع — المملكة العربية السعودية' : 'Construction & Engineering Sector — KSA',
            initials: 'NA',
            text: language === 'ar'
                ? 'سرعة في الإنجاز، جودة طباعة ولوحات مشاريع ممتازة، وتكامل رائع في الحلول الرقمية والتسويقية.'
                : 'Fast turnaround, durable project signage and fleet branding, and seamless digital and marketing support.',
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="section bg-secondary">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        {language === 'ar' ? 'ماذا يقول شركاء النجاح' : 'What Our Partners Say'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        {language === 'ar' ? 'شهادات نعتز بها من كبرى الشركات والمؤسسات في المملكة' : 'Trusted feedback from leading enterprises across Saudi Arabia'}
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '2rem',
                            borderRadius: '20px',
                            position: 'relative'
                        }}>
                            <Quote size={40} style={{
                                position: 'absolute',
                                top: '20px',
                                right: language === 'ar' ? 'auto' : '20px',
                                left: language === 'ar' ? '20px' : 'auto',
                                color: 'var(--color-primary)',
                                opacity: 0.2
                            }} />

                            <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="#f97316" color="#f97316" />
                                ))}
                            </div>

                            <p style={{
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                lineHeight: '1.8',
                                fontSize: '1.05rem'
                            }}>
                                "{testimonial.text}"
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--color-primary), #ff8a5b)',
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '800',
                                        fontSize: '1rem',
                                        flexShrink: 0
                                    }}
                                >
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: '700', color: 'var(--text-main)' }}>{testimonial.name}</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
