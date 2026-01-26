import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { User, Phone, Mail } from 'lucide-react';

const Team = () => {
    const { language } = useTheme();
    const isRTL = language === 'ar';

    const teamMembers = [
        {
            name: "Ayham Habboub",
            role: language === 'ar' ? "مسؤول التسويق" : "Marketing Officer",
            phone: "+966 53 880 6338",
            email: "ayham.habboub96@gmail.com"
        },
        {
            name: "Hashem Habboub",
            role: language === 'ar' ? "الإدارة" : "Management",
            phone: "+966 56 509 4364",
            email: "vavion.creative@gmail.com"
        }
    ];

    return (
        <section id="team" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        {language === 'ar' ? 'فريقنا الإبداعي' : 'Our Creative Team'}
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto', borderRadius: '2px' }}></div>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '3rem'
                }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '2.5rem',
                            borderRadius: '24px',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            border: '1px solid var(--border-color)',
                            minWidth: '300px',
                            maxWidth: '350px'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--bg-secondary)',
                                margin: '0 auto 1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '3px solid var(--color-primary)',
                                overflow: 'hidden'
                            }}>
                                <User size={48} style={{ color: 'var(--color-primary)' }} />
                            </div>

                            <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                                {member.name}
                            </h3>
                            <p style={{ color: 'var(--color-primary)', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {member.role}
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
                                <a href={`tel:${member.phone.replace(/\s/g, '')}`} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--text-muted)',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                    fontSize: '0.95rem'
                                }}>
                                    <Phone size={16} /> <span dir="ltr">{member.phone}</span>
                                </a>
                                <a href={`mailto:${member.email}`} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--text-muted)',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                    fontSize: '0.95rem'
                                }}>
                                    <Mail size={16} /> <span>{member.email}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
