import React, { useState, useEffect } from 'react';
import { Share, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const IOSInstallPrompt = () => {
    const { language } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Detect iOS
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        // Detect if already installed (standalone mode)
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

        // Show if iOS and NOT installed
        if (isIOS && !isStandalone) {
            // Check if we've shown it this session to avoid annoyance (optional, currently showing always for testing)
            // const hasShown = sessionStorage.getItem('iosPromptShown');
            // if (!hasShown) {
            setIsVisible(true);
            // sessionStorage.setItem('iosPromptShown', 'true');
            // }
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            backgroundColor: 'rgba(20, 20, 20, 0.95)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'slideUp 0.5s ease-out'
        }}>
            <button
                onClick={() => setIsVisible(false)}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: language === 'ar' ? 'auto' : '10px',
                    left: language === 'ar' ? '10px' : 'auto',
                    background: 'none',
                    border: 'none',
                    color: '#999',
                    cursor: 'pointer'
                }}
            >
                <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/vavion-logo.png" alt="Vavion" style={{ width: '48px', height: '48px', borderRadius: '10px' }} />
                <div>
                    <h3 style={{ fontWeight: 'bold', color: '#fff', fontSize: '1rem' }}>
                        {language === 'ar' ? 'تثبيت تطبيق Vavion' : 'Install Vavion App'}
                    </h3>
                    <p style={{ color: '#ccc', fontSize: '0.85rem' }}>
                        {language === 'ar' ? 'أضف التطبيق للشاشة الرئيسية لتجربة أفضل' : 'Add to Home Screen for the best experience'}
                    </p>
                </div>
            </div>

            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#fff' }}>
                    <span>1. {language === 'ar' ? 'اضغط على' : 'Tap'}</span>
                    <Share size={18} style={{ color: '#007AFF' }} />
                    <span>{language === 'ar' ? 'مشاركة' : 'Share'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#fff' }}>
                    <span>2. {language === 'ar' ? 'اختر' : 'Select'}</span>
                    <span style={{ fontWeight: 'bold' }}>{language === 'ar' ? 'إضافة للشاشة الرئيسية' : 'Add to Home Screen'}</span>
                </div>
            </div>

            {/* Triangle pointing to bottom center (where share usually is on Safari) */}
            <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid rgba(20, 20, 20, 0.95)'
            }}></div>

            <style>{`
                @keyframes slideUp {
                    from { transform: translateY(100px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default IOSInstallPrompt;
