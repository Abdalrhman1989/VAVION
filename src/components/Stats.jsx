import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const Stats = () => {
    const { language } = useTheme();

    const stats = [
        { icon: TrendingUp, value: '50+', label: language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed' },
        { icon: Users, value: '26+', label: language === 'ar' ? 'شريك نجاح' : 'Enterprise Partners' },
        { icon: Award, value: '16', label: language === 'ar' ? 'قسماً تخصصياً' : 'Service Divisions' },
        { icon: CheckCircle, value: '100%', label: language === 'ar' ? 'التزام بالجودة' : 'Client Satisfaction' },
    ];

    return (
        <section style={{
            padding: '2.25rem 0',
            background: 'linear-gradient(90deg, rgba(233, 92, 39, 0.12) 0%, rgba(233, 92, 39, 0.04) 50%, rgba(233, 92, 39, 0.12) 100%)',
            borderTop: '1px solid rgba(233, 92, 39, 0.22)',
            borderBottom: '1px solid rgba(233, 92, 39, 0.22)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '1.25rem',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} className="animate-fade-in" style={{
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            animationDelay: `${index * 0.1}s`
                        }}>
                            <stat.icon size={26} style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }} />
                            <h3 style={{ fontSize: '2.1rem', fontWeight: '900', color: 'var(--text-main)', lineHeight: 1.15, marginBottom: '0.25rem' }}>
                                {stat.value}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: '600' }}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
