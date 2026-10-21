import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Code, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

const TechPartner = () => {
    const { language } = useTheme();
    const isRTL = language === 'ar';

    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem 0' }}>
            <div className="container">
                <div className="glass-card" style={{
                    padding: '2.25rem 2rem',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid rgba(233, 92, 39, 0.35)',
                    background: 'linear-gradient(145deg, rgba(233, 92, 39, 0.06) 0%, rgba(0,0,0,0) 100%)'
                }}>

                    <div style={{
                        backgroundColor: 'var(--color-primary)',
                        color: '#fff',
                        padding: '0.35rem 1.15rem',
                        borderRadius: '20px',
                        fontWeight: '700',
                        fontSize: '0.82rem',
                        marginBottom: '1.15rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                    }}>
                        <ShieldCheck size={15} />
                        {language === 'ar' ? 'شريك تقني استراتيجي' : 'Strategic Tech Partner'}
                    </div>

                    <h2 style={{
                        fontSize: '1.9rem',
                        fontWeight: '800',
                        marginBottom: '0.75rem',
                        color: 'var(--text-main)',
                        maxWidth: '720px'
                    }}>
                        {language === 'ar'
                            ? 'حلول رقمية متطورة بدعم من ServixerSpace'
                            : 'Advanced Digital Solutions Powered by ServixerSpace'}
                    </h2>

                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1rem',
                        maxWidth: '640px',
                        marginBottom: '1.5rem',
                        lineHeight: '1.7'
                    }}>
                        {language === 'ar'
                            ? 'نفتخر بشراكتنا الاستراتيجية مع ServixerSpace لتقديم أفضل خدمات تطوير الويب والتطبيقات بأعلى معايير الجودة والأداء.'
                            : 'We are proud of our strategic partnership with ServixerSpace to deliver enterprise web and mobile application engineering with the highest standards of performance.'}
                    </p>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1.25rem',
                        justifyContent: 'center',
                        marginBottom: '1.75rem',
                        fontSize: '0.92rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-main)' }}>
                            <Globe size={18} style={{ color: 'var(--color-primary)' }} />
                            <span>{language === 'ar' ? 'تطوير مواقع الويب' : 'Web Engineering'}</span>
                        </div>
                        <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--border-color)' }}></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-main)' }}>
                            <Code size={18} style={{ color: 'var(--color-primary)' }} />
                            <span>{language === 'ar' ? 'تطبيقات الجوال' : 'Mobile Apps'}</span>
                        </div>
                        <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--border-color)' }}></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-main)' }}>
                            <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
                            <span>{language === 'ar' ? 'أمان وموثوقية' : 'Enterprise Security'}</span>
                        </div>
                    </div>

                    <a
                        href="https://servixerspace.com/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            color: 'var(--color-primary)',
                            fontWeight: '700',
                            fontSize: '0.98rem',
                            borderBottom: '2px solid transparent',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                    >
                        {language === 'ar' ? 'زيارة موقع الشريك التقني' : 'Visit Strategic Partner'}
                        <ArrowRight size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TechPartner;
