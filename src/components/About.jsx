import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Target, Lightbulb, Users, Flag, Rocket, Heart } from 'lucide-react';

const About = () => {
    const { t } = useTheme();

    return (
        <section id="about" className="section bg-secondary">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <div>
                        <span className="text-primary" style={{ fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                            {t('whoWeAre')}
                        </span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                            Creativity Meets <span className="text-primary">Strategy</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            {t('aboutText')}
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-primary)' }}>50+</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Projects</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-primary)' }}>20+</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Clients</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-primary)' }}>100%</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            backgroundColor: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: '16px',
                            border: '1px solid var(--border-color)',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {/* Mission */}
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ padding: '10px', backgroundColor: 'rgba(233, 92, 39, 0.1)', borderRadius: '8px', color: 'var(--color-primary)' }}>
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{t('mission')}</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>{t('missionText')}</p>
                                    </div>
                                </div>

                                {/* Vision */}
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ padding: '10px', backgroundColor: 'rgba(233, 92, 39, 0.1)', borderRadius: '8px', color: 'var(--color-primary)' }}>
                                        <Lightbulb size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{t('vision')}</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>{t('visionText')}</p>
                                    </div>
                                </div>

                                {/* Goals */}
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ padding: '10px', backgroundColor: 'rgba(233, 92, 39, 0.1)', borderRadius: '8px', color: 'var(--color-primary)' }}>
                                        <Flag size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{t('goals')}</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>{t('goalsText')}</p>
                                    </div>
                                </div>

                                {/* Values */}
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ padding: '10px', backgroundColor: 'rgba(233, 92, 39, 0.1)', borderRadius: '8px', color: 'var(--color-primary)' }}>
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{t('values')}</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>{t('valuesText')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '-20px',
                            width: '100%',
                            height: '100%',
                            border: '2px solid var(--color-primary)',
                            borderRadius: '16px',
                            zIndex: 0,
                            opacity: 0.3
                        }} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
