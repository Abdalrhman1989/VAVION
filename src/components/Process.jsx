import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Search, Map, Zap, CheckCircle } from 'lucide-react';

const Process = () => {
    const { t } = useTheme();

    const steps = [
        {
            icon: <Search size={24} />,
            title: 'Discovery',
            description: 'We start by understanding your brand, goals, and target audience.'
        },
        {
            icon: <Map size={24} />,
            title: 'Strategy',
            description: 'We develop a comprehensive roadmap tailored to your specific needs.'
        },
        {
            icon: <Zap size={24} />,
            title: 'Execution',
            description: 'Our creative team brings the vision to life with precision and flair.'
        },
        {
            icon: <CheckCircle size={24} />,
            title: 'Delivery',
            description: 'We deliver the final assets and ensure everything runs smoothly.'
        }
    ];

    return (
        <section id="process" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-main)' }}>
                        {t('processTitle')}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        From concept to completion, we ensure a seamless journey.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', position: 'relative' }}>
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block" style={{
                        position: 'absolute',
                        top: '40px',
                        left: '0',
                        width: '100%',
                        height: '2px',
                        background: 'var(--border-color)',
                        zIndex: 0
                    }}></div>
                    <style>{`
             @media (min-width: 768px) {
               .hidden\\:md\\:block { display: block !important; }
             }
             @media (max-width: 767px) {
               .hidden\\:md\\:block { display: none !important; }
             }
           `}</style>

                    {steps.map((step, index) => (
                        <div key={index} style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'var(--bg-card)',
                                border: '2px solid var(--color-primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto',
                                color: 'var(--color-primary)',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                boxShadow: '0 4px 10px var(--shadow-color)'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
