'use client';

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      anime({
        targets: navRef.current,
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        easing: 'easeOutQuad',
      });
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: sectionId === 'hero' ? 0 : section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'sutd-section', label: 'SUTD' },
    { id: 'about-section', label: 'About' },
    { id: 'team-section', label: 'Team' },
    { id: 'expertise-section', label: 'Expertise' },
    { id: 'capstone-section', label: 'Projects' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-md shadow-lg'
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <svg className="w-8 h-8 text-black" viewBox="0 0 512 512" fill="currentColor">
              <path d="M256,136.5L85.1,426.5h341.8L256,136.5z M256,180.5l147.8,246H108.2L256,180.5z"/>
              <path d="M0,332h140l-30-50H0V332z"/>
              <path d="M256,332l130,100l20-30l-130-100L256,332z"/>
              <path d="M256,332l130,40l10-35l-130-40L256,332z"/>
              <path d="M256,332l130-20l-5-35l-130,20L256,332z"/>
              <path d="M256,332l130-80l-15-30l-130,80L256,332z"/>
            </svg>
            <span className="text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors drop-shadow-sm">
              PRSM
            </span>
          </button>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors drop-shadow-sm"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact-section')}
              className="px-6 py-2 bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors rounded-md shadow-md"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
