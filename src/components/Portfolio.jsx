import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
    const { t, language } = useTheme();
    const isAr = language === 'ar';

    const projects = [
        {
            id: 1,
            title: isAr ? 'الهوية البصرية والمطبوعات الورقية وأكياس فافيون' : 'Vavion Corporate Stationery & Custom Paper Bags',
            subtitle: isAr ? 'ورق رسمي، فولدرات، كروت شخصية، وأكياس ورقية فاخرة' : 'Letterheads, Presentation Folders, Business Cards & Luxury Bags',
            categoryKey: 'visualIdentity',
            image: '/partners/strategic/uploaded_media_2_1769569215447.jpg',
        },
        {
            id: 2,
            title: isAr ? 'أجنحة المعارض، البوب آب، الرول آب وطاولات العرض' : 'Exhibition Pop-up Backdrops, Roll-ups & Display Counters',
            subtitle: isAr ? 'تجهيز معارض ومؤتمرات متكاملة في جدة والمدينة المنورة' : 'Turnkey Exhibition Booths & Retail Tasting Counters in KSA',
            categoryKey: 'signage',
            image: '/partners/strategic/uploaded_media_1_1769569215447.jpg',
        },
        {
            id: 3,
            title: isAr ? 'الطباعة الحرارية والهدايا الدعائية والبطاقات التعريفية' : 'Thermal Apparel Printing, Lanyards, ID Badges & VIP Gifts',
            subtitle: isAr ? 'تيشيرتات، كابات، أكواب، برشات موظفين، وهدايا شركات' : 'Branded Uniforms, Caps, Mugs, Lanyards & Corporate Merchandise',
            categoryKey: 'printing',
            image: '/partners/strategic/uploaded_media_3_1769569215447.jpg',
        },
        {
            id: 4,
            title: isAr ? 'طباعة الأعلام الإعلانية وأعلام الريشة والدمعة' : 'Outdoor Advertising, Feather & Teardrop Flags',
            subtitle: isAr ? 'أعلام خارجية وداخلية عالية المتانة للمعارض والشركات' : 'High-Durability Indoor & Outdoor Promotional Flags',
            categoryKey: 'marketing',
            image: '/partners/strategic/uploaded_media_0_1769569215447.jpg',
        },
        {
            id: 5,
            title: isAr ? 'منصة التجارة الإلكترونية والأنظمة السحابية' : 'Enterprise E-Commerce & Cloud Storefront',
            subtitle: isAr ? 'تطوير مشترك مع الشريك التقني ServixerSpace' : 'Co-engineered with Strategic Tech Partner ServixerSpace',
            categoryKey: 'webApp',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 6,
            title: isAr ? 'تطبيق إدارة الخدمات والحجوزات الذكية' : 'Smart Service & Booking Mobile Application',
            subtitle: isAr ? 'تطبيق iOS و Android بواجهة ثنائية اللغة' : 'Bilingual Arabic/English iOS & Android Native Experience',
            categoryKey: 'digital',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 7,
            title: isAr ? 'لوحة تحكم ذكاء الأعمال والتقارير المالية' : 'Executive BI & Financial Analytics Portal',
            subtitle: isAr ? 'حلول رقمية مخصصة للمؤسسات والشركات' : 'Custom Enterprise Web Application & Telemetry',
            categoryKey: 'webApp',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 8,
            title: isAr ? 'دليل الهوية البصرية المتكاملة للشركات' : 'Comprehensive Corporate Brand Book & Guidelines',
            subtitle: isAr ? 'تصميم شعار ونظام بصري متكامل للعلامات التجارية' : 'Logo Architecture, Typography & Brand Identity System',
            categoryKey: 'visualIdentity',
            image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 9,
            title: isAr ? 'بوابة العقارات والمشاريع الهندسية' : 'Real Estate & Architectural Showcase Portal',
            subtitle: isAr ? 'منصة عرض مشاريع تفاعلية للشركات العقارية' : 'Interactive Property & Masterplan Web Platform',
            categoryKey: 'webApp',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        }
    ];

    const categories = [
        { key: 'All', label: isAr ? 'الكل' : 'All Works' },
        { key: 'visualIdentity', label: t('visualIdentity') },
        { key: 'printing', label: t('printing') },
        { key: 'signage', label: t('signage') },
        { key: 'marketing', label: t('marketing') },
        { key: 'webApp', label: t('webApp') },
        { key: 'digital', label: t('digital') },
    ];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.categoryKey === activeCategory);

    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{t('portfolio')}</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                            {isAr
                                ? 'نماذج من إنتاجنا الطباعي والإعلاني وتطوير المنصات الرقمية في المملكة'
                                : 'Selected print production, exhibition signage, brand systems, and digital platforms across KSA'}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                        {categories.map((category) => (
                            <button
                                key={category.key}
                                onClick={() => setActiveCategory(category.key)}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    border: '1px solid var(--border-color)',
                                    background: activeCategory === category.key ? 'var(--color-primary)' : 'transparent',
                                    color: activeCategory === category.key ? '#fff' : 'var(--text-muted)',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} style={{
                            position: 'relative',
                            borderRadius: '18px',
                            overflow: 'hidden',
                            aspectRatio: '4/3',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--bg-card)'
                        }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '1.75rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.94) 15%, rgba(0,0,0,0.55) 70%, transparent 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end'
                            }}>
                                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.85rem' }}>
                                    {t(project.categoryKey)}
                                </span>
                                <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 'bold', marginTop: '0.35rem', lineHeight: 1.35 }}>
                                    {project.title}
                                </h3>
                                {project.subtitle && (
                                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', marginTop: '0.35rem' }}>
                                        {project.subtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
