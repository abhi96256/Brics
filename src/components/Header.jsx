'use client';

import React, { useRef, useEffect, useState } from 'react';
import { FaSync } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import TrustedLogos from './TrustedLogos';
import './Header.css';

function Counter({ start, end, duration = 2000 }) {
  const [value, setValue] = useState(start);
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setValue(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return value;
}

const Header = () => {
  const howWeWorkRef = useRef(null);
  const statsRef = useRef(null);
  const [showCounters, setShowCounters] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current) return;
      const rect = statsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setShowCounters(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="header-container">

        <div className="header-hero">
          <h1>
            <span className="gradient-text">Interactive Digital Solutions</span><br />
            <span className="gradient-text1">Scalable AI.</span>
          </h1>
          <div className="header-buttons">
            <Link href="/ai"><button className="underline-btn">Get started</button></Link>
            <Link href="/projects"><button className="underline-btn1">Our Portfolio</button></Link>
          </div>
          <div className="header-hero-robot-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '0 auto' }}>
            <Image src="/Animation.png" alt="Animation" width={1205} height={419} className="header-animation-img" />
          </div>

          <div className="header-stats-section" ref={statsRef}>
            <div className="header-stat">
              <span className="stat-number gradient-text">{showCounters ? <Counter start={40} end={150} duration={2000} /> : 40}+</span>
              <span className="stat-label">Success Project</span>
            </div>
            <div className="header-stat">
              <span className="stat-number gradient-text">{showCounters ? <Counter start={1} end={2} duration={2000} /> : 2}+</span>
              <span className="stat-label">Product Launched</span>
            </div>
            <div className="header-stat">
              <span className="stat-number gradient-text">{showCounters ? <Counter start={2} end={10} duration={2000} /> : 10}+</span>
              <span className="stat-label">Startup Raised</span>
            </div>
          </div>

          <div className="how-we-work-section">
            <div className="how-we-work-heading gradient-text2">HOW WE WORK</div>
            <div className="how-we-work-content">
              <div className="how-we-work-left">
                <h2>Get a dedicated UX design service at fraction of the cost.</h2>
              </div>
              <div className="how-we-work-right">
                <p>Grow your brand with high-quality UI/UX design for a minimal fee. Work with senior designers. Contact and make as many requests as you need – no limits.</p>
                <Link href="/contact"><button className="how-we-work-btn"><span>Contact Us</span></button></Link>
              </div>
            </div>
          </div>

          <div className="how-we-work-steps" ref={howWeWorkRef}>
            <div className="step">
              <div className="step-icon"><Image src="/Shuttle.png" alt="Vector" width={50} height={50} /></div>
              <div className="step-title">AI & get started</div>
              <div className="step-desc">Submit as many design tasks as you need without worrying about individual project fees.</div>
            </div>
            <img src="/Arrow.png" alt="Arrow" className="step-img-arrow-1" />
            <div className="step1">
              <div className="step-icon"><Image src="/Vector.png" alt="Vector" width={50} height={50} /></div>
              <div className="step-title">Polished designs</div>
              <div className="step-desc">Our designers get to work to deliver your request. Receive your design within a few days.</div>
            </div>
            <img src="/Arrow.png" alt="Arrow" className="step-img-arrow-2" />
            <div className="step2">
              <div className="step-icon"><FaSync /></div>
              <div className="step-title">Revisions made simple</div>
              <div className="step-desc">Custom designs, prompt replies and as many revisions as you need.</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
