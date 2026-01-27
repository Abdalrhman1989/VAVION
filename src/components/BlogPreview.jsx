import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
    const { t, language } = useTheme();
    const isRTL = language === 'ar';

    const blogs = [
        {
            id: '1',
            title: t('blog1Title'),
            desc: t('blog1Desc'),
            date: 'Jan 24, 2026',
            author: 'Abd Alrhman Aldarra',
            image: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)' // Placeholder gradient
        },
        {
            id: '2',
            title: t('blog2Title'),
            desc: t('blog2Desc'),
            date: 'Jan 20, 2026',
            author: 'Abd Alrhman Aldarra',
            image: 'linear-gradient(135deg, #4ECDC4 0%, #556270 100%)'
        },
        {
            id: '3',
            title: t('blog3Title'),
            desc: t('blog3Desc'),
            date: 'Jan 15, 2026',
            author: 'Abd Alrhman Aldarra',
            image: 'linear-gradient(135deg, #e95c27 0%, #2b32b2 100%)'
        }
    ];

    return (
        <section id="blog" className="section bg-secondary">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        {t('latestInsights')}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                        {t('insightsDesc')}
                    </p>
                    <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '1.5rem auto 0', borderRadius: '2px' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {blogs.map((blog, index) => (
                        <div key={index} className="glass-card" style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                height: '200px',
                                background: blog.image,
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '15px',
                                    left: isRTL ? 'auto' : '15px',
                                    right: isRTL ? '15px' : 'auto',
                                    backgroundColor: 'rgba(0,0,0,0.6)',
                                    color: '#fff',
                                    padding: '5px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backdropFilter: 'blur(5px)'
                                }}>
                                    <Calendar size={14} />
                                    <span>{blog.date}</span>
                                </div>
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)', fontSize: '0.9rem' }}>
                                    <User size={16} />
                                    <span>{blog.author}</span>
                                </div>

                                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: '1.4' }}>
                                    {blog.title}
                                </h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                                    {blog.desc}
                                </p>

                                <Link to={`/blog/${blog.id}`} style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--text-main)',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    transition: 'gap 0.2s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.gap = '0.8rem'}
                                    onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                                >
                                    {t('readMore')}
                                    <ArrowRight size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
