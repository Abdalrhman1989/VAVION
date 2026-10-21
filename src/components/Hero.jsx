import React from 'react';
import Button from './ui/Button';
import { ArrowRight, Code, Component, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { t, language } = useTheme();
    const isRTL = language === 'ar';

    return (
        <section id="home" className="section bg-grid" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '100px', paddingBottom: '60px' }}>

            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '55%',
                height: '100%',
                background: 'radial-gradient(circle at top right, rgba(233, 92, 39, 0.16), transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                left: '-10%',
                width: '45%',
                height: '45%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="md:flex" style={{ alignItems: 'center', justifyContent: 'space-between', gap: '3rem' }}>

                    {/* Text Content */}
                    <div style={{ flex: 1.15 }} className="animate-fade-in">
                        <div className="glass" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 0.95rem',
                            borderRadius: '50px',
                            marginBottom: '1.5rem'
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 10px #22c55e' }}></span>
                            <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>{t('servicesDesc')}</span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.15rem, 4vw, 3rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '1.15rem', color: 'var(--text-main)' }}>
                            {language === 'ar' ? t('slogan') : (
                                <>
                                    We Design <span style={{ color: 'var(--text-main)' }}>Intelligence</span> &amp; <br />
                                    Build <span className="text-gradient">Creativity</span>
                                </>
                            )}
                        </h1>

                        <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', lineHeight: 1.7 }}>
                            {t('subSlogan')}
                        </p>

                        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                            <Button onClick={() => window.location.href = '#portfolio'} className="animate-pulse-glow">
                                {t('portfolio')}
                            </Button>
                            <Button variant="outline" onClick={() => window.location.href = '#contact'}>
                                {t('contact')} <ArrowRight size={18} style={{ marginLeft: isRTL ? 0 : '0.45rem', marginRight: isRTL ? '0.45rem' : 0, transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                            </Button>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div style={{ flex: 0.85, display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '2rem' }}>
                        <div className="animate-float" style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '320px',
                            aspectRatio: '1/1',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                            borderRadius: '22px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <Globe size={52} style={{ color: 'var(--color-primary)', opacity: 0.85 }} />

                            {/* Floating Cards */}
                            <div className="glass-card animate-float" style={{
                                position: 'absolute',
                                top: '-16px',
                                right: isRTL ? 'auto' : '-16px',
                                left: isRTL ? '-16px' : 'auto',
                                padding: '1.1rem 1.25rem',
                                borderRadius: '14px',
                                width: '160px',
                                animationDelay: '1s'
                            }}>
                                <Code size={20} style={{ color: 'var(--color-primary)', marginBottom: '0.35rem' }} />
                                <h4 style={{ fontWeight: '700', fontSize: '0.92rem' }}>{t('digital')}</h4>
                            </div>

                            <div className="glass-card animate-float" style={{
                                position: 'absolute',
                                bottom: '-16px',
                                left: isRTL ? 'auto' : '-16px',
                                right: isRTL ? '-16px' : 'auto',
                                padding: '1.1rem 1.25rem',
                                borderRadius: '14px',
                                width: '160px',
                                animationDelay: '2s'
                            }}>
                                <Component size={20} style={{ color: '#3b82f6', marginBottom: '0.35rem' }} />
                                <h4 style={{ fontWeight: '700', fontSize: '0.92rem' }}>{t('visualIdentity')}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
