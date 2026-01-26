import React from 'react';
import Button from './ui/Button';
import { ArrowRight, Code, Component, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { t, language } = useTheme();
    const isRTL = language === 'ar';

    return (
        <section id="home" className="section bg-grid" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '100px' }}>

            {/* Ambient Glow from User Reference */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '100%',
                background: 'radial-gradient(circle at top right, rgba(233, 92, 39, 0.2), transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                left: '-10%',
                width: '50%',
                height: '50%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <div className="container">
                <div className="md:flex" style={{ alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>

                    {/* Text Content */}
                    <div style={{ flex: 1 }} className="animate-fade-in">
                        <div className="glass" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            marginBottom: '2rem'
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 10px #22c55e' }}></span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('servicesDesc')}</span>
                        </div>

                        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                            {language === 'ar' ? t('slogan') : (
                                <>
                                    We Design <span className="text-white">Intelligence</span> <br />
                                    Build <span className="text-gradient">Creativity &</span>
                                </>
                            )}
                        </h1>

                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
                            {t('subSlogan')}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Button onClick={() => window.location.href = '#portfolio'} className="animate-pulse-glow">
                                {t('portfolio')}
                            </Button>
                            <Button variant="outline" onClick={() => window.location.href = '#contact'}>
                                {t('contact')} <ArrowRight size={20} style={{ marginLeft: isRTL ? 0 : '0.5rem', marginRight: isRTL ? '0.5rem' : 0, transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                            </Button>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '3rem' }}>
                        <div className="animate-float" style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '400px',
                            aspectRatio: '1/1',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <Globe size={64} style={{ color: 'var(--color-primary)', opacity: 0.8 }} />

                            {/* Floating Cards */}
                            <div className="glass-card animate-float" style={{
                                position: 'absolute',
                                top: '-20px',
                                right: isRTL ? 'auto' : '-20px',
                                left: isRTL ? '-20px' : 'auto',
                                padding: '1.5rem',
                                borderRadius: '16px',
                                width: '180px',
                                animationDelay: '1s'
                            }}>
                                <Code size={24} style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }} />
                                <h4 style={{ fontWeight: 'bold' }}>{t('digital')}</h4>
                            </div>

                            <div className="glass-card animate-float" style={{
                                position: 'absolute',
                                bottom: '-20px',
                                left: isRTL ? 'auto' : '-20px',
                                right: isRTL ? '-20px' : 'auto',
                                padding: '1.5rem',
                                borderRadius: '16px',
                                width: '180px',
                                animationDelay: '2s'
                            }}>
                                <Component size={24} style={{ color: '#3b82f6', marginBottom: '0.5rem' }} />
                                <h4 style={{ fontWeight: 'bold' }}>{t('visualIdentity')}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
