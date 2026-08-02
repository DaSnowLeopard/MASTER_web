'use client';
import { useState } from 'react';

export default function License() {
  const [open, setOpen] = useState(false);

  return (
    <section id="license" className="section section-alt">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          <div>
            <p className="section-label">Документы</p>
            <h2 className="section-title">ЛИЦЕНЗИРОВАНИЕ</h2>
            <p style={{
              fontSize: '16px',
              color: '#888',
              lineHeight: '1.8',
              marginBottom: '32px',
            }}>
              Мы работаем по лицензии — это значит, что наши методы, препараты
              и специалисты прошли государственную проверку. Именно поэтому
              нам доверяют клиники, больницы и медицинские центры.
            </p>
            <button onClick={() => setOpen(true)} className="btn-outline">
              Посмотреть лицензию
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { icon: '✓', title: 'Медицинская лицензия', desc: 'Лицензия на работу с медучреждениями' },
              { icon: '✓', title: 'Сертифицированные специалисты', desc: 'Все мастера прошли государственную сертификацию' },
              { icon: '✓', title: 'Федеральные сети', desc: 'Нам доверяют «Лента», «Магнит» и другие сети' },
            ].map((item) => (
              <div key={item.title} style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                padding: '20px',
                background: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(116,153,205,0.15)',
                  color: '#7499CD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '16px',
                  flexShrink: 0,
                  borderRadius: '6px',
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '4px', color: '#e8e8e8' }}>{item.title}</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Попап */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '800px',
              width: '100%',
              background: '#111',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                color: '#fff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '16px',
                zIndex: 1,
              }}
            >
              ✕
            </button>
            <img
              src="/images/license.jpg"
              alt="Лицензия"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}