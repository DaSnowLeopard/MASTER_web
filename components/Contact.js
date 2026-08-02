import { Settings, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>

        <div className="spin-icon" style={{
          position: 'absolute',
          bottom: '-200px',
          right: '-200px',
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 24 24" fill="none" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="gear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="50%" stopColor="#7499CD" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <path stroke="url(#gear-gradient)" d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/>
            <circle stroke="url(#gear-gradient)" cx="12" cy="12" r="3"/>
          </svg>
        </div>

        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}>
            <div>
              <h2 className="section-title">СВЯЖИТЕСЬ С НАМИ</h2>
              <p style={{ color: '#666', marginBottom: '40px', lineHeight: '1.8' }}></p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <a href="tel:+79135699191" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  color: '#e8e8e8',
                  fontSize: '25px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                }}>
                  <span style={{
                    width: '44px',
                    height: '44px',
                    color: '#7499CD',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Phone size={30} />
                  </span>
                  +7 (913) 569-9191
                </a>

                <a href="mailto:hello@example.com" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  color: '#e8e8e8',
                  fontSize: '30px',
                  fontWeight: 600,
                }}>
                  <span style={{
                    width: '44px',
                    height: '44px',
                    color: '#7499CD',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Mail size={30} />
                  </span>
                  hello@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{
        background: '#050505',
        borderTop: '1px solid #1a1a1a',
        padding: '32px 0',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#7499CD', fontWeight: 900, fontSize: '16px', letterSpacing: '2px' }}>
              МАСТЕР
            </span>
            <span style={{ color: '#444', fontSize: '13px' }}>
              © 2018 – 2026
            </span>
          </div>

          <nav style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'Лицензирование', href: '#license' },
              { label: 'Услуги', href: '#services' },
              { label: 'Цены', href: '#prices' },
              { label: 'Связаться', href: '#contact' },
            ].map((item) => (
                <a
                key={item.href}
                href={item.href}
                style={{ fontSize: '10px', color: '#555', letterSpacing: '1px', textTransform: 'uppercase' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}