import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { t, language } = useTheme();
    const isAr = language === 'ar';

    return (
        <footer style={{ backgroundColor: '#000', padding: '4rem 0 2rem', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <img
                            src="/logo-dark.png"
                            alt="Vavion Creative | فافيون كريتيف"
                            style={{ height: '46px', width: 'auto', marginBottom: '1rem' }}
                        />
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            {t('missionText')}
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff' }}>{t('quickLinks')}</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#home" style={{ color: 'var(--text-muted)' }}>{t('home')}</a></li>
                            <li><a href="#about" style={{ color: 'var(--text-muted)' }}>{t('about')}</a></li>
                            <li><a href="#services" style={{ color: 'var(--text-muted)' }}>{t('services')}</a></li>
                            <li><a href="#portfolio" style={{ color: 'var(--text-muted)' }}>{t('portfolio')}</a></li>
                            <li><a href="#contact" style={{ color: 'var(--text-muted)' }}>{t('contact')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff' }}>{t('contact')}</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            <a href="tel:+966565094364" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)' }}>
                                <Phone size={17} style={{ color: 'var(--color-primary)' }} />
                                <span dir="ltr">+966 56 509 4364</span>
                            </a>
                            <a href="tel:+966581121481" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)' }}>
                                <Phone size={17} style={{ color: 'var(--color-primary)' }} />
                                <span dir="ltr">+966 58 112 1481</span>
                            </a>
                            <a href="mailto:vavion.2030@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)' }}>
                                <Mail size={17} style={{ color: 'var(--color-primary)' }} />
                                <span>vavion.2030@gmail.com</span>
                            </a>
                            <a href="https://wa.me/966565094364" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)' }}>
                                <MessageCircle size={17} style={{ color: '#22c55e' }} />
                                <span>WhatsApp Concierge</span>
                            </a>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                <MapPin size={17} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '4px' }} />
                                <span>
                                    {isAr
                                        ? 'المدينة المنورة (بئر عثمان - طريق الملك عبدالله الفرعي) وجدة، المملكة العربية السعودية'
                                        : 'Al-Madinah Al-Munawwarah & Jeddah, Saudi Arabia'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Vavion Creative. {t('rights')}</p>
                    <p>
                        {isAr ? 'الشريك التقني والتطوير بواسطة ' : 'Engineered by Strategic Tech Partner '}
                        <a href="https://servixerspace.com/en" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 'bold' }}>
                            ServixerSpace
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
