import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Partners = () => {
    const { t, language } = useTheme();
    const isAr = language === 'ar';

    const clientPartners = [
        { file: "vavion_copy-01.jpg", name: "Spectrums | الأطياف" },
        { file: "vavion_copy-02.jpg", name: "Cafani Group | مجموعة كفاني القابضة" },
        { file: "vavion_copy-03.jpg", name: "Waseem Hakeem | وسيم حكيم" },
        { file: "vavion_copy-04.jpg", name: "Pilgrims of Turkey | مطوفي حجاج تركيا" },
        { file: "vavion_copy-05.jpg", name: "National Autad | شركة الأوتاد الوطنية" },
        { file: "vavion_copy-06.jpg", name: "Special Events" },
        { file: "vavion_copy-07.jpg", name: "Dorrar Al Eiman Royal | درر الإيمان رويال" },
        { file: "vavion_copy-08.jpg", name: "Al-Medyaf | المضياف" },
        { file: "vavion_copy-09.jpg", name: "Burj Aljewar | برج الجوار" },
        { file: "vavion_copy-10.jpg", name: "Alosrah Alshamiyah | الأسرة الشامية" },
        { file: "vavion_copy-11.jpg", name: "Damascus Gate | بوابة دمشق" },
        { file: "vavion_copy-12.jpg", name: "Amesa | أميسا الشرق" },
        { file: "vavion_copy-13.jpg", name: "EMAC" },
        { file: "vavion_copy-14.jpg", name: "HLA LAB" },
        { file: "vavion_copy-15.jpg", name: "Al-Sham | الدر الشام" },
        { file: "vavion_copy-16.jpg", name: "BAT" },
        { file: "vavion_copy-17.jpg", name: "Delta Luminaire | شركة إنارة دلتا" },
        { file: "vavion_copy-18.jpg", name: "Rawasi Hotel Suites | الرواسي للشقق الفندقية" },
        { file: "vavion_copy-19.jpg", name: "Bee Hive Marketing Agency" },
        { file: "vavion_copy-20.jpg", name: "Mariia Store" },
        { file: "vavion_copy-21.jpg", name: "Alsanad Design & Build" },
        { file: "vavion_copy-22.jpg", name: "Leen Flowers" },
        { file: "vavion_copy-24.jpg", name: "Abu Shamso | أبو شمسو" },
        { file: "vavion_copy-25.jpg", name: "Maysan | ميسان" }
    ].map(item => ({
        src: `/partners/clients/${item.file}`,
        alt: item.name
    }));

    return (
        <section id="partners" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '3.25rem 0' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.15rem', fontWeight: '800', marginBottom: '0.45rem' }}>
                        {t('partners')} {t('inSuccess')}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                        {isAr
                            ? 'نعتز بثقة أكثر من 26 مؤسسة ومجموعة تجارية وفندقية رائدة في المملكة العربية السعودية'
                            : 'Trusted by 26+ leading corporate groups, hospitality brands, and institutions across Saudi Arabia'}
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    width: '100%',
                    position: 'relative',
                    maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                    overflow: 'hidden',
                    direction: 'ltr'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '1.25rem',
                        animation: 'scroll 45s linear infinite',
                        paddingLeft: '1.25rem',
                        alignItems: 'center'
                    }}>
                        {[...clientPartners, ...clientPartners].map((partner, index) => (
                            <div
                                key={index}
                                title={partner.alt}
                                style={{
                                    flexShrink: 0,
                                    width: '140px',
                                    height: '82px',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '12px',
                                    padding: '10px 14px',
                                    border: '1px solid rgba(233, 92, 39, 0.18)',
                                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.14)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(233, 92, 39, 0.22)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.14)';
                                }}
                            >
                                <img
                                    src={partner.src}
                                    alt={partner.alt}
                                    loading="lazy"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default Partners;
