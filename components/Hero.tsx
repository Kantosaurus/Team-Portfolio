'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth fade-in animation
    if (contentRef.current) {
      anime({
        targets: contentRef.current.children,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1200,
        delay: anime.stagger(150),
        easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
      });
    }

    // Parallax scroll effect
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
          contentRef.current.style.opacity = `${1 - scrolled / 800}`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Label */}
        <div className="opacity-0 mb-6">
          <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
            Team PRSM
          </span>
        </div>

        {/* Main headline - Apple style */}
        <h1 className="opacity-0 text-7xl sm:text-8xl md:text-9xl font-semibold tracking-tight text-gray-900 mb-8 leading-none">
          Innovating<br />Across<br />Disciplines
        </h1>

        {/* Subheadline */}
        <p className="opacity-0 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
          A cross-disciplinary team from SUTD combining engineering, design, and computing to solve real-world challenges.
        </p>

        {/* CTA */}
        <div className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about-section"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-200"
          >
            Learn more
          </a>
          <a
            href="#contact-section"
            className="px-8 py-3 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Get in touch →
          </a>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
        <div className="w-5 h-8 border border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
