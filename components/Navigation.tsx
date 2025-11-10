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
        duration: 600,
        easing: 'easeOutQuad',
      });
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg font-semibold text-gray-900 hover:opacity-60 transition-opacity"
          >
            PRSM
          </button>

          {/* Nav Links - Apple style */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about-section')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('team-section')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('capstone-section')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
