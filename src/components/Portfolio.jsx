import React, { useState } from 'react';
import Button from './ui/Button';
import { useTheme } from '../context/ThemeContext';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        categoryKey: 'webApp',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Health Tracking App',
        categoryKey: 'digital',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Financial Dashboard',
        categoryKey: 'webApp',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: 'Corporate Identity',
        categoryKey: 'visualIdentity',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        title: 'Real Estate Portal',
        categoryKey: 'webApp',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 6,
        title: 'Social Media Campaign',
        categoryKey: 'marketing',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 7,
        title: 'Strategic Partner 1',
        categoryKey: 'strategic',
        image: '/partners/strategic/uploaded_media_0_1769569215447.jpg',
    },
    {
        id: 8,
        title: 'Strategic Partner 2',
        categoryKey: 'strategic',
        image: '/partners/strategic/uploaded_media_1_1769569215447.jpg',
    },
    {
        id: 9,
        title: 'Strategic Partner 3',
        categoryKey: 'strategic',
        image: '/partners/strategic/uploaded_media_2_1769569215447.jpg',
    },
    {
        id: 10,
        title: 'Strategic Partner 4',
        categoryKey: 'strategic',
        image: '/partners/strategic/uploaded_media_3_1769569215447.jpg',
    },
    {
        id: 11,
        title: 'Strategic Partner 5',
        categoryKey: 'strategic',
        image: '/partners/strategic/uploaded_media_4_1769569215447.jpg',
    }
];

const Portfolio = () => {
    const { t } = useTheme();
    // Simplified categories for demo as translation keys
    const categories = ['All', 'webApp', 'digital', 'visualIdentity', 'marketing', 'strategic'];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.categoryKey === activeCategory);

    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{t('portfolio')}</h2>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    border: '1px solid var(--border-color)',
                                    background: activeCategory === category ? 'var(--color-primary)' : 'transparent',
                                    color: activeCategory === category ? '#fff' : 'var(--text-muted)',
                                    cursor: 'pointer',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {category === 'All' ? t('portfolio') : t(category)}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            aspectRatio: '4/3',
                            border: '1px solid var(--border-color)',
                            group: 'project-card'
                        }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '2rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end'
                            }}>
                                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.9rem' }}>{t(project.categoryKey)}</span>
                                <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
