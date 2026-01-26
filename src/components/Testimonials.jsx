import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const { language } = useTheme();

    const testimonials = [
        {
            name: language === 'ar' ? 'أحمد السعود' : 'Ahmed Al-Saud',
            role: language === 'ar' ? 'الرئيس التنفيذي، تيك كورب' : 'CEO, TechCorp',
            text: language === 'ar'
                ? 'فافيون غيرت علامتنا التجارية بالكامل. الفريق محترف ومبدع بشكل لا يصدق.'
                : 'Vavion completely transformed our brand. The team is incredibly professional and creative.',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 5
        },
        {
            name: language === 'ar' ? 'سارة جونسون' : 'Sarah Johnson',
            role: language === 'ar' ? 'مديرة التسويق' : 'Marketing Director',
            text: language === 'ar'
                ? 'أفضل وكالة تعاملنا معها في السعودية. موصى بها بشدة للحلول الرقمية.'
                : 'The best agency we have worked with in Saudi Arabia. Highly recommended for digital solutions.',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 5
        },
        {
            name: language === 'ar' ? 'فيصل العمري' : 'Faisal Omni',
            role: language === 'ar' ? 'مؤسس ستارت آب' : 'Founder, StartUp',
            text: language === 'ar'
                ? 'تسليم سريع، جودة مذهلة، وتواصل ممتاز. يفهمون الإبداع حقاً.'
                : 'Fast delivery, amazing quality, and great communication. They truly understand creativity.',
            image: 'https://randomuser.me/api/portraits/men/67.jpg',
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="section bg-secondary">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        {language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        {language === 'ar' ? 'آراء حقيقية من عملاء سعداء' : 'Real reviews from happy clients'}
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '2rem',
                            borderRadius: '20px',
                            position: 'relative'
                        }}>
                            <Quote size={40} style={{
                                position: 'absolute',
                                top: '20px',
                                right: language === 'ar' ? 'auto' : '20px',
                                left: language === 'ar' ? '20px' : 'auto',
                                color: 'var(--color-primary)',
                                opacity: 0.2
                            }} />

                            <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="#f97316" color="#f97316" />
                                ))}
                            </div>

                            <p style={{
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                fontStyle: 'italic',
                                lineHeight: '1.8',
                                fontSize: '1.05rem'
                            }}>
                                "{testimonial.text}"
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid var(--color-primary)'
                                    }}
                                />
                                <div>
                                    <h4 style={{ fontWeight: '700', color: 'var(--text-main)' }}>{testimonial.name}</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
