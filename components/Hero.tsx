'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      anime({
        targets: contentRef.current.children,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 1200,
        delay: anime.stagger(150, { start: 300 }),
        easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/michael-dziedzic-nc11Hg2ja-s-unsplash.jpg"
          alt="SUTD Capstone Team PRSM - Cross-Disciplinary Innovation"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div ref={contentRef} className="text-center space-y-12 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="opacity-0">
            <div className="inline-flex items-center gap-3">
              <svg className="w-6 h-6 text-white" viewBox="0 0 512 512" fill="currentColor">
                <path d="M256,136.5L85.1,426.5h341.8L256,136.5z M256,180.5l147.8,246H108.2L256,180.5z"/>
                <path d="M0,332h140l-30-50H0V332z"/>
                <path d="M256,332l130,100l20-30l-130-100L256,332z"/>
                <path d="M256,332l130,40l10-35l-130-40L256,332z"/>
                <path d="M256,332l130-20l-5-35l-130,20L256,332z"/>
                <path d="M256,332l130-80l-15-30l-130,80L256,332z"/>
              </svg>
              <span className="text-sm font-semibold text-white drop-shadow-lg">Team PRSM</span>
            </div>
          </div>

          {/* Main headline */}
          <h2 className="opacity-0 text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-2xl">
            SUTD Capstone 2025: Innovating Across Disciplines
          </h2>

          {/* Subheadline */}
          <div className="opacity-0">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              A cross-disciplinary <strong>capstone team</strong> from SUTD combining engineering, design, and computing to solve real-world challenges through university-industry partnership.
            </p>
          </div>

          {/* Stats Row */}
          <div className="opacity-0 flex flex-wrap justify-center gap-16 pt-8">
            {[
              { number: '6', label: 'Disciplines' },
              { number: '12+', label: 'Projects' },
              { number: '100+', label: 'Solutions' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary drop-shadow-lg mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white font-medium uppercase tracking-wider drop-shadow-md">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="opacity-0 flex flex-wrap gap-4 justify-center pt-8">
            <a
              href="#what-capstone-section"
              className="px-8 py-4 bg-primary text-white text-base font-semibold hover:bg-primary-dark transition-colors shadow-lg"
              aria-label="Learn about SUTD Capstone Program"
            >
              About Capstone
            </a>
            <a
              href="/Team PRSM Capstone Proposal.pdf"
              download
              className="px-8 py-4 bg-white text-neutral-900 text-base font-semibold hover:bg-neutral-100 transition-all shadow-lg flex items-center gap-2"
              aria-label="Download Team PRSM Capstone Proposal Brochure"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Brochure
            </a>
            <a
              href="#contact-section"
              className="px-8 py-4 border-2 border-white text-white text-base font-semibold hover:bg-white hover:text-neutral-900 transition-all shadow-lg"
              aria-label="Contact Team PRSM for Capstone Partnership"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
