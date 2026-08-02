export default function License() {
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
            <a href="#contact" className="btn-outline">
              Посмотреть лицензию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
