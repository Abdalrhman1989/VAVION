import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import Button from './ui/Button';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, language, toggleLanguage, t } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('portfolio'), href: '#portfolio' },
    { name: t('contact'), href: '#contact' },
  ];

  const navbarStyle = {
    padding: isScrolled ? '15px 0' : '25px 0',
    backgroundColor: isScrolled ? 'var(--bg-card)' : 'transparent',
    boxShadow: isScrolled ? '0 4px 20px var(--shadow-color)' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s ease'
  };

  return (
    <nav style={navbarStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={theme === 'dark' ? "/logo-dark.png" : "/vavion-logo.png"}
            alt="Vavion Creative"
            style={{ height: '45px', width: 'auto' }}
          />
        </a>

        {/* Desktop Nav */}
        <div className="md:flex" style={{ display: 'none', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} style={{ fontWeight: '500', color: 'var(--text-muted)' }}>
              {link.name}
            </a>
          ))}

          {/* Toggles */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem', marginRight: '1rem' }}>
            <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleLanguage} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Languages size={20} />
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{language.toUpperCase()}</span>
            </button>
          </div>

          <Button onClick={() => window.location.href = '#contact'}>{t('getStarted')}</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleLanguage} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{language.toUpperCase()}</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--bg-card)',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: '1px solid var(--border-color)'
        }}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '1.1rem', padding: '10px 0', borderBottom: '1px solid var(--border-color)', color: 'var(--text-main)' }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ paddingTop: '1rem' }}>
            <Button style={{ width: '100%' }} onClick={() => { setIsOpen(false); window.location.href = '#contact'; }}>
              {t('getStarted')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
