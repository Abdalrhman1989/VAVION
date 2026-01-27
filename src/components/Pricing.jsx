import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Check, Star, Zap, Briefcase } from 'lucide-react';

const Pricing = () => {
    const { t, language } = useTheme();
    const isRTL = language === 'ar';

    const packages = [
        {
            title: t('starterPack'),
            description: t('starterDesc'),
            price: t('contactForPrice'),
            icon: <Zap size={32} />,
            features: [
                t('feature1'), // Logo
                t('feature2'), // Business Cards
                t('feature3'), // Guidelines
                t('feature4')  // Social Profiles
            ],
            color: 'var(--text-muted)'
        },
        {
            title: t('proPack'),
            description: t('proDesc'),
            price: t('contactForPrice'),
            icon: <Star size={32} />,
            features: [
                t('feature5'), // Full Identity
                t('feature6'), // Website
                t('feature2'), // Business Cards
                t('feature7'), // Brand Book
                t('feature4')
            ],
            color: 'var(--color-primary)',
            featured: true
        },
        {
            title: t('enterprisePack'),
            description: t('enterpriseDesc'),
            price: t('contactForPrice'),
            icon: <Briefcase size={32} />,
            features: [
                t('feature5'),
                t('feature6'),
                t('feature8'), // Marketing Strategy
                t('feature9'), // Priority Support
                'Custom Integrations',
                'Dedicated Manager'
            ],
            color: '#3b82f6'
        }
    ];

    return (
        <section id="pricing" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        {t('pricingTitle')}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        {t('pricingDesc')}
                    </p>
                    <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '1.5rem auto 0', borderRadius: '2px' }}></div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    {packages.map((pkg, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '3rem 2rem',
                            borderRadius: '24px',
                            border: pkg.featured ? '2px solid var(--color-primary)' : '1px solid var(--border-color)',
                            position: 'relative',
                            transform: pkg.featured ? 'scale(1.05)' : 'none',
                            zIndex: pkg.featured ? 2 : 1,
                            backgroundColor: pkg.featured ? 'var(--bg-card)' : 'var(--bg-secondary)'
                        }}>
                            {pkg.featured && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--color-primary)',
                                    color: '#fff',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 10px rgba(233, 92, 39, 0.3)'
                                }}>
                                    {language === 'ar' ? 'الأكثر طلباً' : 'Most Popular'}
                                </div>
                            )}

                            <div style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                backgroundColor: pkg.featured ? 'rgba(233, 92, 39, 0.1)' : 'var(--bg-body)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: pkg.featured ? 'var(--color-primary)' : pkg.color
                            }}>
                                {pkg.icon}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                                {pkg.title}
                            </h3>
                            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '50px' }}>
                                {pkg.description}
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0' }}>
                                {pkg.features.map((feature, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.8rem',
                                        marginBottom: '1rem',
                                        color: 'var(--text-main)',
                                        fontSize: '1rem'
                                    }}>
                                        <Check size={18} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    backgroundColor: pkg.featured ? 'var(--color-primary)' : 'transparent',
                                    color: pkg.featured ? '#fff' : 'var(--text-main)',
                                    border: pkg.featured ? 'none' : '1px solid var(--border-color)',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (!pkg.featured) {
                                        e.currentTarget.style.borderColor = 'var(--text-main)';
                                        e.currentTarget.style.backgroundColor = 'var(--bg-body)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!pkg.featured) {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }
                                }}
                            >
                                {t('getQuote')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
