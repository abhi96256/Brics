"use client";
import Header from '../components/Header';
import OurService from '../components/OurService';
import Footer from '../components/Footer';
import BestProject from '../components/BestProject';
import Discuss from '../components/Discuss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WhatsappLottie from '../components/WhatsappLottie';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('pageReloaded')) {
      sessionStorage.setItem('pageReloaded', 'true');
      window.location.reload();
    }
  }, []);

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
      <Navbar />
      <Header />
      <OurService key={pathname} />
      <BestProject />
      <Discuss />
      <Footer>
        <Link href="/about" className="footer-link">About Us</Link>
      </Footer>
    </main>
  );
} 