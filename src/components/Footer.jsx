import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { t } = useTheme();

    return (
        <footer style={{ backgroundColor: '#000', padding: '4rem 0 2rem', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>Vavion</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            {t('missionText')}
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff' }}>{t('quickLinks')}</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#home" style={{ color: 'var(--text-muted)' }}>{t('home')}</a></li>
                            <li><a href="#services" style={{ color: 'var(--text-muted)' }}>{t('services')}</a></li>
                            <li><a href="#portfolio" style={{ color: 'var(--text-muted)' }}>{t('portfolio')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff' }}>{t('contact')}</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-muted)',
                                    transition: '0.2s'
                                }}>
                                    <Icon size={20} />
                                </a>
                            ))}
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
                    <p>&copy; {new Date().getFullYear()} Vavion. {t('rights')}</p>
                    <p>Developed by <a href="https://servixerspace.vercel.app/en" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 'bold' }}>ServixerSpace</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
