import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
    const { t, language } = useTheme();
    const isAr = language === 'ar';
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: isAr ? 'الهوية البصرية والمطبوعات الورقية وأكياس فافيون' : 'Vavion Corporate Stationery & Custom Paper Bags',
            subtitle: isAr ? 'ورق رسمي، فولدرات، كروت شخصية، وأكياس ورقية فاخرة' : 'Letterheads, Presentation Folders, Business Cards & Luxury Bags',
            categoryKey: 'visualIdentity',
            image: '/partners/strategic/uploaded_media_2_1769569215447.jpg',
            isProductSheet: true,
        },
        {
            id: 2,
            title: isAr ? 'أجنحة المعارض، البوب آب، الرول آب وطاولات العرض' : 'Exhibition Pop-up Backdrops, Roll-ups & Display Counters',
            subtitle: isAr ? 'تجهيز معارض ومؤتمرات متكاملة في جدة والمدينة المنورة' : 'Turnkey Exhibition Booths & Retail Tasting Counters in KSA',
            categoryKey: 'signage',
            image: '/partners/strategic/uploaded_media_1_1769569215447.jpg',
            isProductSheet: true,
        },
        {
            id: 3,
            title: isAr ? 'الطباعة الحرارية والهدايا الدعائية والبطاقات التعريفية' : 'Thermal Apparel Printing, Lanyards, ID Badges & VIP Gifts',
            subtitle: isAr ? 'تيشيرتات، كابات، أكواب، برشات موظفين، وهدايا شركات' : 'Branded Uniforms, Caps, Mugs, Lanyards & Corporate Merchandise',
            categoryKey: 'printing',
            image: '/partners/strategic/uploaded_media_3_1769569215447.jpg',
            isProductSheet: true,
        },
        {
            id: 4,
            title: isAr ? 'طباعة الأعلام الإعلانية وأعلام الريشة والدمعة' : 'Outdoor Advertising, Feather & Teardrop Flags',
            subtitle: isAr ? 'أعلام خارجية وداخلية عالية المتانة للمعارض والشركات' : 'High-Durability Indoor & Outdoor Promotional Flags',
            categoryKey: 'marketing',
            image: '/partners/strategic/uploaded_media_0_1769569215447.jpg',
            isProductSheet: true,
        },
        {
            id: 5,
            title: isAr ? 'منصة التجارة الإلكترونية والأنظمة السحابية' : 'Enterprise E-Commerce & Cloud Storefront',
            subtitle: isAr ? 'تطوير مشترك مع الشريك التقني ServixerSpace' : 'Co-engineered with Strategic Tech Partner ServixerSpace',
            categoryKey: 'webApp',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isProductSheet: false,
        },
        {
            id: 6,
            title: isAr ? 'تطبيق إدارة الخدمات والحجوزات الذكية' : 'Smart Service & Booking Mobile Application',
            subtitle: isAr ? 'تطبيق iOS و Android بواجهة ثنائية اللغة' : 'Bilingual Arabic/English iOS & Android Native Experience',
            categoryKey: 'digital',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isProductSheet: false,
        },
        {
            id: 7,
            title: isAr ? 'لوحة تحكم ذكاء الأعمال والتقارير المالية' : 'Executive BI & Financial Analytics Portal',
            subtitle: isAr ? 'حلول رقمية مخصصة للمؤسسات والشركات' : 'Custom Enterprise Web Application & Telemetry',
            categoryKey: 'webApp',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isProductSheet: false,
        },
        {
            id: 8,
            title: isAr ? 'دليل الهوية البصرية المتكاملة للشركات' : 'Comprehensive Corporate Brand Book & Guidelines',
            subtitle: isAr ? 'تصميم شعار ونظام بصري متكامل للعلامات التجارية' : 'Logo Architecture, Typography & Brand Identity System',
            categoryKey: 'visualIdentity',
            image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isProductSheet: false,
        },
        {
            id: 9,
            title: isAr ? 'بوابة العقارات والمشاريع الهندسية' : 'Real Estate & Architectural Showcase Portal',
            subtitle: isAr ? 'منصة عرض مشاريع تفاعلية للشركات العقارية' : 'Interactive Property & Masterplan Web Platform',
            categoryKey: 'webApp',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            isProductSheet: false,
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

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.categoryKey === activeCategory);

    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div style={{ marginBottom: '2.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', maxWidth: '680px' }}>
                        <h2 style={{ fontSize: '2.15rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                            {t('portfolio')}
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                            {isAr
                                ? 'نماذج من إنتاجنا الطباعي والإعلاني وتطوير المنصات الرقمية في المملكة (اضغط على أي عمل للتكبير والمعاينة الكاملة)'
                                : 'Selected print production, exhibition signage, brand systems, and digital platforms across KSA (click any card to inspect full size)'}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', justifyContent: 'center' }}>
                        {categories.map((category) => (
                            <button
                                key={category.key}
                                onClick={() => setActiveCategory(category.key)}
                                style={{
                                    padding: '6px 16px',
                                    borderRadius: '50px',
                                    border: '1px solid var(--border-color)',
                                    background: activeCategory === category.key ? 'var(--color-primary)' : 'var(--bg-card)',
                                    color: activeCategory === category.key ? '#fff' : 'var(--text-muted)',
                                    cursor: 'pointer',
                                    fontSize: '0.88rem',
                                    fontWeight: '600',
                                    transition: 'all 0.25s ease'
                                }}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid var(--border-color)',
                                backgroundColor: 'var(--bg-card)',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = 'rgba(233, 92, 39, 0.45)';
                                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.25)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Zoomed-Out Image Viewport (No text covering artwork) */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: '210px',
                                backgroundColor: project.isProductSheet ? '#ffffff' : '#0d0d0d',
                                padding: project.isProductSheet ? '12px' : '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                borderBottom: '1px solid var(--border-color)'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: project.isProductSheet ? 'contain' : 'cover',
                                        transition: 'transform 0.35s ease'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '10px',
                                    [isAr ? 'left' : 'right']: '10px',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backdropFilter: 'blur(4px)'
                                }} title={isAr ? 'تكبير الصورة' : 'View full image'}>
                                    <Maximize2 size={15} />
                                </div>
                            </div>

                            {/* Clean Executive Caption Footer Below Image */}
                            <div style={{
                                padding: '1.1rem 1.25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.3rem',
                                flex: 1,
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <span style={{
                                        display: 'inline-block',
                                        color: 'var(--color-primary)',
                                        fontWeight: '700',
                                        fontSize: '0.76rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        marginBottom: '0.2rem'
                                    }}>
                                        {t(project.categoryKey)}
                                    </span>
                                    <h3 style={{
                                        color: 'var(--text-main)',
                                        fontSize: '1.02rem',
                                        fontWeight: '700',
                                        lineHeight: 1.35
                                    }}>
                                        {project.title}
                                    </h3>
                                </div>
                                {project.subtitle && (
                                    <p style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '0.84rem',
                                        lineHeight: 1.5,
                                        marginTop: '0.2rem'
                                    }}>
                                        {project.subtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full-Resolution Zoomed-Out Lightbox Modal */}
            {selectedProject && (
                <div
                    onClick={() => setSelectedProject(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 2000,
                        backgroundColor: 'rgba(0, 0, 0, 0.86)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'relative',
                            maxWidth: '920px',
                            width: '100%',
                            backgroundColor: 'var(--bg-card)',
                            borderRadius: '18px',
                            border: '1px solid var(--border-color)',
                            overflow: 'hidden',
                            boxShadow: '0 24px 60px rgba(0,0,0,0.6)'
                        }}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close preview"
                            style={{
                                position: 'absolute',
                                top: '14px',
                                [isAr ? 'left' : 'right']: '14px',
                                zIndex: 10,
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: 'rgba(0,0,0,0.75)',
                                color: '#fff',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <X size={20} />
                        </button>

                        <div style={{
                            width: '100%',
                            maxHeight: '68vh',
                            backgroundColor: selectedProject.isProductSheet ? '#ffffff' : '#0a0a0a',
                            padding: selectedProject.isProductSheet ? '20px' : '0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '62vh',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>

                        <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--border-color)' }}>
                            <span style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.8rem' }}>
                                {t(selectedProject.categoryKey)}
                            </span>
                            <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: '800', marginTop: '0.2rem' }}>
                                {selectedProject.title}
                            </h3>
                            {selectedProject.subtitle && (
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '0.25rem' }}>
                                    {selectedProject.subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
