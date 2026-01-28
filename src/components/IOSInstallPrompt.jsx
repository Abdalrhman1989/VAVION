import React, { useState, useEffect } from 'react';
import { Share, X, PlusSquare } from 'lucide-react';
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
            // Slight delay for better UX
            setTimeout(() => setIsVisible(true), 1500);
        }
    }, []);

    if (!isVisible) return null;

    const isAr = language === 'ar';

    return (
        <>
            <div style={{
                position: 'fixed',
                bottom: '30px',
                left: '20px',
                right: '20px',
                backgroundColor: 'rgba(30, 30, 30, 0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '24px',
                padding: '1.5rem',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                zIndex: 10000,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                animation: 'slideUpBounce 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                color: 'white',
                maxWidth: '400px',
                margin: '0 auto'
            }}>
                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    style={{
                        position: 'absolute',
                        top: '12px',
                        right: isAr ? 'auto' : '12px',
                        left: isAr ? '12px' : 'auto',
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.2s'
                    }}
                >
                    <X size={14} />
                </button>

                {/* Header Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingRight: isAr ? '0' : '20px', paddingLeft: isAr ? '20px' : '0' }}>
                    <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        flexShrink: 0
                    }}>
                        <img src="/vavion-logo.png" alt="Vavion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <h3 style={{ fontWeight: '700', fontSize: '1.05rem', margin: '0 0 4px 0', letterSpacing: '-0.01em' }}>
                            {isAr ? 'تثبيت Vavion' : 'Install Vavion'}
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0, lineHeight: 1.4 }}>
                            {isAr ? 'احصل على تجربة التطبيق الكاملة' : 'Get the full app experience'}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%' }}></div>

                {/* Steps */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>

                    {/* Step 1 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            background: 'rgba(0,122,255,0.15)',
                            color: '#007AFF',
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Share size={18} />
                        </div>
                        <div style={{ fontSize: '0.95rem', flex: 1 }}>
                            <span style={{ color: 'rgba(255,255,255,0.6)', marginRight: '6px' }}>1.</span>
                            {isAr ? 'اضغط على زر' : 'Tap the'} <span style={{ color: '#007AFF', fontWeight: '600' }}>{isAr ? 'المشاركة' : 'Share'}</span>
                            {isAr ? ' في الأسفل' : ' button'}
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.15)',
                            color: 'white',
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <PlusSquare size={18} />
                        </div>
                        <div style={{ fontSize: '0.95rem', flex: 1 }}>
                            <span style={{ color: 'rgba(255,255,255,0.6)', marginRight: '6px' }}>2.</span>
                            {isAr ? 'اختر' : 'Select'} <span style={{ fontWeight: '600', color: 'white' }}>{isAr ? 'إضافة إلى الشاشة الرئيسية' : 'Add to Home Screen'}</span>
                        </div>
                    </div>

                </div>

                {/* Arrow Pointer */}
                <div style={{
                    position: 'absolute',
                    bottom: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '12px solid transparent',
                    borderRight: '12px solid transparent',
                    borderTop: '12px solid rgba(30, 30, 30, 0.8)',
                    filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.2))'
                }}></div>
            </div>

            <style>{`
                @keyframes slideUpBounce {
                    0% { transform: translateY(100px); opacity: 0; }
                    60% { transform: translateY(-10px); opacity: 1; }
                    100% { transform: translateY(0); }
                }
            `}</style>
        </>
    );
};

export default IOSInstallPrompt;
