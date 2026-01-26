import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { User, Linkedin, Twitter, Instagram } from 'lucide-react';

const Team = () => {
    const { language } = useTheme();
    const isRTL = language === 'ar';

    const teamMembers = [
        {
            name: "Ahmed Al-Salem",
            role: language === 'ar' ? "المؤسس والرئيس التنفيذي" : "Founder & CEO",
            image: null // Placeholder
        },
        {
            name: "Sarah Johnson",
            role: language === 'ar' ? "مديرة الإبداع" : "Creative Director",
            image: null
        },
        {
            name: "Mohammed Ali",
            role: language === 'ar' ? "كبير المصممين" : "Senior Designer",
            image: null
        },
        {
            name: "Layla Hassan",
            role: language === 'ar' ? "مديرة التسويق" : "Marketing Manager",
            image: null
        }
    ];

    return (
        <section id="team" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        {language === 'ar' ? 'فريقنا الإبداعي' : 'Meet Our Creative Team'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        {language === 'ar' ? 'نخبة من الخبراء والمبدعين يعملون بشغف لتحقيق رؤيتك.' : 'A group of experts and creatives working passionately to realize your vision.'}
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '2rem',
                            borderRadius: '20px',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
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
                                border: '2px solid var(--color-primary)',
                                overflow: 'hidden'
                            }}>
                                {/* Placeholder for user image */}
                                <User size={50} style={{ color: 'var(--text-muted)' }} />
                            </div>

                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                                {member.name}
                            </h3>
                            <p style={{ color: 'var(--color-primary)', fontSize: '0.95rem', marginBottom: '1.5rem', fontWeight: '500' }}>
                                {member.role}
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} aria-label="Twitter">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} aria-label="Instagram">
                                    <Instagram size={20} />
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
