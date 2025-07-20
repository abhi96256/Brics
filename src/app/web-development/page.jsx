"use client";
import Projects from '../../components/Projects';
import { usePathname } from 'next/navigation';
import WhatsappLottie from '../../components/WhatsappLottie';
export default function RealProjectsPage() {
  const pathname = usePathname();
  return (
    <main style={{
      overflowX: 'hidden',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
      padding: '0 20px',
      boxSizing: 'border-box'
    }}>
      <WhatsappLottie />
      <Projects key={pathname} />
    </main>
  );
} 