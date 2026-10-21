import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTABanner = () => {
    const { language } = useTheme();
    const isRTL = language === 'ar';

    return (
        <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '3.5rem 0' }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #050505 0%, #141414 100%)',
                zIndex: 0
            }} />

            <div style={{
                position: 'absolute',
                top: '50%',
                left: '12%',
                transform: 'translateY(-50%)',
                width: '220px',
                height: '220px',
                background: 'var(--color-primary)',
                borderRadius: '50%',
                filter: 'blur(130px)',
                opacity: 0.22
            }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '12%',
                transform: 'translateY(-50%)',
                width: '220px',
                height: '220px',
                background: '#3b82f6',
                borderRadius: '50%',
                filter: 'blur(130px)',
                opacity: 0.16
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.35rem 0.9rem',
                        borderRadius: '50px',
                        background: 'rgba(233, 92, 39, 0.1)',
                        border: '1px solid rgba(233, 92, 39, 0.3)',
                        marginBottom: '1.25rem',
                        fontSize: '0.85rem'
                    }}>
                        <Sparkles size={15} style={{ color: 'var(--color-primary)' }} />
                        <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>
                            {language === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: '2.15rem',
                        fontWeight: '800',
                        marginBottom: '0.9rem',
                        color: '#fff',
                        lineHeight: 1.25
                    }}>
                        {language === 'ar'
                            ? 'جاهز لتحويل أفكارك إلى واقع؟'
                            : 'Ready to Transform Your Ideas Into Reality?'}
                    </h2>

                    <p style={{
                        color: 'rgba(255,255,255,0.72)',
                        fontSize: '1rem',
                        marginBottom: '1.75rem',
                        lineHeight: 1.7
                    }}>
                        {language === 'ar'
                            ? 'دعنا نساعدك في بناء علامة تجارية لا تُنسى وتنفيذ كافة مطبوعاتك ولوحاتك الإعلانية بدقة عالية.'
                            : 'Let us help you build an unforgettable brand, signage system, and digital presence across KSA.'}
                    </p>

                    <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button onClick={() => window.location.href = '#contact'} style={{ padding: '12px 26px', fontSize: '0.98rem' }}>
                            {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                            <ArrowRight size={18} style={{ marginLeft: isRTL ? 0 : '0.45rem', marginRight: isRTL ? '0.45rem' : 0, transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                        </Button>
                        <Button variant="outline" onClick={() => window.location.href = '#portfolio'} style={{ padding: '12px 26px', fontSize: '0.98rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                            {language === 'ar' ? 'استعرض أعمالنا' : 'Explore Portfolio'}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
