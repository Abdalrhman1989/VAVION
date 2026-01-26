import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ShieldCheck, Clock, ThumbsUp, Zap } from 'lucide-react';

const WhyUs = () => {
    const { t, language } = useTheme();

    const features = [
        {
            icon: ShieldCheck,
            title: language === 'ar' ? 'جودة مضمونة' : 'Quality Guaranteed',
            description: language === 'ar' ? 'نلتزم بأعلى معايير الجودة في كل تفاصيل مشاريعنا.' : 'We adhere to the highest quality standards in every project detail.'
        },
        {
            icon: Clock,
            title: language === 'ar' ? 'التزام بالمواعيد' : 'On-Time Delivery',
            description: language === 'ar' ? 'نحترم وقتك ونلتزم بتسليم المشاريع في الموعد المحدد.' : 'We respect your time and commit to delivering projects on schedule.'
        },
        {
            icon: ThumbsUp,
            title: language === 'ar' ? 'خبرة واسعة' : 'Extensive Experience',
            description: language === 'ar' ? 'فريقنا يمتلك خبرة طويلة في السوق السعودي.' : 'Our team possesses extensive experience in the Saudi market.'
        },
        {
            icon: Zap,
            title: language === 'ar' ? 'حلول مبتكرة' : 'Innovative Solutions',
            description: language === 'ar' ? 'نستخدم أحدث التقنيات لتقديم حلول إبداعية.' : 'We use the latest technologies to provide creative solutions.'
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        {t('whyUs')}
                    </h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        {t('whyUsText')}
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '2rem',
                            borderRadius: '16px',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                backgroundColor: 'rgba(233, 92, 39, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: 'var(--color-primary)'
                            }}>
                                <feature.icon size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-main)' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
