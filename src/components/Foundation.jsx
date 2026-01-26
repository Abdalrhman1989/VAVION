import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Clock, Building, Users } from 'lucide-react';

const Foundation = () => {
    const { language } = useTheme();
    const isRTL = language === 'ar';

    return (
        <section className="section bg-card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Decorative organic shapes matching the visual identity */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: isRTL ? 'auto' : '-50px',
                left: isRTL ? '-50px' : 'auto',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '50px solid rgba(233, 92, 39, 0.05)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="md:flex" style={{ gap: '4rem', alignItems: 'center' }}>

                    <div style={{ flex: 1, position: 'relative' }}>
                        <div style={{
                            position: 'relative',
                            padding: '3px',
                            background: 'linear-gradient(45deg, var(--color-primary), transparent)',
                            borderRadius: '24px'
                        }}>
                            <div style={{
                                backgroundColor: 'var(--bg-body)',
                                borderRadius: '22px',
                                padding: '2rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Inner decorative circle */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    left: '-20px',
                                    width: '100px',
                                    height: '100px',
                                    backgroundColor: 'var(--color-primary)',
                                    opacity: 0.1,
                                    borderRadius: '50%'
                                }} />

                                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                                    {language === 'ar' ? 'التأسيس' : 'Our Foundation'}
                                </h3>
                                <p style={{ lineHeight: '2', color: 'var(--text-muted)', fontSize: '1.1rem', textAlign: 'justify' }}>
                                    {language === 'ar'
                                        ? 'تأسست فافيون كريتيف عام 2020 في السوق ك مؤسسة تهدف الى تكوين شراكات كبرى أو مؤسسات أو حتى أفراد وأسر منتجة حيث يعتبر الهدف الاسمي للمؤسسة وموظفيها مع تقديم النصيحة والخيار المناسب له كل ذلك بأفضل الأسعار و أحسن جودة متاحة في كل المنتجات حيث تقدم فافيون كريتيف جميع حلول الطباعة والتسويق , وخيارات متنوعة في الدعاية والإعلان بأشكالها المتنوعة.'
                                        : 'Founded in 2020, Vavion Creative aims to build major partnerships and serve individuals and productive families. Our goal is to provide the best advice and suitable options at the best prices and highest quality. We offer comprehensive printing and marketing solutions.'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: 1, marginTop: '2rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
                                <Clock size={40} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
                                <h4 style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>2020</h4>
                                <span style={{ color: 'var(--text-muted)' }}>{language === 'ar' ? 'سنة التأسيس' : 'Founded'}</span>
                            </div>
                            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
                                <Building size={40} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
                                <h4 style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Riyadh</h4>
                                <span style={{ color: 'var(--text-muted)' }}>{language === 'ar' ? 'المقر الرئيسي' : 'Headquarters'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Foundation;
