import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const { language } = useTheme();
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: language === 'ar' ? 'كم تستغرق عملية تصميم الهوية البصرية؟' : 'How long does a visual identity design take?',
            answer: language === 'ar'
                ? 'عادة ما تستغرق عملية تصميم الهوية البصرية الكاملة من 2-4 أسابيع، اعتماداً على نطاق المشروع ومتطلباته.'
                : 'A complete visual identity design typically takes 2-4 weeks, depending on the project scope and requirements.'
        },
        {
            question: language === 'ar' ? 'هل تقدمون خدمات تطوير المواقع والتطبيقات؟' : 'Do you offer web and app development services?',
            answer: language === 'ar'
                ? 'نعم! نقدم خدمات تطوير مواقع وتطبيقات احترافية باستخدام أحدث التقنيات مثل React و Node.js و Flutter.'
                : 'Yes! We offer professional web and app development services using the latest technologies like React, Node.js, and Flutter.'
        },
        {
            question: language === 'ar' ? 'ما هي خدمات الطباعة التي تقدمونها؟' : 'What printing services do you offer?',
            answer: language === 'ar'
                ? 'نقدم طباعة أوفست، رقمية، سلك سكرين، حرارية، وطباعة UV. كما نوفر خدمات الليزر والحفر.'
                : 'We offer Offset, Digital, Silk Screen, Heat Transfer, and UV printing. We also provide laser cutting and engraving services.'
        },
        {
            question: language === 'ar' ? 'هل يمكنكم المساعدة في تسويق علامتي التجارية؟' : 'Can you help market my brand?',
            answer: language === 'ar'
                ? 'بالتأكيد! نقدم حلول تسويق متكاملة تشمل التسويق الرقمي، إدارة وسائل التواصل الاجتماعي، وتحسين محركات البحث.'
                : 'Absolutely! We offer integrated marketing solutions including digital marketing, social media management, and SEO optimization.'
        },
        {
            question: language === 'ar' ? 'كيف يمكنني الحصول على عرض سعر؟' : 'How can I get a quote?',
            answer: language === 'ar'
                ? 'يمكنك التواصل معنا عبر نموذج الحجز أو الاتصال بنا مباشرة. سنقوم بدراسة متطلباتك وتقديم عرض سعر مخصص.'
                : 'You can contact us through the booking form or call us directly. We will study your requirements and provide a customized quote.'
        }
    ];

    return (
        <section id="faq" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        {language === 'ar' ? 'إجابات على الأسئلة الأكثر شيوعاً' : 'Answers to the most common questions'}
                    </p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            style={{
                                marginBottom: '1rem',
                                borderRadius: '12px',
                                overflow: 'hidden'
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: language === 'ar' ? 'right' : 'left'
                                }}
                            >
                                <span style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '1.1rem' }}>{faq.question}</span>
                                <ChevronDown
                                    size={24}
                                    style={{
                                        color: 'var(--color-primary)',
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                            </button>
                            {openIndex === index && (
                                <div style={{
                                    padding: '0 1.5rem 1.5rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: '1.8'
                                }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
