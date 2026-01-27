import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
    const { id } = useParams();
    const { t, language } = useTheme();
    const isRTL = language === 'ar';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Placeholder content database
    const blogData = {
        '1': {
            title: t('blog1Title'),
            desc: t('blog1Desc'),
            date: 'Jan 24, 2026',
            author: 'Abd Alrhman Aldarra',
            image: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)',
            content: language === 'ar' ? `
                <p>في عالم يتزايد فيه الاعتماد على الذكاء الاصطناعي، تشهد الهويات البصرية تحولاً جذرياً. لم تعد العلامة التجارية مجرد شعار وألوان، بل أصبحت تجربة حية تتفاعل مع الجمهور.</p>
                <h3>التخصيص المفرط (Hyper-Personalization)</h3>
                <p>بفضل البيانات الضخمة، يمكن للعلامات التجارية الآن تكييف رسائلها وتصاميمها لتناسب كل عميل على حدة. تخيل موقعاً إلكترونياً يغير ألوانه ونبرة صوته بناءً على تفضيلات الزائر!</p>
                <h3>الاستدامة الرقمية</h3>
                <p>التركيز على التصاميم التي تستهلك طاقة أقل (مثل الوضع الليلي الافتراضي) أصبح معياراً جديداً في تصميم الهويات.</p>
                <p>في فافيون، نحن نسبق الزمن لنضع علامتك التجارية في طليعة هذا التحول.</p>
            ` : `
                <p>In a world increasingly driven by AI, visual identities are undergoing a radical transformation. A brand is no longer just a logo and colors; it has become a living experience that interacts with the audience.</p>
                <h3>Hyper-Personalization</h3>
                <p>Thanks to big data, brands can now adapt their messaging and designs to suit each individual customer. Imagine a website that changes its colors and tone of voice based on the visitor's preferences!</p>
                <h3>Digital Sustainability</h3>
                <p>Focusing on designs that consume less energy (like default dark mode) has become a new standard in identity design.</p>
                <p>At Vavion, we are ahead of the curve to place your brand at the forefront of this transformation.</p>
            `
        },
        '2': {
            title: t('blog2Title'),
            desc: t('blog2Desc'),
            date: 'Jan 20, 2026',
            author: 'Abd Alrhman Aldarra',
            image: 'linear-gradient(135deg, #4ECDC4 0%, #556270 100%)',
            content: language === 'ar' ? `
                <p>قد يعتقد البعض أن الطباعة انتهت في عصر الشاشات، ولكن الحقيقة عكس ذلك تماماً. الشعور بملمس الورق الفاخر، ورؤية تفاصيل الطباعة البارزة (UV)، يعطي انطباعاً بالفخامة لا يمكن للشاشات تقليده.</p>
                <h3>القوة اللمسية</h3>
                <p>البطاقات الشخصية والكتيبات المطبوعة تخلق رابطاً فيزيائياً مع العميل. إنها شيء يمكنه الاحتفاظ به.</p>
                <p>نحن في فافيون ندمج أحدث تقنيات الطباعة لنضمن أن رسالتك تترك أثراً ملموساً.</p>
             ` : `
                <p>Some might think printing is dead in the age of screens, but the truth is quite the opposite. The feeling of premium paper texture and seeing raised print details (UV) gives an impression of luxury that screens cannot mimic.</p>
                <h3>Tactile Power</h3>
                <p>Business cards and printed brochures create a physical bond with the client. It is something they can hold onto.</p>
                <p>At Vavion, we integrate the latest printing technologies to ensure your message leaves a tangible impact.</p>
             `
        },
        '3': {
            title: t('blog3Title'),
            desc: t('blog3Desc'),
            date: 'Jan 15, 2026',
            author: 'Abd Alrhman Aldarra',
            image: 'linear-gradient(135deg, #e95c27 0%, #2b32b2 100%)',
            content: language === 'ar' ? `
                <p>البساطة (Minimalism) ليست مجرد اتجاه جمالي، بل ضرورة وظيفية. السرعة وسهولة الاستخدام هي ما يبحث عنه المستخدم اليوم.</p>
                <h3>التفاعلات الدقيقة (Micro-interactions)</h3>
                <p>حركة زر بسيطة عند الضغط، أو مؤشر تحميل مبتكر، يمكن أن يحول تجربة المستخدم من عادية إلى ممتعة.</p>
                <p>فريق التطوير في فافيون يتقن فن دمج الجمال مع الأداء العالي.</p>
             ` : `
                <p>Minimalism is not just an aesthetic trend; it is a functional necessity. Speed and ease of use are what users look for today.</p>
                <h3>Micro-interactions</h3>
                <p>A simple button animation on click, or a creative loading indicator, can transform the user experience from ordinary to delightful.</p>
                <p>The development team at Vavion masters the art of merging beauty with high performance.</p>
             `
        }
    };

    const post = blogData[id];

    if (!post) return <div className="section text-center">Post not found</div>;

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '4rem' }}>
                {/* Hero Header for Blog */}
                <div style={{
                    height: '400px',
                    background: post.image,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: '#fff',
                    padding: '2rem'
                }}>
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                            {post.title}
                        </h1>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', opacity: 0.9 }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={18} /> {post.author}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={18} /> {post.date}</span>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }}></div>
                </div>

                <div className="container" style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
                    <div className="glass-card" style={{ padding: '3rem', borderRadius: '24px', maxWidth: '900px', margin: '0 auto', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 'bold', marginBottom: '2rem' }}>
                            <ArrowLeft size={20} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                            {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
                        </Link>

                        <div className="blog-content" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)' }} dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogPost;
