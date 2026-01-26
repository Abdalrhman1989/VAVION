import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTABanner = () => {
    const { language } = useTheme();
    const isRTL = language === 'ar';

    return (
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
                zIndex: 0
            }} />

            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '10%',
                transform: 'translateY(-50%)',
                width: '300px',
                height: '300px',
                background: 'var(--color-primary)',
                borderRadius: '50%',
                filter: 'blur(150px)',
                opacity: 0.3
            }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '10%',
                transform: 'translateY(-50%)',
                width: '300px',
                height: '300px',
                background: '#3b82f6',
                borderRadius: '50%',
                filter: 'blur(150px)',
                opacity: 0.2
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        background: 'rgba(233, 92, 39, 0.1)',
                        border: '1px solid rgba(233, 92, 39, 0.3)',
                        marginBottom: '2rem'
                    }}>
                        <Sparkles size={18} style={{ color: 'var(--color-primary)' }} />
                        <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>
                            {language === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: '900',
                        marginBottom: '1.5rem',
                        color: '#fff',
                        lineHeight: 1.2
                    }}>
                        {language === 'ar'
                            ? 'جاهز لتحويل أفكارك إلى واقع؟'
                            : 'Ready to Transform Your Ideas Into Reality?'}
                    </h2>

                    <p style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '1.2rem',
                        marginBottom: '2.5rem',
                        lineHeight: 1.8
                    }}>
                        {language === 'ar'
                            ? 'دعنا نساعدك في بناء علامة تجارية لا تُنسى. تواصل معنا اليوم واحصل على استشارة مجانية.'
                            : "Let us help you build an unforgettable brand. Contact us today and get a free consultation."}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button onClick={() => window.location.href = '#booking'} style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
                            {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                            <ArrowRight size={20} style={{ marginLeft: isRTL ? 0 : '0.5rem', marginRight: isRTL ? '0.5rem' : 0, transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                        </Button>
                        <Button variant="outline" onClick={() => window.location.href = '#contact'} style={{ padding: '16px 32px', fontSize: '1.1rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
