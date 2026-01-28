import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Partners = () => {
    const { t, theme } = useTheme();

    const clientImages = [
        "vavion_copy-01.jpg", "vavion_copy-02.jpg", "vavion_copy-03.jpg", "vavion_copy-04.jpg",
        "vavion_copy-05.jpg", "vavion_copy-06.jpg", "vavion_copy-07.jpg", "vavion_copy-08.jpg",
        "vavion_copy-09.jpg", "vavion_copy-10.jpg", "vavion_copy-11.jpg", "vavion_copy-12.jpg",
        "vavion_copy-13.jpg", "vavion_copy-14.jpg", "vavion_copy-15.jpg", "vavion_copy-16.jpg",
        "vavion_copy-17.jpg", "vavion_copy-18.jpg", "vavion_copy-19.jpg", "vavion_copy-20.jpg",
        "vavion_copy-21.jpg", "vavion_copy-22.jpg", "vavion_copy-24.jpg", "vavion_copy-25.jpg"
    ].map(img => ({
        src: `/partners/clients/${img}`,
        alt: img.replace('.jpg', '').replace(/_/g, ' ')
    }));

    return (
        <section id="partners" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem' }}>
                        {t('partners')} {t('inSuccess')}
                    </h2>
                </div>

                <div style={{
                    display: 'flex',
                    width: '100%',
                    position: 'relative',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '4rem',
                        animation: 'scroll 40s linear infinite',
                        paddingLeft: '4rem',
                        alignItems: 'center'
                    }}>
                        {[...clientImages, ...clientImages].map((partner, index) => (
                            <div key={index}
                                style={{
                                    flexShrink: 0,
                                    width: '150px',
                                    height: '100px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    filter: theme === 'dark' ? 'invert(1) hue-rotate(180deg) saturate(1.5) contrast(1.2)' : 'none',
                                    mixBlendMode: theme === 'dark' ? 'screen' : 'normal',
                                    transition: 'all 0.3s ease',
                                    opacity: theme === 'dark' ? 0.9 : 1
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = theme === 'dark' ? 'invert(1) hue-rotate(180deg) saturate(1.5) contrast(1.2)' : 'none';
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = theme === 'dark' ? 'invert(1) hue-rotate(180deg) saturate(1.5) contrast(1.2)' : 'none';
                                    e.currentTarget.style.opacity = theme === 'dark' ? '0.9' : '1';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <img
                                    src={partner.src}
                                    alt={partner.alt}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
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

export default Partners;
