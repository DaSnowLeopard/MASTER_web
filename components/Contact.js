import { Settings, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>

        <div className="spin-icon" style={{
          position: 'absolute',
          bottom: '-150px',
          right: '-150px',
        }}>
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="gear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7499CD" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <path stroke="url(#gear-gradient)" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            <path stroke="url(#gear-gradient)" d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.406 2.65-1.097L18 20l2-2-1.484-1.755 1.106-2.695L22 13v-2l-2.378-.605Z"/>
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
                <a href="tel:+79999999999" style={{
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
                  +7 (999) 999-9999
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