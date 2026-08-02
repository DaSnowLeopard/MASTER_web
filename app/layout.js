import './globals.css';

export const metadata = {
  title: 'Мастер — Ремонт оборудования',
  description: 'Профессиональный ремонт холодильного, теплового и электромеханического оборудования. Официальный дилер климатической техники HAIER.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
