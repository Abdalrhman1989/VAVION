import React, { useState, useEffect } from 'react';

const IntroScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
                setIsVisible(false);
                if (onComplete) onComplete();
            }, 800);
        }, 2200);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isExiting ? 0 : 1,
            transition: 'opacity 0.8s ease-in-out',
        }}>
            <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Subtle Pulse Glow behind logo */}
                <div style={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(233, 92, 39, 0.4) 0%, transparent 70%)',
                    animation: 'pulse 2s infinite ease-in-out',
                    zIndex: 0
                }} />

                <img
                    src="/logo-dark.png"
                    alt="Vavion Creative"
                    style={{
                        height: '100px',
                        width: 'auto',
                        position: 'relative',
                        zIndex: 1,
                        animation: 'logoReveal 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'
                    }}
                />
            </div>

            <style>{`
                @keyframes logoReveal {
                    0% {
                        opacity: 0;
                        transform: scale(0.8) translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.5); opacity: 0.2; }
                    100% { transform: scale(1); opacity: 0.5; }
                }
            `}</style>
        </div>
    );
};

export default IntroScreen;
