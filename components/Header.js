'use client';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(10,10,10,0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #1f1f1f',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Логотип */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#7499CD', fontWeight: 900, fontSize: '18px', letterSpacing: '2px' }}>
            МАСТЕР
          </span>
        </div>

        {/* Навигация — десктоп */}
        <nav style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }} className="desktop-nav">
          {[
            { label: 'Лицензирование', href: '#license' },
            { label: 'Услуги', href: '#services' },
            { label: 'Цены', href: '#prices' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#888',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#7499CD'}
              onMouseLeave={e => e.target.style.color = '#888'}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '12px' }}>
            Связаться
          </a>
        </nav>

        {/* Бургер — мобайл */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#e8e8e8',
            fontSize: '24px',
          }}
          className="burger-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div style={{
          background: '#111',
          borderTop: '1px solid #2a2a2a',
          padding: '16px 24px',
        }}>
          {[
            { label: 'Лицензирование', href: '#license' },
            { label: 'Услуги', href: '#services' },
            { label: 'Цены', href: '#prices' },
            { label: 'Связаться', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '14px',
                color: '#e8e8e8',
                borderBottom: '1px solid #2a2a2a',
                letterSpacing: '1px',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
