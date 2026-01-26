import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Code, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

const TechPartner = () => {
    const { language } = useTheme();
    const isRTL = language === 'ar';

    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 0' }}>
            <div className="container">
                <div className="glass-card" style={{
                    padding: '3rem',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid var(--color-primary)',
                    background: 'linear-gradient(145deg, rgba(233, 92, 39, 0.05) 0%, rgba(0,0,0,0) 100%)'
                }}>

                    <div style={{
                        backgroundColor: 'var(--color-primary)',
                        color: '#fff',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        marginBottom: '2rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <ShieldCheck size={16} />
                        {language === 'ar' ? 'شريك تقني استراتيجي' : 'Strategic Tech Partner'}
                    </div>

                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        marginBottom: '1rem',
                        color: 'var(--text-main)',
                        maxWidth: '800px'
                    }}>
                        {language === 'ar'
                            ? 'حلول رقمية متطورة بدعم من ServixerSpace'
                            : 'Advanced Digital Solutions Powered by ServixerSpace'}
                    </h2>

                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.2rem',
                        maxWidth: '700px',
                        marginBottom: '2.5rem',
                        lineHeight: '1.8'
                    }}>
                        {language === 'ar'
                            ? 'نفتخر بشراكتنا الاستراتيجية مع ServixerSpace لتقديم أفضل خدمات تطوير الويب والتطبيقات بأعلى معايير الجودة والأداء.'
                            : 'We are proud of our strategic partnership with ServixerSpace to provide top-tier web and app development services with the highest standards of quality and performance.'}
                    </p>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1.5rem',
                        justifyContent: 'center',
                        marginBottom: '3rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                            <Globe size={20} style={{ color: 'var(--color-primary)' }} />
                            <span>{language === 'ar' ? 'تطوير مواقع الويب' : 'Web Development'}</span>
                        </div>
                        <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)' }}></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                            <Code size={20} style={{ color: 'var(--color-primary)' }} />
                            <span>{language === 'ar' ? 'تطبيقات الجوال' : 'Mobile Apps'}</span>
                        </div>
                        <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)' }}></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                            <ShieldCheck size={20} style={{ color: 'var(--color-primary)' }} />
                            <span>{language === 'ar' ? 'أمان وموثوقية' : 'Secure & Reliable'}</span>
                        </div>
                    </div>

                    <a
                        href="https://servixerspace.vercel.app/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--color-primary)',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            borderBottom: '2px solid transparent',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                    >
                        {language === 'ar' ? 'زيارة موقع الشريك' : 'Visit Partner Website'}
                        <ArrowRight size={20} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TechPartner;
