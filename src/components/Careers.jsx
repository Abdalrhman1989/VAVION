import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, ArrowRight, MapPin, Clock } from 'lucide-react';

const Careers = () => {
    const { t, language } = useTheme();
    const isRTL = language === 'ar';

    const jobs = [
        {
            title: t('graphicDesigner'),
            type: t('fullTime'),
            location: 'Jeddah',
            dept: 'Design'
        },
        {
            title: t('webDev'),
            type: t('remote'),
            location: 'Remote',
            dept: 'Development'
        }
    ];

    return (
        <section id="careers" className="section bg-card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 10% 20%, rgba(233, 92, 39, 0.03) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="md:flex" style={{ alignItems: 'center', gap: '4rem' }}>

                    <div style={{ flex: 1, marginBottom: '2rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(233, 92, 39, 0.1)', padding: '0.5rem 1rem', borderRadius: '50px', color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                            <Briefcase size={16} />
                            <span>{t('openPositions')}</span>
                        </div>
                        <h2 className="text-gradient" style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                            {t('careersTitle')}
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                            {t('careersDesc')}
                        </p>
                        <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            {t('applyNow')}
                        </a>
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {jobs.map((job, index) => (
                                <div key={index} className="glass-card" style={{
                                    padding: '1.5rem 2rem',
                                    borderRadius: '16px',
                                    border: '1px solid var(--border-color)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-primary)';
                                        e.currentTarget.style.transform = 'translateX(10px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                >
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{job.title}</h4>
                                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                <Clock size={14} /> {job.type}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                <MapPin size={14} /> {job.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--bg-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-main)'
                                    }}>
                                        <ArrowRight size={20} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Careers;
