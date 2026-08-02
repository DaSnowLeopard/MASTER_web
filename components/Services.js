'use client';
const services = [
  {
    id: '01',
    title: 'КОМПЛЕКСНОЕ ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ ВАШЕГО БИЗНЕСА',
    items: [
      'Выполнение всех необходимых работ по регламенту в установленные сроки',
      'Инженерные коммуникации будут функционировать безотказно, не требуя крупных вложений на внезапный капитальный ремонт',
    ],
  },
  {
    id: '02',
    title: 'РЕМОНТ ХОЛОДИЛЬНОГО ОБОРУДОВАНИЯ',
    items: [
      'Холодильных и морозильных камер',
      'Холодильных и морозильных шкафов',
      'Охлаждаемых столов и ледогенераторов',
      'Ларей и бонет',
      'Холодильных горок (саладетов)',
      'Холодильных и морозильных прилавков (витрин)',
      'Барных витрин и салат-баров',
    ],
  },
  {
    id: '03',
    title: 'РЕМОНТ ТЕПЛОВОГО ОБОРУДОВАНИЯ',
    items: [
      'Пароконвектоматов и конвекционных печей',
      'Ротационных печей и расстоечных шкафов',
      'Электрических и газовых плит',
      'Фритюрниц, тепловых шкафов и столов',
      'Индукционных плит',
    ],
  },
  {
    id: '04',
    title: 'РЕМОНТ ПОСУДОМОЕЧНОГО ОБОРУДОВАНИЯ',
    items: [
      'Посудомоечных машин любых типов',
      'Любой помывочной техники',
    ],
  },
  {
    id: '05',
    full: true,
    title: 'РЕМОНТ ЭЛЕКТРОМЕХАНИЧЕСКОГО ОБОРУДОВАНИЯ',
    items: [
      'Тестомесов и миксеров',
      'Слайсеров',
      'Вакуумных упаковщиков',
      'Овощерезок',
      'И другого оборудования',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <p className="section-label">Что мы делаем</p>
        <h2 className="section-title">НАШИ УСЛУГИ</h2>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2px',
          marginTop: '48px',
          background: '#2a2a2a',
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              background: '#0a0a0a',
              padding: '40px',
              transition: 'background 0.2s',
              gridColumn: service.full ? 'span 2' : 'span 1',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#111'}
              onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}
            >
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2px',
                color: '#7499CD',
                marginBottom: '16px',
              }}>
                {service.id}
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 800,
                letterSpacing: '0.5px',
                color: '#ffffff',
                marginBottom: '24px',
                lineHeight: '1.4',
              }}>
                {service.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                {service.items.map((item) => (
                  <li key={item} style={{
                    fontSize: '14px',
                    color: '#666',
                    paddingLeft: '20px',
                    position: 'relative',
                    lineHeight: '1.5',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#7499CD',
                    }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}