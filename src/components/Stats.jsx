import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const Stats = () => {
    const { t, language } = useTheme();

    const stats = [
        { icon: TrendingUp, value: '50+', label: language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed', color: '#3b82f6' },
        { icon: Users, value: '30+', label: language === 'ar' ? 'عميل سعيد' : 'Happy Clients', color: '#22c55e' },
        { icon: Award, value: '5+', label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience', color: '#f97316' },
        { icon: CheckCircle, value: '100%', label: language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction', color: '#a855f7' },
    ];

    return (
        <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #ff8a5b 100%)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} className="animate-fade-in" style={{
                            padding: '2rem',
                            animationDelay: `${index * 0.1}s`
                        }}>
                            <stat.icon size={40} style={{ color: '#fff', marginBottom: '1rem', opacity: 0.9 }} />
                            <h3 style={{ fontSize: '3rem', fontWeight: '900', color: '#fff', marginBottom: '0.5rem' }}>{stat.value}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: '500' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
