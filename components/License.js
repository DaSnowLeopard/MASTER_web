'use client';
import { Sun } from 'lucide-react';
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

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            overflow: 'hidden',
          }}>
            <div className="spin-icon" style={{
              marginRight: '-225px',
            }}>
              <Sun size={450} color="#7499CD" strokeWidth={0.5} />
            </div>
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
            overflowY: 'auto',
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
              margin: 'auto',
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0,0,0,0.7)',
                border: 'none',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '16px',
                zIndex: 10,
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