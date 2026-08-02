import { Clock, ShieldCheck, Star } from 'lucide-react';
export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111 60%, #0f0f0f 100%)',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '64px',
      overflowX: 'hidden',
    }}>
      {/* Декоративная линия */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #7499CD, transparent)',
      }} />

      {/* Фоновый акцент */}
      <div style={{
        position: 'absolute',
        right: '-200px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(110, 146, 200, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ maxWidth: '800px', width: '100%', overflowX: 'hidden' }}>

          <h1 style={{
            fontSize: 'clamp(16px, 9vw, 56px)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#ffffff',
            marginBottom: '8px',
            marginTop: '15px',
          }}>
            ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ БИЗНЕСА
          </h1>

          <h2 style={{
            fontSize: 'clamp(12px, 2vw, 20px)',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#7499CD',
            marginBottom: '24px',
            marginTop: '16px',
          }}>
            ОФИЦИАЛЬНЫЙ СЕРВИСНЫЙ ЦЕНТР КЛИМАТИЧЕСКОЙ ТЕХНИКИ HAIER
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 2vw, 18px)',
            color: '#888',
            marginBottom: '48px',
            lineHeight: '1.7',
            maxWidth: '520px',
          }}>
            Профессиональный ремонт холодильного, теплового и электромеханического оборудования с 2018 года.
          </p>

          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">
              Связаться с нами
            </a>
            <a href="#services" className="btn-outline">
              Наши услуги
            </a>
          </div>

          {/* Теги преимуществ */}
          <div className="hero-icons" style={{
            display: 'flex',
            gap: '32px',
            marginTop: '64px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {[
              { title: 'СКОРОСТЬ', desc: 'Минимальное время работы от 20 минут', icon: <Clock size={80}/>},
              { title: 'НАДЁЖНОСТЬ', desc: 'Нам доверяют федеральные сети - «Лента», «Магнит» и другие сети', icon: <ShieldCheck size={80}/>},
              { title: 'КАЧЕСТВО', desc: 'Сертифицированные специалисты и лицензия на работу с мед. учреждениями', icon: <Star size={80}/>},
            ].map((item) => (
              <div key={item.title} style={{textAlign: 'center'}}>
                <div style={{ marginBottom: '8px' }}>{item.icon}</div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: '#7499CD',
                  marginBottom: '4px',
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: '15px',
                  color: '#666',
                  maxWidth: '180px',
                }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}