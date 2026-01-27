import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, User } from 'lucide-react';
import Button from './ui/Button';

const Booking = () => {
    const { t, language } = useTheme();
    const isRTL = language === 'ar';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const services = [
        { value: 'webApp', label: language === 'ar' ? 'تطوير الويب والتطبيقات' : 'Web & App Development' },
        { value: 'visualIdentity', label: language === 'ar' ? 'الهوية البصرية' : 'Visual Identity' },
        { value: 'printing', label: language === 'ar' ? 'خدمات الطباعة' : 'Printing Services' },
        { value: 'signage', label: language === 'ar' ? 'اللوحات والإعلانات' : 'Signage & Advertising' },
        { value: 'marketing', label: language === 'ar' ? 'التسويق والعرض' : 'Marketing & Displays' },
        { value: 'production', label: language === 'ar' ? 'الإنتاج الإعلامي' : 'Media Production' },
    ];

    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                alert(language === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Request submitted successfully!');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' }); // Reset form
            } else {
                throw new Error(data.error || 'Failed to send');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            alert(language === 'ar'
                ? `حدث خطأ أثناء الإرسال: ${error.message}`
                : `Error sending request: ${error.message}`);
        } finally {
            setStatus('idle');
        }
    };

    return (
        <section id="contact" className="section bg-secondary" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem' }}>
                        {language === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        {language === 'ar'
                            ? 'نحن هنا لمساعدتك في بدء مشروعك القادم. تواصل معنا للحصول على استشارة مجانية.'
                            : 'We are here to help you start your next project. Contact us for a free consultation.'}
                    </p>
                </div>

                <div className="md:flex" style={{ gap: '4rem', alignItems: 'start' }}>

                    {/* Left Content - Contact Info */}
                    <div style={{ flex: 1, marginBottom: '2rem' }}>
                        <div style={{
                            backgroundColor: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: '20px',
                            border: '1px solid var(--border-color)'
                        }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', color: 'var(--text-main)' }}>
                                {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(233, 92, 39, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--color-primary)'
                                    }}>
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--text-main)' }}>Email Us</h4>
                                        <a href="mailto:vavion.creative@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>vavion.creative@gmail.com</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(233, 92, 39, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--color-primary)'
                                    }}>
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--text-main)' }}>Call Us</h4>
                                        <a href="tel:+966565094364" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>+966 56 509 4364</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(233, 92, 39, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--color-primary)'
                                    }}>
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--text-main)' }}>Visit Us</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{t('jeddahMadinah')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <div className="glass-card" style={{ flex: 1, padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
                                <Clock size={32} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
                                <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>24/7 Response</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>We typically reply within few hours</span>
                            </div>
                            <div className="glass-card" style={{ flex: 1, padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
                                <User size={32} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
                                <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Expert Team</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Direct access to specialists</span>
                            </div>
                        </div>
                    </div>

                    {/* Booking/Contact Form */}
                    <div style={{ flex: 1.2 }}>
                        <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '2.5rem', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', color: 'var(--text-main)' }}>
                                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-main)' }}>
                                        {language === 'ar' ? 'الاسم' : 'Name'}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            backgroundColor: 'var(--bg-body)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '12px',
                                            color: 'var(--text-main)',
                                            outline: 'none',
                                            fontSize: '1rem'
                                        }}
                                        placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-main)' }}>
                                        {language === 'ar' ? 'رقم الهاتف' : 'Phone'}
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            backgroundColor: 'var(--bg-body)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '12px',
                                            color: 'var(--text-main)',
                                            outline: 'none',
                                            fontSize: '1rem'
                                        }}
                                        placeholder="+966..."
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-main)' }}>
                                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        backgroundColor: 'var(--bg-body)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '12px',
                                        color: 'var(--text-main)',
                                        outline: 'none',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="example@vavion.com"
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', marginBottom: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-main)' }}>
                                        {language === 'ar' ? 'الخدمة المطلوبة' : 'Service Required'}
                                    </label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            backgroundColor: 'var(--bg-body)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '12px',
                                            color: 'var(--text-main)',
                                            outline: 'none',
                                            fontSize: '1rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <option value="">{language === 'ar' ? 'اختر خدمة...' : 'Select Service...'}</option>
                                        {services.map((service) => (
                                            <option key={service.value} value={service.value}>{service.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-main)' }}>
                                    {language === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}
                                </label>
                                <textarea
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        backgroundColor: 'var(--bg-body)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '12px',
                                        color: 'var(--text-main)',
                                        outline: 'none',
                                        resize: 'none',
                                        fontSize: '1rem'
                                    }}
                                    placeholder={language === 'ar' ? 'أخبرنا المزيد عن مشروعك...' : 'Tell us more about your project...'}
                                />
                            </div>

                            <Button type="submit" style={{ width: '100%', padding: '18px', fontSize: '1.1rem', opacity: status === 'loading' ? 0.7 : 1 }} disabled={status === 'loading'}>
                                {status === 'loading'
                                    ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...')
                                    : (language === 'ar' ? 'إرسال الطلب' : 'Submit Request')
                                }
                                {status !== 'loading' && <Send size={20} style={{ marginLeft: isRTL ? 0 : '0.5rem', marginRight: isRTL ? '0.5rem' : 0, transform: isRTL ? 'rotate(180deg)' : 'none' }} />}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
