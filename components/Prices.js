'use client';
import { useState } from 'react';

const priceData = [
  {
    service: 'Диагностика',
    category: 'Витрины, шкафы, лари, пивоохладители',
    price: '',
  },
  {
    service: 'Диагностика с запуском камеры',
    category: 'Камеры',
    price: '',
  },
  {
    service: 'Выписка акта экспертизы (списание)',
    category: 'Витрины, шкафы, лари, пивоохладители',
    price: '',
  },
  {
    service: 'Замена компрессора',
    category: 'Маленькие витрины, лари, шкафы',
    price: '',
  },
  {
    service: 'Замена компрессора',
    category: 'Средние витрины, лари, шкафы',
    price: '',
  },
  {
    service: 'Замена компрессора',
    category: 'Большие витрины, лари, шкафы',
    price: '',
  },
  {
    service: 'Замена компрессора',
    category: 'Холодильные камеры, ККБ, ЦХМ',
    price: '',
  },
  {
    service: 'Пайка, заправка хладоном',
    category: 'Маленькие витрины, лари, шкафы',
    price: '',
  },
  {
    service: 'Пайка, заправка хладоном',
    category: 'Средние витрины, лари, шкафы',
    price: '6200 – 7400 руб',
  },
  {
    service: 'Пайка, заправка хладоном',
    category: 'Большие витрины, лари, шкафы',
    price: '8000 – 9200 руб',
  },
  {
    service: 'Ремонт испарителя, конденсатора',
    category: 'Маленькие витрины, лари, шкафы',
    price: '5300 – 8100 руб',
  },
  {
    service: 'Ремонт испарителя, конденсатора',
    category: 'Средние витрины, лари, шкафы',
    price: '7100 – 9900 руб',
  },
  {
    service: 'Ремонт испарителя, конденсатора',
    category: 'Большие витрины, лари, шкафы',
    price: '8900 – 11700 руб',
  },
  {
    service: 'Замена испарителя, конденсатора',
    category: 'Маленькие витрины, лари, шкафы',
    price: '6200 – 8600 руб',
  },
  {
    service: 'Замена испарителя, конденсатора',
    category: 'Средние витрины, лари, шкафы',
    price: '8000 – 10400 руб',
  },
  {
    service: 'Замена испарителя, конденсатора',
    category: 'Большие витрины, лари, шкафы',
    price: '9800 – 12200 руб',
  },
  {
    service: 'Замена вентилятора (Кулер)',
    category: 'Витрины, шкафы, лари, камеры',
    price: '2500 руб',
  },
  {
    service: 'Замена вентилятора 5 вт.',
    category: 'Витрины, шкафы, лари, камеры',
    price: '2700 руб',
  },
  {
    service: 'Замена вентилятора 10 вт.',
    category: 'Витрины, шкафы, лари, камеры',
    price: '3000 руб',
  },
  {
    service: 'Замена вентилятора 16 вт.',
    category: 'Витрины, шкафы, лари, камеры',
    price: '3500 руб',
  },
  {
    service: 'Замена вентилятора 25 вт.',
    category: 'Витрины, шкафы, лари, камеры',
    price: '4100 руб',
  },
  {
    service: 'Замена вентилятора 34 вт.',
    category: 'Витрины, шкафы, лари, камеры',
    price: '4700 руб',
  },
  {
    service: 'Замена контроллера холодильного',
    category: 'Витрины, шкафы, лари, камеры',
    price: '3500 – 6300 руб',
  },
  {
    service: 'Замена контроллера морозильного',
    category: 'Витрины, шкафы, лари, камеры',
    price: '4100 – 6800 руб',
  },
  {
    service: 'Настройка контроллера',
    category: 'Витрины, шкафы, лари, камеры',
    price: '1400 руб',
  },
  {
    service: 'Замена терморегулятора, реле, контактора',
    category: 'Витрины, шкафы, лари',
    price: '3000 руб',
  },
  {
    service: 'Замена автомата, датчика',
    category: 'Витрины, шкафы, лари, камеры',
    price: '2800 руб',
  },
  {
    service: 'Ремонт двери, дренажа, эл. соединений',
    category: 'Витрины, шкафы, лари, камеры',
    price: '1400 – 3800 руб',
  },
  {
    service: 'Перенавеска двери',
    category: 'Витрины, шкафы, лари',
    price: '3600 руб',
  },
  {
    service: 'Замена ТЭНа',
    category: 'Витрины, шкафы, лари, камеры',
    price: '5500 – 7000 руб',
  },
  {
    service: 'Замена ПЭНа',
    category: 'Витрины, шкафы, лари, камеры',
    price: '3900 – 6000 руб',
  },
  {
    service: 'Чистка конденсатора',
    category: 'Витрины, шкафы, лари, камеры',
    price: '1000 руб',
  },
  {
    service: 'Промывка конденсатора (со средством)',
    category: 'Витрины, шкафы, лари, камеры',
    price: '3800 – 4500 руб',
  },
];

export default function Prices() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? priceData : priceData.slice(0, 10);

  return (
    <section id="prices" className="section section-alt">
      <div className="container">
        <h2 className="section-title">СТОИМОСТЬ РАБОТ</h2>

        <div style={{ overflowX: 'auto', marginTop: '48px' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px',
          }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #7499CD' }}>
                <th style={{ textAlign: 'left', padding: '14px 16px', color: '#7499CD', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '12px' }}>
                  Услуга
                </th>
                <th style={{ textAlign: 'left', padding: '14px 16px', color: '#7499CD', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '12px' }}>
                  Оборудование
                </th>
                <th style={{ textAlign: 'right', padding: '14px 16px', color: '#7499CD', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '12px' }}>
                  Стоимость
                </th>
              </tr>
            </thead>
            <tbody>
              {visible.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: '1px solid #1f1f1f',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                  }}
                >
                  <td style={{ padding: '14px 16px', color: '#e8e8e8' }}>
                    {row.service}
                  </td>
                  <td style={{ padding: '14px 16px', color: '#666' }}>
                    {row.category}
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right', color: '#7499CD', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {row.price || 'По запросу'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!showAll && (
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline"
            >
              Показать все цены
            </button>
          </div>
        )}

        <p style={{
          marginTop: '24px',
          fontSize: '13px',
          color: '#555',
          lineHeight: '1.6',
        }}>
          * Точная стоимость ремонта определяется мастером после диагностики оборудования.
          В стоимость не входит цена запасных частей и расходных материалов.
        </p>
      </div>
    </section>
  );
}
