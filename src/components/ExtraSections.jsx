import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Quote } from 'lucide-react';

export const Clients = () => {
    const { t } = useTheme();
    // Using generic placeholders for logos
    const clients = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <section id="clients" className="section bg-secondary">
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '800', marginBottom: '3rem', color: 'var(--text-main)' }}>
                    {t('clients')}
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', opacity: 0.7 }}>
                    {clients.map((i) => (
                        <div key={i} style={{
                            width: '120px',
                            height: '60px',
                            backgroundColor: 'var(--bg-card)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-muted)',
                            fontWeight: 'bold'
                        }}>
                            LOGO {i}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Testimonials = () => {
    const { t } = useTheme();
    const reviews = [
        { name: 'Ahmed Al-Saud', role: 'CEO, TechCorp', text: 'Vavion transformed our brand entirely. The team is incredibly professional and creative.' },
        { name: 'Sarah Johnson', role: 'Marketing Director', text: 'The best agency we have worked with in Saudi Arabia. Highly recommended for digital solutions.' },
        { name: 'Faisal Omni', role: 'Founder, StartUp', text: 'Fast delivery, amazing quality, and great communication. They truly understand creativity.' },
    ];

    return (
        <section id="testimonials" className="section">
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', color: 'var(--text-main)' }}>
                    {t('testimonials')}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {reviews.map((review, index) => (
                        <div key={index} style={{
                            backgroundColor: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            position: 'relative'
                        }}>
                            <Quote size={30} className="text-primary" style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.2 }} />
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{review.text}"</p>
                            <div>
                                <h4 style={{ fontWeight: '700', color: 'var(--text-main)' }}>{review.name}</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Cta = () => {
    const { t } = useTheme();
    return (
        <section style={{ backgroundColor: 'var(--color-primary)', padding: '5rem 0', textAlign: 'center', color: '#fff' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>{t('ctaTitle')}</h2>
                <button className="btn" style={{
                    backgroundColor: '#fff',
                    color: 'var(--color-primary)',
                    border: 'none',
                    fontSize: '1.2rem',
                    padding: '1rem 3rem'
                }}>
                    {t('ctaButton')}
                </button>
            </div>
        </section>
    );
};

const ExtraSections = () => {
    return (
        <>
            <Clients />
            <Testimonials />
            <Cta />
        </>
    );
};

export default ExtraSections;
