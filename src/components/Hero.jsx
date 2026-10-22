import React, { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import {
    ArrowRight,
    ArrowDown,
    Code,
    Component,
    Layers,
    Sparkles,
    Printer,
    Cpu,
    ShieldCheck,
    Box
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { t, language } = useTheme();
    const isRTL = language === 'ar';
    const canvasRef = useRef(null);
    const sectionRef = useRef(null);

    // Interactive 3D & Scroll State (Terminal-Industries inspired)
    const [visualMode, setVisualMode] = useState('terminal'); // 'terminal' | 'isometric' | 'orbital'
    const [tilt, setTilt] = useState({ x: 8, y: isRTL ? 12 : -12 });
    const [scrollProgress, setScrollProgress] = useState(0);
    const [scanPos, setScanPos] = useState(0);

    // Smooth Scroll Progress (Up-to-Down 0 -> 1)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || 0;
            const maxScroll = 650;
            const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Continuous Top-to-Bottom Laser Scan Position for HUD
    useEffect(() => {
        let frameId;
        let start = performance.now();
        const animateScan = (now) => {
            const elapsed = (now - start) / 1000;
            // Sweeps from 0% (top) to 100% (bottom) smoothly
            const pos = ((elapsed * 22) % 100);
            setScanPos(pos);
            frameId = requestAnimationFrame(animateScan);
        };
        frameId = requestAnimationFrame(animateScan);
        return () => cancelAnimationFrame(frameId);
    }, []);

    // Interactive 60FPS 3D Perspective WebGL-Style Canvas Engine
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width = (canvas.width = canvas.offsetWidth);
        let height = (canvas.height = canvas.offsetHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };
        window.addEventListener('resize', handleResize);

        // 3D Particles cascading from TOP to BOTTOM in 3D space
        const particleCount = 65;
        const particles = Array.from({ length: particleCount }, () => ({
            x: (Math.random() - 0.5) * 1400,
            y: (Math.random() - 0.5) * 900,
            z: Math.random() * 800 + 100,
            speedY: Math.random() * 1.4 + 0.6,
            size: Math.random() * 2.2 + 1,
            isPrimary: Math.random() > 0.3
        }));

        let time = 0;

        const render = () => {
            time += 0.016;
            ctx.clearRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;
            const fov = 420;

            // 1. Terminal-Industries 3D Perspective Grid (Top & Bottom Horizon Planes)
            ctx.save();
            ctx.strokeStyle = 'rgba(233, 92, 39, 0.11)';
            ctx.lineWidth = 1;

            const gridLines = 14;
            for (let i = -gridLines; i <= gridLines; i++) {
                const xOffset = i * 95;
                // Perspective lines converging toward center horizon
                ctx.beginPath();
                ctx.moveTo(cx + xOffset * 0.25, 0);
                ctx.lineTo(cx + xOffset * 1.85, height);
                ctx.stroke();
            }

            // Horizontal depth lines moving from TOP to BOTTOM (Up-to-Down flow)
            const horizontalCount = 10;
            const flowOffset = (time * 48) % (height / horizontalCount);
            for (let j = 0; j <= horizontalCount; j++) {
                const yPos = j * (height / horizontalCount) + flowOffset;
                const alpha = Math.sin((yPos / height) * Math.PI) * 0.14;
                ctx.strokeStyle = `rgba(233, 92, 39, ${Math.max(0.02, alpha)})`;
                ctx.beginPath();
                ctx.moveTo(0, yPos);
                ctx.lineTo(width, yPos);
                ctx.stroke();
            }
            ctx.restore();

            // 2. Top-to-Bottom Sweeping 3D Laser Scan Beam
            const beamY = ((time * 115) % (height + 160)) - 80;
            const beamGrad = ctx.createLinearGradient(0, beamY - 70, 0, beamY + 20);
            beamGrad.addColorStop(0, 'rgba(233, 92, 39, 0)');
            beamGrad.addColorStop(0.8, 'rgba(233, 92, 39, 0.08)');
            beamGrad.addColorStop(1, 'rgba(233, 92, 39, 0.35)');
            ctx.fillStyle = beamGrad;
            ctx.fillRect(0, beamY - 70, width, 90);

            // Crisp leading laser line
            ctx.strokeStyle = 'rgba(233, 92, 39, 0.55)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, beamY + 18);
            ctx.lineTo(width, beamY + 18);
            ctx.stroke();

            // 3. 3D Projected Nodes & Constellation Mesh (Moving Up-to-Down)
            const projected = [];
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                // Move particle from top to bottom
                p.y += p.speedY * (visualMode === 'orbital' ? 2.1 : 1.2);
                if (p.y > 480) {
                    p.y = -480;
                    p.x = (Math.random() - 0.5) * 1400;
                }

                const scale = fov / (fov + p.z);
                const px = cx + p.x * scale;
                const py = cy + p.y * scale;

                projected.push({ px, py, scale, isPrimary: p.isPrimary, size: p.size });

                // Draw glowing 3D node
                ctx.beginPath();
                ctx.arc(px, py, Math.max(0.8, p.size * scale * 1.4), 0, Math.PI * 2);
                ctx.fillStyle = p.isPrimary
                    ? `rgba(233, 92, 39, ${Math.min(0.85, scale * 0.9)})`
                    : `rgba(59, 130, 246, ${Math.min(0.75, scale * 0.8)})`;
                ctx.fill();
            }

            // Connect nearby 3D nodes with telemetry filaments
            for (let i = 0; i < projected.length; i++) {
                for (let j = i + 1; j < projected.length; j++) {
                    const dx = projected[i].px - projected[j].px;
                    const dy = projected[i].py - projected[j].py;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 115) {
                        ctx.strokeStyle = `rgba(233, 92, 39, ${(1 - dist / 115) * 0.16})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(projected[i].px, projected[i].py);
                        ctx.lineTo(projected[j].px, projected[j].py);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [visualMode]);

    // Mouse 3D Parallax Handler
    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const xNorm = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
        const yNorm = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
        setTilt({
            x: -yNorm * 12 + 4,
            y: xNorm * 14
        });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 8, y: isRTL ? 12 : -12 });
    };

    // Scroll-driven top-to-bottom transform values
    const stageTranslateY = scrollProgress * 48; // Moves smoothly down as user scrolls
    const stageRotateX = tilt.x * (1 - scrollProgress * 0.65);
    const stageRotateY = tilt.y * (1 - scrollProgress * 0.65);

    return (
        <section
            id="home"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="section"
            style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '108px',
                paddingBottom: '68px',
                background: 'radial-gradient(circle at 75% 15%, rgba(233, 92, 39, 0.14) 0%, rgba(10, 10, 14, 0.98) 55%, #050507 100%)'
            }}
        >
            {/* 3D Interactive Perspective & Top-to-Bottom Scan Canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            {/* Left / Right Vertical Scroll-Down Telemetry Rail (Terminal-Industries Motif) */}
            <div
                className="hidden md:flex"
                style={{
                    position: 'absolute',
                    top: '115px',
                    bottom: '45px',
                    [isRTL ? 'left' : 'right']: '22px',
                    width: '28px',
                    zIndex: 2,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pointerEvents: 'none',
                    opacity: 0.75
                }}
            >
                <span style={{ fontSize: '9px', fontFamily: 'monospace', color: 'var(--color-primary)', writingMode: 'vertical-rl', letterSpacing: '2px' }}>
                    SYS.3D // TOP-DOWN
                </span>
                <div style={{
                    flex: 1,
                    width: '2px',
                    margin: '12px 0',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '2px'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: `${scanPos}%`,
                        left: 0,
                        width: '100%',
                        height: '32px',
                        background: 'linear-gradient(to bottom, transparent, var(--color-primary), #fff)',
                        boxShadow: '0 0 12px var(--color-primary)'
                    }} />
                </div>
                <span style={{ fontSize: '9px', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
                    {Math.round((1 - scrollProgress) * 100)}%
                </span>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                {/* Top Industrial Telemetry Header Bar */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    paddingBottom: '1.25rem',
                    marginBottom: '2rem',
                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
                        <span style={{
                            display: 'inline-block',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#22c55e',
                            boxShadow: '0 0 10px #22c55e'
                        }} />
                        <span style={{ color: '#fff', fontWeight: '700' }}>VAVION.3D // ENGINE ACTIVE</span>
                        <span style={{ opacity: 0.45 }}>|</span>
                        <span>JEDDAH &bull; AL-MADINAH (24.47° N, 39.61° E)</span>
                    </div>

                    {/* Interactive 3D Engine Preset Switcher */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px',
                        borderRadius: '50px',
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {[
                            { id: 'terminal', label: isRTL ? 'مسح ثلاثي الأبعاد' : '3D Terminal Scan' },
                            { id: 'isometric', label: isRTL ? 'مكعبات 3D' : '3D Isometric Deck' },
                            { id: 'orbital', label: isRTL ? 'موجة الجزيئات' : 'Particle Flow' },
                        ].map((mode) => (
                            <button
                                key={mode.id}
                                onClick={() => setVisualMode(mode.id)}
                                style={{
                                    padding: '4px 11px',
                                    borderRadius: '50px',
                                    border: 'none',
                                    fontSize: '0.72rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    backgroundColor: visualMode === mode.id ? 'var(--color-primary)' : 'transparent',
                                    color: visualMode === mode.id ? '#fff' : 'var(--text-muted)',
                                    transition: 'all 0.25s ease'
                                }}
                            >
                                {mode.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="md:flex" style={{ alignItems: 'center', justifyContent: 'space-between', gap: '3.25rem' }}>

                    {/* Left/Right Column: Executive Typography & Top-to-Bottom Cascade */}
                    <div style={{
                        flex: 1.08,
                        transform: `translateY(${scrollProgress * -18}px)`,
                        transition: 'transform 0.1s linear'
                    }} className="animate-fade-in">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.55rem',
                            padding: '0.42rem 1rem',
                            borderRadius: '50px',
                            marginBottom: '1.35rem',
                            background: 'linear-gradient(90deg, rgba(233, 92, 39, 0.16), rgba(233, 92, 39, 0.04))',
                            border: '1px solid rgba(233, 92, 39, 0.35)'
                        }}>
                            <Sparkles size={15} style={{ color: 'var(--color-primary)' }} />
                            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff' }}>
                                {isRTL
                                    ? 'منظومة إبداعية ورقمية ثلاثية الأبعاد — 16 قسماً تخصصياً'
                                    : 'Next-Gen Creative, 3D Signage & Digital Engineering Hub'}
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.25rem, 4.2vw, 3.35rem)',
                            fontWeight: '900',
                            lineHeight: 1.16,
                            marginBottom: '1.2rem',
                            color: '#ffffff',
                            letterSpacing: isRTL ? '0' : '-0.02em'
                        }}>
                            {isRTL ? (
                                <>
                                    نبتكر <span className="text-gradient">الذكاء البصري</span>
                                    <br />
                                    ونبني المستقبل الإبداعي
                                </>
                            ) : (
                                <>
                                    We Engineer <span className="text-gradient">3D Identity</span> &amp; <br />
                                    Build Digital Powerhouses
                                </>
                            )}
                        </h1>

                        <p style={{
                            fontSize: '1.05rem',
                            color: 'rgba(255,255,255,0.76)',
                            marginBottom: '1.85rem',
                            maxWidth: '540px',
                            lineHeight: 1.75
                        }}>
                            {isRTL
                                ? 'من الهوية البصرية، اللوحات ثلاثية الأبعاد (3D)، وأجنحة المعارض والطباعة الصناعية إلى تطوير المنصات الرقمية والتطبيقات الذكية في جدة والمدينة المنورة.'
                                : 'From architectural 3D signage, exhibition booths, and commercial printing to custom web & mobile ecosystems across Jeddah and Al-Madinah.'}
                        </p>

                        {/* Live Telemetry KPI Pills */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                            gap: '0.75rem',
                            marginBottom: '2rem',
                            maxWidth: '520px'
                        }}>
                            {[
                                { num: '16', label: isRTL ? 'قسماً إنتاجياً ورقمياً' : 'Production Divisions' },
                                { num: '26+', label: isRTL ? 'شريك نجاح بالمملكة' : 'KSA Enterprise Clients' },
                                { num: '360°', label: isRTL ? 'تنفيذ متكامل' : 'Turnkey Execution' },
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    padding: '0.75rem 0.9rem',
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.09)',
                                    borderTop: '2px solid var(--color-primary)'
                                }}>
                                    <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#fff', lineHeight: 1.1 }}>{item.num}</div>
                                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{item.label}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <Button onClick={() => window.location.href = '#portfolio'} className="animate-pulse-glow" style={{ padding: '13px 26px' }}>
                                {t('portfolio')}
                            </Button>
                            <Button variant="outline" onClick={() => window.location.href = '#contact'} style={{ padding: '13px 26px', borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>
                                {t('contact')}
                                <ArrowRight size={18} style={{ marginLeft: isRTL ? 0 : '0.45rem', marginRight: isRTL ? '0.45rem' : 0, transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                            </Button>
                        </div>
                    </div>

                    {/* Right/Left Column: Interactive 3D Multi-Layer Command Deck with Up-to-Down Scan & Scroll Physics */}
                    <div style={{
                        flex: 0.95,
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        marginTop: '1.5rem',
                        perspective: '1300px'
                    }}>
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '470px',
                                minHeight: '420px',
                                transformStyle: 'preserve-3d',
                                transform: `translateY(${stageTranslateY}px) rotateX(${stageRotateX}deg) rotateY(${stageRotateY}deg)`,
                                transition: 'transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1)'
                            }}
                        >
                            {/* Main 3D Architectural Frame (Terminal-Industries Notched HUD Style) */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: '410px',
                                borderRadius: '24px',
                                background: 'linear-gradient(160deg, rgba(24, 24, 30, 0.92) 0%, rgba(10, 10, 14, 0.96) 100%)',
                                border: '1px solid rgba(233, 92, 39, 0.38)',
                                boxShadow: '0 30px 70px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                                overflow: 'hidden',
                                padding: '1.35rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                {/* Active Top-to-Bottom Laser Scan Bar Inside the 3D Stage */}
                                <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: `${scanPos}%`,
                                    height: '56px',
                                    background: 'linear-gradient(to bottom, rgba(233,92,39,0), rgba(233,92,39,0.18), rgba(233,92,39,0.55))',
                                    borderBottom: '1.5px solid #E95C27',
                                    pointerEvents: 'none',
                                    zIndex: 1
                                }} />

                                {/* HUD Top Bar */}
                                <div style={{
                                    position: 'relative',
                                    zIndex: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingBottom: '0.75rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#E95C27' }} />
                                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#3b82f6' }} />
                                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                                        <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'rgba(255,255,255,0.7)', marginLeft: '6px', marginRight: '6px' }}>
                                            VAVION_3D_CORE.EXE
                                        </span>
                                    </div>
                                    <span style={{
                                        fontSize: '0.68rem',
                                        fontFamily: 'monospace',
                                        padding: '2px 8px',
                                        borderRadius: '4px',
                                        backgroundColor: 'rgba(233, 92, 39, 0.18)',
                                        color: 'var(--color-primary)',
                                        border: '1px solid rgba(233, 92, 39, 0.35)'
                                    }}>
                                        SCAN // {String(Math.round(scanPos)).padStart(2, '0')}%
                                    </span>
                                </div>

                                {/* Center 3D Rotating Isometric Cube / Spatial Core */}
                                <div style={{
                                    position: 'relative',
                                    zIndex: 2,
                                    flex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0.5rem 0',
                                    perspective: '900px'
                                }}>
                                    {visualMode === 'isometric' ? (
                                        /* Mode 2: 3D Isometric Stacked Plates (Spline / Aceternity Style) */
                                        <div style={{
                                            position: 'relative',
                                            width: '180px',
                                            height: '180px',
                                            transformStyle: 'preserve-3d',
                                            transform: 'rotateX(58deg) rotateZ(-42deg)',
                                            animation: 'vavionIsoFloat 4.5s ease-in-out infinite'
                                        }}>
                                            {[
                                                { z: 56, border: '#E95C27', bg: 'rgba(233, 92, 39, 0.24)', label: 'LAYER 01 // BRAND & 3D' },
                                                { z: 24, border: '#3b82f6', bg: 'rgba(59, 130, 246, 0.18)', label: 'LAYER 02 // DIGITAL OS' },
                                                { z: -8, border: '#22c55e', bg: 'rgba(34, 197, 94, 0.15)', label: 'LAYER 03 // UV & PRINT' },
                                            ].map((layer, idx) => (
                                                <div
                                                    key={idx}
                                                    style={{
                                                        position: 'absolute',
                                                        inset: '18px',
                                                        borderRadius: '20px',
                                                        backgroundColor: layer.bg,
                                                        border: `2px solid ${layer.border}`,
                                                        boxShadow: `0 14px 30px rgba(0,0,0,0.45), 0 0 20px ${layer.border}33`,
                                                        transform: `translateZ(${layer.z}px)`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        backdropFilter: 'blur(6px)'
                                                    }}
                                                >
                                                    {idx === 0 ? (
                                                        <img src="/logo-dark.png" alt="Vavion 3D" style={{ height: '38px', width: 'auto' }} />
                                                    ) : (
                                                        <span style={{ fontSize: '0.55rem', fontFamily: 'monospace', color: '#fff', fontWeight: '700' }}>
                                                            {layer.label}
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ) : visualMode === 'orbital' ? (
                                        /* Mode 3: 3D Shader / Particle Wave Vortex (Unicorn Studio / ReactBits Style) */
                                        <div style={{
                                            position: 'relative',
                                            width: '210px',
                                            height: '210px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {[0, 1, 2, 3].map((ring) => (
                                                <div
                                                    key={ring}
                                                    style={{
                                                        position: 'absolute',
                                                        width: `${90 + ring * 36}px`,
                                                        height: `${90 + ring * 36}px`,
                                                        borderRadius: '50%',
                                                        border: `1.5px solid ${ring % 2 === 0 ? 'rgba(233, 92, 39, 0.5)' : 'rgba(59, 130, 246, 0.45)'}`,
                                                        boxShadow: `0 0 24px ${ring % 2 === 0 ? 'rgba(233, 92, 39, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
                                                        animation: `vavionPulseWave 3.2s ease-in-out infinite ${ring * 0.4}s`
                                                    }}
                                                />
                                            ))}
                                            <div style={{
                                                position: 'relative',
                                                width: '96px',
                                                height: '96px',
                                                borderRadius: '50%',
                                                background: 'radial-gradient(circle, rgba(233,92,39,0.45) 0%, rgba(12,12,18,0.95) 75%)',
                                                border: '2px solid #E95C27',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 0 35px rgba(233,92,39,0.5)'
                                            }}>
                                                <img src="/logo-dark.png" alt="Vavion Wave" style={{ height: '38px', width: 'auto' }} />
                                            </div>
                                        </div>
                                    ) : (
                                        /* Mode 1 (Default): Terminal-Industries 3D Scan & Orbital Prism */
                                        <>
                                            <div style={{
                                                position: 'absolute',
                                                width: '210px',
                                                height: '210px',
                                                borderRadius: '50%',
                                                border: '1px dashed rgba(233, 92, 39, 0.45)',
                                                animation: 'vavionSpin 18s linear infinite'
                                            }} />
                                            <div style={{
                                                position: 'absolute',
                                                width: '156px',
                                                height: '156px',
                                                borderRadius: '50%',
                                                border: '1px solid rgba(59, 130, 246, 0.35)',
                                                transform: 'rotateX(60deg)',
                                                animation: 'vavionSpinReverse 12s linear infinite'
                                            }} />

                                            <div style={{
                                                position: 'relative',
                                                width: '118px',
                                                height: '118px',
                                                borderRadius: '26px',
                                                background: 'linear-gradient(135deg, rgba(233, 92, 39, 0.28) 0%, rgba(15, 15, 20, 0.95) 100%)',
                                                border: '1.5px solid rgba(233, 92, 39, 0.7)',
                                                boxShadow: '0 0 40px rgba(233, 92, 39, 0.35)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                animation: 'vavionVerticalFloat 4s ease-in-out infinite'
                                            }}>
                                                <img
                                                    src="/logo-dark.png"
                                                    alt="Vavion 3D Core"
                                                    style={{ height: '48px', width: 'auto', marginBottom: '6px' }}
                                                />
                                                <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.85)' }}>
                                                    3D STUDIO
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Bottom 3-Track Vertical Production Telemetry Bars */}
                                <div style={{
                                    position: 'relative',
                                    zIndex: 2,
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '0.6rem',
                                    paddingTop: '0.75rem',
                                    borderTop: '1px solid rgba(255,255,255,0.08)'
                                }}>
                                    {[
                                        { icon: Layers, title: isRTL ? 'الهوية واللوحات 3D' : '3D Signage & CNC', pct: '98%', color: '#E95C27' },
                                        { icon: Printer, title: isRTL ? 'الطباعة الصناعية UV' : 'UV & Offset Print', pct: '100%', color: '#22c55e' },
                                        { icon: Cpu, title: isRTL ? 'المواقع والتطبيقات' : 'Web & Mobile Apps', pct: '99%', color: '#3b82f6' }
                                    ].map((track, idx) => (
                                        <div key={idx} style={{
                                            padding: '0.6rem',
                                            borderRadius: '10px',
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.07)'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                                                <track.icon size={14} style={{ color: track.color }} />
                                                <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: track.color, fontWeight: '700' }}>
                                                    {track.pct}
                                                </span>
                                            </div>
                                            <div style={{ fontSize: '0.74rem', fontWeight: '700', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                {track.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating 3D Layer 1 (Top-Right / Top-Left): Pop-up & 3D Signage Card */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-18px',
                                    [isRTL ? 'left' : 'right']: '-22px',
                                    padding: '0.85rem 1.1rem',
                                    borderRadius: '16px',
                                    backgroundColor: 'rgba(18, 18, 24, 0.92)',
                                    border: '1px solid rgba(233, 92, 39, 0.45)',
                                    boxShadow: '0 18px 38px rgba(0,0,0,0.55)',
                                    backdropFilter: 'blur(14px)',
                                    transform: 'translateZ(55px)',
                                    animation: 'vavionVerticalFloat 5s ease-in-out infinite',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    zIndex: 4
                                }}
                            >
                                <div style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(233, 92, 39, 0.18)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-primary)'
                                }}>
                                    <Box size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--color-primary)', fontWeight: '700' }}>
                                        3D FABRICATION
                                    </div>
                                    <div style={{ fontSize: '0.88rem', fontWeight: '800', color: '#fff' }}>
                                        {isRTL ? 'لوحات 3D وتجهيز معارض' : '3D Letters & Expo Booths'}
                                    </div>
                                </div>
                            </div>

                            {/* Floating 3D Layer 2 (Bottom-Left / Bottom-Right): Digital & Brand Card */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '-18px',
                                    [isRTL ? 'right' : 'left']: '-22px',
                                    padding: '0.85rem 1.1rem',
                                    borderRadius: '16px',
                                    backgroundColor: 'rgba(18, 18, 24, 0.92)',
                                    border: '1px solid rgba(59, 130, 246, 0.45)',
                                    boxShadow: '0 18px 38px rgba(0,0,0,0.55)',
                                    backdropFilter: 'blur(14px)',
                                    transform: 'translateZ(65px)',
                                    animation: 'vavionVerticalFloat 6s ease-in-out infinite 1.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    zIndex: 4
                                }}
                            >
                                <div style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(59, 130, 246, 0.18)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#3b82f6'
                                }}>
                                    <Code size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#60a5fa', fontWeight: '700' }}>
                                        SERVIXERSPACE PARTNER
                                    </div>
                                    <div style={{ fontSize: '0.88rem', fontWeight: '800', color: '#fff' }}>
                                        {isRTL ? 'الحلول الرقمية والبرمجية' : 'Web, Apps & Brand Systems'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Up-to-Down Animated Scroll Cue */}
                <div style={{
                    marginTop: '2.75rem',
                    display: 'flex',
                     justifyContent: 'center'
                }}>
                    <a
                        href="#about"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '6px 16px',
                            borderRadius: '50px',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'var(--text-muted)',
                            fontSize: '0.78rem',
                            fontFamily: 'monospace'
                        }}
                    >
                        <span>{isRTL ? 'مرر للأسفل لاستكشاف الأقسام' : 'SCROLL DOWN TO EXPLORE'}</span>
                        <ArrowDown size={14} style={{ color: 'var(--color-primary)', animation: 'vavionBounceDown 1.6s infinite' }} />
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes vavionSpin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes vavionSpinReverse {
                    0% { transform: rotateX(60deg) rotateZ(360deg); }
                    100% { transform: rotateX(60deg) rotateZ(0deg); }
                }
                @keyframes vavionVerticalFloat {
                    0%, 100% { transform: translateY(-8px); }
                    50% { transform: translateY(10px); }
                }
                @keyframes vavionBounceDown {
                    0%, 100% { transform: translateY(-3px); opacity: 0.6; }
                    50% { transform: translateY(4px); opacity: 1; }
                }
                @keyframes vavionIsoFloat {
                    0%, 100% { transform: rotateX(58deg) rotateZ(-42deg) translateY(-6px); }
                    50% { transform: rotateX(54deg) rotateZ(-36deg) translateY(8px); }
                }
                @keyframes vavionPulseWave {
                    0%, 100% { transform: scale(0.94) translateY(-5px); opacity: 0.45; }
                    50% { transform: scale(1.06) translateY(6px); opacity: 0.95; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
