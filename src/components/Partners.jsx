import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Partners = () => {
    const { t, theme } = useTheme();

    const partners = [
        "SPECTRUMS",
        "CAFANI GROUP",
        "WASEEM HAKEEM",
        "Pilgrims of Turkey & Europe",
        "National Autad Company",
        "SPECIAL Events",
        "DORRAR (AL EIMAN ROYAL)",
        "Al-Medyaf",
        "Burj Aljewar",
        "Aloshrah Alshamiyah",
        "Damascus Gate",
        "Amesa",
        "EMAC",
        "HLA LAB",
        "Al-Sham",
        "BAT"
    ];

    return (
        <section id="portfolio" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Pattern */}
            <div className="bg-grid" style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.1,
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem' }}>
                        {t('partners')} {t('inSuccess')}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                        We are proud to have worked with these amazing brands.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '2rem'
                }}>
                    {partners.map((partner, index) => (
                        <div key={index}
                            className="partner-card"
                            style={{
                                backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#fff',
                                padding: '2rem',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                border: '1px solid var(--border-color)',
                                fontWeight: '700',
                                color: 'var(--text-main)',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                minHeight: '120px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div className="arc-shape" style={{
                                width: '100px',
                                height: '100px',
                                top: '-50px',
                                right: '-50px',
                                opacity: 0.1
                            }} />
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
