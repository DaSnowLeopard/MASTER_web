import Header from '@/components/Header';
import Hero from '@/components/Hero';
import License from '@/components/License';
import Services from '@/components/Services';
import Prices from '@/components/Prices';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <License />
        <Services />
        <Prices />
        <Contact />
      </main>
    </>
  );
}
