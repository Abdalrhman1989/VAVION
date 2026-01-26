import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ClientsTicker = () => {
    const { t } = useTheme();

    const partners = [
        "SPECTRUMS", "CAFANI GROUP", "WASEEM HAKEEM", "Pilgrims of Turkey",
        "National Autad", "SPECIAL Events", "DORRAR ROYAL", "Al-Medyaf",
        "Burj Aljewar", "Aloshrah Alshamiyah", "Damascus Gate", "Amesa",
        "EMAC", "HLA LAB", "Al-Sham", "BAT", "VAVION", "CREATIVE"
    ];

    return (
        <section className="section bg-secondary" style={{ padding: '4rem 0', overflow: 'hidden' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    {t('partners')} {t('inSuccess')}
                </p>
            </div>

            <div style={{
                display: 'flex',
                width: '100%',
                position: 'relative',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '4rem',
                    animation: 'scroll 30s linear infinite',
                    paddingLeft: '4rem',
                    whiteSpace: 'nowrap'
                }}>
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: 'var(--text-muted)',
                            opacity: 0.7,
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'color 0.3s, opacity 0.3s'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-primary)';
                                e.currentTarget.style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--text-muted)';
                                e.currentTarget.style.opacity = '0.7';
                            }}
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default ClientsTicker;
