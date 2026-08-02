import { Settings, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>

        <div className="spin-icon" style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
        }}>
          <Settings size={500} color="#7499CD" strokeWidth={0.5} />
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